// імпорт функцій ========================================================================================================================================================

import * as flsFunction from "./files/functions.js";

flsFunction.isWebp();

flsFunction.addTouchClass();

// мої скрипти ========================================================================================================================================================

// прокрутка по кліку

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset; // '  - document.querySelector('header').offsetHeight' - добавляти якщо header фіксований


         if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock'); // включати якщо потрібно заблокувати скрол в body
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
         }


         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}

// бургер меню

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if(iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock'); // включати якщо потрібно заблокувати скрол в body
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}


// veiw more

const moreBtn = document.querySelector('.project__button');
const cardMore = document.querySelectorAll('.project__card-more');

if(moreBtn) {
   moreBtn.addEventListener("click", function (e) {
      moreBtn.classList.toggle('.active');
      cardMore.forEach((el) => {
         el.classList.toggle("project__card-more--active")
      });
      this.textContent = this.textContent === 'VIEW ALL PROJECTS' ? 'CLOSE' : 'VIEW ALL PROJECTS';
   });
}


// tabs

let tab = function () {
   let tabNav = document.querySelectorAll('.tabs-photo__btn'),
      tabContent = document.querySelectorAll('.tabs-photo__tab'),
      tabName;

   tabNav.forEach(item => {
      item.addEventListener('click', selectTabNav)
   });

   function selectTabNav() {
      tabNav.forEach(item => {
         item.classList.remove('is-active');
      });
      this.classList.add('is-active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
   }

   function selectTabContent(tabName) {
      tabContent.forEach(item => {
         item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
      })
   }
};

tab();

// parallax

// let parallaxImg = document.querySelector('.js-parallax'),
//     section = document.querySelector('.js-section');

// function scrollParallax() {
//    let offsetTop = window.innerHeight - section.getBoundingClientRect().top;
//    parallaxImg.style.transform = 'translateY('+ 0.3 * offsetTop +'px)';
// }

// scrollParallax();

// document.onscroll = function () {
//    scrollParallax();
// }