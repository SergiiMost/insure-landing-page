const navButtons = document.querySelectorAll('.nav__icon-button')
const nav = document.querySelector('.nav')
const navLinks = document.querySelector('.nav__links')

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    nav.classList.toggle('nav--fixed')
    navLinks.classList.toggle('nav__links--mobile')
    navButtons.forEach(button => {
      button.classList.toggle('util-hide')
    })
  })
})