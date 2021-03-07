import React from 'react'
import {connect} from "react-redux";

const ModuleList = ({myModules=[], createModule}) =>
    <div>
        <h2>Modules {myModules.length}</h2>
        <ul className="list-group">
            {
                myModules.map(module =>
                    <li className="list-group-item">
                        {module.title}
                    </li>
                )
            }
            <li className="list-group-item">
                <i onClick={createModule} className="fas fa-plus-circle fa-2x"></i>
            </li>
        </ul>
    </div>

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}

const dtpm = (dispatch) => {
    return {
        createModule: () => dispatch({type: "CREATE_MODULE"})
    }
}
export default connect(stpm, dtpm)(ModuleList)