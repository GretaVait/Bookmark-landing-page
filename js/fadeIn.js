const intro = document.querySelector('#intro');
const downloadList = document.querySelector('#download__list');
const accordion = document.querySelector('#accordion--container');

window.addEventListener('load', ()=> {
    fadeIn(intro);
    
});

function fadeIn(section) {
    if (window.pageYOffset >= section.offsetTop - 350) {
        section.style.transform = 'translate(0px, 0px)';
        section.style.opacity = '1';
    }
}

window.addEventListener('scroll', ()=> {
    fadeIn(downloadList);
    fadeIn(accordion);
});