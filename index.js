const express    = require('express');
const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const cors       = require('cors');
const port       = process.env.PORT || 4000;
const app        = express();
const dest       = `${__dirname}/public`;
const env        = require('./config/env');
const router     = require('./config/routes');


mongoose.connect(env.db[process.env.NODE_ENV]);

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(dest));
app.use(router);

app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

app.listen(port, () => console.log(`Express has started on port: ${port}`));

module.exports = app;
