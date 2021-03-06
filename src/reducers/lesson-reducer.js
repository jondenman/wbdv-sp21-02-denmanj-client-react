const initialState = {
    lessons: [
        {_id: 123, title: "lesson 11"},
        {_id: 234, title: "lesson b"},
        {_id: 456, title: "lesson c"}
    ]
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default lessonReducer