import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import widgetService, {findWidgetsForTopic} from "../../../services/widget-service";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = (
    {
        widgets=[],
        findAllWidgets,
        findWidgetsForTopic,
        createWidget,
        deleteWidget,
        updateWidget
    }
) => {
    const {courseId, moduleId, lessonId, topicId, layout, widgetId} = useParams();
    const [editingWidget, setEditingWidget] = useState({});
    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [topicId, widgetId, moduleId])
    return(
        <div>
            <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x float-right"></i>
            <h2>Widget List</h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        //console.log(widget)
                        <li className="list-group-item" key={widget.id}>
                            {
                                editingWidget.id === widget.id &&
                                <>
                                    <select className="form-control"
                                            onChange={(e) => {
                                                widget.type = e.target.value
                                                updateWidget(widget)
                                            }}
                                            value={widget.type}
                                    >
                                        <option value={"HEADING"}>Heading</option>
                                        <option value={"PARAGRAPH"}>Paragraph</option>
                                        <option value={"LIST"}>List</option>
                                        <option value={"IMAGE"}>Image</option>
                                    </select>
                                    <i onClick={() => deleteWidget(widget)} className="fas fa-times fa-2x float-right"></i>
                                </>
                            }
                            {
                                editingWidget.id !== widget.id &&
                                    <>
                                <i onClick={() => setEditingWidget(widget)} className="fas fa-cog fa-2x float-right"></i>
                                    </>
                            }

                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}
                                    updateWidget={updateWidget}
                                    setEditing={setEditingWidget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}
                                    updateWidget={updateWidget}
                                    setEditing={setEditingWidget}/>
                            }
                            {
                                widget.type === "LIST" &&
                                <ListWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}
                                    updateWidget={updateWidget}
                                    setEditing={setEditingWidget}/>
                            }
{
                                widget.type === "IMAGE" &&
                                <ImageWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}
                                    updateWidget={updateWidget}
                                    setEditing={setEditingWidget}/>
                            }

                        </li>
                    )

                }
            </ul>
            {/*{JSON.stringify(widgets)}*/}
        </div>
    )
}

const stpm = (state) => {
    return {
        widgets: state.widgetReducer.widgets
    }
}

const dtpm = (dispatch) => {
    return {
        createWidget: (topicId) => {
            //alert("create widget for topic:" + topicId)
            widgetService.createWidget(topicId, {type: "HEADING", size: 1, text: "new widget"})
                .then(actualWidget => dispatch({
                    type: "CREATE_WIDGET",
                    widget: actualWidget
                }))
        },

        deleteWidget: (widget) => {
            //alert("deleting widget: " + widget.id)
            widgetService.deleteWidget(widget.id)
                .then(status => dispatch({
                    type: "DELETE_WIDGET",
                    widgetToDelete: widget
                }))
        },

        updateWidget: (widget, topicId) => {
            // alert("updating widget: " + widget.ordered)
            widgetService.updateWidget(widget.id, widget)
                .then(status => dispatch({
                    type: "UPDATE_WIDGET",
                    widget: widget
                }))
            findWidgetsForTopic(topicId)
        },

        findAllWidgets: () => {
            widgetService.findAllWidgets()
                .then(theWidgets => dispatch({
                    type: "FIND_ALL_WIDGETS",
                    widgets: theWidgets
                }))
        },

        findWidgetsForTopic: (topicId) => {
            widgetService.findWidgetsForTopic(topicId)
                .then(theWidgets => dispatch({
                    type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                    widgets: theWidgets
                }))
        }
    }
}

export default connect(stpm, dtpm)(WidgetList)