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
  return errors;
};
export default UpdateCreateValidation;
