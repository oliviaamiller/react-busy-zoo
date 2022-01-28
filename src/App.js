import './App.css';
import { useState } from 'react';

function App() {

  const [crocSize, setCrocSize] = useState(10);
  const [gorillaSize, setGorillaSize] = useState(10);
  const [animalArray, setAnimalArray] = useState(['rhino', 'giraffe', 'camel']);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <div className='fight'>
        <div className='croc'>
          <p style={{ fontSize: `${crocSize}rem` }}>🐊</p>
          <button onClick={() => setCrocSize(crocSize + 1)}>Croc gets stronger</button>
          <button onClick={() => setGorillaSize(gorillaSize - 1)}>Croc attacks Gorilla</button>
        </div>
        <div className='gorilla'>
          <p style={{ fontSize: `${gorillaSize}rem` }}>🦍</p>
          <button onClick={() => setGorillaSize(gorillaSize + 1)}>Gorilla gets stronger</button>
          <button onClick={() => setCrocSize(crocSize - 1)}>Gorilla attacks Croc</button>
        </div>
      </div>
      <div className='sign'>
        {isOpen ? 'OPEN' : 'CLOSED'}
        <button onClick={() => setIsOpen(false)}>Closed</button>
        <button onClick={() => setIsOpen(true)}>Open</button>
      </div>
    </div>
  );
}

export default App;
