const btnCall = document.querySelector('.btn_call');
const menuM = document.querySelector('.menu_m');

btnCall.addEventListener('click',(e)=>{
  e.preventDefault();
  
  let isOpen = menuM.classList.contains('open');

  if(isOpen){
    menuM.classList.remove('open');
    btnCall.classList.remove('active');
  }else{
    menuM.classList.add('open');
    btnCall.classList.add('active');
  }
})