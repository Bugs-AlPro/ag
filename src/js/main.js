'use strict'

const menuBtn = document.querySelector('.header-btn');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('header-btn--open');
  nav.classList.toggle('nav--open');
})

const galleryImges = document.querySelectorAll('.gallery__item');

for (let galleryImg of galleryImges) {

  // galleryImg.classList.remove('gallery__item--current');

  galleryImg.addEventListener('click', () => {
    for (let galleryImg of galleryImges) {
      if (galleryImg.classList.contains('gallery__item--current')) {
        galleryImg.classList.remove('gallery__item--current');
      }
    }

    galleryImg.classList.toggle('gallery__item--current');

  })
}


// costsBtnUsd.addEventListener('click', () => {
//   if (costsBtnUsd.classList.contains('currency__btn--current')) {
//     costsBtnUsd.classList.remove('currency__btn--current');
//   } else {
//     costsBtnUsd.classList.add('currency__btn--current');
//     costsBtnRub.classList.remove('currency__btn--current');
//     costsBtnEur.classList.remove('currency__btn--current');

//     for (let item of costsBoxes) {
//       item.classList.add('costs__box--left');
//       item.classList.remove('costs__box--center');
//       item.classList.remove('costs__box--right');
//     }


//   }
// }
// )