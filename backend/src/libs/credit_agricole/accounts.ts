import type { Session } from "./authenticator";
import { IBAN as Iban } from "./iban";
import { Operations } from "./operations";

const FAMILLE_PRODUITS = [
  { code: 1, familleProduit: "COMPTES" },
  { code: 3, familleProduit: "EPARGNE_DISPONIBLE" },
  { code: 7, familleProduit: "EPARGNE_AUTRE" },
];

const parseCookies = (cookies: string[]) => {
  return cookies
    .map((entry) => {
      const parts = entry.split(";");
      const cookiePart = parts[0];
      return cookiePart;
    })
    .join(";");
};

class Account {
  private session: Session;
  private account: any;
  private numeroCompte: any;
  private compteIdx: any;
  private grandeFamilleCode: any;

  constructor(session: Session, account: any) {
    this.session = session;
    this.account = account;
    this.numeroCompte = account["numeroCompte"];
    this.compteIdx = account["index"];
    this.grandeFamilleCode = account["grandeFamilleProduitCode"];

    this.get_iban();
  }

  toString() {
    return `Iban[compte=${this.numeroCompte}, code=${this.account["libelleProduit"]}]`;
  }

  get_iban() {
    return new Iban(this.session, this.compteIdx, this.grandeFamilleCode);
  }

  get_operations(
    date_start = null,
    date_stop = null,
    count = 100,
    sleep = null
  ) {
    return new Operations(
      this.session,
      this.compteIdx,
      this.grandeFamilleCode,
      date_start,
      date_stop,
      count,
      sleep
    );
  }

  as_json() {
    return JSON.stringify(this.account);
  }

  get_solde() {
    if ("montantEpargne" in this.account) {
      return this.account["montantEpargne"];
    }
    return this.account["solde"];
  }
}

class Accounts {
  session: Session;
  accounts_list: any[];

  constructor(session: Session) {
    this.session = session;
    this.accounts_list = [];
  }

  search(num: string) {
    for (const acc of this.accounts_list) {
      if (acc.numeroCompte === num) return acc;
    }
    log("error", "[error] account not found");
  }

  as_json() {
    const _ops = [];
    for (const o of this.accounts_list) {
      _ops.push(o.descr);
      return JSON.stringify(_ops);
    }
  }

  async get_accounts_per_products() {
    for (const f of FAMILLE_PRODUITS) {
      let url = this.session.url;
      url += `/${this.session.regional_bank_url}/particulier/operations/`;
      url += `synthese/jcr:content.produits-valorisation.json/${f.code}`;

      log(
        "info",
        `Accessing accounts at ${url} for product ${f.familleProduit}`
      );

      const _resp = await fetch(url, {
        method: "GET",
        headers: {
          cookie: parseCookies(this.session.cookies),
        },
        credentials: "include",
      });

      const resp = await _resp.json();

      if (_resp.status !== 200) {
        log(
          "error",
          `Get accounts per products: ${_resp.status} -  ${resp?.error?.code}`
        );
      }

      for (const account of resp) {
        this.accounts_list.push(new Account(this.session, account));
      }
    }
  }

  get_solde() {
    let solde = 0;
    for (const acc of this.accounts_list) {
      solde += acc.get_solde();
    }
    return Math.round(solde);
  }

  get_solde_per_products() {
    let ret_soldes: any = {};

    for (const f of FAMILLE_PRODUITS) {
      ret_soldes[f.familleProduit] = 0.0;
    }

    for (const f of FAMILLE_PRODUITS) {
      for (const acc of this.accounts_list) {
        if (parseInt(acc.grandeFamilleCode) == f.code) {
          ret_soldes[f.familleProduit] += acc.get_solde();
        }
      }

      ret_soldes[f.familleProduit] = Math.round(ret_soldes[f.familleProduit]);
    }

    return ret_soldes;
  }
}

class AccountProxy {
  public static init() {
    const proxyHandler = {
      construct: async function (_: any, args: any[]) {
        const { 0: session } = args;
        const accounts = new Accounts(session);
        await accounts.get_accounts_per_products();
        return accounts;
      },
    };

    return new Proxy(Accounts, proxyHandler);
  }
}

export default AccountProxy.init();
