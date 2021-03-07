const initialState = {
    topics: [
        {_id: 1, title: 101},
        {_id: 2, title: 202},
        {_id: 3, title: 303}
    ]
}

const topicReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default topicReducer
