import React, { useState } from 'react';
import './App.css';

function App() {

  const [solution, setSolution] = useState("")
  const [nbCoup, setNbCoup] = useState(1)
  const [message, setMessage] = useState('')
  const [nb, setNb] = useState(Math.floor(100*Math.random()))
  const [done, setDone] = useState(false)

  const jeux = () => {
    setNbCoup(nbCoup + 1);

    if(solution < nb) { 
      setMessage('C\'est plus!')
    }
    if(solution > nb) { 
      setMessage('C\'est moins!')
    }
    if (solution == nb) {
      setMessage(`Bravo! T\'as gagne en ${nbCoup} coup`)
      setNbCoup(0)
      setSolution('')
      setDone(true)
    }
  }

  const recharge = () => {
    window.location.reload(true)
  }

  const change = (e) => {
    setSolution(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
      <h3>Le juste prix</h3>
      <p>Tu dois trouver le juste prix compris entre 0 et 100!</p>
      {message}
      <input type='number' placeholder='' value={solution} onChange={change}/>
      <br/>
      <button onClick={jeux}> Valider </button>
      <br/>
      {done ? (
        <button onClick={recharge}>Recommencer</button>
      ) : ''}
      </header>
    </div>
  );
}

export default App;
