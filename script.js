const middleNav = document.querySelector('.middle-nav');
const topNav = document.querySelector('.top-nav');
const menuBtn = document.querySelector('.top-nav svg:nth-child(2)');
let isMenuOpen = false;

function openMenu(){
    if (isMenuOpen === false){
        topNav.style.borderRadius = '20px 20px 0px 0px';
        menuBtn.style.transform = 'rotate(90deg)';
        middleNav.style.height = '350px';
        middleNav.style.padding = '20px 30px';
        middleNav.style.border = '1px solid var(--border-color)'
        isMenuOpen = true;
        console.log(isMenuOpen);
    }
    else if (isMenuOpen === true){
        middleNav.style.height = '0';
        middleNav.style.padding = '0';
        middleNav.style.border = 'none';
        menuBtn.style.transform = 'rotate(45deg';
        topNav.style.borderRadius = '20px 20px 20px 20px';
        isMenuOpen = false;
        console.log(isMenuOpen);
    }
}