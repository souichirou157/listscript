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
const checkboxlist=[];
rem_error.id = 'ul.length_zeros';
error.appendChild(rem_error);
ul.classList.add('ul');
document.querySelector('body').appendChild(ul);
let i=0;

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
};


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
};


//要素指定削除機能考える

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
};

let increment ={
     
    res_num :1,
    addList: ()=>{
        const li = document.createElement('li');
        const textarea = `${increment.res_num}) :`+text.value;
        increment.res_num++;
        li.textContent =  textarea;
        li.style.color = 'red';
        li.style.listStyle = 'none';
        list.push(li);
        ul.id = 'list';
        document.querySelector('ul').appendChild(list[i]);
        document.querySelector('.time').appendChild(ul);
        i++;
    }
};


let Remove = {
    
    only: function (array){
        for(let i=0 ; i < 2;i++){
            array.removeChild(array.firstChild);
        }
        if(!ul.firstChild){
         rem_error.textContent ='現在データはありません';
        
             
        }        
    }
    ,
    all: function (array){
        while(array.firstChild){ // list exit first child
            array.removeChild(array.firstChild); //delete
        }
        rem_error.textContent ='現在データはありません';  
    },

};



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
        increment.addList(); 
        console.log(ul.children);
    }
};



//-----------------------------------------------------------------------


{

    //disabled false  send text button
text.addEventListener('keyup',()=>{
       button.disabled = false;
});


//空白文字エラーはアラート出るので削除ボタンの非活性が解除されるのでまた直す
// add text in list
button.addEventListener('click',()=>{
    objectsJounal();
    text.value = '';
    button.disabled =true; //テキスト空なら登録ボタン押せない
    rem_error.textContent ='';
    del.disabled=false;
    console.log(del.disabled);
});
  

//レス番号リセットはオールデリートだけ
    //--delete action

    if(!ul.firstChild) del.disabled=true;
  
    del.addEventListener('click',()=>{
 
        // ---all delete
        if(checkbox.checked === true) {
            
            if(!window.confirm('データはすべて消去されます')){
                window.alert('キャンセルしました');
            }else{
                Remove.all(ul);
                increment.res_num=1;
                del.disabled = true;
                console.log(del.disabled);
                checkbox.checked= false;

            }            
        
        } 
        
        if(!ul.firstChild){
            del.disabled = true;
            console.log(del.disabled);
        }

        //default  //1つずつ削除はインデックスリセットはしていない
        if(checkbox.checked === false){
            Remove.only(ul);
            console.log(ul.children);
            console.log(del.disabled);
            if(!ul.firstChild){
                del.disabled = true;
                console.log(del.disabled);
            }
        
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
   
    !ul.firstChild?link.disabled=false:document.write('<div id ="commit">データが保存されました</div>');
     
});//まだうまくいってない




}
   



