import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js"

function main() {
    const quiz = new Quiz(questions);

    quiz.guess('agasghsg')
}

main();