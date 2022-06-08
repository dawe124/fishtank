const buttons = document.querySelectorAll('.menu-item')
const fish = document.querySelectorAll('.fish')[0]

buttons.forEach(btn =>
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        removeActive()
        e.target.parentElement.classList.add('active')
        console.log(e.target.dataset.id)
        fish.addEventListener('animationiteration', () => {
            console.log('animation ended')
            fish.className = 'fish'
            fish.classList.add(actionList[e.target.dataset.id])
        })
    })
)

const removeActive = () => {
    buttons.forEach(btn => {
        btn.classList.remove('active')
    })
}

const actionList = {
    'idle': 'idle-body',
    'swim': 'swim-body',
    'flip': 'flip-body',
    'talk': 'talk-body',
    'sleep': 'sleep-body',
    'die': 'die-body'
}