import $ from "jquery";
import { greeting } from './greeting';

export function renderButton() {
  const button = $('<button>Button</button>');
  button.on('click', greeting);

  $(document.body).append(button);
}

sayBye();
