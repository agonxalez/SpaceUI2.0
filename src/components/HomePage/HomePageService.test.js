import { waitFor } from '@testing-library/react';
import fetchPromos from './HomePageService';
import HttpHelper from '../../utils/HttpHelper';

jest.mock('../../utils/HttpHelper');

it('gets end points', async () => {
  const mockResponse = new Response();
  mockResponse.ok = true;
  mockResponse.json = () => Promise.resolve('string');
  const mockSetApiError = jest.fn();
  const mockSetPromos = jest.fn();
  HttpHelper.mockResolvedValue(mockResponse);

  await waitFor(() => {
    fetchPromos(mockSetPromos, mockSetApiError);
  });
  expect(mockSetPromos).toBeCalledTimes(1);
  expect(mockSetPromos).toHaveBeenCalledWith('string');
  expect(mockSetApiError).not.toHaveBeenCalled();
});
it('gets end points', async () => {
  const mockResponse = new Response();
  mockResponse.ok = false;
  mockResponse.json = () => Promise.resolve('string');
  const mockSetApiError = jest.fn();
  const mockSetPromos = jest.fn();
  HttpHelper.mockResolvedValue(mockResponse);

  await waitFor(() => {
    fetchPromos(mockSetPromos, mockSetApiError);
  });
  expect(mockSetPromos).toBeCalledTimes(0);
  expect(mockSetApiError).toBeCalledTimes(1);
});
