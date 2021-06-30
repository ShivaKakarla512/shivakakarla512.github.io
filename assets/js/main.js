/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'), 
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for(let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }

    // if(itemClass === 'skills__content skills__open') {
    //     this.parentNode.className = 'skills__content skills__close'
    // }

    if(itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(taab => {
            taab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== THEME CHANGE ====================*/
let colors = [150, 200, 250, 300, 350, 400]

const random = (list, current) => {
    // console.log(list)
    number = parseInt(current, 10)
    let index = list.indexOf(number);
    list.splice(index, 1);
    // console.log(list)
    if (list.length == 0) {
        list.push(150, 200, 250, 300, 350, 400)
    }
    let newEl = Math.floor(Math.random() * list.length);
    return list[newEl];
}

const main = document.getElementById('main');

main.addEventListener('dblclick', function () {
    let num = random(colors, getComputedStyle(document.documentElement).getPropertyValue('--hue-color'))
           document.documentElement.style.setProperty('--bg-url', `url(../img/bg${num}.png)`);
           document.documentElement.style.setProperty('--hue-color', num);
})

// let mouseIsDown = false;
// let touchIsDown = false;

// main.addEventListener('touchstart', function() {
//     touchIsDown = true;
//     setTimeout(function() {
//       if(touchIsDown) {
//           // mouse was held down for > 2 seconds
//           let num = random(colors, getComputedStyle(document.documentElement).getPropertyValue('--hue-color'))
//           document.documentElement.style.setProperty('--bg-url', `url(../img/bg${num}.png)`);
//           document.documentElement.style.setProperty('--hue-color', num);
//       }
//     }, 2000);
//   });
  
//   main.addEventListener('touchend', function() {
//     touchIsDown = false;
//   });

// main.addEventListener('mousedown', function() {
//   mouseIsDown = true;
//   setTimeout(function() {
//     if(mouseIsDown) {
//         // mouse was held down for > 2 seconds
//         let num = random(colors, getComputedStyle(document.documentElement).getPropertyValue('--hue-color'))
//         document.documentElement.style.setProperty('--bg-url', `url(../img/bg${num}.png)`);
//         document.documentElement.style.setProperty('--hue-color', num);
//     }
//   }, 1200);
// });

// main.addEventListener('mouseup', function() {
//   mouseIsDown = false;
// });

/*==================== GSAP ANIMATION ======================*/ 
TweenMax.to('.nav__logo, .nav__item, .nav__moon, .home__title, .home__subtitle, .home__description, .home__button, .home__img, .home__social-icon, .home__scroll, .home__note, .section__title, .section__subtitle', 0, {
    autoAlpha: 1
});

TweenMax.to('.main', 3, {
    autoAlpha: 1
});

// NAV
// gsap.from('.nav__logo', {opacity: 0, duration: 1, delay:1, y: 20})
// gsap.from('.nav__item, .nav__moon', {opacity: 0, duration: 1, delay: 1, y: 20, stagger: 0.2})

// HOME
// gsap.from('.home__title', {opacity: 0, duration: 1, delay:1.6, y: 30})
// gsap.from('.home__subtitle', {opacity: 0, duration: 1, delay:1.7, y: 30})
// gsap.from('.home__description', {opacity: 0, duration: 1, delay:1.8, y: 30})
// gsap.from('.home__button', {opacity: 0, duration: 1, delay:2.1, y: 30})
// gsap.from('.home__img', {opacity: 0, duration: 1, delay:1.3, y: 30})

// gsap.from('.home__social-icon', {opacity: 0, duration: 1, delay:2, x: -30, stagger: 0.2})
// gsap.from('.home__scroll', {opacity: 0, duration: 1, delay:2.2, y: -30})
// gsap.from('.home__note', {opacity: 0, duration: 1, delay:2.4, y: -30})

// gsap.from('.section__title', {opacity: 0, duration: 1, delay:2.8, y: -30})
// gsap.from('.section__subtitle', {opacity: 0, duration: 1, delay:3.0, y: -30})