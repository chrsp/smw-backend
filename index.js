require('dotenv').config({ debug: process.env.NODE_ENV === 'development' });

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./api-routes');

const app = express();
const port = process.env.PORT || 8080;

//app.get("/", (request, response) => response.send("hello motherfucka"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.listen(port, () => console.log(`Running SMW on port ${port}`));

mongoose.connect(`mongodb://${process.env.DB_HOST}`, { useNewUrlParser: true }, () =>
  console.log('db connected sucessfully')
);
