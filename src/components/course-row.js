import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = ({title, owner, lastModified, deleteCourse, course, updateCourse, updatedAt}) => {
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

    return (<tr>
        <td>
            {
                !editing &&
                <Link to={`/courses/table/edit/${course._id}`}>
                {title}
                </Link>
            }
            {
                editing &&
                <input
                    onChange={(event) => setNewTitle(event.target.value)}
                    value={newTitle}
                    className="form-control"/>
            }
        </td>

        <td className="d-none d-md-table-cell">{owner}</td>
        <td className="d-none d-lg-table-cell">{updatedAt}</td>
        <td>
            <Link to={`/courses/${course._id}/quizzes`}>
                Quizzes
            </Link>
        </td>
        <td>
            <i onClick={() => deleteCourse(course)}
               className="fas fa-trash"
               style={{marginRight:  '1em'}}></i>
            {editing && <i onClick={() => saveTitle()}
                           className="fas fa-check"></i>}
            {!editing && <i onClick={() => setEditing(true)}
                            className="fas fa-edit"></i>}
        </td>
    </tr>)
}
export default CourseRow