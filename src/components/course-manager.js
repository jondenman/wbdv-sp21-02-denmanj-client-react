import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Route} from 'react-router-dom'
import courseService from "../services/course-service";

class CourseManager extends React.Component {

    state = {
        courses: []
    }

    componentDidMount = () =>
        courseService.findAllCourses().then(courses => this.setState({courses}))

    addCourse = () => {



        const newCourse = {
            title: "New Course",
            owner: "New Owner",
            lastModified: "nev"
        }

        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                ...prevState,
                course: [
                    ...prevState.courses,
                    course
                ]
            })))

        this.state.courses.push(newCourse)
        this.setState(this.state)
    }

    deleteCourse = (courseToDelete) => {
        console.log(courseToDelete._id)
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {}
                    nextState.courses = prevState.courses.filter(course => course !== courseToDelete)
                    return nextState
                })
            })
    }

    render() {
        return(
            <div>
                <h1>Course manager</h1>
                <button onClick={this.addCourse}>Add Course</button>
                <Route path="/courses/table">
                    <CourseTable courses={this.state.courses}
                                 deleteCourse={this.deleteCourse}/>
                </Route>
                <Route path="/courses/grid">
                    <CourseGrid courses={this.state.courses}
                                deleteCourse={this.deleteCourse}/>
                </Route>
                <Route path="/courses/editor"
                       render={(props) => <CourseEditor {...props}/>}>

                </Route>
            </div>
        )
    }
}

export default CourseManager
