import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
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
