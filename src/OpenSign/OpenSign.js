export default function OpenSign({ isOpen }) {
  return <div className='sign-words'>
    {isOpen ? 'OPEN' : 'CLOSED'}
  </div>;
}
