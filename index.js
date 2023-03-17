require('dotenv').config();

const express = require('express');
const cors = require('cors');
const parser = require('body-parser');

const app = express();

const whitelist = process.env.WHITELIST.split(',');

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

// Cors
app.use(cors(corsOptions));
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json({ limit: '5mb' }));
app.use(parser.urlencoded({ limit: '5mb', extended: true, parameterLimit: 50000 }));
// Routes
app.use('/api/v1', require('./routes/user'));

app.get('/', (req, res) => {
  res.send('Wecolme to TYPEBOLD');
});

const dbConnection = require('./database/config');

// Connect to database
dbConnection();

// Puerto de sevidor local
app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), app.get('host'), () => {
  /* eslint no-console: "off" */
  console.log(`server on port ${app.get('port')} ${app.get('host')}`);
});
