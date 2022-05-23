import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';


test('renders learn react link', () => {
  const {container} = render(<App />);

  const helloDuseDiv = screen.getByText(/Hello Duse World!/);
  expect(helloDuseDiv).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
