"use strict";

const express = require('express');
const v1Router = express.Router();

const controller = require('../controller/v1/MainController');

v1Router.post('/object', controller.createOrUpdateKey);
v1Router.get('/object/:key', controller.retrieveKey);

module.exports = v1Router;
