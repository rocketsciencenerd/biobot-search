import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App/App';

// Example of a component test
test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the Biobot Test Kit Search App/i);
  expect(linkElement).toBeInTheDocument();
});
