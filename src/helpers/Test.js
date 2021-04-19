export default class Test {
  constructor() {
    throw new Error("Cannot be instantiated");
  }

  static form(registerClass, name, cpf, phone, email) {
    return `<form id="save" onsubmit="${registerClass.add(event)}">
        <div>
          <label for="name">Nome completo</label>
          <input type="text" id="name" value="${name}" required autofocus />
        </div>

        <div>
          <label for="cpf">CPF</label>
          <input type="text" id="cpf" value="${cpf}" required autofocus />
        </div>

        <div>
          <label for="phone">Telefone</label>
          <input type="tel" id="phone" value="${phone}" required autofocus />
        </div>

        <div>
          <label for="email">Email</label>
          <input type="email" id="email" value="${email}" required autofocus />
        </div>

        <button type="submit">Cadastrar</button>
      </form>`;
  }
}
