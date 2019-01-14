const DB = require('./Database');

module.exports = {

    // insert new key if it does not exists
    // update value if key already exists
    insertOrUpdate: function(data, callback) {
        return callback();
    },

    // retrieve the latest value of the provided key
    getLatestValue: function(key, callback) {
        return callback();
    },

    // retrieve the value of the key on the timestamp provided
    getValueOnTimestamp: function(key, timestamp, callback) {
        return callback();
    }

};
