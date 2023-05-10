let btnMenu = document.getElementById('btn-menu').addEventListener('click', () => {
  document.querySelector('.header-mobile-menu').classList.toggle('header-mobile-desactive')
  document.querySelector('.header-mobile-close').classList.toggle('header-mobile-active')
  document.querySelector('.header-nav ').classList.toggle('header-nav-active')
})
