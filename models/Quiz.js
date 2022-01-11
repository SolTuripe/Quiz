@ts-check
import { questions } from './Question.js'

export class Quiz {

    questionIndex = 0
    score = 0

    constructor(questions) {
        this.questions = questions
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex]
    }

    guess(answer) {

        if (this.getQuestionIndex()) {
            this.score++
        }

        this.questionIndex++
    }
}