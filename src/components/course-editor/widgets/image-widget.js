import React, {useState} from 'react'

const ImageWidget = ({editing, setEditing, widget, updateWidget}) => {
    const [cachedItem, setCachedItem] = useState(widget)
    return (
        <div>
            {
                !editing &&
                <img width={widget.width} height={widget.height} src={widget.url}/>
            }
            {
                editing &&
                <>
                    <i onClick={() => {
                        setEditing(false)
                        updateWidget(cachedItem)
                    }} className="fas fa-check fa-2x float-right"></i>
                    Image URL
                    <input value={widget.url}
                           onChange={(e) =>
                               setCachedItem({
                                   ...cachedItem,
                                   url: e.target.value
                               })}
                           value={cachedItem.url}
                           className="form-control"></input>
                    Image Width
                    <input value={widget.width}
                           onChange={(e) =>
                               setCachedItem({
                                   ...cachedItem,
                                   width: e.target.value
                               })}
                           value={cachedItem.width}
                           className="form-control"></input>
                    Image Height
                    <input value={widget.height}
                           onChange={(e) =>
                               setCachedItem({
                                   ...cachedItem,
                                   height: e.target.value
                               })}
                           value={cachedItem.height}
                           className="form-control"></input>
                </>

            }
        </div>
    )
}
export default ImageWidget