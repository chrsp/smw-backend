require('dotenv').config({ debug: process.env.NODE_ENV === 'development' });

const https = require('https');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./api-routes');
const express = require('express');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 8443;

var app = express();

var privateKey  = fs.readFileSync(path.join(__dirname, 'security', 'key.pem'));
var certificate  = fs.readFileSync(path.join(__dirname, 'security', 'certificate.pem'));

const httpsOptions = {
  cert: certificate,
   key: privateKey
  };

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', apiRoutes);

https.createServer(httpsOptions, app)
.listen(port, () => {
  console.log(`Listening port: ${port}`);
})

mongoose.connect(`mongodb://${process.env.DB_HOST}`, { useNewUrlParser: true }, () =>
   console.log(`db connected sucessfully`)
   );