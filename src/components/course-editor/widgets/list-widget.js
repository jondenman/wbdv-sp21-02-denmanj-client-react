import React, {useState} from 'react'

const ListWidget = ({editing, setEditing, widget, updateWidget}) => {
    const [cachedItem, setCachedItem] = useState(widget)
    return(
        <div>
            {
                editing &&
                    <>
                        <i onClick={() => {
                            setEditing(false)
                            updateWidget(cachedItem)
                        }} className="fas fa-check fa-2x float-right"></i>
                        <input checked={cachedItem.ordered}
                                onChange={(e) =>
                                   setCachedItem({
                                       ...cachedItem,
                                       ordered: e.target.checked
                                   })}
                               type="checkbox"/> Ordered
                        <br/>
                        Item List
                        <textarea rows={10}
                                  className="form-control"
                                  onChange={(e) =>
                                      setCachedItem({
                                          ...cachedItem,
                                          text: e.target.value
                                      })}
                                  value={cachedItem.text}
                        ></textarea>
                    </>
            }
            {
                !editing &&
                    <>
                        {
                            widget.ordered &&
                            <ol>
                                {
                                    widget.text.split("\n").map((item) => {
                                        return(
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        }
                        {
                            !widget.ordered &&
                            <ul>
                                {
                                    widget.text.split("\n").map((item) => {
                                        return(
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        }

                    </>
            }
        </div>
    )
}

export default ListWidget