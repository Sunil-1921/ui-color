import React from 'react'
import { UiColors } from '../Constants/UiColors'
import { Color } from './color'
import '../../../Sass/colors.scss'

export const Colors = () => {
    return (
        <>
            <div className="container all">
                {UiColors.map((val) => {
                    return (
                        <>
                            <div className="container color-title" >{val.title.toUpperCase()}</div>
                            <div className="row row-cols-lg-6 g-lg-3">
                                {val.colors.map((clr, index) => {
                                    return (
                                        <>
                                            <Color clr={clr} index={index} />
                                        </>
                                    )
                                })}
                            </div>
                            <hr />
                        </>
                    )
                })}
            </div>
        </>
    )
}
