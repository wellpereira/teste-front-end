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
