//Create a new element in the DOM
const newListElem = document.createElement('div')
newListElem.innerHTML = 'I am a brand new element created!***'
let elementToAddTo = document.querySelector('div.notAList')
elementToAddTo.appendChild(newListElem)
