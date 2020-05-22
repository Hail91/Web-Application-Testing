import React, {useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';


function App() {

  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const addStrike = () => {
    if (strikes < 3) {
      return setStrikes(strikes + 1)
    }
    else {
     return setStrikes(3)
    }
  }

  const addBall = () => {
    if (balls < 4) {
      return setBalls(balls + 1)
    }
    else {
      return setBalls(4)
    }
  }

  const addFoul = () => {
    if (strikes < 2) {
      return setStrikes(strikes + 1)
    }
    else {
       setStrikes(2)
    }
  }

  const addHit = () => {
    return (
      setStrikes(0),
      setBalls(0)
    )
  }
  
  return (
    <div className="App">
      <Display
      strikes={strikes}
      balls={balls} 
      />
      <Dashboard 
      addStrike={addStrike}
      addBall={addBall}
      addFoul={addFoul}
      addHit={addHit}
      />
    </div>
  );
}

export default App;
