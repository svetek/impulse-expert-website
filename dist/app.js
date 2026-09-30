const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  mobileNav.classList.toggle('open', open);
});

mobileNav?.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    mobileNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

const header = document.querySelector('.site-header');
const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
