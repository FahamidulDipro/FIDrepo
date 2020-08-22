function showClock(){
    const clock = document.querySelector('#clock');
  
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    let formatHour = convertFormat(h);
    h = checkHour(h);
    h = addZero(h);
    m = addZero(m);
    s = addZero(s);
    clock.innerHTML = `${h} : ${m} : ${s}    ${formatHour}`;
    
   
}


function convertFormat(time){
    let format = 'AM';
    if(time >= 12){
        format = 'PM'
    }
    return format;
}
function checkHour(time){
    if (time > 12){
        time = time - 12;
    }
    if(time === 0){
        time = 12;
    }
    return time;
}
function addZero(time){
    if(time < 10){
        time = '0' + time;
    }
    return time;
}

let myTime = setInterval(showClock,1000);


const btnReset = document.querySelector('.btn-reset');
const btnStart = document.querySelector('.btn-start');

btnReset.addEventListener('click',function(){
    clearInterval(myTime);
    clock.innerHTML = '00 : 00 : 00 ';
})
btnStart.addEventListener('click',function(){
    myTime = setInterval(showClock,1000);
});

