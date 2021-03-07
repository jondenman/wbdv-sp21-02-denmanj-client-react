import React from 'react'
import moduleReducer from "../reducers/modules-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import topicReducer from "../reducers/topic-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";


const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})

// const store = createStore(moduleReducer)
const store = createStore(reducer)

const CourseEditor = ({history}) =>
    <Provider store={store}>
        <div>
            <div className="row">
                <div className="col-4">
                    <ModuleList/>
                </div>
                <div className="col-4">
                    <LessonTabs/>
                    <TopicPills/>
                </div>
            </div>
        </div>
    </Provider>


export default CourseEditor