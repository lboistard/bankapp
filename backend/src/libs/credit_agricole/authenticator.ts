import fs from "fs";
import path from "path";

import { aliases } from "./aliases";

export interface Session {
  url: string;
  ssl_verify: boolean;
  username: string;
  password: number[];
  department: string;
  regional_bank_url: string;
  keypadId: string;
  cookies: string[];
}

class Authenticator {
  url: string;
  ssl_verify: boolean;
  username: string;
  password: number[];
  department: string;
  regional_bank_url: string;
  keypadId: string;
  cookies: string[];

  constructor(username: string, password: number[], department: string) {
    this.url = "https://www.credit-agricole.fr";
    this.ssl_verify = true;
    this.username = username;
    this.password = password;
    this.department = department;
    this.regional_bank_url = "ca-undefined";
    this.keypadId = "";
    this.cookies = [""];

    this.find_regional_bank();
  }

  find_regional_bank() {
    const departmentKey = String(this.department).padStart(2, "0");
    const _aliases = JSON.parse(aliases);

    this.regional_bank_url = _aliases[departmentKey]["alias"];
  }

  map_digit(key_layout: string, digit: string) {
    let i = 0;
    for (const k of key_layout) {
      if (parseInt(digit) === parseInt(k)) {
        return i;
      }
      i++;
    }
  }

  parseCookies(cookies: string[]) {
    // const raw = response.headers.raw()['set-cookie'];
    return cookies
      .map((entry) => {
        const parts = entry.split(";");
        const cookiePart = parts[0];
        return cookiePart;
      })
      .join(";");
  }

  async authenticate() {
    let url = `${this.url}/${this.regional_bank_url}/particulier/`;
    url += "acceder-a-mes-comptes.authenticationKeypad.json";

    log("info", `Authenticating : ${url}`);

    const _resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // add other headers if needed
      },
      credentials: "same-origin",
    });

    const resp = await _resp.json();
    const cookies = _resp.headers.getSetCookie();
    this.cookies = cookies;

    if (_resp.status !== 200) {
      log("error", `${_resp.status} - ${_resp.statusText}`);
    }

    this.keypadId = resp.keypadId;

    // compute the password according to the layout
    const j_password: number[] = [];
    for (const d of this.password) {
      const k = this.map_digit(resp.keyLayout, String(d));
      j_password.push(k!);
    }

    // authenticate the user
    url = `${this.url}/${this.regional_bank_url}/particulier/`;
    url += "acceder-a-mes-comptes.html/j_security_check";
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      cookie: this.parseCookies(this.cookies),
    };
    const payload = new URLSearchParams({
      j_password: j_password.join(","),
      path: "/content/npc/start",
      j_path_ressource: `%%2F${this.regional_bank_url}%%2Fparticulier%%2Foperations%%2Fsynthese.html`,
      j_username: this.username,
      keypadId: this.keypadId,
      j_validate: "true",
    });

    const _resp2 = await fetch(url, {
      method: "POST",
      headers: headers,
      body: payload,
    });

    const resp2 = await _resp2.json();

    if (_resp2.status !== 200) {
      log("error", ` securitycheck: ${_resp2.status} -  ${resp2?.error?.code}`);
    }

    const cookies2 = _resp2.headers.getSetCookie();

    const mergedCookies = [...new Set([...this.cookies, cookies2])];

    // To avoid nested arrays (string[] inside), we use flat():
    this.cookies = mergedCookies.flat();
  }
}

class AProxy {
  public static init() {
    const proxyHandler = {
      construct: async function (_: any, args: any[]) {
        const { 0: username, 1: password, 2: department } = args;
        const authenticator = new Authenticator(username, password, department);
        authenticator.find_regional_bank();
        await authenticator.authenticate();
        return authenticator;
      },
    };

    return new Proxy(Authenticator, proxyHandler);
  }
}

export default AProxy.init();
