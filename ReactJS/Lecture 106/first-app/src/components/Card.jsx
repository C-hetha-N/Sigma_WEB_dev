import React from 'react'
import "./Card.css"

const Card = () => {
    return(
        <>
            <div className="card">
                <h1>Title of the card</h1>
                <p>Description of the card</p>
                <button>Read more</button>
            </div>
        </>
    )
}

export default Card