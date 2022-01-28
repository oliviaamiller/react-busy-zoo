import './Parade.css';

export default function AnimalEmoji({ animal }) {
  return <div className='animal'>
    {animal === 'flamingo' && '🦩'}
    {animal === 'leopard' && '🐆'}
    {animal === 'zebra' && '🦓'}
    {animal === 'hippo' && '🦛'}
    {animal === 'tiger' && '🐅'}
    {animal === 'elephant' && '🐘'}
    {animal === 'giraffe' && '🦒'}
  </div>;
}
