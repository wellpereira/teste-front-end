import { JSDOM } from "jsdom";
import { Bind } from "../src/helpers/Bind";
import { Message } from "../src/models/Message";
import { MessageView } from "../src/views/MessageView";
import { RegistersList } from "../src/models/RegistersList";
import { RegistrationController } from "../src/controllers/RegistrationController";
jest.mock("../src/helpers/Bind");
jest.mock("../src/models/Message");
jest.mock("../src/views/MessageView");
jest.mock("../src/models/RegistersList");

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

describe("RegistrationController", () => {
  document.body.innerHTML = `<div class="container">
      <div id="messageView"></div>
      <form class="form">
        <div class="field">
          <input value="Wellington Pereira" type="text" id="fullname" required placeholder=" " />
          <label for="fullname">Nome completo (sem abreviações)</label>
        </div>

        <div class="field">
          <input value="wellington@teste.com" type="email" id="email" required placeholder=" " />
          <label for="email">E-mail</label>
        </div>

        <div class="field">
          <input value="4444.666.444-44" type="text" id="cpf" required placeholder=" " />
          <label for="cpf">CPF</label>
        </div>

        <div class="field">
          <input value="1188888888" type="tel" id="phone" required placeholder=" " />
          <label for="phone">Telefone</label>
        </div>

        <button type="submit" class="button-system">
          <div class="loader"></div>
          <span class="text-submit">Cadastrar</span>
        </button>
      </form>

      <a href="index.html" class="link-bottom-page">Voltar</a>
    </div>`;

  beforeEach(() => {
    RegistersList.mockClear();
  });

  it("constructor RegistersList Called", () => {
    new RegistrationController();
    expect(RegistersList).toHaveBeenCalledTimes(1);
  });

  beforeEach(() => {
    Bind.mockClear();
  });

  it("constructor Bind Called", () => {
    new RegistrationController();
    expect(Bind).toHaveBeenCalledTimes(1);
  });

  beforeEach(() => {
    Message.mockClear();
  });

  it("constructor Message Called", () => {
    new RegistrationController();
    expect(Message).toHaveBeenCalledTimes(1);
  });

  beforeEach(() => {
    MessageView.mockClear();
  });

  it("constructor MessageView Called", () => {
    new RegistrationController();
    expect(MessageView).toHaveBeenCalledTimes(1);
  });
});
