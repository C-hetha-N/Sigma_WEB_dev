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
        <Card title="Card 1 Title" description="desc" />
        <Card title="Card 2 Title" description="desc" />
        <Card title="Card 3 Title" description="desc" />
        <Card title="Card 4 Title" description="desc" />
      </div>
      <Footer />
    </>
  )
}

export default App
