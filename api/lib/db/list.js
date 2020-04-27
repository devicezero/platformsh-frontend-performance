const Entry = require('./schemas/entry');

module.exports = async (data) => {
    try {
        const entries = await Entry.find({});
        console.log(entries);

        return {
          found: entries.length,
          result: entries
      };
    } catch (error) {
        console.log(error);
    }
};
