const colorbtn = document.querySelector('.btn');
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('.hex');

const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
colorbtn.addEventListener('click', changeColor);

function changeColor() {
    let hexcol = '#';
    for(var i = 0; i < 6; i++) {
        let random = Math.floor(Math.random()*hexNumbers.length);
        hexcol = hexcol + hexNumbers[random];

    }
    bodyBcg.style.backgroundColor = hexcol;
    hex.innerHTML = hexcol;
  

}
  