import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setShowbtn] = useState(false)

  const [todos, setTodos] = useState([
    {
      title: "Hey! 👋 ",
      desc: "I am your Todo"
    },
    {
      title: "I am a grocery todo",
      desc: "Don't add existing items"
    },
    {
      title: "I am a clg work todo",
      desc: "Eat that Frog"
    },
  ])

  // const Todo = ({ todo }) => {
  //   return (
  //     <>

  //       <div className="m-4 border border-indigo-600">
  //         <div className='tdTitle' style={{ fontWeight: 500 }} >{todo.title}</div>
  //         <div className='tdDesc'>{todo.desc}</div>
  //       </div>
  //     </>
  //   )
  // }

  return (
    <>
      {todos.map(todo => {
        // return <Todo key={todo.title} todo={todo} />

        return (
          <div key={todo.title} className="m-4 border border-indigo-600">
            <div className='tdTitle' style={{ fontWeight: 500 }} >{todo.title}</div>
            <div className='tdDesc'>{todo.desc}</div>
          </div>
        )
      })}

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      {showbtn ? <button>showbtn is true</button> : <button>showbtn is false</button>}
      {/* {showbtn && <button>showbtn is true</button>} */}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1, setShowbtn(!showbtn))}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
