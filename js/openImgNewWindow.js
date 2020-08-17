//image opens in a new window
const smallImages = document.getElementsByTagName('img')
for (let i = 0; i < smallImages.length; i++) {
    let image = smallImages[i]
    image.onclick = openInNewWindow
    function openInNewWindow() {
        window.open(this.src)
    }
}
