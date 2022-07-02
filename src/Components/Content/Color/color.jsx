import React from 'react'

const copyColor = (e) => {
    // let copytext = document.querySelectorAll(".color")
    navigator.clipboard.writeText(e.target.innerHTML)
}
export const Color = (props) => {
    return (
        <>
            <div className="col " onClick={(e) => copyColor(e)}>
                <div className="p-3 color" style={{ backgroundColor: props.clr }}>{props.clr}</div>
            </div>
        </>
    )
}
