const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children); //grouping <li> together and shoes all <li> elements
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);
const slideSize = slides[0].getBoundingClientRect();
const slideWith = slideSize.width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWith * index + 'px';
};

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};


//looks at all of the slides, index is number how much slides is (0,1,2);
slides.forEach(setSlidePosition);

// when I click the nav index, move that slide
dotsNav.addEventListener('click', e => {
    //which index dot was clicked on
    const targetDot = e.target.closest('button');

    //if targetDot is not a button stop the function
    if (!targetDot) {
        return;
    }

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    //dots moving
    updateDots(currentDot, targetDot);
});

for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }