const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.closebtn');
const Navbar = document.querySelector('.mb-nav')


hamburger.addEventListener('click', () => {
    hamburger.classList.add('hidden')
    hamburger.classList.remove('inline')
    close.classList.add('block')
    close.classList.remove('hidden')
    hamburger.classList.add('border-gray-600')
    close.classList.add('border-gray-600')
    Navbar.classList.remove('hidden')
    Navbar.classList.add('block')
})

close.addEventListener('click', () => {
    hamburger.classList.remove('hidden')
    hamburger.classList.add('block')
    close.classList.remove('block')
    close.classList.add('hidden')
    close.classList.add('border-gray-600')
    hamburger.classList.add('border-gray-600')
    Navbar.classList.add('hidden')
    Navbar.classList.remove('block')
})