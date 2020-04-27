const Entry = require('./schemas/entry');

module.exports = async (data) => {
    try {
        return await Entry.findByIdAndDelete(data.id);
    } catch (error) {
        console.log(error);
    }
};
