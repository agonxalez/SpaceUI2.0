import { trackPromise } from 'react-promise-tracker';
import HttpHelper from '../../utils/HttpHelper';
import constants from '../../utils/constants';

export default async function DeleteSpaceShuttle(id) {
  await trackPromise(HttpHelper(`${constants.SPACE_ENDPOINT}/${id}`, 'DELETE')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(constants.API_ERROR);
    })
    .catch(() => {
    }));
}
