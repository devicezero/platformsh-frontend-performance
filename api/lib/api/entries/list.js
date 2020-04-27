const Database = require('../../db/');

module.exports = async (request) => {
    return await Database.list({});
};
