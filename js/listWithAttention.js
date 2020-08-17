//changing list attention on hover
const listItems = document.getElementsByTagName('li')
for (let i = 0; i < listItems.length; i++) {
    let item = listItems[i]
    item.onmouseover = function () {
        this.style.backgroundColor = 'pink'
    }
    item.onmouseout = function () {
        this.style.backgroundColor = 'white'
    }
}

//for loop to loop over an array of list elements. basic looping
// const listItems = document.getElementsByTagName("li")
// //console.log(listItems)
// for (let i = 0; i < listItems.length; i++) {
//     let item = listItems[i]
//     if (i % 2) {
//         item.style.color = "pink"
//     }
//     item.innerText = 'Element ' + (i + 1)
// }
