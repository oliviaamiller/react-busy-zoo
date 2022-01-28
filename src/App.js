import './App.css';
import { useState } from 'react';
import Parade from './Parade/Parade';
import Sign from './Sign/Sign';

function App() {

  const [crocSize, setCrocSize] = useState(10);
  const [gorillaSize, setGorillaSize] = useState(10);
  const [animalArray, setAnimalArray] = useState(['zebra', 'giraffe', 'hippo']);
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
        <Sign isOpen={isOpen}/>
        <button onClick={() => setIsOpen(false)}>Closed</button>
        <button onClick={() => setIsOpen(true)}>Open</button>
      </div>
      <div className='parade'>
        <Parade animals={animalArray}/>
        <div className='parade-buttons'>
          <button onClick={() => setAnimalArray([...animalArray, 'flamingo'])}>flamingo</button>
          <button onClick={() => setAnimalArray([...animalArray, 'giraffe'])}>giraffe</button>
          <button onClick={() => setAnimalArray([...animalArray, 'leopard'])}>leopard</button>
          <button onClick={() => setAnimalArray([...animalArray, 'zebra'])}>zebra</button>
          <button onClick={() => setAnimalArray([...animalArray, 'hippo'])}>hippo</button>
          <button onClick={() => setAnimalArray([...animalArray, 'elephant'])}>elephant</button>
          <button onClick={() => setAnimalArray([...animalArray, 'tiger'])}>tiger</button>
        </div>
      </div>
    </div>
  );
}

export default App;
