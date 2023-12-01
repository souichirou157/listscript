'use strict'
const date = new Date();
let now = date.getFullYear();
const button = document.getElementById('add');
const text = document.getElementById('param');
const del = document.getElementById('del');
const ul = document.createElement('ul');
const checkbox = document.getElementById('checkbox');
ul.classList.add('ul');
let i=0;
const list=[];

//スケジュールリストリスト
function addList(array){
    const li = document.createElement('li');
        li.textContent = text.value; //テキスト入力した予定がリストに入る
        li.style.listStyle = 'none';
        array.push(li);
        ul.style.border='solid bottom 1px yellow';
        document.querySelector('ul').appendChild(array[i]);
        i++;

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
function Delete(array){
    

    array.pop(array[i]).remove();
    i--;

}



//チェックボックスの大きさ修正から、後改行処理。

{

    document.querySelector('body').appendChild(ul);

//スケジュールとチェックボックス追加
    button.addEventListener('click',()=>{
        addList(list); 

    });


   checkbox.addEventListener('input',()=>{
         del.addEventListener('click',()=>{
            for(let j=0; j <=list.length ;j++){
                console.log(list.length);
                Delete(list);
                //予定の数が微妙にずれるからあとで修正
            }
         });
   }); 





    //削除実行    
      del.addEventListener('click',()=>{
        Delete(list);
      
    });



}
   



