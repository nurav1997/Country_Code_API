const fs = require('fs');
const { resolve } = require('path');
const log = require('log-to-file');

// Store Country data
var countryData = [];
var result = [];

//set country data on init
async function loadData() {
    let countryDataFile = fs.readFileSync('country.json');
    let CountryObj = JSON.parse(countryDataFile);

    CountryObj.forEach(obj => {
        countryData.push(obj);
    });

    console.log("*** Loading Country Data Success ***")

}

async function searchCountryData(CountryCode) {
    return new Promise(function (resolve, reject) {
        let flag = 0;
        countryData.forEach(obj => {
            if (parseInt(CountryCode) === parseInt(obj.Dial)) {
                flag = 1;
                result.push(obj);
                log(JSON.parse(obj.Dial));
            }
        });
        if (flag == 1) {
            resolve(result);
            result = [];
            flag = 0;
        } else {
            resolve({ Message: "Country Dosent Exist" });
        }
    });


}

module.exports = {
    loadData: loadData,
    searchCountryData: searchCountryData

}