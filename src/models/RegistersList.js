import { LocalStorageService } from "../services/LocalStorageService";

export class RegistersList {
  constructor() {
    this._registers = [];
    this._locale = new LocalStorageService();
  }

  add(register) {
    let listLocale = this._locale.getList();
    listLocale.push(register.allInfo);
    this._locale.setList(listLocale);
  }

  addMultiples(registers) {
    registers.map((register) => {
      this._registers.push(register);
    });

    this._locale.setList(this._registers);
  }

  get registers() {
    return [].concat(this._registers);
  }

  delete() {
    this._registers = [];
    this._locale.deleteList();
  }
}
