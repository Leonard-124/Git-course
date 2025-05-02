
//function myDisplayer(some) {
//document.getElementById("demo").innerHTML = some;
//}

//function myCalculator(num1, num2, myCallback) {
   // let sum = num1 + num2;
   // myCallback(sum);
//}
//myCalculator(5,7, myDisplayer);

//setInterval(myFunction, 1000);

//function myFunction() {
  //  let b = new Date();
  //  document.getElementById("demo").innerHTML = 
   // b.getHours() + ":" +
  //  b.getMinutes() + ":" +
   // b.getSeconds();
//}

//function myDisplayer(some) {
    //document.getElementById("demo").innerHTML = some;
//}
//let myPromise = new Promise(function(myResolve, myReject){
   // let x = 2;
   // if(x==1) {
    //    myResolve("OK");
   // }else {
    //    myReject("Error");
  //  }
//});

//myPromise.then(
 //   function(value) {myDisplayer(value);},
   // function(error) {myDisplayer(error);}
//);

//async function myFunction() {
  //  return "Hello CEO Leo";
//}

//myFunction().then(
   // function(value) {myDisplayer(value);},
   // function(error) {myDisplayer(error);}
//);
 // const posts = [
//  {title: 'Post one', body: 'This is post one'},
 // {title: 'Post two', body: 'This is post two'}
  //];

 // function getPosts() {
 // setTimeout(() => {
  //    let output = '';
  //    posts.forEach((post,index) => {
  //        output += `<li>${post.title}</li>`;
  //    });
 //     document.body.innerHTML = output;
 // },1000);
 // }
 // function createPost(post) {
 // return new Promise((resolve, reject) => {
  //    setTimeout(() => {
  //        posts.push(post);
    //      const error = true;
    //      if(!error) {
   //          reject();
   //       }else {
   //           reject('Error: Something went wrong');
   //       }
  //    },3000);
 // });
 // }


 // createPost({title:'Post Three', body: 'This is post three'}).then(getPosts)
  //        .catch(err => console.log(err))

 //var http = require('http');
//var url = require('url');

//http.createServer(function (req, res) {
 // res.writeHead(200, {'Content-Type': 'text/html'});
 // var q = url.parse(req.url, true).query;
 // var txt = q.year + " " + q.month;
//  res.end(txt);
//}).listen(8080);
///////////////////////////////////////
//const myElement = DocumentFragment.getElementById("come");

//function getLocation() {
 // if (navigator.geolocation) {
  //  navigator.geolocation.getCurrentPosition(showPosition);
  //}else {
//    myElement.innerHTML = "Geolocation is not supported by this browser.";
//  }
//}
//function showPosition(position) {
//  myElement.innerHTML = "Latitude: " + position.coords.latitude + 
//  "<br>Longitude: " + position.coords.longitude;
//}

const x = document.getElementById("come");

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch (error) {
    x.innerHTML = error;
  }
}
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}