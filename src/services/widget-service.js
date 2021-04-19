const localhost = "localhost:8080"
// const WIDGETS_URL=`http://${localhost}/api/widgets`;
// const TOPICS_URL = `http://${localhost}/api/topics`;
const WIDGETS_URL=`https://wbdv-sp21-denmanj-server-java.herokuapp.com/api/widgets`;
const TOPICS_URL = `https://wbdv-sp21-denmanj-server-java.herokuapp.com/api/topics`;

export const findAllWidgets = () =>
    fetch(`${WIDGETS_URL}`).then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`)
        .then(response => response.json())

export const createWidget = (topicId, widget) =>
    fetch(`${TOPICS_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type' : 'application/json'
        }
    })
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGETS_URL}/${widgetId}`, {
        method: "DELETE"
    })

export const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGETS_URL}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type' : 'application/json'
        }
    })
        .then(response => response.json())

const api = {
    findAllWidgets,
    findWidgetsForTopic,
    createWidget,
    deleteWidget,
    updateWidget
}

export default api;