import { waitFor } from '@testing-library/react';
import HttpHelper from '../../utils/HttpHelper';
import createPromoPost from './CreateSpaceService';

jest.mock('../../utils/HttpHelper');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/'
  })
}));
it('gets end points', async () => {
  const mockResponse = new Response();
  mockResponse.status = 201;
  mockResponse.json = () => Promise.resolve('string');
  const mockSetApiError = jest.fn();
  const mockPromos = jest.fn();
  HttpHelper.mockResolvedValue(mockResponse);

  await waitFor(() => {
    createPromoPost(mockPromos, mockSetApiError);
  });

  expect(mockSetApiError).toBeCalledTimes(0);
});
it('gets end points', async () => {
  const mockResponse = new Response();
  mockResponse.ok = false;
  mockResponse.json = () => Promise.resolve('string');
  const mockSetApiError = jest.fn();
  const mockPromos = jest.fn();
  HttpHelper.mockResolvedValue(mockResponse);

  await waitFor(() => {
    createPromoPost(mockPromos, mockSetApiError);
  });
  expect(mockPromos).toBeCalledTimes(0);
  expect(mockSetApiError).toBeCalledTimes(1);
});
it('gets end points', async () => {
  const mockResponse = new Response();
  mockResponse.status = 409;
  mockResponse.json = () => Promise.resolve('string');
  const mockSetApiError = jest.fn();
  const mockPromos = jest.fn();
  HttpHelper.mockResolvedValue(mockResponse);

  await waitFor(() => {
    createPromoPost(mockPromos, mockSetApiError);
  });
  expect(mockPromos).toBeCalledTimes(0);
  expect(mockSetApiError).toBeCalledTimes(1);
});
