const localhost = "localhost:4000"
const QUIZZES_URL=`http://${localhost}/api/quizzes`;

export const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())
}

export default {
    findQuestionsForQuiz
}