import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders flamingo text', () => {
  render(<App />);
  const linkElement = screen.getByText(/flamingo/i);
  expect(linkElement).toBeInTheDocument();
});

test('isOpen = true when you click the good morning! button', () => {
  render(<App />);
  const openButtonElement = screen.getByRole('button', { name: /Good Morning!/i });

  fireEvent.click(openButtonElement);

  const openSignElement = screen.getByText(/open/i);


  expect(openSignElement).toBeInTheDocument();
});

test('croc grows +1 when croc gets stronger button is clicked', () => {
  render(<App />);
  const crocButtonElement = screen.getByRole('button', { name: /Croc gets stronger/i });
  let crocSize = 7;

  fireEvent.click(crocButtonElement);

  const biggerCrocElement = crocSize + 1;


  expect(biggerCrocElement).toBe(8);
});
