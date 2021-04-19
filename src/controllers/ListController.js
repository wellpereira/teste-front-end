import { Bind } from "../helpers/Bind";
import { RegisterService } from "../services/RegisterService";
import { LocalStorageService } from "../services/LocalStorageService";
import { StorageHelper } from "../helpers/StorageHelper";
import { RegistersList } from "../models/RegistersList";
import { RegistersView } from "../views/RegistersView";

export class ListController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._locale = new LocalStorageService();

    this._registersLists = new Bind(
      new RegistersList(),
      new RegistersView($("#listView")),
      "addMultiples",
      "delete"
    );
  }

  loadList() {
    if (StorageHelper.isEmpty()) {
      this.importList();
    } else {
      let listLocal = this._locale.getList();
      this._registersLists.addMultiples(listLocal);
    }
  }

  importList() {
    let service = new RegisterService();
    service
      .getAllRegisters()
      .then((registers) => {
        this._registersLists.addMultiples(registers);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  clearList() {
    this._registersLists.delete();
  }
}
