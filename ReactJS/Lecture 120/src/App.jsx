import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, multiply, divider } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <>
      <Navbar/>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        Count {count}
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        <button onClick={() => dispatch(multiply())}>*2</button>
        <button onClick={() => dispatch(divider())}>/3</button>

    </>
  )
}

export default App
