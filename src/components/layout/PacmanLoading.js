import React from 'react'
import PacMan from './PacMan.gif'

function PacmanLoading() {
    return (
        <div>
            <img
           src={PacMan}
           style={{width: '200px', margin: 'auto', display: 'block'}}
           alt="Loading..."
            />
        </div>
    )
}

export default PacmanLoading
