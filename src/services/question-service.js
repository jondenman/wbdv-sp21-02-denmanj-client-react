// const localhost = "localhost:4000"
const localhost = "wbdv-sp21-denmanj-server-node.herokuapp.com"
const QUIZZES_URL=`https://${localhost}/api/quizzes`;

export const findQuestionsForQuiz = (qzid) => {
    return fetch(`${QUIZZES_URL}/${qzid}/questions`)
        .then(response => response.json())
}

export const submitQuiz = (qzid, questions) => {
    return fetch(`${QUIZZES_URL}/${qzid}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        // .then(result => console.log(result))
}

export default {
    findQuestionsForQuiz,
    submitQuiz
}