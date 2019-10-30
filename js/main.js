//Show hidden answers of accordion
const arrow = document.querySelectorAll('.arrow');
const answer = document.querySelectorAll('.hide-answer');
const svgPath = document.querySelectorAll('.arrow path');

for (let i = 0; i < arrow.length; i++) {
arrow[i].addEventListener('click', () => {
    arrow[i].classList.toggle('accordion--open');
    if (arrow[i].classList.contains('accordion--open')) {
        svgPath[i].style.stroke = '#f38169';
        arrow[i].style.transform = 'rotate(180deg)';
    } else {
        svgPath[i].style.stroke = '#90c3bc';
        arrow[i].style.transform = 'rotate(0deg)';
    }
    if (answer[i].style.maxHeight) {
        answer[i].style.maxHeight = null;
        answer[i].style.margin = '0';
    } else {
        answer[i].style.maxHeight = answer[i].scrollHeight + "px";
        answer[i].style.margin = '15px 0 30px 0';
    } 
});
}

// Working hamburger menu for mobile
const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#close');
const navList = document.querySelector('#nav__list--container');

hamburger.addEventListener('click', ()=> {
    navList.style.transform = 'translate(0, 0)';
});

close.addEventListener('click', ()=> {
    navList.style.transform = 'translate(100%, 0)';
}); 
