import React from 'react'
import {ChipStyle} from './styles'
export function Chip({text, color}) {
    return (
        <ChipStyle color={color}>
            {text}
        </ChipStyle>
    )
}
