import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CreateSpace from './CreateSpace';
import createSpacePost from './CreateSpaceService';

const mockHistoryPush = jest.fn();
jest.mock('./CreateSpaceService');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));
it('render toast component', () => {
  render(
    <CreateSpace />
  );
  expect(screen.getByTestId('buttonx')).toBeInTheDocument();
});
it('goes through post', () => {
  createSpacePost.mockImplementation((setShuttle, setApiError) => {
    setApiError(false);
  });
  render(<CreateSpace />);
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
it('goes through post', () => {
  createSpacePost.mockImplementation((setShuttle, setApiError) => {
    setApiError(false);
  });
  render(<CreateSpace />);
  const name = screen.getByTestId('name');
  const description = screen.getByTestId('description');
  const release = screen.getByTestId('release');
  const active = screen.getByTestId('active');
  const amount = screen.getByTestId('amount');
  fireEvent.change(name, { target: { value: '' } });
  fireEvent.change(description, { target: { value: '' } });
  fireEvent.change(release, { target: { value: '' } });
  fireEvent.change(active, { target: { value: '' } });
  fireEvent.change(amount, { target: { value: '' } });
  expect(screen.getByTestId('name').value).toBe('');
  screen.getByTestId('buttonx').click();
});
it('goes through post', () => {
  createSpacePost.mockImplementation((setShuttle, setApiError) => {
    setApiError(true);
  });
  render(<CreateSpace />);
});
