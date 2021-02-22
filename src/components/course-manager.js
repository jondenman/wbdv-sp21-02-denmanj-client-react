import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Route} from 'react-router-dom'
import courseService from "../services/course-service";

class CourseManager extends React.Component {

    state = {
        courses: [],
    }

    componentDidMount = () =>
        courseService.findAllCourses().then(courses => this.setState({courses}))


    addCourse = () => {

        let courseTitle = document.getElementById('newTitle').value
        console.log(courseTitle)

        const newCourse = {
            title: courseTitle,
            owner: "Me",
            lastModified: "nev"
        }

        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })))

        // this.state.courses.push(newCourse)
        // this.setState(this.state)
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

    // deleteAllCourses = () => {
    //     var i
    //     for (i = 0; i < this.state.courses.length; i++ ) {
    //         this.deleteCourse(this.state.courses[i])
    //     }
    // }


    // updateCourse = (course) => {
    //     courseService.updateCourse(course._id, course)
    //         .then(status => this.setState((prevState) => ({
    //             ...prevState,
    //             courses: prevState.courses.map(c => {
    //                 if(c._id === course._id) {
    //                     return course
    //                 } else {
    //                     return c
    //                 }
    //             })
    //         })))
    // }

    updateCourse = (course) => {
        console.log(course)
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)

                // courses: prevState.courses.map(c => {
                //   if(c._id === course._id) {
                //     return course
                //   } else {
                //     return c
                //   }
                // })
            })))
    }

    render() {
        return(
            <div className="container">
                {/*<h1>Course manager</h1>*/}
                <div className="row" style={{paddingTop: "1em"}}>
                    <div className="col-1">
                        <i className="fas fa-2x fa-bars"></i>
                    </div>
                    <div className="col-10">
                        <input className="form-control"
                               id="newTitle">
                        </input>
                    </div>
                    <div className="col-1 float-right">
                        <i className="fas fa-2x fa-plus-circle float-right"
                           onClick={this.addCourse}></i>
                        {/*<button onClick={this.deleteAllCourses}>clear courses</button>*/}
                    </div>
                </div>

                <Route path="/courses/table">
                    <CourseTable courses={this.state.courses}
                                 updateCourse={this.updateCourse}
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
