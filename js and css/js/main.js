// navbar - change - when - enter
if(document.body.scrollTop >=  160) {
    navbar.classList.add("navbar-scrolled")
} else{
    navbar.classList.remove("navbar-scrolled")
}
if(document.body.scrollTop <=  600) {
    navbar.classList.remove("navbar-hide")
    replace_navbar.classList.remove("navbar-hide")
}
// navbar - change - when - enter

// hover navlink dropdown open
main_nav_link.forEach(function (item) {
    item.addEventListener("mouseenter", () => {
        for(let i = 0; i < main_nav_link.length; i++) {
            if(main_nav_link.item(i) != item) {
                main_nav_link.item(i).style.color = "#6e6d6d"
            } else {
                n_c = i
            }
        }
    })
    item.addEventListener("mouseleave", () => {
        for(let i = 0; i < main_nav_link.length; i++) {
            if(main_nav_link.item(i) != item) {
                    main_nav_link.item(i).style.color = "white"
            } else {
                n_c = i
            }
        }
    })
})
main_drop_menu.forEach(function (it) {
    it.addEventListener("mouseenter", () => {
        for(let i = 0; i < main_nav_link.length; i++) {
            if(main_nav_link.item(i) != main_nav_link.item(n_c)) {
                main_nav_link.item(i).style.color = "#6e6d6d"
            } else {
                n_c = i
            }
        }
    })
    it.addEventListener("mouseleave", () => {
        for(let i = 0; i < main_nav_link.length; i++) {
            if(main_nav_link.item(i) != main_nav_link.item(n_c)) {
                    main_nav_link.item(i).style.color = "white"
            } else {
                n_c = i
            }
        }
    })
})
side_drop_menu.forEach(function (ite) {
    ite.addEventListener("mouseenter", () => {
        for(let i = 0; i < side_drop_menu.length; i++) {
            if(side_drop_menu.item(i) == ite) {
                w_n_l = i
                break
            }
        }
        navigetor_link.item(w_n_l).style.color = "white"
    })
    ite.addEventListener("mouseleave", () => {
        for(let i = 0; i < side_drop_menu.length; i++) {
            if(side_drop_menu.item(i) != ite) {
                w_n_l = i
                break
            }
        }
        navigetor_link.item(w_n_l).style.color = ""
    })
})
navigetor_link.forEach(function (ite2) {
    ite2.addEventListener("mouseleave", () => {
        ite2.style.color = ""
    })
})
// hover navlink dropdown open

// hide - navbar - when - enter
if(localStorage.getItem("navbar-last-status") !== null) {
    let navbar_last_status = localStorage.getItem("navbar-last-status")
    if(navbar_last_status === "hide") {
        navbar.classList.add("navbar-hide")
        replace_navbar.classList.add("navbar-hide")
    }
}
// hide - navbar - enter


// footer - float - image
footer_link.addEventListener("mouseenter", () => {
    float_img.classList.remove("opacity-0")
    float_img.classList.add("opacity-100")
})
footer_link.addEventListener("mouseleave", () => {
    float_img.classList.remove("opacity-100")
    float_img.classList.add("opacity-0")
})
footer_link.addEventListener("mousemove", (e) => {
    client_x = e.clientX
    client_y = e.clientY
    float_img.style.transform = "matrix(1, 0, 0, 1 ," + (e.clientX - window.innerWidth / 10) + " ," + (e.clientY - window.innerHeight / 2) + ")"
})
// footer -float - image

// swap - slider - project - case
function min(distance){
    let b = distance[0]
    distance.forEach((item) => {
        if(item < b) {
            b = item
        }
    })
    return b
}
function slider_move_project_case(e){
    if(e.clientX < first_mouse_position_project_case) {
        transform_slider_project_case -= 10
        slider_body_project_case.style.transform = "translateX(" + transform_slider_project_case + "px)" 
        first_mouse_position_project_case = e.clientX
    } else {
        transform_slider_project_case += 10
        slider_body_project_case.style.transform = "translateX(" + transform_slider_project_case + "px)" 
        first_mouse_position_project_case = e.clientX
    }
}
slider_body_project_case.addEventListener("mousedown", (e) => {
    first_mouse_position_project_case = e.clientX
    slider_body_project_case.style.cursor = "grabbing"
    slider_body_project_case.addEventListener("mousemove", slider_move_project_case)
})
slider_body_project_case.addEventListener("mouseup", () => {
    slider_body_project_case.removeEventListener("mousemove", slider_move_project_case)
    pic_positions_project_case.forEach((item) => {
        if(- item - slider_body_project_case.style.transform.replace(/[^\d.]/g, '') < 0) {
            distance_project_case.push(-(- item - slider_body_project_case.style.transform.replace(/[^\d.]/g, '')))
        } else{
            distance_project_case.push(- item - slider_body_project_case.style.transform.replace(/[^\d.]/g, ''))
        }
    })
    index = distance_project_case.indexOf(min(distance_project_case))
    slider_body_project_case.style.transform = "translateX(" + pic_positions_project_case[index] + "px)" 
    transform_slider_project_case = pic_positions_project_case[index]
    slider_body_project_case.style.cursor = "grab"
    distance_project_case = []
})
slider_body_project_case.addEventListener("mouseleave", () => {
    slider_body_project_case.removeEventListener("mousemove", slider_move_project_case)
    slider_body_project_case.style.cursor = "grab"
})
// swap - slider - project - case

