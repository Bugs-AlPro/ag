'use strict'

const menuBtn = document.querySelector('.header-btn');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('header-btn--open');
  nav.classList.toggle('nav--open');
})