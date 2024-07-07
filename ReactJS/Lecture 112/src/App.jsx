import { useState } from 'react'
import './App.css'

function App() {
  // const [bgColor, setBgColor] = useState('red');
  const [name, setName] = useState("Enter your name: ")
  const [form, setForm] = useState({})


  const handClick = () => {
    alert("Hey! I am clicked")
  }

  // const handleMovesover = () => {
  //   setBgColor("blue");
  // }

  // const handleMovesout = () => {
  //   setBgColor('red');
  //   alert("Hey! I am mouse hover out")
  // }

  const handleChangename = (e) => {
    setName(e.target.value)
  }
  const handleChange = (e) => {
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form);
  }

  return (
    <>
      <button onClick={handClick}>Click me</button>

      {/* <div className='red' onMouseOut={handleMovesout} onMouseOver={handleMovesover} style={{ backgroundColor: bgColor }}>
        I am a magic box
      </div> */}

      <div>
        <input type="text" value={name} onChange={handleChangename} />
        <input type="text" name='email' value={form.email?form.email: ""} onChange={handleChange} />
        <input type="text" name='phone' value={form.phone?form.phone: ""} onChange={handleChange} />
      </div>
    </>
  )
}

export default App
