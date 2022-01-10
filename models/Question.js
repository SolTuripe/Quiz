export class Question {
  /**
   *
   * @param {string} text this is the text of the question
   * @param {string[]} choices this are the choices of the question
   * @param {string} answer this is the answer of the question
   */

  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  correctAnswer() {
    return choice === this.answer;
  }
}

//esto me devuelve un objeto nuevo
new Question("");
