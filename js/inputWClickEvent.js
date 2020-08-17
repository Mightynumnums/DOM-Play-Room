// setting up an input with a onclick event
const clickMe = document.getElementById('buttonForClicks')
clickMe.onclick = clickMeFunc
function clickMeFunc() {
    console.log('What a good doggie!')
    let endlessHorse = 'http://endless.horse/'
    window.open(endlessHorse)
}

//adding an event listener
const buttonWithEveListener = document.getElementById('buttonWithEventListener')
buttonWithEveListener.addEventListener('click', sillyFunc)
function sillyFunc() {
    window.alert('hello there beautiful')
    console.log('Im so silly!')
}
