const navWrapper = document.querySelector('.nav-wrapper');
const menuBtn = document.querySelector('.top-nav svg:nth-child(2)');
let isMenuOpen = false;

function openMenu(){
    if (!isMenuOpen){
        menuBtn.style.transform = 'rotate(90deg)';
        navWrapper.style.height = '390px';
        isMenuOpen = true;
    }
    else if (isMenuOpen){
        navWrapper.style.height = '60px';
        menuBtn.style.transform = 'rotate(45deg';
        isMenuOpen = false;
    }
}