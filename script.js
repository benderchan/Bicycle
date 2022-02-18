document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.navbar__menu').classList.toggle('active')
  document.querySelector('.burger').classList.toggle('active')
  document.body.classList.toggle('fixed-position')
})

document.querySelectorAll('.spoiler__trigger').forEach((item) => {
  item.addEventListener('click', () => {
    const parent = item.parentNode
    if (parent.classList.contains('spoiler__item--active')) {
      parent.classList.remove('spoiler__item--active')
    } else {
      document.querySelectorAll('.spoiler__item').forEach((child) => {
        child.classList.remove('spoiler__item--active')
        parent.classList.add('spoiler__item--active')
      })
    }
  })
})
