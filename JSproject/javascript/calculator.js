const text = document.querySelector('.screen');
const btn = document.querySelectorAll('.btn');
const eqBtn = document.querySelector('.btn-green');
const clear = document.querySelector('.btn-red');

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click',function(){
        text.value += btn[i].getAttribute('data-num');
    });
}

eqBtn.addEventListener('click',function(){
    if(text.value === ''){
        alert('Input is Empty!');
    }
    else{
        let result = eval(text.value);
        text.value = result;
    }
   
})

clear.addEventListener('click', remove);
function remove(){
    text.value = '';
}
