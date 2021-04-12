import React, {useState} from 'react'

const TrueFalseQuestion = ({question}) => {
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
                    !graded &&
                    <>
                        <li className="list-group-item">
                            <label><input type="radio"
                                          onClick={() => {
                                              setYourAnswer("true");
                                          }}
                                          name={question._id}/> True </label>
                        </li>
                        <li className="list-group-item">
                        <label><input type="radio"
                                      onClick={() => {
                                          setYourAnswer("false");
                                      }}
                                      name={question._id}/> False </label>
                        </li>
                    </>

                }
                {
                    graded &&
                    <>
                        <li className={`list-group-item 
                        ${question.correct === "true" ? 'list-group-item-success' : 'list-group-item-danger'}`}>
                            <label><input type="radio"
                                          onClick={() => {
                                              setYourAnswer("true");
                                          }}
                                          checked={yourAnswer === "true"}
                                          name={question._id}/> True </label>
                        </li>
                        <li className={`list-group-item 
                        ${question.correct === "false" ? 'list-group-item-success' : 'list-group-item-danger'}`}>
                            <label><input type="radio"
                                          onClick={() => {
                                              setYourAnswer("false");
                                          }}
                                          checked={yourAnswer === "false"}
                                          name={question._id}/> False </label>
                        </li>
                    </>
                }
                <br/>
                <button className="btn btn-success"
                        onClick={() => {
                            setGraded(true)
                        }}>Grade</button>
            </ul>

            <p>
                Your answer: {yourAnswer}
            </p>


        </div>

    )
}

export default TrueFalseQuestion