import { View } from "./View";

export class MessageView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
    return model.text ? `<p>${model.text}</p>` : "<p></p>";
  }
}
