'use strict';

/** configurations */
const PORT = process.env.PORT || 3000;

/** deps */
const log = require('./infra/logger')
  , express = require('express')
  , path = require('path')
  , morgan = require('morgan')
  , bodyParser = require('body-parser');

/** express */
const app = express();

app.use(morgan('dev'));
app.use('/', express.static('www'));
app.use(bodyParser.urlencoded({extended: false}));

/** start */
app.listen(PORT, () => {
  log.info(`listening on http://localhost:${PORT}`);
});