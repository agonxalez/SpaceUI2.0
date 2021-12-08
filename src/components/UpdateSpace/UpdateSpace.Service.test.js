import { waitFor } from '@testing-library/react';
import updateSpace from './UpdateSpace.Service';
import HttpHelper from '../../utils/HttpHelper';

jest.mock('../../utils/HttpHelper');

it('gets end points', async () => {
  const mockResponse = new Response();
  mockResponse.status = 200;
  mockResponse.json = () => Promise.resolve('string');
  const mockSpaceShuttle = jest.fn();
  const mockSetApiError = jest.fn();
  HttpHelper.mockResolvedValue(mockResponse);

  await waitFor(() => {
    updateSpace(mockSpaceShuttle, mockSetApiError);
  });
  expect(mockSetApiError).toHaveBeenCalledTimes(0);
});
it('gets end points', async () => {
  const mockResponse = new Response();
  mockResponse.status = 201;
  mockResponse.json = () => Promise.resolve('string');
  const mockSpaceShuttle = jest.fn();
  const mockSetApiError = jest.fn();
  HttpHelper.mockResolvedValue(mockResponse);

  await waitFor(() => {
    updateSpace(mockSpaceShuttle, mockSetApiError);
  });
  expect(mockSetApiError).toHaveBeenCalledTimes(1);
});
