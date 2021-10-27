alert('Em construção')
const nav = document.querySelector('#header nav.container')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        alert('oi')
        nav.classList.toggle('show')
    })
}