const localhost = "localhost:4000"
const QUIZZES_URL=`http://${localhost}/api/quizzes`;

export const findAllQuizzes = () =>
    fetch(`${QUIZZES_URL}`).then(response => response.json())

const api = {
    findAllQuizzes
}

export default api;
