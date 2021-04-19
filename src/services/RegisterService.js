import { HttpService } from "./HttpService";

export class RegisterService {
  constructor() {
    this._http = new HttpService();
  }

  async getAllRegisters() {
    return await this._http.get(
      "https://private-21e8de-rafaellucio.apiary-mock.com/users"
    );
  }
}
