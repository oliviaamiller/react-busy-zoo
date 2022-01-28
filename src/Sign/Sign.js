export default function Sign({ isOpen }) {
  return <div className='sign-words'>
    {isOpen ? 'OPEN' : 'CLOSED'}
  </div>;
}
