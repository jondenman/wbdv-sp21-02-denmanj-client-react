import React from 'react'
import {connect} from 'react-redux'

const LessonTabs = (
    {
        lessons=[
            {_id: 123, title: "lesson a"},
            {_id: 234, title: "lesson b"},
            {_id: 456, title: "lesson c"}
        ]
    }) =>
    <div>
        <h2>lessons</h2>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">
                            {lesson.title}
                        </a>
                    </li>
                )
            }
        </ul>
    </div>

const stpm = (state) => {
    return {
        lessons: state.lessonReducer.lessons
    }
}

const dtpm = (dispatch) => {

}

export default connect(stpm, dtpm)(LessonTabs)