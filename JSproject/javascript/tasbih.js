let counter = document.querySelector('.counter');
const addCount = document.querySelector('#uppercount-btn');
const lowerCount = document.querySelector('#lowercount-btn');

let count = 0;
addCount.addEventListener('click', countInc);
lowerCount.addEventListener('click', reset);

function countInc(){
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML > '0'){
        counter.style.color = '#68ff54';
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = '#ffffff'
    }
    counter.animate([{opacity: 0.2},{opacity: 1.0}],{duration:1000,fill:'forwards'});
    if(count%10 === 0){
        document.querySelector('h1').innerHTML = 'Subhan Allah';
    }
    else{
        document.querySelector('h1').innerHTML = 'Allahu Akbar';
    }
}

function reset(){
    count = 0;
    counter.innerHTML = '0';
    counter.style.color = 'white';

}