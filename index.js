'use strict';
var dotenv = require('dotenv');
dotenv.load();
//var google = require('google');
const express = require("express");
const bodyParser = require("body-parser");
//const uuidv1 = require('uuid/v1');
const request=require("request");
var deasync = require('deasync');
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
const path=require("path");

  app.post('/webhook',(req,res) =>{
    //var city="delhi";
    
  	var query= req.body.result &&
      req.body.result.parameters &&
      req.body.result.parameters.q
        ? req.body.result.parameters.q
        : 'chatbot';
  //	if(city == null)
  //		city="Delhi";
        var w=getJoke(query);
        return res.json({
          speech: w,
          displayText: w,
          source: "quotee"
        }); 
  });

var result;
function getJoke(query)
{
	result=undefined;
	const request = require('request');

//let apiKey = '392e5b9bd00f4c5c35a0533f7abbac5d';
//let city = 'portland';
let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ query +"&format=json";
request(url, function (err, response, body) {
  if(err){
    var error = 'cannot connect to the server';
    console.log(error);
  } else {
    var wiki = JSON.parse(body);
    for (var i = 0; i < 1; i++) {
       var data = `You searched for ${wiki[1][i]}: And these are the  details — ${wiki[2][i]} Follow this link to read more — ${wiki[3][i]}` + '\n';
        console.log(data);
    }
    result=data;
  }

});
	while(result == undefined){
		require('deasync').runLoopOnce();
	}
		
	return result;
}
  

app.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});