import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {Link, useParams} from "react-router-dom";
import moduleService from "../services/module-service";

const ModuleList = (
    {
        myModules=[],
        createModule,
        deleteModule,
        updateModule,
        findModulesForCourse
    }) => {
    const {courseId, moduleId, layout} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])
    return (
    <div>
        <h2>Modules</h2>
        <ul className="list-group">
            {
                myModules.map(module =>
                    <Link className={`nav-link d-inline`} to={`/courses/${layout}/edit/${courseId}/${module._id}`}>
                    <li className={`list-group-item ${module._id === moduleId ? 'active' : ''}`}>
                        <EditableItem item={module}
                                      to={`/courses/${layout}/edit/${courseId}/${module._id}`}
                                      deleteItem={deleteModule}
                                      updateItem={updateModule}
                        />
                    </li>
                    </Link>
                )
            }
            <div className="container-fluid">
            <button className="btn btn-primary" type="button" onClick={() => createModule(courseId)}>
                <i className="fas fa-plus-circle  fa-2x"></i>
            </button>
            </div>
        </ul>
    </div>)
}

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}

const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModule(courseId, {title: "new module"})
                .then(actualModule => dispatch({
                    type: "CREATE_MODULE",
                    module: actualModule
                }))
        },

        deleteModule: (item) =>
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: item
                })),
        updateModule: (module) =>
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    module
                })),
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(theModules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: theModules
                }))
        }
    }
}
export default connect(stpm, dtpm)(ModuleList)