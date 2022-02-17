document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.navbar__menu').classList.toggle('active')
  document.querySelector('.burger').classList.toggle('active')
  document.body.classList.toggle('fixed-position')
})
