import type { Session } from "./authenticator";

export class IBAN {
  private session: Session;
  private compteIdx: string;
  private grandeFamilleCode: string;

  constructor(session: Session, compteIdx: string, grandeFamilleCode: string) {
    this.session = session;
    this.compteIdx = compteIdx;
    this.grandeFamilleCode = grandeFamilleCode;
  }

  async getIbanData() {
    try {
      let url = this.session.url;
      url += `/${this.session.regional_bank_url}/particulier/operations/`;
      url += "operations-courantes/editer-rib/";
      url += `jcr:content.ibaninformation.json?compteIdx=${this.compteIdx}&grandeFamilleCode=${this.grandeFamilleCode}`;

      return url;
    } catch (error: any) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }
}
