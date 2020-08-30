const setLeftPosition = (iconWidth) => {
    const browserWidth = document.getElementById("main-wrapper").clientWidth
    const position = Math.random() * (browserWidth - iconWidth)
    return (position + "px")
}

const setTopPosition = (iconHeight) => {
    const browserHeight = document.getElementById("main-wrapper").clientHeight
    const headerHeight = document.getElementById("header-wrapper").clientHeight
    const footerPosition = document.getElementById("footer-wrapper").getBoundingClientRect().top
    let position = headerHeight + Math.random() * (browserHeight - iconHeight - headerHeight)
    return (position + "px")
}

const appear = () => {
    let img = document.createElement("img")
    let rand = Math.floor(Math.random() * 20) + 1; //乱数を発生;
    img.src = "./icon/ouen-" + rand + ".png"
    img.classList.add("icon")

    img.style.position = "absolute"

    img.style.top = setTopPosition(img.naturalHeight)
    img.style.left = setLeftPosition(img.naturalWidth)

    document.getElementById("main-wrapper").appendChild(img)
}
