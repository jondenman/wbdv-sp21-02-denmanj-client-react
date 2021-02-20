import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Link to="/courses/grid">
                    <i className="fas fa-2x fa-th float-right"></i>
                </Link>
                <h2>Course Table</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Owned by</th>
                            <th>Last modified</th>
                            <th>
                                <i className="fas fa-folder"></i>
                                <i className="fas fa-sort-alpha-up-alt"></i>
                                <i className="fas fa-windows"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.courses.map((course, ndx) =>
                                <CourseRow
                                    deleteCourse={this.props.deleteCourse}
                                    key={ndx}
                                    course={course}
                                    title={course.title}
                                    owner={course.owner}
                                    lastModified={course.lastModified}
                                />
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}