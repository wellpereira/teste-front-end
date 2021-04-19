import { RegistersList } from "../src/models/RegistersList";
import { RegistrationController } from "../src/controllers/RegistrationController";
jest.mock("../src/models/RegistersList");

beforeEach(() => {
  RegistersList.mockClear();
});

it("constructor RegistersList working", () => {
  new RegistrationController();
  expect(RegistersList).toHaveBeenCalledTimes(1);
});

// import Test from "../../helpers/Test";

// it("save new register", () => {
//   const registerFn = new RegistrationController();

//   document.body.innerHTML = Test.form(
//     registerFn,
//     "Wellington",
//     "111.222.333-99",
//     "1122245554"
//   );

//   document.getElementById("save").submit();
//   // const children = form.render().children().children();
//   // form.simulate('submit', { target: { children } })
// });
