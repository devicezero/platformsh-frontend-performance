const Database = require('../../db/');

module.exports = async (request) => {
    return await Database.read({ id: request.params.id });
};
