import { trackPromise } from 'react-promise-tracker';
import HttpHelper from '../../utils/HttpHelper';
import constants from '../../utils/constants';

/**
 *
 * @name createPromoPost
 * @description sends a create promo request
 * @param promo promo to be created
 * @returns 201 if promo is created, error otherwise
 */
export default async function createSpacePost(space, setApiError) {
  await trackPromise(
    HttpHelper(constants.SPACE_ENDPOINT, 'POST', space)
      .then((response) => {
        if (response.status === 409) {
          throw new Error('Cannot create duplicate codes');
        } else if (response.status !== 201) {
          throw new Error(constants.API_ERROR);
        }
        return response.json();
      })
      .catch(() => {
        setApiError(true);
      })
  );
}
