import Animal from './AnimalEmoji';
import './Parade.css';

export default function Parade({ animals }) {
  return (
    <div className='animal-list'>
      {animals.map((animal, i) =>
        <Animal key={`${animal}-${i}`}
          animal={animal} />)}
    </div>);
}
