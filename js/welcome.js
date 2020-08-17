//have dom respond to a user typing, when the user is done inputting, show them a welcome message
const welcome = document.getElementById('welcome')

const upText = () => {
    let holder = document.getElementById('newTxt').value
    welcome.innerText = `Hi there ${holder}! It is so nice to meet you!`
}
