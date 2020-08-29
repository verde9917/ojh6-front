const getImageWidth = (path) => {
    let element = new Image()
    element.onload = () => {
        alert(element.naturalWidth)
        return element.naturalWidth
    }
    element.src = path
}

const getImageHeight = (path) => {
    let element = new Image()
    element.onload = () => {
        alert(element.naturalHeight)
        return element.naturalHeight
    }
    element.src = path
}