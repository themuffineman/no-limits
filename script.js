const middleNav = document.querySelector('.middle-nav');
const middleNavContent = document.querySelector('p,a');
const topNav = document.querySelector('.top-nav');
const menuBtn = document.querySelector('.top-nav svg:nth-child(2)');
let isMenuOpen = false;

function openMenu(){
    if (isMenuOpen === false){
        middleNavContent.style.opacity = '1';
        topNav.style.borderRadius = '20px 20px 0px 0px';
        menuBtn.style.transform = 'rotate(90deg)';
        middleNav.style.transform = 'scaleY(1)';
        isMenuOpen = true;
        console.log(isMenuOpen);
    }
    else if (isMenuOpen === true){
        middleNavContent.style.opacity = '0';
        middleNav.style.transform = 'scaleY(0)';
        topNav.style.borderRadius = '20px 20px 20px 20px';
        menuBtn.style.transform = 'rotate(45deg';
        isMenuOpen = false;
        console.log(isMenuOpen);
    }
}