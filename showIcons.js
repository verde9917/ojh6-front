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

const setLeftPosition = (iconWidth) => {
    const browserWidth = 
    document.getElementById("main-wrapper").clientWidth
    return Math.random() * (browserWidth - iconWidth)
}

const setTopPosition = (iconHeight) => {
    const browserHeight = 
    document.getElementById("main-wrapper").clientHeight
    return Math.random() * (browserHeight - iconHeight)
}