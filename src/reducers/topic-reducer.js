const initialState = {
    topics: [
        {_id: 1, title: 101},
        {_id: 2, title: 202},
        {_id: 3, title: 303}
    ]
}

const topicReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":
            return {
                topics: [
                ...state.topics,
                {
                    title: "new topic",
                        _id: (new Date()).getTime()
                }
                ]
            }
        case "DELETE_TOPIC":
            return {
                topics: state.topics.filter(topic => {
                    if (topic._id === action.topicToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
        case "UPDATE_TOPIC":
            return {
                topics: state.topics.map(t => {
                    if (t._id === action.topic._id) {
                        return action.topic
                    } else {
                        return t
                    }
                })
            }
        default:
            return state
    }
}

export default topicReducer
