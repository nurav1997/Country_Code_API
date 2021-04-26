var express = require('express');
const { response } = require('..');
var router = express.Router();
var getCountry = require('../services/getCountry');


//regex to check only for numbers
var reg = new RegExp('^[0-9]+$');

//post router searh
router.route('/search').post(async (req, res) => {
    if (reg.test(req.body.countryCode) === true) {
        await getCountry.searchCountryData(req.body.countryCode).then(resp => {
            res.json(resp);
        })
    } else {
        res.json({ Message: "Sorry User the input recieved is wrong" })
    }
}).get(function(req,res){
    res.send("This is a api that return country details on entry of country code")
});


module.exports.router = router;