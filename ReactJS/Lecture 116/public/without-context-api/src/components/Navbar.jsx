import React from 'react'
import Button from './Button'
import Login from './Login'

const Navbar = (props) => {
    return (
        <>
            <div>
                Navbar
            </div>
            <Button count={props.count}/>
            <Login/>
        </>
    )
}

export default Navbar
