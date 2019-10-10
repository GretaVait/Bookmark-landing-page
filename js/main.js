// Navigation for mobile
const nav = document.querySelector('.main-nav');
const logo = document.querySelector('.logo');
const navLogo = document.querySelector('.nav-logo');
const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header');
const close = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    nav.classList.add('show');
    logo.classList.add('fade-out');
    navLogo.classList.add('show');
    close.classList.add('show');
    hamburger.classList.add('fade-out');
    nav.classList.add('fade-in');
    nav.style.top = '0%';
});

close.addEventListener('click', () => {
    nav.classList.remove('show');
    logo.classList.remove('fade-out');
    navLogo.classList.remove('show');
    close.classList.remove('show');
    hamburger.classList.remove('fade-out');
    nav.classList.remove('fade-in');
    nav.style.top = '-130%';
});

// Features functions
const featuresContainer = document.querySelector('.features');
const features = document.querySelectorAll('.features--container span');
let img = document.querySelector('.features img');
let h3 = document.querySelector('.features h3');
let p = document.querySelector('.features p');

class Features { //Features class
    constructor (imageSrc, imageAlt, heading, paragraph) {
        this.imageSrc = imageSrc;
        this.imageAlt = imageAlt;
        this.heading = heading;
        this.paragraph = paragraph;
    }
}

const featuresList = [ //Features array
    new Features('images/illustration-features-tab-1.svg', 'Features illustration simple bookmarking', 'Bookmark in one click', 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'),
    new Features('images/illustration-features-tab-2.svg', 'Features illustration speedy searching', 'Intelligent search', 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'),
    new Features('images/illustration-features-tab-3.svg', 'Features illustration easy sharing', 'Share your bookmarks', 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.')
];

featuresContent(0); //Show when page loads only the first feature

for (let i = 0; i < features.length; i++) {
    features[i].addEventListener('click', () => {
        features[i].classList.add('red-outline'); //when clicked apply red outline on the feature buttons
        for (let j = 0; j < features.length; j++) {
            if (i !== j) {
                features[j].classList.remove('red-outline'); //only apply red outline on selected feature
            }
        }
        featuresContainer.classList.add('fade-out'); //adds a transition of opacity
        setTimeout(function() { //after 0.2s removes the class fade-out
            featuresContent(i);
            featuresContainer.classList.remove('fade-out');
        }, 200);
    });
}

function featuresContent(i) { //features content function
    img.src = featuresList[i].imageSrc;
    img.alt = featuresList[i].imageAlt;
    h3.innerHTML = featuresList[i].heading;
    p.innerHTML = featuresList[i].paragraph;
}

//Show hidden answers of accordion
const arrow = document.querySelectorAll('.accordion svg');
const answer = document.querySelectorAll('.hide-answer');
const svgPath = document.querySelectorAll('.accordion svg path');

for (let i = 0; i < arrow.length; i++) {
arrow[i].addEventListener('click', () => {
    arrow[i].classList.toggle('accordion--open');
    if (arrow[i].classList.contains('accordion--open')) {
        svgPath[i].style.stroke = 'hsl(0, 94%, 66%)';
    } else {
        svgPath[i].style.stroke = '#5267DF';
    }
    if (answer[i].style.maxHeight) {
        answer[i].style.maxHeight = null;
    } else {
        answer[i].style.maxHeight = answer[i].scrollHeight + "px";
    } 
});
}

// Email validation
const input = document.querySelector('.contact');
const submit = document.querySelector('.submit');

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

submit.addEventListener('click', () => {
    if (validateEmail(input) === false) { //if(!validateEmail())
        input.style.backgroundImage = 'url(images/icon-error.svg)'; //If email is incorrect or not provided show error image
        input.style.paddingRight = '50px';
        input.style.border = '2px solid hsl(0, 94%, 66%)';
    }
});
