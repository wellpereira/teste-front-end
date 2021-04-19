import { ListController } from "./controllers/ListController";
import { RegistrationController } from "./controllers/RegistrationController";

if (document.getElementById("list-page")) {
  const listController = new ListController();
  listController.loadList();

  document.getElementById("clear-list").onclick = () => {
    listController.clearList();
  };
}

let formAdd = document.querySelector("form");
if (formAdd) {
  const registrationController = new RegistrationController();
  formAdd.onsubmit = (event) => {
    registrationController.add(event);
  };
}
