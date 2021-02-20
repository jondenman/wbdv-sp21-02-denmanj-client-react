const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/991350206/courses"

export const createCourse = (course) =>
    fetch(COURSES_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
export const findAllCourses = () =>
    fetch(COURSES_URL).then(response => response.json())

export const findCourseById = (id) => {}
export const updateCourse = (courseId, course) => {}
export const deleteCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`,
        {method: 'DELETE'})
        .then(response => response.json())

const api = {
    createCourse: createCourse,
    findAllCourses: findAllCourses,
    findCourseById: findCourseById,
    updateCourse: updateCourse,
    deleteCourse: deleteCourse
}

export default api;