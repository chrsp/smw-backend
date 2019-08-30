let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express()

let port =  process.env.port || 8080;

//app.get("/", (request, response) => response.send("hello motherfucka"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let apiRoutes = require("./api-routes");
app.use("/api", apiRoutes);

app.listen(port, function() {
    console.log("Running SMW on port " + port);
});

mongoose.connect('mongodb://localhost/smw', { useNewUrlParser: true});

var db = mongoose.connection;

if (!db) 
    console.log("error connecting to db");
else 
    console.log("db connected sucessfully");
