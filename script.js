const showMenu = document.querySelector('#showMenu')
const hideMenu = document.querySelector('#hideMenu')
const menuuu = document.querySelector('.menuuu')
const atags = document.querySelectorAll('a')

showMenu.addEventListener('click', () => {
menuuu.classList.add('click')
showMenu.style.display ='none'
hideMenu.style.display ='block'
})

hideMenu.addEventListener('click', () => {
menuuu.classList.remove('click')
hideMenu.style.display ='none'
showMenu.style.display ='block'
})
atags.forEach(atag => {
    atag.addEventListener('click', () => {
        menuuu.classList.remove('click')
hideMenu.style.display ='none'
showMenu.style.display ='block'
    })
})