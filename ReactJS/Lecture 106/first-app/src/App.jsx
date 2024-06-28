import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <p>This contains my site main content</p>
      </main>
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  )
}

export default App