// swap - slider - menu - style
function slider_move_menu_style(e){
    if(e.clientX < first_mouse_position_menu_style) {
        transform_slider_menu_style -= 10
        slider_body_menu_style.style.transform = "translateX(" + transform_slider_menu_style + "px)" 
        first_mouse_position_menu_style = e.clientX
    } else {
        transform_slider_menu_style += 10
        slider_body_menu_style.style.transform = "translateX(" + transform_slider_menu_style + "px)" 
        first_mouse_position_menu_style = e.clientX
    }
    mouse_position = e.clientX
}
slider_body_menu_style.addEventListener("mousedown", (e) => {
    first_mouse_position_menu_style = e.clientX
    slider_body_menu_style.style.cursor = "grabbing"
    slider_body_menu_style.addEventListener("mousemove", slider_move_menu_style)
})
slider_body_menu_style.addEventListener("mouseup", () => {
    slider_body_menu_style.removeEventListener("mousemove", slider_move_menu_style)
    pic_positions_menu_style.forEach((item) => {
        if(- item - slider_body_menu_style.style.transform.replace(/[^\d.]/g, '') < 0) {
            distance_menu_style.push(-(- item - slider_body_menu_style.style.transform.replace(/[^\d.]/g, '')))
        } else{
            distance_menu_style.push(- item - slider_body_menu_style.style.transform.replace(/[^\d.]/g, ''))
        }
    })
    index = distance_menu_style.indexOf(min(distance_menu_style))
    slider_body_menu_style.style.transform = "translateX(" + pic_positions_menu_style[index] + "px)" 
    transform_slider_menu_style = pic_positions_menu_style[index]
    slider_body_menu_style.style.cursor = "grab"
    distance_menu_style = []
})
slider_body_menu_style.addEventListener("mouseleave", () => {
    slider_body_menu_style.removeEventListener("mousemove", slider_move_menu_style)
    slider_body_menu_style.style.cursor = "grab"
})
// swap - slider - menu - style
// fullscreen navbar
fullnavbar_open_close[0].addEventListener("mousedown", function () {
    full_navbar.classList.remove("d-none")
    document.body.classList.add("overflow-hidden")
    setTimeout(function () {
        full_navbar.classList.remove("opacity-0")
        full_navbar.classList.add("opacity-100")
        full_navbar.classList.remove("z-index-n1")
        toggler_lines[0].style.transform = "rotate(-45deg) translateX(-9.5px)"
        toggler_lines[1].classList.add("opacity-0")
        toggler_lines[2].style.transform = "rotate(45deg) translateX(-10.5px) translateY(-2px)"
    }, 20)
})
fullnavbar_open_close[1].addEventListener("mousedown" , function () {
    toggler_lines[0].style.transform = "translateX(-9.5px)"
    toggler_lines[1].classList.remove("opacity-0")
    toggler_lines[2].style.transform = "translateX(-10.5px)"
    setTimeout(function(){
        full_navbar.classList.remove("opacity-100")
        full_navbar.classList.add("opacity-0")
        document.body.classList.remove("overflow-hidden")
    }, 50)
    setTimeout(function () {
        full_navbar.classList.remove("z-index-n1")
        full_navbar.classList.add("d-none")
    }, 200)
})
nav_link_full.forEach(function (ite3) {
    ite3.addEventListener("mouseenter", () => {
        for(let i = 0; i < nav_link_full.length; i++) {
            if(nav_link_full.item(i) != ite3) {
                nav_link_full.item(i).style.color = "#6e6d6d"
            } else {
                n_c = i
            }
        }
    })
    ite3.addEventListener("mouseleave", () => {
        for(let i = 0; i < nav_link_full.length; i++) {
            if(nav_link_full.item(i) != ite3) {
                    nav_link_full.item(i).style.color = "white"
            } else {
                n_c = i
            }
        }
    })

})
nav_link_social.forEach(function (ite4) {
    ite4.addEventListener("mouseenter", () => {
        for(let i = 0; i < nav_link_social.length; i++) {
            if(nav_link_social.item(i) != ite4) {
                nav_link_social.item(i).style.color = "#6e6d6d"
            } else {
                n_c = i
            }
        }
    })
    ite4.addEventListener("mouseleave", () => {
        for(let i = 0; i < nav_link_social.length; i++) {
            if(nav_link_social.item(i) != ite4) {
                nav_link_social.item(i).style.color = "white"
            } else {
                n_c = i
            }
        }
    })
})
full_navigator_link.forEach(function (ite5) {
    ite5.addEventListener("click", () => {
        for(let i = 0; i < full_navigator_link.length; i++) {
            if(full_navigator_link.item(i) == ite5){
                if(angle.item(i).style.transform === "rotate(0deg)") {
                    angle.item(i).style.transform = "rotate(90deg)"
                } else {
                    angle.item(i).style.transform = "rotate(0deg)"
                }
                break
            }
        }
    })
})
collapse_full_navbar.forEach(function (ite6){
    ite6.addEventListener("mouseenter", () => {
        for(let i = 0; i < collapse_full_navbar.length; i++) {
            if(collapse_full_navbar.item(i) == ite6){
                collapse_toggler.item(i).classList.add("text-white")
                break
            }
        }
    })
    ite6.addEventListener("mouseleave", () => {
        for(let i = 0; i < collapse_full_navbar.length; i++) {
            if(collapse_full_navbar.item(i) == ite6){
                collapse_toggler.item(i).classList.remove("text-white")
                break
            }
        }
    })
})
// fullscreen navbar
// header boxes
let transitiondelay = 100
let time = 0
function createHeaderBoxes(imgPATH, imgAlt, textHeader, parentSelector){
    let parentDIV = document.createElement("div")
    parentDIV.classList = "col-12 col-md-6 col-lg-4 project-demo"

    let parentLINK = document.createElement("a")
    parentLINK.href = "#"    
    parentLINK.classList = "card text-decoration-none demo-card border-0 bg-dark show-on-scroll opacity-0"
    parentLINK.style.transform = "translateY(10px)"
    parentLINK.style.transitionDuration = "500ms"
    parentLINK.style.transitionDelay = transitiondelay + "ms"
    time += 1
    if(time % 3 == 0) {
        transitiondelay = 100
    } else {
        transitiondelay += 50
    }

    let headerDIV = document.createElement("div")
    headerDIV.classList = "card-image"

    let footerDIV = document.createElement("div")
    footerDIV.classList = "card-body bg-dark"

    let newIMG = document.createElement("img")
    newIMG.src = imgPATH
    newIMG.alt = imgAlt

    let footerTEXT = document.createElement("span")
    footerTEXT.classList = "text-white h5 card-title"
    footerTEXT.textContent = textHeader

    footerDIV.appendChild(footerTEXT)
    headerDIV.appendChild(newIMG)
    parentLINK.appendChild(headerDIV)
    parentLINK.appendChild(footerDIV)
    parentDIV.appendChild(parentLINK)
    document.querySelector(parentSelector).appendChild(parentDIV)
}
headerBOXES.forEach(function (item) {
    createHeaderBoxes(item.imgPATH, item.imgAlt, item.textHeader, item.parentSelector)
})
// header boxes
// description
function logColor(pathData) {
    peresentBoxes.forEach((item) => {
        if(item.pathData == pathData) {
            console.log(item.pathColor)
        }
    })
}
function createDescriptionBoxes(pathData, pathColor, parentSelector, transitiondelay) {
    let parentDIV = document.createElement("div")
    parentDIV.classList = "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 bau-description-layout show-on-scroll opacity-0"
    parentDIV.style.transform = "translateY(20px)"
    parentDIV.style.transitionDuration = "500ms"
    parentDIV.style.transitionDelay = transitiondelay

    let parentLINK = document.createElement("a")
    parentLINK.style = "cursor: pointer"
    parentLINK.setAttribute("onclick", "logColor('" + pathData + "')")
    parentLINK.classList = "bau-description-svg card demo-card"
    
    let newSpan = document.createElement("span")
    newSpan.classList = "p-18 card-image d-flex align-self-center"

    let newSVG = document.createElement("svg")
    newSVG.setAttribute("width", 134)
    newSVG.setAttribute("height", 109)
    newSVG.setAttribute("viewBox", "0 0 134 109")
    newSVG.setAttribute("fill", "none")
    newSVG.setAttribute("xmls", "http://www.w3.org/2000/svg")

    let newPATH = document.createElement("path")
    newPATH.setAttribute("fill-rule", "evenodd")
    newPATH.setAttribute("clip-rule", "evenodd")
    newPATH.setAttribute("d", pathData)
    newPATH.setAttribute("fill", pathColor)
    
    newSVG.appendChild(newPATH)
    newSpan.appendChild(newSVG)
    parentLINK.appendChild(newSpan)
    parentDIV.appendChild(parentLINK)
    document.querySelector(parentSelector).appendChild(parentDIV)
}
peresentBoxes.forEach((item) => {
    createDescriptionBoxes(item.pathData, item.pathColor, item.parentSelector, item.transitiondelay)
})
// description
// feature
transitiondelay = 100
time = 0
function createFeatureBoxes(iconPATH, iconWidth, iconHeight, titleTEXT, detailTEXT, parentSelector) {
    let parentDIV = document.createElement("div")
    parentDIV.classList = "col-md-6 col-lg-4 show-on-scroll opacity-0"
    parentDIV.style.transform = "translateY(20px)"
    parentDIV.style.transitionDuration = "500ms"
    parentDIV.style.transitionDelay = transitiondelay + "ms"
    time += 1
    if(time % 3 == 0) {
        transitiondelay = 100
    } else {
        transitiondelay += 100
    }

    let parentBOX = document.createElement("div")
    parentBOX.classList = "feature d-flex"

    let iconBox = document.createElement("div")
    iconBox.classList = "feature-icon"

    let bigIcon = document.createElement("svg")
    bigIcon.setAttribute("width", 71)
    bigIcon.setAttribute("height", 70)
    bigIcon.setAttribute("viewBox", "0 0 71 70")
    bigIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    bigIcon.setAttribute("fill", "none")
    let bigIconPATH = document.createElement("path")
    bigIconPATH.setAttribute("d", "M5.18911 17.7887L35 0.57735L64.8109 17.7887V52.2113L35 69.4226L5.18911 52.2113V17.7887Z")
    bigIcon.appendChild(bigIconPATH)
    bigIconPATH = document.createElement("path")
    bigIconPATH.setAttribute("d", "M18.2867 65.3084L1.0754 35.4976L18.2867 5.68667H52.7094L69.9207 35.4976L52.7094 65.3084H18.2867Z")
    bigIcon.appendChild(bigIconPATH)
    iconBox.appendChild(bigIcon)

    let smallIcon = document.createElement("svg")
    smallIcon.setAttribute("width", iconWidth)
    smallIcon.setAttribute("height", iconHeight)
    smallIcon.setAttribute("viewBox", "0 0 " + iconWidth + " " + iconHeight)
    smallIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    iconBox.appendChild(smallIcon)
    let smallIconPath = document.createElement("path")
    smallIconPath.setAttribute("d", iconPATH)
    smallIconPath.setAttribute("stroke", "currentcolor")
    smallIconPath.setAttribute("stroke-width", 1.5)
    smallIconPath.setAttribute("stroke-linecap", "round")
    smallIconPath.setAttribute("stroke-linejoin", "round")
    smallIcon.appendChild(smallIconPath)

    let textBox = document.createElement("div")
    textBox.classList = "feature-description"

    let textBoxTitle = document.createElement("div")
    textBoxTitle.classList = "feature-description-title"
    textBoxTitle.textContent = titleTEXT
    textBox.appendChild(textBoxTitle)
    
    let textBoxDetail = document.createElement("div")
    textBoxDetail.classList = "feature-description-detail"
    textBoxDetail.textContent = detailTEXT
    textBox.appendChild(textBoxDetail)

    parentBOX.appendChild(iconBox)
    parentBOX.appendChild(textBox)
    parentDIV.appendChild(parentBOX)
    document.querySelector(parentSelector).appendChild(parentDIV)
}
features.forEach((item) => {
    createFeatureBoxes(item.d, item.width, item.height, item.title, item.detail, item.parentSelector)
})
// feature