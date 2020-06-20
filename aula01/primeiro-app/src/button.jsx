import React from 'react'

export default function Button(props) {
    let classes = ''
    classes += props.operator ? "operator" : ""
    classes += props.double ? "double" : ""

    return <button className={classes} onClick={props.handleClick}>
        {props.label}
    </button>
}