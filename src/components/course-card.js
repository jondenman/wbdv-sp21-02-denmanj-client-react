import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({course, deleteCourse, title, updateCourse}) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div className="card">
            <div className="card-body">
                {/*{*/}
                {/*    !editing &&*/}
                {/*    <Link to="/courses/editor">*/}
                {/*        {course.title}*/}
                {/*    </Link>*/}
                {/*}*/}
                {/*{*/}
                {/*    editing &&*/}
                {/*    <input*/}
                {/*        onChange={(event) => setNewTitle(event.target.value)}*/}
                {/*        value={newTitle}*/}
                {/*        className="form-control"/>*/}
                {/*}*/}
                <h5 className="card-title">
                    {
                        !editing &&
                        <Link to={`/courses/editor/${course._id}`}>
                            {course.title}
                        </Link>
                    }
                    {
                        editing &&
                        <input
                            onChange={(event) => setNewTitle(event.target.value)}
                            value={newTitle}
                            className="form-control"/>
                    }
                </h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                <Link to={`/courses/editor/${course._id}`} className="btn btn-primary">
                    {course.title}
                </Link>
                <i onClick={() => deleteCourse(course)}
                   className="fas fa-trash float-right"></i>
                {editing && <i onClick={() => saveTitle()}
                               className="fas fa-check float-right"
                               style={{marginRight: "1em"}}></i>}
                {!editing && <i onClick={() => setEditing(true)}
                                className="fas fa-edit float-right"
                                style={{marginRight:  '1em'}}></i>}
            </div>
        </div>
    </div>
    )
}
export default CourseCard