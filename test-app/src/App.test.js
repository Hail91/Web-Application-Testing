import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders to screen properly', () => {
  render(<App />)
});

test('Foul Button Exists' , () => {
  const { getByText } = render(<App />);
  getByText(/foul/i);
});

test('Strike Button exists', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/strike/i)
});

test('Ball Button exists', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/ball/i)
});

test('Hit Button exists', () => {
  const { getByText } = render(<App />);
  getByText(/hit/i);
});



