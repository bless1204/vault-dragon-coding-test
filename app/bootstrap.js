"use strict";

const aws = require('aws-sdk');
const kms = require('kms');

module.exports = {

    start: function(next) {
        console.log('Performing bootstrap..');
        // execute logic to run upon start of service
        // decrypt credentials
        // establish database connection
        next();
    }

};
