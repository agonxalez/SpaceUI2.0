import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import UpdateSpace from './UpdateSpace';

const shuttle = [{
  name: 'danny',
  id: 1,
  description: 'danny first trip',
  amount: 12,
  release: '2021-12-12',
  active: true
}];
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/',
    state: { shuttle }
  })
}));

it('RenderUpdateSpace', () => {
  render(
    <UpdateSpace />
  );
  expect(screen.getByTestId('buttonx')).toBeInTheDocument();
});
it('RenderUpdateSpace', () => {
  render(
    <UpdateSpace />
  );
  fireEvent.click(screen.getByTestId('buttonx')).toBeInTheDocument();
});
