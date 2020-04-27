const create = require('./entries/create');
const read = require('./entries/read');
const update = require('./entries/update');
const remove = require('./entries/delete');
const list = require('./entries/list');

module.exports = {
    create,
    read,
    update,
    remove,
    list,
};
