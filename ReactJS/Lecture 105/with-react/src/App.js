import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [value, setvalue] = useState(0)

  return (

    <div className="App">
      <Navbar logoText="CodeWithHarry"/>
      <header className="App-header">
        {value}
        <button onClick={() => { setvalue(value + 1) }}>Click Here</button>
      </header>
      <Footer />
    </div>
  );
}

export default App;
