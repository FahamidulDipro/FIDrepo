const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');
const sendBtn = document.querySelector('#sendBtn');


sendBtn.addEventListener('click', sendMsg);

function sendMsg(){
    let message = messageIn.value;
    messageOut.innerHTML = message;
    messageIn.value = '';
    if(message === ''){
        alert("Please type something");
    }

}