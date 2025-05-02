
var go = document.getElementsByTagName('header');
go[0].style.backgroundColor = 'yellow';

var come = document.getElementById('navi');
come.style.backgroundColor = 'black';
come.style.alignItems = 'center';

var went = document.getElementById
('maini');
went.style.backgroundColor = 'green';
var koi = document.getElementById('koi');
koi.innerText = 'Come baby come.';

var til = document.getElementsByTagName
('a')
til[1].style.textDecoration = 'none'

var lit = document.getElementsByTagName('li');
lit[1].style.backgroundColor = 'red';

//var sis = document.querySelector('h1');
//sis.style.color = 'red';
//const items = document.querySelectorAll('li');
//for(i = 0; i<items.length; i++){
   // items[i].style.color  = 'red'
//}
//const ul = document.querySelector('ul');
//const li = document.createElement('li');
//ul.append(li)

//li.innerText = 'xmastree';
//li.classList.add('list-items');

//element.addEventListener("click",function);
//const buttonto = document.querySelector('.btn');

//function alertBtn() {
    //alert('I also like eating pizza');
    //buttonto.style.backgroundColor = 'blue'
//}
//buttonto.addEventListener('click',alertBtn);
//buttonto.addEventListener("mouseover",alertBtn);

const revealBtn = document.querySelector('.reveal-btn');

const hidddenContent = document.querySelector('.hidden-content');
function revealContent() {
    if(hidddenContent.classList.contains('reveal-btn')){
        hidddenContent.classList.remove('reveal-btn')
    }else {
        hidddenContent.classList.add('reveal-btn')
    }
}
revealBtn.addEventListener('click',revealContent);


