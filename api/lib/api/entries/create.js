const Database = require('../../db/');

module.exports = async (request) => {
  return await Database.create({
    title: request.payload.title,
    status: request.payload.status,
  })
};
