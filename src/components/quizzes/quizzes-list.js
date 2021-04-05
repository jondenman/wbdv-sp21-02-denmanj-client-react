import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Provider} from 'react-redux'
import {createStore} from "redux";
import quizService from '../../services/quiz-service'
import quizReducer from "../../reducers/quiz-reducer"
import {Link, useParams} from "react-router-dom";

// const store = createStore(quizReducer)

const QuizzesList = (
    {
        // quizzes = [],
        // findAllQuizzes
    }
) => {
    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        quizService.findAllQuizzes().then((quizzes) => setQuizzes(quizzes))
    }, [])
    return(
        // <Provider store={store}>
            <div>
                <h2>Quizzes ({quizzes.length})</h2>
                <ul>
                    {
                        quizzes.map((quiz) => {
                            return(
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                <li>{quiz.title}</li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
        // </Provider>
    );
}

// const stpm = (state) => {
//     return {
//         quizzes: state.quizReducer.quizzes
//     }
// }
//
// const dtpm = (dispatch) => {
//     return {
//         findAllQuizzes: () =>  {
//             quizService.findAllQuizzes()
//                 .then(theQuizzes => dispatch({
//                     type: "FIND_ALL_QUIZZES",
//                     quizzes: theQuizzes
//                 }))
//         }
//     }
// }

export default QuizzesList
// export default connect(stpm, dtpm)(QuizzesList)