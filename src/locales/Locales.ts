class Languages {
  static _instance: Languages = new Languages();

  constructor() {
    if (Languages._instance) {
      return Languages._instance;
    }
    Languages._instance = this;
  }

  public get direction(): string {
    return localStorage.getItem("lang") === "ar" ? "rtl" : "ltr";
  }

  public set direction(v: string) {
    document.body.setAttribute("dir", v);
  }
}

class Locales {
  static _instance: Locales = new Locales();

  constructor() {
    if (Locales._instance) {
      return Locales._instance;
    }
    Locales._instance = this;
  }

  public Languages = new Languages();

}

export default new Locales();