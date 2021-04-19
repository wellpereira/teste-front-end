export class LocalStorageService {
  constructor() {
    this._localKey = "pf_data";
  }

  setList(registers) {
    window.localStorage.setItem(this._localKey, JSON.stringify(registers));
  }

  getList() {
    let list = window.localStorage.getItem(this._localKey);
    return list === null ? [] : JSON.parse(list);
  }

  deleteList() {
    window.localStorage.removeItem(this._localKey);
  }
}
