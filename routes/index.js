const express = require('express');
const htmlRouter = require('./htmlRoutes');
const app = express();

router.use('/htmlRouter', htmlRouter);

module.exports = app;

