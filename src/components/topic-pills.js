import React from 'react'
import {connect} from 'react-redux'

const TopicPills = ({topics=[]}) =>
    <div>
        <h2>topics</h2>
        <ul className="nav nav-pills">
            {
                topics.map(topic =>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            {topic.title}
                        </a>
                    </li>
                )
            }
        </ul>
    </div>

const stpm = (state) => {
    return {
        topics: state.topicReducer.topics
    }
}

const dtpm = (dispatch) => {

}

export default connect(stpm, dtpm)(TopicPills)


