'use strict'


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
function count(){
    setTimeout(clock(),1000);
}

function clock(){
    const now = new Date(); 
    let hh = now.getHours();// get gime
    let mm = now.getMinutes();
    let ss = now.getSeconds();
    hh = hh<10? "0"+hh:hh;
    mm = mm < 10? "0"+mm:mm;
    ss = ss < 10? "0"+ss:ss;
    const li = document.createElement('li');
    li.textContent = hh+':' + mm + ':' + ss;
    list.push(li);
    document.querySelector('ul').appendChild(list[i]);
    document.querySelector('.log').appendChild(ul);
    i++;
}




function addList(){
    const li = document.createElement('li');
    const textarea  =  text.value; 
        li.textContent =  textarea;
        li.style.color = 'red';
        li.style.listStyle = 'none';
        list.push(li);
        ul.id = 'list';
        document.querySelector('ul').appendChild(list[i]);
        document.querySelector('.log').appendChild(ul);
        i++;
}

function textclear(){
    text.value = '';
}

//古い奴からけしていく(（笑）)

function Delete(){
    ul.lastChild.remove();
    
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
        count();          //2回連続で押したときまだ考えてない
        text.value == ''?ul.firstChild.textContent = 'テキストデータが存在しないか取得できませんでした': addList(); 
        console.log(ul.children);
      
       
    });
   

  

   clear.addEventListener('click',()=>{
     textclear();
    });





    //delete 　空白で削除しようとしたときのメッセージまだ
      del.addEventListener('click',()=>{
        Delete();
     
        if(checkbox.checked === true) {

            window.alert('logはすべて消去されます');      
                AllDelete();
    
        } 
        
    });



}
   



