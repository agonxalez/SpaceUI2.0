import { trackPromise } from 'react-promise-tracker';
import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 *
 * @name UpdatePromoFormService
 * @description Utilizes HttpHelper to make a put request to an API
 * @param {*} product promo to update
 * @returns response body if status is ok or throws an error
 */
export default async function updateSpace(shuttleData, setApiError) {
  let error;
  await trackPromise(
    HttpHelper(Constants.SPACE_ENDPOINT, 'PUT', shuttleData)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(Constants.API_ERROR);
        }
        error = true;
        return response.json;
      })
      .catch(() => {
        error = false;
        setApiError(true);
      })
  );

  return error;
}
