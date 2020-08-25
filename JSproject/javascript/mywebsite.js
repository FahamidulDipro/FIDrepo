const hamburger = document.querySelector('.fa-bars');
const list = document.querySelector('.list');


hamburger.addEventListener('click',function(){
   
    if(hamburger.classList.contains('fa-times')){
        hamburger.classList.remove('fa-times');
        hamburger.classList.add('fa-bars');
        list.style.display = 'none';
       
        
    
    }
    else{
        hamburger.classList.remove('fa-bars');
        hamburger.classList.add('fa-times');
        list.style.display = 'block';
      
       
    }
  
   
})
