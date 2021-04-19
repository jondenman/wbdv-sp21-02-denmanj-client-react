// const localhost = "localhost:4000"
const localhost = "wbdv-sp21-denmanj-server-node.herokuapp.com"
const QUIZZES_URL=`https://${localhost}/api/quizzes`;

export const findAllQuizzes = () =>
    fetch(`${QUIZZES_URL}`).then(response => response.json())

const api = {
    findAllQuizzes
}

export default api;
