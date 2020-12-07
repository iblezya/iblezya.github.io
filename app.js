let menuBtn = document.querySelector('.navbar__menuBtn');
let nav = document.querySelector('.navbar');
let navLeft = document.querySelector('.navbar__left');
let navRight = document.querySelector('.navbar__right');
let contact = document.querySelector('.navbar__left--contact');
let logo = document.querySelector('.logo');
let navLinks = Array.from(document.querySelectorAll('.navbar__left--link'))

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  nav.classList.toggle('active');
  navLeft.classList.toggle('active');
  navRight.classList.toggle('active');
  logo.classList.toggle('active');

  // Remover
  contact.classList.remove('active');
  navRight.classList.remove('active');
  if (menuBtn.classList.contains('active')) {
    setTimeout(() => {
      navRight.classList.add('active');
    }, 100)
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove('active');
      setTimeout(() => {
        navLinks[i].classList.add('active');
      },i*200)
      
    }
    setTimeout(() => {
      contact.classList.add('active');
    }, 700)
  }

})