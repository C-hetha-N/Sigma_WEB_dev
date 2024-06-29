import React from 'react'
import "./Card.css"

const Card = (props) => {
    return(
        <>
            <div className="card" style={{overflow: "hidden"}}>
                <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="" width="260px"/>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <button>Read more</button>
            </div>
        </>
    )
}

export default Card