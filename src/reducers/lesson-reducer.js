const initialState = {
    lessons: [
        {_id: 123, title: "lesson 11"},
        {_id: 234, title: "lesson b"},
        {_id: 456, title: "lesson c"}
    ]
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON":
            const newState = {
                lessons: [
                    ...state.lessons,
                    {
                        title: "new lesson",
                        _id: (new Date()).getTime()
                    }
                ]
            }
            return newState
        case "DELETE_LESSON":
            return {
                lessons: state.lessons.filter(lesson => {
                    if (lesson._id === action.lessonToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
        case "UPDATE_LESSON":
            return {
                lessons: state.lessons.map(l => {
                    if (l._id === action.lesson._id) {
                        return action.lesson
                    } else {
                        return l
                    }
                })
            }

        default:
            return state
    }
}

export default lessonReducer