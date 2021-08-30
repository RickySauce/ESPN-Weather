import React, { useState } from 'react'
import FocusComponent from './FocusComponent'
import './useListWithFocus.css'

const useListWithFocus = (list, ListComponent) => {
    const [itemFocused, setItemFocused] = useState(null)

    const handleClick = (index, className) => {
        if(itemFocused === null) {
            setItemFocused(index)
        } else if ( index === itemFocused ) {
            setItemFocused(null)
        } 
    }

    return(
            list.map((item, index) => {
                let className = !Number.isInteger(itemFocused) ? "can-focus" 
                                : itemFocused === index ? "is-focused" 
                                : "not-focused"
                if(itemFocused === index){
                    return(
                        <FocusComponent key={index} handleClick={() => handleClick(index, className)}> 
                            <ListComponent
                                className={className}
                                {...item}/>
                        </FocusComponent>    
                    )
                } else {
                    return(
                        <ListComponent
                            className={className}
                            key={index}
                            handleClick={() => handleClick(index, className)}
                            {...item}/>
                    )
                }
            })
    )
}

export default useListWithFocus
