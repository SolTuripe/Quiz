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
  showChoices(choices)
}
