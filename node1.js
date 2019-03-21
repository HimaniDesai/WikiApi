const querystring = require('querystring');
console.log("request starts");
var parsed=querystring.encode({"This is a computer"}, null ,null,{ encodeURIComponent: gbkEncodeURIComponent });
console.log(parsed);