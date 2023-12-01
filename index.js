'use strict'
const date = new Date();
let now = date.getFullYear();
const button = document.getElementById('add');
const text = document.getElementById('param');
const del = document.getElementById('del');
const ul = document.createElement('ul');
ul.classList.add('ul');
let i=0;
const list=[];
const checkList=[];
let j=0;

//スケジュールリストリスト
function ulMakeList(array){
    const li = document.createElement('li')
        li.textContent = text.value;
        li.style.listStyle = 'none';
        array.push(li);
        ul.style.border='solid bottom 1px yellow';
        document.querySelector('.ul').appendChild(array[i]);
        i++;

        return array;
}



//チェックボックス生成
function createCheckBox(array){

    const check = document.createElement('button');
    check.id = 'check';
    check.type = 'checkbox';
    check.style.width = '20px';
    check.style.width = '20px';
    array.push(check);
    document.querySelector('body').appendChild(array[j]);
    j++;

    return array;

}



function changeRow(array){
let i;
if(array.length < 5){

i=0;


}

return array[i];

}


//削除処理
function Delete(){
    
    checkList.pop(checkList[j]).remove();
    j--;
    list.pop(list[i]).remove();
    i--;

}




//チェックボックスの大きさ修正から、後改行処理。

{

    document.querySelector('body').appendChild(ul);

//スケジュールとチェックボックス追加
    button.addEventListener('click',()=>{
        ulMakeList(list); 
        createCheckBox(checkList);      
       


    });


    





    //削除実行    
      del.addEventListener('click',()=>{
        Delete();
      
    });



}
   



