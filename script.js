var nav = document.querySelector('nav')
var menuBtn = document.querySelector('.navbar-toggler')
var menuCollapse = document.querySelector('.navbar-collapse')

window.addEventListener('scroll', function(){
  if (window.pageYOffset > 56) {
    nav.classList.add('bg-light', 'shadow')
  } else {
    nav.classList.remove('bg-light', 'shadow')
  }
})

menuBtn.addEventListener('click', function(){
  if (window.pageYOffset < 56) {
    nav.classList.toggle('bg-light')
  }
})