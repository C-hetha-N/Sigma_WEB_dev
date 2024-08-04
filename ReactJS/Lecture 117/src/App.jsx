import { useState, useMemo } from 'react'

import './App.css'

const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_000,
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)

  // const magical = numbers.find(item=>item.isMagical===true) //Expensive computation
  const magical = useMemo(() => numbers.find(item => item.isMagical === true), [numbers])

  return (
    <>
      <span>Magical number is {magical.index}</span>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          if (count == 10) {
            setNumbers(new Array(20_000_000).fill(0).map((_, i) => {
              return {
                index: i,
                isMagical: i === 19_000_000,
              }
            })
            )
          }
        }}>
          count is {count}
        </button>
      </div >

    </>
  )
}

export default App
