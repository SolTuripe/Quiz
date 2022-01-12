export class UI {
  constructor() {}

  /**
   *
   * @param {string} text question to render
   */
  showQuestion(text) {
    const questionTitle = document.querySelector("#question");
    questionTitle.innerText = text;
  }

  /**
   *
   * @param {string} choices the choices of the question
   */
  showChoices(choices, callback) {
    const choicesContainer = document.querySelector("#choices");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.innerText = choices[i];
      button.className = "button";
      button.addEventListener("click", () => callback(choices[i]));

      choicesContainer.append(button);
    }
  }
}
