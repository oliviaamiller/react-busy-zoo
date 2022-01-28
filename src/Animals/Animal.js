export default function Animal(props) {
  return <div className='animal'>
    {props.animal === 'flamingo' && '🦩'}
    {props.animal === 'leopard' && '🐆'}
    {props.animal === 'zebra' && '🦓'}
    {props.animal === 'hippo' && '🦛'}
    {props.animal === 'tiger' && '🐅'}
    {props.animal === 'elephant' && '🐘'}

  </div>;
}
