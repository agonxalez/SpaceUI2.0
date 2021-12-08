import { waitFor } from '@testing-library/react';
import HttpHelper from '../../utils/HttpHelper';
import DeleteSpaceShuttle from './HomePageDeleteService';

jest.mock('../../utils/HttpHelper');

it('Delete Review success test', async () => {
  const mockResponse = new Response();
  mockResponse.status = 204;
  mockResponse.json = () => Promise.resolve('string');
  const id = jest.fn();
  let test = false;
  HttpHelper.mockResolvedValue(mockResponse);
  await waitFor(() => {
    test = DeleteSpaceShuttle(id);
  });
  expect(test).toBeTruthy();
});

it('Delete Review failed test', async () => {
  const mockResponse = new Response();
  mockResponse.ok = false;
  mockResponse.json = () => Promise.resolve();
  const id = jest.fn();
  HttpHelper.mockResolvedValue(mockResponse);
  await waitFor(() => {
    DeleteSpaceShuttle(id);
  });
});
