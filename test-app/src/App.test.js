import React from 'react';
import { render } from '@testing-library/react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import App from './App';

test('App renders to screen properly', () => {
  render(<App />)
});

test('Dashboard component renders', () => {
  render(<Dashboard />)
});

test('Display component renders', () => {
  render(<Display />)
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





