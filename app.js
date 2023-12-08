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
const space = ' ';


//-------------methodes-----------------//
function count(){
    setTimeout(clock(),1000);
 
}
function check(button){
    button.disabled = false;

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
   //テキストクリアボタン入力後アラ-トが出なくなる
   //一括削除キャンセルがまだ聞いてない   
button.addEventListener('click',()=>{

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
    if(charArray.length < spaceArray.length || charArray.length === 0){
        button.disabled = true;
        window.alert('空白文字列が入力文字数を超えています');
       
    }else {
        count();        
        addList(); 
        console.log(ul.children);
    }

});
  

clear.addEventListener('click',()=>{
    text.value = '';
    button.disabled = true;
});


text.addEventListener('input',()=>{
    check(button);
});


    //delete 　空白で削除しようとしたときのメッセージまだ
      del.addEventListener('click',()=>{
        Delete();
        console.log(ul.children);
     
        if(checkbox.checked === true) {

            window.alert('logはすべて消去されます');      
                AllDelete();
    
        } 
        
    });



}
   



