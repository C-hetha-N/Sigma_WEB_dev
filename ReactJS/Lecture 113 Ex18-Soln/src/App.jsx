import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data)
    console.log(data);

  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Navbar />
      <div className="cardContainer">
        {
          cards.map((card) => {
            return (
              <div key={card.id} className="card">
                <h4>{card.title}</h4>
                <p>{card.body}</p>
                <span>By userId: {card.userId}</span>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
