import React, {memo} from 'react'

const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar is rendered");
    
  return (
    <nav>
      <button>{getAdjective()}</button>
      <p>I am a {adjective} Navbar</p>
      <p>I'm using useCallback Hook</p>
    </nav>
  )
}

export default memo(Navbar)
