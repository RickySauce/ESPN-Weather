import React, { useState, useEffect } from 'react'
import Player from './Player'
import useListWithFocus from '../hooks/useListWithFocus/useListWithFocus'

const Players = ({players}) => {

    const playerList = players.filter((player, index) => {
        if(typeof player === 'object' && player.hasOwnProperty('name')){
            return player
        } else return null
    })
    const playerListWithFocus = useListWithFocus(playerList, Player)

    return (
        <div className="container"> 
            {playerListWithFocus}
         </div>
    )
}

export default Players
