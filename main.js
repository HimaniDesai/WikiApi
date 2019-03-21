var request = require('request');
var argv = require('yargs').argv;
var query = req.body.result &&
req.body.result.parameters &&
req.body.result.parameters.q
  ? req.body.result.parameters.q:'wikipedia';

var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ query +"&format=json";
console.log("request starts");
request(url, function (err, response, body) {
if (err) {
 var error = 'cannot connect to the server';
 console.log(error);
} else {
   var wiki = JSON.parse(body);
    for (var i = 0; i < 1; i++) {
       var data = `You searched for ${wiki[1][i]}: And these are the  details — ${wiki[2][i]} Follow this link to read more — ${wiki[3][i]}` + '\n';
 console.log(data);
}
}
});
