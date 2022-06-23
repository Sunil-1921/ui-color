import React from 'react'
import { UiColors } from './Constants/UiColors'
import { Color } from './color'
import '../../Sass/colors.scss'

// const copyColor = () => {
//     // let copytext = document.getElementById("myColor")
//     let copytext = document.querySelectorAll("#myColor")
//     // navigator.clipboard.writeText(copytext.innerHTML)
//     // const MyColor = copytext.innerHTML;
//     // copytext.innerHTML = "Copied"
//     // setTimeout(() => {
//     //     copytext.innerHTML = MyColor;
//     // }, 2000);

//     console.log(copytext[0])
// }

export const Colors = () => {
    return (
        <>
            <div className="container all">
                {UiColors.map((val) => {
                    return (
                        <>
                            <div className="container color-title" >{val.title.toUpperCase()}</div>
                            <div className="row  row-cols-lg-6 g-lg-3">
                                {val.colors.map((clr, index) => {
                                    return (
                                        <>
                                            {/* <div className="col " onClick={copyColor}>
                                                <div id="myColor" className="p-3 color" style={{ backgroundColor: clr }}>{index}{clr}</div>
                                            </div> */}
                                            <Color clr={clr} index={index} />

                                        </>
                                    )
                                })}
                            </div>
                            <br />
                            <hr />
                        </>
                    )
                })}
            </div>
        </>
    )
}
