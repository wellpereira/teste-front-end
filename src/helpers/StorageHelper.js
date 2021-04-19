import { LocalStorageService } from "../services/LocalStorageService";

export class StorageHelper {
  constructor() {
    throw new Error("Cannot be instantiated");
  }

  static isEmpty() {
    let service = new LocalStorageService();
    let test = service.getList();
    return test === null || test == "";
  }
}
