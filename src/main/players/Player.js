import React from 'react'
import './playercard.css'
const noPicture = require('../../imgs/no-picture-found.jpeg')

const Portrait = ({img = null}) => {
    return(
        <div className="player-portrait">
             <img className="portrait-res" 
                src={!!img ? img : noPicture.default}
             />
        </div>
    )
}

const Information = ({name = null, team = null}) => {
    return(
        <div className="player-info">
            <p>Name: {name}</p>
            <p>Team: {!!team ? team : "unregistered"}</p>
        </div>
    )
}

const Player = ({...props }) => {
    return(
        <div
            onClick={props.handleClick}
            className={`card ${props.className}`}>
           <Portrait img={props.img}/>
           <Information {...props}/>
        </div>
    )
}

export default Player