let body = document.querySelector('body');

let sections = document.querySelectorAll('.section');

let sectionTop = document.querySelector('.section-top');
let sectionAbout = document.querySelector('.section-about');
let sectionFacts = document.querySelector('.section-facts');
let sectionTopHeight = sectionTop.clientHeight;
let sectionAboutHeight = sectionAbout.clientHeight;
let sectionFactsHeight = sectionFacts.clientHeight;

window.addEventListener('scroll', () => {
    let posTop = window.pageYOffset;
    if (posTop < (sectionTopHeight)) {
        sectionTop.style.top = '0px'
        sectionTop.style.transform = `translateY(${-posTop}px)`;
        sectionAbout.style.transform = `translateY(0px)`
    }
    if ((posTop >= (sectionTopHeight)) && (posTop < (sectionTopHeight + sectionAboutHeight))) {
        sectionAbout.style.top = '0px'
        sectionTop.style.transform = `translateY(0px)`
        sectionTop.style.top = `${-sectionTopHeight - 50}px `
        sectionAbout.style.transform = `translateY(${- posTop + sectionTopHeight}px)`;
    }

    if ((posTop >= (sectionTopHeight + sectionAboutHeight))) {
        sectionFacts.style.top = '0px'
        sectionAbout.style.transform = `translateY(0px)`
        sectionAbout.style.top = `${-sectionTopHeight - 50}px `
        // sectionFacts.style.transform = `translateY(${- posTop + sectionTopHeight + sectionAboutHeight}px)`;
    }
});

