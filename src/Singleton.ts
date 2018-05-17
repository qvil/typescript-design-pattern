export default class Singleton {
  private static instance: Singleton;
  private _text: string = "I'm only one.";

  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }

    return Singleton.instance;
  }

  public get getText(): string {
    return this._text;
  }

  public setText(text: string): void {
    this._text = text;
  }
}
