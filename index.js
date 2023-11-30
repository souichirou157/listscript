'use strict'

const button = document.getElementById('add');
const text = document.getElementById('param');
const del = document.getElementById('del');
 
const ul = document.createElement('ul');
ul.classList.add('ul');
let i=0;
const list=[];  
document.querySelector('body').appendChild(ul);

    button.addEventListener('click',()=>{
        text.textContent = text.value;
        console.log(text);
       
        const li = document.createElement('li');
        li.textContent = text.value;
        list.push(li);
        document.querySelector('.ul').appendChild(list[i]);
        i++;
    });



    
del.addEventListener('click',()=>{
    list.pop(list[i]).remove();
    i--;

});

