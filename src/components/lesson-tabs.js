import React from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";

const LessonTabs = (
    {
        lessons=[
            {_id: 123, title: "lesson a"},
            {_id: 234, title: "lesson b"},
            {_id: 456, title: "lesson c"}
        ],
        createLesson,
        deleteLesson,
        updateLesson
    }) =>
    <div>
        <h2>lessons</h2>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                    <li className="nav-item">
                            <EditableItem
                                item={lesson}
                                deleteItem={deleteLesson}
                                updateItem={updateLesson}
                            />
                    </li>
                )
            }
            <li className="nav-item">
                <i onClick={createLesson} className="fas fa-plus-circle"></i>
            </li>
        </ul>
    </div>

const stpm = (state) => {
    return {
        lessons: state.lessonReducer.lessons
    }
}

const dtpm = (dispatch) => {
    return {
        createLesson:() => dispatch({type: "CREATE_LESSON"}),
        deleteLesson: (item) => dispatch({
            type: "DELETE_LESSON",
            lessonToDelete: item
        }),
        updateLesson: (lesson) => dispatch({
            type: "UPDATE_LESSON",
            lesson
        })

    }
}

export default connect(stpm, dtpm)(LessonTabs)