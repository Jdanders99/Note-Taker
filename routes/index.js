const express = require('express');
const router = require('./htmlRoutes');
const htmlRouter = require('./htmlRoutes');
const app = express();

router.use('/htmlRouter', htmlRouter);

module.exports = app;

