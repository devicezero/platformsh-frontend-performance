const Entry = require('./schemas/entry');

module.exports = async (data) => {
    try {
        // const request = JSON.parse(data);
        const newEntry = Entry({
            title: data.title,
            status: data.status,
        });
        return await newEntry.save();
    } catch (error) {
        console.log(error);
    }
};
