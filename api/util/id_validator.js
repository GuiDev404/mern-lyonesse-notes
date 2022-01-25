const { Types } = require('mongoose');

module.exports = (paramId) => {
  const isValid = Types.ObjectId.isValid(paramId);

  return (!paramId.trim() || !isValid) ? false : true;
}