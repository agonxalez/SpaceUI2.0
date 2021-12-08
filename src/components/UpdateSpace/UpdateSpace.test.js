import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UpdateSpace from './UpdateSpace';

const mockHistoryPush = jest.fn();
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
  }),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

it('RenderUpdateSpace', () => {
  render(
    <UpdateSpace />
  );
  expect(screen.getByTestId('buttonx')).toBeInTheDocument();
});
it('render and click button', () => {
  render(
    <MemoryRouter>
      <UpdateSpace />
    </MemoryRouter>
  );
  fireEvent.click(screen.getByTestId('buttonx'));
});
it('render and click button', () => {
  render(
    <MemoryRouter>
      <UpdateSpace />
    </MemoryRouter>
  );
  const name = screen.getByTestId('name');
  fireEvent.change(name, { target: { value: 'Danny' } });
});
