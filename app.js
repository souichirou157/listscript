'use strict'
const button = document.getElementById('add');
const text = document.getElementById('param');
const del = document.getElementById('del');
const ul = document.createElement('ul');
const checkbox = document.getElementById('checkbox');
const rem_error =document.createElement('p');
const link =document.querySelector('#save');
const alldel =document.querySelector('#alldel');
const error = document.querySelector('#error');
const list=[];

rem_error.id = 'ul.length_zeros';
error.appendChild(rem_error);
ul.classList.add('ul');
document.querySelector('body').appendChild(ul);
let i=0;
let res_num =1;

////////////// cascard  style /////////////////////
 
alldel.textContent = '一括削除を有効にする';
button.textContent = '登録';
del.textContent = '削除';
link.textContent = 'データを保存する';
del.style.cursor = 'pointer';
link.style.cursor = 'pointer';
link.classList.add('save');
/*-------------------------style color ----------------------------------*/
button.style.background = 'var(--color)';
document.querySelector('.time').style.color = 'var(--time)';
document.querySelector('body').style.background= ' var(--body)'; // 
alldel.style.color = 'var(--del)';
del.style.color = 'var(--del)';
link.style.color = 'rgb(230,82,90)';
error.style.background = 'var(--text)';
link.style.background = 'var(--save)';
/*---------------------------------------------------------*/


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
    document.querySelector('.time').appendChild(ul);
    i++;
}


function addList(){
    const li = document.createElement('li');
    const textarea = `${res_num}) :`+text.value;
        res_num++;
        li.textContent =  textarea;
        li.style.color = 'red';
        li.style.listStyle = 'none';
        list.push(li);
        ul.id = 'list';
        document.querySelector('ul').appendChild(list[i]);
        document.querySelector('.time').appendChild(ul);
        i++;
}


//古い奴からけしていく(（笑）)

//ほかに良い方法思いつくまでとりあえずこれで
function Delete(){
    for(let i=0 ; i < 2;i++){
        ul.firstChild.remove(ul.firstChild);
    }
    if(!ul.firstChild){
     rem_error.textContent ='現在データはありません';  
         
    } 
}


//リスト全削除
function AllDelete(){
    while(ul.firstChild){ // list exit first child
        ul.removeChild(ul.firstChild); //delete
    }
    rem_error.textContent ='現在データはありません';  
         
}





function objectsJounal() {
    const charArray=[];
    const spaceArray=[];
    for(let i =0; i < text.value.length;i++){
        if(text.value[i] === ' '){
            spaceArray.push(text.value[i]);
        }else{
            charArray.push(text.value[i]);
        }
    }
    console.log(charArray.length);
    console.log(spaceArray.length);
    if(charArray.length <= spaceArray.length || charArray.length === 0){
        button.disabled = true;
        window.alert('空白文字数が不正です');
    }else {
        count();        
        addList(); 
        console.log(ul.children);
    }
}



//-----------------------------------------------------------------------


{

    //disabled false  send text button
text.addEventListener('keyup',()=>{
       button.disabled = false;
});


// add text in list
button.addEventListener('click',()=>{
    objectsJounal();
    text.value = '';
    button.disabled =true;
    rem_error.textContent ='';

});
  

//レス番号リセットはオールデリートだけ
    //--delete action
del.addEventListener('click',()=>{
 
        // ---all delete
        if(checkbox.checked === true) {
            
            if(!window.confirm('データはすべて消去されます')){
                window.alert('キャンセルしました');
            }else{
                AllDelete();
                res_num=1;        
            }            
        
        }
        
        //default  //1つずつ削除はインデックスリセットはしていない
        if(checkbox.checked === false){
            Delete();
            console.log(ul.children);
        }

    });




    
    




       
/*ここまだうまくいってない*/
function saveText(){
    //何とかしてtextcontentしたやつを持たせたい
    const fi= new Blob(ul.children.textContent,{type:"text/javascript"});
    link.href = URL.createObjectURL(fi);
    const logfile = fi.CreateTextFile("log.txt");    
    link.download = 'log.txt';

}


 


link.addEventListener('click',()=>{
    saveText();
});



}
   



