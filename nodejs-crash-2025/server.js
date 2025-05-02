
//import http from 'http';
//const PORT = process.env.PORT;
//const server = http.createServer((req,res) => {
//res.writeHead(200, {'Content-Type': 'text/html'});
//res.end('<h1>Homepager</h1>');
//});
//server.listen(PORT,() => {
   // console.log(`Server is running on port ${PORT}`);
//});  
///////////////////////////////////////////////////here

//const fs = require('fs').promises;
//const path = require('path');
////////////////////////////////////////////////here
 // const PORT = process.env.PORT; // 3000
//////////////////////////////////////
//const hostname = '127.0.0.1';
//const port = 3000;
///////////////////////////////////

//const server = http.createServer(async (req, res) => {
 //   let filePath = '.' + req.url;
//if (filePath === './') {
   //     filePath = './diy.html';//serve index.html by default
 //   }
  //  const extname = path.extname(filePath);
  //  let contentType = 'text/html';
  //  switch(extname) {
    //    case '.js':
     //       contentType = 'text/javascript';
      //      break;
   //     case '.css':
 //           contentType = 'text/css';
//            break;//add other file types (images, etc.)
     // case 'diy.html':
          //contentType = 'text/html';
         // break;
 //   }
 //   try {
//        const data = await
 //       fs.readFile(path.join(__dirname,'public', filePath)); // Assuming your frontend files are in a 'public' folder
    //    res.writeHead(200, {'Content-Type': contentType});
     //   res.end(data);
 //   } catch (err) {
   //     if (err.code === 'ENOENT') {
//            res.writeHead(404, { 'Content-Type': 'text/html' });
  //          res.end('<h1>404 Nott Found</h1>');
//        } else {
  //          res.writeHead(500, { 'Content-Type': 'text/plain' });                                                                                                                                     
      //      res.end('Server Error');
//        }
 //   }
//});
//server.listen(port, hostname, () => {
  //  console.log( `Server is running at http://${hostname}:${port}/`);
//});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//setTimeout(function() {myFunction("I love You!!!");},3000)
//function myFunction(){
//  console.log(myFunction)
//}

//myFunction();
///////////////////////////////////////
//async function myFunction() {
//  console.log('I am so fine')
//}

//myFunction().then(
//  function(value) {myFunction(value);},
 // function(error) {myFunction(error);}
//)
//////////////////////////////////////////////=
//var http = require('http');
//var url = require('url');

//http.createServer(function (req, res) {
 // res.writeHead(200,{"Content-type" : "text/html"});
 // var q = url.parse(req.url, true).query;
 // var txt = q.year + " " +  q.month;//we have to write date and mnth on the browser.
  //res.write("<h2>I wonder why people love it</h2>");
 // res.end(txt);
//}).listen(6778);
//////////////////////////////////////////////=

//var http = require('http');
//var fs = require('fs');
//http.createServer(function(req, res){
//  fs.readFile('public/diy.html',function(err, //data){
   // res.writeHead(200, {'Content-Type':'text/html'})
 //   res.write(data);
 //   return res.end();
 // });
//}).listen(7800);
///////////////////////////////////////////+

var http  = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  fs.readFile("public/diy.html",function(err,data){  res.writeHead(200,{"Content-Type" : "text/html"})
  res.write(data);
  return res.end();
});
}).listen(3500);
///////////////////////////////////////////////
//var fs = require('fs')
//fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {//Create a new file using the appendFile()method
//  if (err) throw err;
//  console.log('saved');
//});
///////////////////////////////////////////////
//var fs = require('fs');

//fs.open('mynewfile2.txt', ' w',function (err, file){//Create a new, empty file using the open()method
 // if (err) throw err;
 // console.log('Saved succesfully');
//});
//////////////////////////////////////////////

//var fs = require ('fs');
//fs.writeFile('mynewfile3.txt', 'Hello content!', function(err) {//Create a new file using writeFile() method
 // if (err) throw err;
// console.log('Saved successfully');
//});
///////////////////////////////////////////////
//var fs = require('fs');
//fs.appendFile('mynewfile1.txt', 'This is my text.', function (err) {//fs.appendFile() method appends the specified content at the end of the specified file:
//  if (err) throw err;
//  console.log('Updated!');
//});
//////////////////////////////////////////////
//var fs = require('fs');
//fs.writeFile('mynewfile3.txt', 'This is my text', function (err){//Replaces specified files
//  if (err) throw err;
 // console.log("Reppaced successfully")
//})
//Rename files
//Upload files
/////////////////////////////////////////
//var http = require('http');
//var url = require('url');
//var fs = require('fs');

//http.createServer(function(req,res) {
 // var q = url.parse(req.url, true);
 // var filename = "." + q.pathname;
 // fs.readFile("diy1.html", function(err, data){
 //   if(err) {
 //     res.writeHead(404, {'Content-Type' : 'text/html'});
 //     return res.end("404 Not Found");
  //  }
  //  res.writeHead(200, {'Content-Type' : 'text/html'})// throws a 404 if file does not exist
//    res.write(data);
//    return res.end();
//  });
//}).listen(7000)
//////////////////////////////////////////

//var http = require('http');
//var uc = require('uppercase');

//http.createServer(function(req,res) {
 // res.writeHead(200,{'Content-Type' : 'text/html'});
//  res.write(('Hello am leonard'))
 // res.end();
//}).listen(3002);
///////////////////////////////////////////
//var fs = require('fs');

//var readStream = fs.createReadStream('./demofile.txt');
//readStream.on('open',function () {
//  console.log('The file is open');
//});
////////////////////////////////////////////
//var events = require('events');
//var eventEmitter = new events.eventEmitter();

//var myEventHandler = function () {
//  console.log('I hear a scream!!');
//}
//eventEmitter.on('scream', myEventHandler);

//console.log(eventEmitter.emit('scream'));
////////////////////////////////////////////'

var http = require('http');//create un upload form

http.createServer(function(req,res) {
  res.writeHead(200,{'Content-Type' : 'text/html'});
  res.write('<form action= "fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  return res.end();
}).listen(3004);
///////////////////////////////////////////

var http = require('http');//Parse the uploaded file
var formidable = require('formidable');
http.createServer(function(req,res){
  if(req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files){res.write('File uploaded well bana');
      res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="fileupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(3005);
/////////////////////////////////////

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function(req,res) {
  if (req.url == './fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath =  files.filetoupload.filepath;
      var newpath = 'C:/Users/pc/' + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function(err) {if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    });
  } else {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<form action="filetoupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(3006);






