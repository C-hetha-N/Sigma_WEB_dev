import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [adjective, setAdjective] = useState("good")

  // const getAdjective = () => {
  //   return "New" + count
  // }

  const getAdjective = useCallback(
    () => {
      return "Change count" + " C1=" + count1 + ", C2=" + count2
    },[count1]
  )


  return (
    <>
      <Navbar adjective={adjective} getAdjective={getAdjective} />
 
      <div className="card">
        <button onClick={() => setCount1((count1) => count1 + 1)}>
          count1 is {count1}
        </button>
        <button onClick={() => setCount2((count2) => count2 + 1)}>
          count2 is {count2}
        </button>
        
      </div>

    </>
  )
}

export default App
