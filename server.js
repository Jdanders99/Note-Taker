const express = require('express');
const fs = require('fs');
const path = require('path');

let notes = require('./db/db.json');

const app = express();
const PORT = process.env.PORT || 3001;