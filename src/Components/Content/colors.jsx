import React from 'react'
import { UiColors } from './Constants/UiColors'
import '../../Sass/colors.scss'

export const Colors = () => {
    return (
        <>
            <div class="container all">
                {UiColors.map((val) => {
                    return (
                        <>
                            <div className="container color-title" >{val.title.toUpperCase()}</div>
                            <div class="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
                                {val.colors.map((clr) => {
                                    return (
                                        <>
                                            <div div class="col " >
                                                <div class="p-3 color" style={{ backgroundColor: clr }}>{clr}</div>
                                            </div>
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
