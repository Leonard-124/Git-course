
//console.dir(document);
//console.log(document.domain);
//console.log(document.title);
//document.title = 'Dummy';
//console.log(document.title);
//document.all[10].textContent = 'Hello';
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
//headerTitle.style.backgroundColor = 'grey'
//tagName = li
//var tor = document.getElementsByTagName('li');
//console.log(tor);
//tor[0].style.backgroundColor = 'blue'


//for (var i = 0; i < tor.length; i++){
//tor[i].style.backgroundColor = 'red'
//}

//var input = document.querySelector('input');
//input.value = 'Evangeline Oduor'
//var submit = document.querySelector('input[type = "submit"]');
//submit.value = 'SEND'

//var Item = document.querySelector('list-group-item');
//Item.style.color = 'white';
//var title = document.querySelectorAll('.title');
//console.log(title);
//title[0].textContent = 'Hello';

//var odd = document.querySelectorAll('li:nth-child(odd)');
//for(var i = 0; i < odd.length; i++)
//{odd[i].style.backgroundColor = '#f4f4f4';}
//var itemList = document.querySelector('#items');
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode)
//console.log(itemList.childNodes);
//console.log(itemList.nextSibling);
//var newDiv  = document.createElement('div');
//newDiv.className = 'hello';
//newDiv.id = 'Wonderful';
//Add attr
//newDiv.setAttribute('title','Hello Div');
//Create text node
//var newDivText = document.createTextNode('Hello World');
//Add text to div
//newDiv.appendChild(newDivText);
//var container = document.querySelector('header.container');
//var h1 = document.querySelector('header h1');

//console.log(newDiv);
//newDiv.style.fontSize = '30px';
//container.insertBefore(newDiv,h1);

//var button = document.getElementById('button').addEventListener('click',buttonClick);

//function buttonClick(e){
   // console.log('Button clicked');
    //document.getElementById('header-title').textContent = 'Changed';
   // document.querySelector('#main').style.backgroundColor = 'gold';
  // console.log(e.target);
   //console.log(e.target.className);
   //var output = document.getElementById('output');
   //output.innerHTML = '<h3>'+e.target.id+'</h3>';
//}
//console.log(e.clientX);
//console.log(e.clientY);
//console.log(e.offsetX);and Y
//console.log(e.altKey);
//console.log(e.ctrlKey);
//console.log(e.shiftKey);
//var button = document.getElementById('button');
//var box = document.getElementById('box');
//.addEventListener('click',runEvent);
//button.addEventListener('click',runEvent);
//button.addEventListener('dblclick',runEvent);
//box.addEventListener('mousemove',runEvent);
//button.addEventListener('mouseup',runEvent);
//box.addEventListener('mouseenter',runEvent);
//box.addEventListener('mouseleave',runEvent);also mouseover and mouse out.
//var itemInput = document.querySelector('input[type="text"]');
//var form = document.querySelector('form');
//form.addEventListener('submit',runEvent);
//function runEvent(e){
    //e.preventDefault();
//console.log('EVENT TYPE:'+e.type);
//console.log(e.target.value);

//document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
//}
//}
//var form = document.getElementById('addForm');
//var itemList = document.getElementById('items');
//Form submit event
//form.addEventListener('submit',addItem);
//add Item
//function addItem(e){
   // e.preventDefault();
//}

//function removeItem(e){
   // if(e.target.classList.contains('delete')){
      //  if(confirm('Are you sure?')){
        //    var li = e.target.parentElement;
         //   itemList.removeChild(li);
     //   }
   // }getElementByTagnama
//}var text = e.target.value.tolowerCase();

//var nav = document.getElementsByClassName('amp');
//nav[1].innerHTML = 'Then'

//for (i = 0; i<=3; i++){
 //  nav[i].style.color = 'purple'
//}
//function myFunction() {
   //const inpObj = document.getElementById('inp');
  // if (!inpObj.checkValidity()) {
    //  document.getElementById('demo').innerHTML = inpObj.validationMessage;
  // }else {
     // document.getElementById('demo').innerHTML = 'Input is OK and very good';
  // }
//}

//create a plotter
//const plotter = new XYPlotter("myCanvas");
//plotter.transformXY();
//const xMax = plotter.xMax;
//const yMax = plotter.yMax;
//const yMin = plotter.yMin;
//const xMin = plotter.xMin;
//Create Random XY Points
//const numPoints = 500;
//const xPoints = [];
//const yPoints = [];
//for (let i = 0; i< numPoints; i++){
  // xPoints[i] = Math.random() * xMax;
  // yPoints[i] = Math.random() * yMax;
//}
//Plot the points
//plotter.plotPoints(numPoints,xPoints,yPoints, "violet")
//const myNumbers = [4,1,-20,-7,5,9,-3];
//const posNumbers = removeNeg(myNumbers, (x) => x>= 0);

//document.getElementById('demo').innerHTML= posNumbers;

////function removeNeg(numbers, callback) {
//const myArray = [];
  // for (const x of numbers) {
  //    if (callback(x)) {
   //      myArray.push(x);
  //    }
//   }
 //  return myArray;
//}

//setTimeout(myFunction, 4000);
//function myFunction () {
   //document.getElementById("demo").innerText = "We will be there";
//}

//setInterval(kiy,4000);

//function kiy() {
 //  let b = new Date();
 //  document.getElementById("min").innerHTML = b.getHours() + ":" +
//   b.getMinutes() + ";" + b.getSeconds();
//}







