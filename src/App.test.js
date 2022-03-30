import { render, screen } from '@testing-library/react';
import App from './App';

test('renders button test', () => {
  render(<App />);
  const answerElement1 = screen.getByRole('button', {name: /A1/i});
  expect(answerElement1).toBeInTheDocument();
  const answerElement2 = screen.getByRole('button', {name: /A2/i});
  expect(answerElement2).toBeInTheDocument();
  const answerElement3 = screen.getByRole('button', {name: /A3/i});
  expect(answerElement3).toBeInTheDocument();
});
