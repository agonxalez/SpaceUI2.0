import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import App from './App';

it('render App', () => {
  render(
    <App />
  );
});
it('render App', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  fireEvent.click(screen.getByTestId('buttonx'));
});
