
//function generateRandomNumber() {
  //  return Math.floor(Math.random() * 100) + 1;
//}

//module.exports = generateRandomNumber;

// exports.myDateTime = function() {
//  return Date();

 // const cars = ['Pois Cayene', 'Isuzu', 'Mazda', 'Demio'];
//  let type = typeof cars
 // console.log(cars instanceof Array);


//console.log( Math.floor(Math.random() * 50));
///////////////////////////////////////////
 //const express = require('express');
// const mongoose = require('mongooose');
// const cors = requre('cors');

 //const app = express();
 //const port = 3000;
 //app.use(cors());

 //mongoose.connect('mongodb+srv:Leonard-21:192uuWLZX%40@cluster0.ospdgob.mongodb.net/')
 //const dBName = 'Leo_Davinci';
// const collectionName = 'users';


//import express from "express";
//  import cors from "cors";

  // const app = express();
 // app.use(cors());

// app.listen(5000, () => console.log("app is running on port 5000"));

//class car  {
 // constructor(name,model){
   // this.name = name;
   // this.model = model;
 // }
//}

//const car1 = new car('Toyota','Coyos');
//const car2 = new car('Yoges','Pois');
//console.log(car1,car2);

//const person = {
 // firstName: "John",
 // lastName: "Oluoch",
 // age: 21
//};
//let {lastName: name} = person;
//console.log(person.firstName, person.lastName, person.a

 
//const { response } = require('express');
//const {createServer, request} = require('http');
//const server = createServer((request, response) => {response.writeHead(200, {'Content-Type': 'text/html'});
//response.write('<h1>How are you webber </h1>');
//return response.end();
//});

//server.listen(3000);

const http = require('http');
http.createServer(function(req,res) {
res.writeHead(200,{"Content-type" : "text/html"});
res.write("<h1>Hello my neighbours</h1>")
res.end();
}).listen(3500);
