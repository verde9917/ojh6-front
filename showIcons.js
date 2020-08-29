const setLeftPosition = (iconWidth) => {
    const browserWidth = document.getElementById("main-wrapper").clientWidth
    return ((Math.random() * (browserWidth - iconWidth)) + "px")
}

const setTopPosition = (iconHeight) => {
    const browserHeight = document.getElementById("main-wrapper").clientHeight
    const headerHeight = document.getElementById("header-wrapper").clientHeight
    let position = Math.random() * (browserHeight - iconHeight) + headerHeight
    const footerPosition = document.getElementById("footer-wrapper").getBoundingClientRect().top
    if (headerHeight + position + iconHeight > footerPosition) {
        position = position - headerHeight
    }
    return (position + "px")
}

const appier = () => {
    let img = document.createElement("img")
    img.src = "./icon/ouen-13.png"
    img.classList.add("icon")

    img.style.position = "absolute"

    img.style.top = setTopPosition(img.naturalHeight)
    img.style.left = setLeftPosition(img.naturalWidth)

    document.getElementById("main-wrapper").appendChild(img)
}
