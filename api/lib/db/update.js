const Entry = require('./schemas/entry');

module.exports = async (data) => {
    try {
        return await Entry.findByIdAndUpdate(data.id, data.doc);
    } catch (error) {
        console.log(error);
    }
};
