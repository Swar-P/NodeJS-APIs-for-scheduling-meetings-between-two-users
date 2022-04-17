require('dotenv').config()
const Express = require("express");
const Routes = require('../NodeJSProject/api/routes');
const BodyParser = require("body-parser");
const mongoose = require('mongoose')
var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.CONNECTION_URL, {
    }, (e) => {
        if (e) {
            console.log(e)
        }
    });
});

app.use('/', Routes);