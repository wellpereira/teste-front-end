import { Bind } from "../helpers/Bind";
import { Register } from "../models/Register";
import { Message } from "../models/Message";
import { RegistersList } from "../models/RegistersList";
import { MessageView } from "../views/MessageView";

export class RegistrationController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputName = $("#fullname");
    this._inputCpf = $("#cpf");
    this._inputPhone = $("#phone");
    this._inputEmail = $("#email");

    this._message = new Bind(
      new Message(),
      new MessageView($("#messageView")),
      "text"
    );

    this._listRegisters = new RegistersList();
  }

  add(event) {
    event.preventDefault();

    try {
      let newRegister = this._creatRegister();
      this._listRegisters.add(newRegister);
      this._message.text = "Cadastro criado com sucesso";
      this._clearForm();
      return newRegister;
    } catch (error) {
      console.log(error);
    }
  }

  _creatRegister() {
    return new Register(
      this._inputName.value,
      this._inputCpf.value,
      this._inputPhone.value,
      this._inputEmail.value
    );
  }

  _clearForm() {
    this._inputName.value = "";
    this._inputCpf.value = "";
    this._inputPhone.value = "";
    this._inputEmail.value = "";
    this._inputName.focus();
  }
}
