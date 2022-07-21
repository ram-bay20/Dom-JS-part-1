// EXAMINE DOCUMENT OBJECT //

//console.dir(document);
//console.dir(document.domain);
//console.dir(document.URL);
//console.dir(document.title);
//document.title = 123;
//console.dir(document.doctype);
//console.dir(document.head);
//console.dir(document.body);
//console.dir(document.all);
//console.dir(document.all[10]);
//document.all[10].textContent = 'ramnath'
//console.dir(document.forms);
//console.dir(document.links);
//console.dir(document.images);

// GET ELEMENT BY ID //

//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header')
//console.log(headerTitle);
//headerTitle.textContent = 'Ramnath Mandal';
//headerTitle.innerText ='Good bye';
//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h5>hello</h5>';
//header.style.borderBottom = '3px solid brown';

// GET ELEMENT BY CLASS NAME //

//var item = document.getElementsByClassName('list-group-item');
//console.log(item);
//console.log(item[2]);
//item[1].innerText = 'hahahahaha';
//console.log(item[1].innerText);
//item[3].textContent = 'ohohohohoh';
//console.log(item[3].textContent);
//item[2].style.background = '#00cf00';

// Gives error
//item.style.background = '#3cffc9';

//for(var i=0;i<item.length;i++)
//{
//     item[i].style.background = '#3cfff1';
//     item[i].style.borderBottom = '1px solid #fa0';
//}

// GET ELEMENT BY TAG NAME //

//var list = document.getElementsByTagName('li');
//console.log(list);
//console.log(list[2]);
//list[1].innerText = 'hahahahaha';
//console.log(list[1].innerText);
//list[3].textContent = 'ohohohohoh';
//console.log(list[3].textContent);
//list[2].style.background = '#00cf00';

// Gives error
//item.style.background = '#3cffc9';

//for(var i=0;i<list.length;i++)
//{
//     list[i].style.background = '#dcfcfc';
//     list[i].style.borderBottom = '1px solid #1b8c01';
//}

// QUERY SELECTOR //

var text = document.querySelector('input');
text.style.background = '#cfc';
//text.value = 'Ramnath Mandal';

//var button = document.querySelector('input[type="submit"]');
//button.style.backgroundColor = '#0c0';
//button.style.border = '0';
//button.value = 'ADD ITEM';

// QUERY SELECTOR ALL //

//var odd = document.querySelectorAll('li:nth-child(odd)');
//var even = document.querySelectorAll('li:nth-child(even)');

//for(var k=0;k<odd.length;k++)
//{
//     odd[k].style.background = '#faa5a2';
//     odd[k].style.color = '#0d0';
//     even[k].style.backgroundColor = '#b9fabb';
//     even[k].style.color = '#f00';
//}


                    //        PART-2         //

// TRAVERSING  THE DOM //

//var itemList = document.querySelector('ul');

//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.background = '#9f8349';
//console.log(itemList.parentNode.parentNode.parentNode);
//itemList.parentNode.parentNode.parentNode.style.background = 'cyan';

//parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.background = '#9f8349';
//console.log(itemList.parentElement.parentElement.parentElement);
//itemList.parentElement.parentElement.parentElement.style.background = 'aqua';
//console.log(itemList.parentElement.parentElement);
//itemList.parentElement.parentElement.style.background = 'coral';
//itemList.parentElement.parentElement.style.padding = '20px';

//childNode
//console.log(itemList.childNodes);

//children
//console.log(itemList.children);
//console.log(itemList.children[2]);
//itemList.children[2].style.background = '#129303';
//itemList.children[3].style.fontStyle = 'italic';

//firstChild
//console.log(itemList.firstChild);

//firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.style.fontFamily = 'cursive';
//itemList.firstElementChild.style.color = '#ffdd00';

//lastChild
//console.log(itemList.lastChild);

//lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.style.fontFamily = 'cursive';
//itemList.lastElementChild.style.color = '#fadecb';

//previousSibling
//console.log(itemList.previousSibling);

//previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.fontFamily = 'times';
//itemList.previousElementSibling.style.color = 'brown';

//nextSibling
//console.log(itemList.nextSibling);

//nextElementSibling
//console.log(itemList.nextElementSibling);
//itemList.nextElementSibling.style.fontFamily = 'times';
//itemList.nextElementSibling.style.color = 'brown';

//  create element  //

//create div
//var newDiv = document.createElement('div');

//create ClassName
//newDiv.className = 'haed';
//console.log(newDiv.className);

//create Id
//newDiv.id = 'first';
//console.log(newDiv.id);

//create Attribute
//newDiv.setAttribute('title' , 'first attr');

//create textnode
//var newText = document.createTextNode('Please add items');

//add text to div
//newDiv.appendChild(newText);

//var container = document.querySelector('header .container');
//var head1 = document.querySelector('header h1');

//console.log(newDiv);

//newDiv.style.fontSize = '25px';

//container.insertBefore(newDiv , head1);

// EVENTS 
//var button = document.getElementById('button').addEventListener('click' , clickable);

//function clickable(e){
//     console.log('you clicked');
//     document.getElementById('header-title').textContent = 'Ramnath';
//     document.querySelector('body').style.background = '#ddd';
//console.log(e.target);
//console.log(e.target.id);
//console.log(e.target.className);
//console.log(e.target.classList);
//var output = document.getElementById('output');
//output.innerHTML = '<h3>'+e.target.id+'</h3>';
//document.getElementById('output').innerHTML = '<h3>'+e.target.id+'</h3>';

//console.log(e.type);

//console.log(e.clientX);
//console.log(e.clientY);
//console.log(e.offsetX);
//console.log(e.offsetY);
//console.log(e.altKey);
//console.log(e.ctrlKey);
//console.log(e.shiftKey);

//}

//  MOUSE EVENTS

//var button = document.getElementById('button');
//var box = document.getElementById('box');
//button.addEventListener('click' , runEvent);
//button.addEventListener('dblclick' , runEvent);
//button.addEventListener('mouseup' , runEvent);
//button.addEventListener('mousedown' , runEvent);
//box.addEventListener('mouseenter' , runEvent);
//box.addEventListener('mouseleave' , runEvent);
//box.addEventListener('mouseover' , runEvent);
//box.addEventListener('mouseout' , runEvent);

//box.addEventListener('mousemove' , runEvent);

//  KEYBOARD EVENTS

var form = document.querySelector('form');

//text.addEventListener('keydown' , runEvent );
//text.addEventListener('keyup' , runEvent );
//text.addEventListener('keypress' , runEvent );

//text.addEventListener('focus' , runEvent );
//text.addEventListener('blur' , runEvent );

//text.addEventListener('cut' , runEvent );
//text.addEventListener('paste' , runEvent );

//text.addEventListener('input' , runEvent );


function runEvent(e){
     console.log('EVENT TYPE :' +e.type);

//console.log(e.target.value);
//document.getElementById('output').innerHTML = '<h3>' +e.target.value+ '</h3>';

     //output.innerHTML = '<h3>MouseX: ' +e.offsetX+ '</h3><h3>MouseY: '+e.offsetY+ '</h3>';

     //box.style.background = "rgb("+e.offsetX+" , "+e.offsetY+" , 40)";

     document.body.style.background = "rgb("+e.offsetX+" , "+e.offsetY+" , 40)";
}