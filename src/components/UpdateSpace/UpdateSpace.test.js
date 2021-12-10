import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UpdateSpace from './UpdateSpace';
import updateSpace from './UpdateSpace.Service';

jest.mock('./UpdateSpace.service');
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
it('render and click button', async () => {
  render(
    <MemoryRouter>
      <UpdateSpace />
    </MemoryRouter>
  );
  const name = screen.getByTestId('name');
  fireEvent.change(name, { target: { value: 'Danny' } });
  await updateSpace.mockImplementation((setShuttles, setApiError) => {
    setShuttles(shuttle);
    setApiError(false);
  });
});
it('goes through post', () => {
  updateSpace.mockImplementation((setShuttle, setApiError) => {
    setApiError(false);
  });
  render(<UpdateSpace />);
  const name = screen.getByTestId('name');
  const description = screen.getByTestId('description');
  const release = screen.getByTestId('release');
  const active = screen.getByTestId('active');
  const amount = screen.getByTestId('amount');
  fireEvent.change(name, { target: { value: 'Danny' } });
  fireEvent.change(description, { target: { value: 'Danny' } });
  fireEvent.change(release, { target: { value: '2021-12-12' } });
  fireEvent.change(active, { target: { value: true } });
  fireEvent.change(amount, { target: { value: 12 } });
  expect(screen.getByTestId('name').value).toBe('Danny');
  screen.getByTestId('buttonx').click();
});
