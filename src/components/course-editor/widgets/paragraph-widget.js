import React, {useState} from 'react'

const ParagraphWidget = ({widget, editing, setEditing, updateWidget}) => {
    const [cachedItem, setCachedItem] = useState(widget)
    return(
        <>
            {
                editing &&
                <>
                    <i onClick={() => {
                        setEditing(false)
                        updateWidget(cachedItem)
                    }} className="fas fa-check fa-2x float-right"></i>
                    <textarea className="form-control"
                              onChange={(e) =>
                                  setCachedItem({
                                      ...cachedItem,
                                      text: e.target.value
                                  })}
                              value={cachedItem.text}></textarea>
                </>
            }
            {
                !editing &&
                <p>{widget.text}</p>
            }

        </>
    )
}

export default ParagraphWidget