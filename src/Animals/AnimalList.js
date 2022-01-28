import Animal from './Animal';

export default function AnimalList(props) {
  return (
    <div className='animal-list'>
      {props.animalArray.map((animal, i) =>
        <Animal key={`${animal}-${i}`}
          animal={animal} />)}
    </div>);
}
