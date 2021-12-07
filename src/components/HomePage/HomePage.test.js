import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';
import fetchShuttles from './HomePageService';

const mockHistoryPush = jest.fn();
jest.mock('./HomePageService');
let container = null;
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));
const fakeShuttle = [{
  name: 'danny',
  id: 1,
  description: 'danny first trip',
  amount: 12,
  release: '2021-12-12',
  active: true
}];

it('render HomePage', () => {
  render(
    <HomePage />
  );
  expect(screen.getByTestId('buttonx')).toBeInTheDocument();
});
describe('test', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  it('shows cards', () => {
    fetchShuttles.mockImplementation((setShuttles, setApiError) => {
      setShuttles(fakeShuttle);
      setApiError(false);
    });
    render(<HomePage />);
  });
  it('shows cards', () => {
    fetchShuttles.mockImplementation((setShuttles, setApiError) => {
      setShuttles(fakeShuttle);
      setApiError(true);
    });
    render(<HomePage />);
  });
});
it('RouteChange', () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
  fireEvent.click(screen.getByTestId('buttonx'));
  expect(mockHistoryPush).toHaveBeenCalledWith('/createSpace');
});
