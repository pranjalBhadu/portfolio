const menu = document.querySelector('.menu-mob');
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', function(){
    if(menu.style.display == ''){
        menu.style.display = 'flex';
    }
    else if(menu.style.display == 'flex'){
        menu.style.display = '';
    }
})