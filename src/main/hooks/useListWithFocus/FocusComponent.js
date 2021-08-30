import React, { useRef } from 'react'
import useFocusReset from './useFocusReset'

const FocusComponent = ({handleClick, ...props}) => {
    const wrapperRef = useRef(null)
    useFocusReset(wrapperRef, handleClick)

    return(
        <div ref={wrapperRef} className="wrapper">
            {props.children}
        </div>
    )
}

export default FocusComponent