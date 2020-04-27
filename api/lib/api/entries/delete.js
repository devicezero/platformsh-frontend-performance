const Database = require('../../db/');

module.exports = async (request) => {
  return await Database.remove({ id: request.params.id });
};
