export default function Animal(props) {
  return <div className='animal'>
    {props.animal === 'flamingo' && '🦩'}

  </div>;
}
