import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import questionService from '../../services/question-service'
import Question from "./questions/question";

const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    const [score, setScore] = useState([])
    useEffect(() => {
        questionService.findQuestionsForQuiz(quizId).then((questions) => {
            setQuestions(questions)
        })
    }, [])
    return(
        <div>
            <h3>Quiz {quizId} ({questions.length})</h3>
            <ul>
                {
                    questions.map((question) => {
                        return(
                            <li>
                                <Question question={question}/>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="btn btn-success"
                    onClick={() => {
                        questionService.submitQuiz(quizId, questions).then(response => {
                            console.log(response.score)
                            setScore(response.score)
                        })
                    }}>Submit</button>
            <h4>Score: {score}</h4>
        </div>
    )
}

export default Quiz