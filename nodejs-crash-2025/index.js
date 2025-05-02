
//const generateRandomNumber = require('./utils');

//console.log(`Random Number: ${generateRandomNumber()}`);

//var http = require('http');
//var dt = require('./utils');

//http.createServer(function//(req, res) {
    //res.writeHead(200, {'Content-Type': 'text/html'});
   // res.write("The date and the time are currently:" + dt.myDateTime());
 //   res.end();
//}).listen(7300);

//var http = require ('http');
//http.createServer(function(req, res) {
  //  res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write('Hello EVangeline');
   // res.end();
//}).listen(8080);
//
//var fs = require('fs');
//fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
   // if(err) throw err;
   // console.log('Saved!')
//});

//const myNumbers = [4,1,-20,-7,5,9,-6];
//const postNumbers = removeNeg(myNumbers, (x) => x >= 0);

//document.getElementById("demo").innerHTML = postNumbers;

//function removeNeg(numbers, callback) {
  //  const myArray = [];
   // for (const x of numbers) {
       // if (callback(x)) {
           // myArray.push(x);
       // }
   // }
   // return myArray;j
//}
//setTimeout(myFunction, 2000);

//function myFunction() {
 // console.log('Evangeline was a dream');
//}
import {getPosts} from "./postcontroller.js";
console.log(getPosts());