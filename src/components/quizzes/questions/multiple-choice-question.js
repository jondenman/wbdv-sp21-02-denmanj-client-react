import React, {useState} from 'react'

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState([])
    const [graded, setGraded] = useState(false)
    return(
        <div>
            <h5>{question.question}
                {
                    graded &&
                    <p className="float-right">
                        {
                            question.correct === yourAnswer &&
                            <i className="fas fa-check"></i>
                        }
                        {
                            question.correct !== yourAnswer &&
                            <i className="fas fa-times"></i>
                        }
                    </p>
                }

            </h5>
            <ul>
                {
                    graded &&
                    question.choices.map((choice) => {
                        return(
                        <li className={`list-group-item 
                        ${question.correct === choice ? 'list-group-item-success' : 'list-group-item-danger'}`}>
                            <label><input checked={yourAnswer === choice}
                                onClick={() => {
                                    question.answer = choice;
                                setYourAnswer(choice);
                            }}
                                          type="radio"
                                          name={question._id}/> {choice} </label>
                        </li>
                        )
                    })
                }
                {
                    !graded &&
                    question.choices.map((choice) => {
                        return(
                            <li className={`list-group-item `}>
                                <label><input
                                    onClick={() => {
                                        question.answer = choice;
                                        setYourAnswer(choice);
                                    }}
                                    type="radio"
                                    name={question._id}/> {choice} </label>
                            </li>
                        )
                    })
                }
                <br/>
                {/*<button className="btn btn-success"*/}
                {/*        onClick={() => {*/}
                {/*            setGraded(true)*/}
                {/*        }}>Grade</button>*/}
            </ul>

            <p>
                Your answer: {yourAnswer}
            </p>

        </div>

    )
}

export default MultipleChoiceQuestion