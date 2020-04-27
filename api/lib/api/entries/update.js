const Database = require('../../db/');

module.exports = async (request) => {
  return await Database.update({
    id: request.payload.id,
    doc: request.payload.doc
  })
};
