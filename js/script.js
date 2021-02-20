const menu = document.querySelector('#js-menu');
const nav = document.querySelector('#js-nav');
const body = document.querySelector('body');

menu.addEventListener('click', () => {
  if (nav.style.display === 'none') {
    nav.style.display = 'block';
    body.style.overflow = 'hidden';
  } else {
    nav.style.display = 'none';
    body.style.overflow = 'visible';
  }
});
