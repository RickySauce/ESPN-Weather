import React from 'react'
import Players from './players/Players'
import playerSeed from './seed'

const Main = () => {
    const [players, setPlayers] = React.useState(playerSeed)
 
    return (
        <div id="main"> 
            <Players players={players}/>
        </div>
    )

}

export default Main