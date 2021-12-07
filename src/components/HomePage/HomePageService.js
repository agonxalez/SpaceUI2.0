import { trackPromise } from 'react-promise-tracker';
import HttpHelper from '../../utils/HttpHelper';
import constants from '../../utils/constants';

/**
 *
 * @name fetchPromos
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setProducts sets state for products
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for products if 200 response, else sets state for apiError
 */
export default async function fetchShuttles(setShuttles, setApiError) {
  await trackPromise(HttpHelper(constants.SPACE_ENDPOINT, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(constants.API_ERROR);
    })
    .then(setShuttles)
    .catch(() => {
      setApiError(true);
    }));
}
