import React, { useEffect } from 'react'
import "./Navbar.css"

const Navbar = ({color}) => {
  // Case 1: Run on every render
  useEffect(() => {
    alert("Hey I will run on every render")
    console.log("case1 : every render");
  })

  // Case 2: Run only on first render
  useEffect(() => {
    alert("Hey I run only on first render")
    console.log("case2 : first render");
  }, [])

  // Case 2: Run only when certain values changed
  useEffect(() => {
    alert("Hey I am running because color was changed")
    console.log("color was changed");
  }, [color])

  useEffect(() => {
    alert("Hey I am first render of app.jsx")
    return () => {
        alert("component was unmounted");
    }
  }, [])

    return (
        <>
            <nav>
                <div>
                    Hey I am Navbar of {color} color hehe...
                </div>

                <div className='list'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar