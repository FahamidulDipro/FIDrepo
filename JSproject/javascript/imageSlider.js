const images = document.querySelector('.images');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

prevBtn.addEventListener('click', previousImage);
nextBtn.addEventListener('click', nextImage);

let counter = 0;

function previousImage() {
    images.animate([{opacity:'0.1'},{opacity:'1'}],{duration:1000, fill:'forwards'});
    if(counter === 0 ){
        counter = 6;
    }
    counter--;
    images.style.backgroundImage = `url('../images/img-${counter}.jpg')`;
    
}

function nextImage() {
    images.animate([{opacity:'0.1'},{opacity:'1'}],{duration:1000, fill:'forwards'});
    if(counter === 5){
        counter = -1;
    }
    counter++;
    images.style.backgroundImage = `url('../images/img-${counter}.jpg')`;
    
}