import React from 'react'

const CourseEditor = ({history}) =>
    <div>
        {/*paste in body of course editor in previous assignment*/}
        <i onClick={() => history.goBack()} className="fas fa-times float-right"></i>
        <h2>Course Editor</h2>


        <div>
            <div className="row">
                <div className="col-1">

                </div>
                <div className="col-3">
                    CS5610 - WebDev
                </div>
                <ul className="nav nav-pills col-7">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Build</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Pages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Theme</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Store</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Apps</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Settings</a>
                    </li>

                </ul>
                <div className="col-1">
                    <i className="fas fa-plus"></i>
                </div>

            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <ul className="list-group">
                        <li className="list-group-item">
                            Module 1 - jQuery
                            <i className="fas fa-times float-right"></i>
                        </li>
                        <li className="list-group-item active" style={{zIndex: "0"}}>
                            Module 2 - React
                            <i className="fas fa-times float-right"></i>
                        </li>
                        <li className="list-group-item">
                            Module 3 - Redux
                            <i className="fas fa-times float-right"></i>
                        </li>
                        <li className="list-group-item">
                            Module 4 - Native
                            <i className="fas fa-times float-right"></i>
                        </li>
                        <li className="list-group-item">
                            Module 5 - Angular
                            <i className="fas fa-times float-right"></i>
                        </li>
                        <li className="list-group-item">
                            Module 6 - Node
                            <i className="fas fa-times float-right"></i>
                        </li>
                        <li className="list-group-item">
                            Module 7 - Mongo
                            <i className="fas fa-times float-right"></i>
                        </li>
                        <li className="list-group-item">
                            <i className="fas fa-plus float-right"></i>
                        </li>

                    </ul>
                </div>

                <div className="col-8">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Topic 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Topic 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Topic 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Topic 4</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <i className="fas fa-plus"></i>
                            </a>
                        </li>
                    </ul>

                    <br/>
                    Content goes here
                </div>
            </div>
        </div>
</div>
export default CourseEditor