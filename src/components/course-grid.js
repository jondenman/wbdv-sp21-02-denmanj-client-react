import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({courses, deleteCourse, updateCourse}) =>
    <div>
        <Link to="/courses/table">
            <i className="fas fa-list fa-2x float-right"></i>
        </Link>
        <h2>Course Grid</h2>
        <div className="row">
            {
                courses.map((course, ndx) =>
                    <CourseCard course={course}
                                deleteCourse={deleteCourse}
                                key={ndx}
                                updateCourse={updateCourse}
                                title={course.title}
                    />
                )
            }
        </div>

    </div>
export default CourseGrid