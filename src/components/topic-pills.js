import React from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";

const TopicPills = ({topics=[], createTopic, deleteTopic, updateTopic}) => {
    const {courseId, moduleId, lessonId} = useParams();
    return (
    <div>
        <h2>topics</h2>
        <ul className="nav nav-pills">
            {
                topics.map(topic =>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <EditableItem item={topic}
                                          to={`/courses/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                                          deleteItem={deleteTopic}
                                          updateItem={updateTopic}
                            />
                        </a>
                    </li>
                )
            }
            <li className="nav-item">
                <i onClick={createTopic} className="fas fa-plus-circle"></i>
            </li>
        </ul>
    </div>)
}

const stpm = (state) => {
    return {
        topics: state.topicReducer.topics
    }
}

const dtpm = (dispatch) => {
    return {
        createTopic: () => dispatch({type: "CREATE_TOPIC"}),
        deleteTopic: (topic) => dispatch({
            type: "DELETE_TOPIC",
            topicToDelete: topic
        }),
        updateTopic: (topic) => dispatch({
            type: "UPDATE_TOPIC",
            topic
        })
    }
}

export default connect(stpm, dtpm)(TopicPills)

