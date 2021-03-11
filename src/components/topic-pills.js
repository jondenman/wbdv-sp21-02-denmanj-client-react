import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from "../services/topic-service"

const TopicPills = (
    {
        topics=[],
        createTopic,
        deleteTopic,
        updateTopic,
        findTopicsForLesson
    }) => {
    const {courseId, moduleId, lessonId, topicId, layout} = useParams();
    useEffect(() => {
        console.log("LOAD TOPICS FOR LESSON: " + lessonId)
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            console.log('LESSON ID:' + lessonId)
            findTopicsForLesson(lessonId)
            // if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            //     findTopicsForLesson(lessonId)
            // } else {
            //     findTopicsForLesson(undefined)
            // }
        }
    }, [moduleId, lessonId])
    return (
    <div>
        <h2>Topics</h2>
        <ul className="nav nav-pills">
            {
                topics.map(topic =>
                    <li className="nav-item">
                        {/*<a className="nav-link" >*/}
                        <li className={`nav-item`}>
                            <EditableItem item={topic}
                                          to={`/courses/${layout}/edit/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                                          deleteItem={deleteTopic}
                                          updateItem={updateTopic}
                                          active={topic._id === topicId}

                            />
                        </li>
                    </li>
                )
            }
            <li className="nav-item">
                <i onClick={() => createTopic(lessonId)} className="fas fa-plus-circle"></i>
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
        createTopic: (lessonId) => {
            topicService.createTopic(lessonId, {title: "new topic"})
                .then(actualTopic => dispatch({
                    type: "CREATE_TOPIC",
                    topic: actualTopic
                }))
        },

        deleteTopic: (topic) => {
            topicService.deleteTopic(topic._id)
                .then(status => dispatch({
                    type: "DELETE_TOPIC",
                    topicToDelete: topic
                }))
        },

        updateTopic: (topic) => {
            topicService.updateTopic(topic._id, topic)
                .then(status => dispatch({
                    type: "UPDATE_TOPIC",
                    topic
                }))
        },

        findTopicsForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId)
                .then(theTopics => dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    topics: theTopics
                }))
        }
    }
}

export default connect(stpm, dtpm)(TopicPills)


