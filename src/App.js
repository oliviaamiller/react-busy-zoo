import './App.css';
import { useState } from 'react';
import Parade from './Parade/Parade';
import OpenSign from './OpenSign/OpenSign';

function App() {

  const [crocSize, setCrocSize] = useState(7);
  const [gorillaSize, setGorillaSize] = useState(7);
  const [animalArray, setAnimalArray] = useState(['zebra', 'giraffe', 'hippo']);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <div className='fight'>
        <div className='left-fight'>
          <div className='croc-buttons'>
            <button onClick={() => setCrocSize(crocSize + 1)}>Croc gets stronger</button>
            <button onClick={() => setGorillaSize(gorillaSize - 1)}>Croc attacks Gorilla</button>
          </div>
          <div className='croc'>
            <p style={{ fontSize: `${crocSize}rem` }}>🐊</p>
          </div>
         
        </div>
        <div className='right-fight'>
          <div className='gorilla'>
            <p style={{ fontSize: `${gorillaSize}rem` }}>🦍</p>
          </div>
          <div className='gorilla-buttons'>
            <button onClick={() => setGorillaSize(gorillaSize + 1)}>Gorilla gets stronger</button>
            <button onClick={() => setCrocSize(crocSize - 1)}>Gorilla attacks Croc</button>
          </div>
        </div>
      </div>
      <div className='sign'>
        <p>Welcome to the Zoo! We are ...</p>
        <OpenSign isOpen={isOpen}/>
        <div className='sign-buttons'>
          <button onClick={() => setIsOpen(false)}>Good Night!</button>
          <button onClick={() => setIsOpen(true)}>Good Morning!</button>
        </div>
      </div>
      <div className='parade' >
        <Parade animals={animalArray} title='parade'/>
        <p>animalparadeanimalparadeanimalparadeanimalparadeanimalparadeanimalparadeanimalparadeanimalparadeanimalparadeanimalparadeanimalparadeanimalparadeanimalparadeanimalparadeanimalparadeanimalparade</p>
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
