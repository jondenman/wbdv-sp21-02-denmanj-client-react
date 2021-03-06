import React from 'react'
import moduleReducer from "../reducers/modules-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer
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
                </div>
            </div>
        </div>
    </Provider>


export default CourseEditor