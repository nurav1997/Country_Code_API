var routes = require('./routes/routes');
var express = require('express');
var bodyParser = require('body-parser');
var GetCountry = require('./services/getCountry')
var app = express()

app.use(bodyParser());




app.use('/api', require('./routes/routes').router);


app.listen(process.env.PORT || port, () => {
    console.log("app is listening at : " + port);
})

GetCountry.loadData();

module.exports = app;