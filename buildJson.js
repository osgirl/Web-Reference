var jsonfile = require('jsonfile')
var argv = require('optimist').argv;

var file = './buildJson.json'

var now = new Date();
var jsonDate = now.toJSON();

var buildNo = argv.buildNo || 'SNAPSHOT';

var obj = {
    buildNumber: buildNo.toString(),
    buildDateTime: jsonDate
};

jsonfile.writeFile(file, obj, function(err) {
    console.error(err)
})