import type { Session } from "./authenticator";

const parseCookies = (cookies: string[]) => {
  return cookies
    .map((entry) => {
      const parts = entry.split(";");
      const cookiePart = parts[0];
      return cookiePart;
    })
    .join(";");
};

export class Operation {
  descr: any;
  libelleOp: any;
  dateOp: any;
  montantOp: any;

  constructor(descr: any) {
    this.descr = descr;
    this.libelleOp = descr["libelleOperation"];
    this.dateOp = descr["dateOperation"];
    this.montantOp = descr["montant"];
  }
  as_json() {
    return JSON.stringify(this.descr);
  }
}

export class DeferredOperations {
  session: Session;
  compteIdx: number;
  grandeFamilleCode: string;
  carteIdx: number;
  list_operations: any[];

  constructor(
    session: Session,
    compteIdx: number,
    grandeFamilleCode: string,
    carteIdx: number
  ) {
    this.session = session;
    this.compteIdx = compteIdx;
    this.grandeFamilleCode = grandeFamilleCode;
    this.carteIdx = carteIdx;
    this.list_operations = [];
  }

  as_json() {
    const _ops = [];
    for (const o of this.list_operations) {
      _ops.push(o.descr);
      return JSON.stringify(_ops);
    }
  }

  async get_operations() {
    let url = this.session.url;
    url += `/${this.session.regional_bank_url}/particulier/operations/synthese/detail-comptes/`;
    url += "jcr:content.n3.operations.encours.carte.debit.differe.json";
    url += `?grandeFamilleCode=${this.grandeFamilleCode}&compteIdx=${this.compteIdx}&carteIdx=${this.carteIdx}`;

    log("info", `Accessing deferred operations at ${url}`);

    const _resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cookie: parseCookies(this.session.cookies),
      },
      credentials: "same-origin",
    });

    const resp = await _resp.json();

    if (_resp.status !== 200) {
      log(
        "error",
        `Get deffered operations:: ${_resp.status} -  ${resp?.error?.code}`
      );
    }

    for (const op of JSON.parse(resp.text)) {
      this.list_operations.push(new Operation(op));
    }
  }
}

export class Operations {
  session: any;
  compteIdx: any;
  grandeFamilleCode: any;
  date_start: any;
  date_stop: any;
  list_operations: any;

  constructor(
    session: any,
    compteIdx: any,
    grandeFamilleCode: any,
    date_start: any,
    date_stop: any,
    count = 100,
    sleep: null
  ) {
    this.session = session;
    this.compteIdx = compteIdx;
    this.grandeFamilleCode = grandeFamilleCode;
    this.date_start = date_start;
    this.date_stop = date_stop;
    this.list_operations = [];
  }

  as_json() {
    const _ops = [];
    for (const o of this.list_operations) {
      _ops.push(o.descr);
      return JSON.stringify(_ops);
    }
  }

  async get_operations(
    count: number,
    startIndex = null,
    limit = 30,
    sleep = null
  ) {
    const tsDateDebut = new Date(this.date_start + "T00:00:00Z").getTime(); // Start of the day in UTC
    const tsDateFin = new Date(this.date_stop + "T00:00:00Z").getTime(); // Start of the day in UTC

    let nextCount = 0;
    if (count > limit) {
      nextCount = count - limit;
    }

    let url = this.session.UserModel;
    url += `/${this.session.regional_bank_url}/particulier/operations/synthese/detail-comptes/`;
    url += `jcr:content.n3.operations.json?grandeFamilleCode=${this.grandeFamilleCode}&compteIdx=${this.compteIdx}`;
    url += "&idDevise=EUR";
    url += `&dateDebut=${tsDateDebut}`;

    /* To uncomment if we want to use a start index  */
    // if(startIndex !== null){
    //     url += `&startIndex=${startIndex}`
    // }
    url += `&dateFin=${tsDateFin}`;
    url += `&count=${count}`;

    log("info", `Accessing operations at ${url}`);

    const _resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cookie: parseCookies(this.session.cookies),
      },
      credentials: "same-origin",
    });

    const resp = await _resp.json();

    if (_resp.status !== 200) {
      log("error", `Get operations:: ${_resp.status} -  ${resp?.error?.code}`);
    }

    const rsp = JSON.parse(resp.text);

    for (const op of rsp) {
      this.list_operations.push(new Operation(op));
    }

    if (
      nextCount > 0 &&
      "nextSetStartIndex" in rsp &&
      "hasNext" in rsp &&
      rsp["hasNext"] === true
    ) {
      if (sleep !== null) {
        await new Promise((resolve) => setTimeout(resolve, sleep));
        this.get_operations(nextCount, rsp["nextSetStartIndex"]);
      }
    }
  }
}
