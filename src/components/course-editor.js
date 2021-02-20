import React from 'react'

const CourseEditor = ({history}) =>
    <div>
        {/*paste in body of course editor in previous assignment*/}
        <i onClick={() => history.goBack()} className="fas fa-times float-right"></i>
        <h2>Course Editor</h2>
    </div>

export default CourseEditor