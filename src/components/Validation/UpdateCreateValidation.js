const UpdateCreateValidation = (spaceData) => {
  const errors = {};
  if (!spaceData.name) {
    errors.name = 'Needs to contain name.';
  }
  if (!spaceData.active) {
    errors.active = 'Needs to contain active.';
  }
  if (!spaceData.description) {
    errors.description = 'Needs to contain description.';
  }
  if (!spaceData.amount) {
    errors.amount = 'Needs to contain amount.';
  }
  if (!spaceData.release) {
    errors.release = 'Needs to contain release.';
  }
  if (!(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/).test(spaceData.release)) {
    errors.release = 'Release Date must follow yyyy-mm-dd.';
  }
  if (!(/^([t][r][u][e]|[f][a][l][s][e])$/).test(spaceData.active)) {
    errors.active = 'Needs to be true or false in all lowercase.';
  }
  if (!(/^[0-9]\d*(\.\d+)?$/).test(spaceData.amount)) {
    errors.amount = 'Amount must be a number.';
  }
  return errors;
};
export default UpdateCreateValidation;
