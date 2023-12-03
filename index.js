'use strict'
const date = new Date();
let now = date.getFullYear();
const button = document.getElementById('add');
const text = document.getElementById('param');
const del = document.getElementById('del');
const ul = document.createElement('ul');
document.querySelector('body').appendChild(ul);
const checkbox = document.getElementById('checkbox');
ul.classList.add('ul');
const clear = document.getElementById('clear');
let i=0;
const list=[];



//-------------methodes-----------------//


function addList(){
    const li = document.createElement('li');
    const textarea  =  text.value; 
        li.textContent =  textarea;
        li.style.color = 'red';
        li.style.listStyle = 'none';
        list.push(li);
        ul.style.border='solid bottom 1px yellow';
        document.querySelector('ul').appendChild(list[i]);
        i++;
}




function Delete(){
    ul.firstChild.remove();
}

//リスト全削除
function AllDelete(){
    while(ul.firstChild){ // list exit first child
        ul.removeChild(ul.firstChild); //delete
    }    
}

//-----------------------------------------------------------------------


{

    
// add text in list
    button.addEventListener('click',()=>{
        addList(); 
        console.log(ul.children);
       
    });
   

  











    //delete 
      del.addEventListener('click',()=>{
        Delete();
     
        if(checkbox.checked === true) {
                  
                AllDelete();
    
        } 
        
    });



}
   



