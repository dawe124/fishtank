let buttons = document.querySelectorAll('.menu-item')

buttons.forEach(btn =>
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        removeActive()
        e.target.parentElement.classList.add('active')
    })
)

const removeActive = () => {
    buttons.forEach(btn => {
        btn.classList.remove('active')
    })
}