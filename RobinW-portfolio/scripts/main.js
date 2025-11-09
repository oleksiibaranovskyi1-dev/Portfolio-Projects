window.addEventListener('scroll', () => {
  const promo = document.querySelector('.header__promo');
  promo.classList.toggle('header__promo--scrolled', window.scrollY > 50);
});

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll');
});