import React from 'react'

const copyColor = (e) => {
    let copytext = document.querySelectorAll(".color")
    navigator.clipboard.writeText(e.target.innerHTML)
}
var index;
export const Color = (props) => {
    index = props.index
    return (
        <>
            <div className="col " onClick={(e) => copyColor(e)}>
                <div className="p-3 color" style={{ backgroundColor: props.clr }}>{props.clr}</div>
            </div>
        </>
    )
}
