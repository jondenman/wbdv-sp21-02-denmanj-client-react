import React from 'react'
import moduleReducer from "../reducers/modules-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import topicReducer from "../reducers/topic-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import WidgetList from "./course-editor/widgets/widget-list";
import widgetReducer from "../reducers/widget-reducer";
import quizReducer from "../reducers/quiz-reducer";


const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})

// const store = createStore(moduleReducer)
const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {courseId, moduleId, layout} = useParams();
    return (
        <Provider store={store}>
            <div>

                <h1>
                    <Link to={`/courses/${layout}`}>
                        <i className="fas fa-times"></i>
                    </Link>
                    <>
                        {courseId}
                    </>
                </h1>
                <div className="row">
                    <div className="col-3">
                        <ModuleList/>
                    </div>
                    <div className="col-9">
                        <LessonTabs/>
                        <TopicPills/>
                        <br/>
                        <WidgetList/>
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default CourseEditor