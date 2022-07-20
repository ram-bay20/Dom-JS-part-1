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

var button = document.querySelector('input[type="submit"]');
button.style.background = '#0c0';
button.style.border = '0';
button.value = 'ADD ITEM';

// QUERY SELECTOR ALL //

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var k=0;k<odd.length;k++)
{
     odd[k].style.background = '#faa5a2';
     odd[k].style.color = '#0d0';
     even[k].style.backgroundColor = '#b9fabb';
     even[k].style.color = '#f00';
}


//        PART-2         //

// TRAVERSING  THE DOM //

//var itemList = document.querySelector('ul');

//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.background = '#9f8349';
//console.log(itemList.parentNode.parentNode.parentNode);
//itemList.parentNode.parentNode.parentNode.style.background = 'cyan';