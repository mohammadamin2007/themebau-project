// navbar - change - when - enter
if(document.body.scrollTop >=  160) {
    getNavbar.classList.add("navbar-scrolled")
} else{
    getNavbar.classList.remove("navbar-scrolled")
}
if(document.body.scrollTop <=  600) {
    getNavbar.classList.remove("navbar-hide")
    replaceNavbar.classList.remove("navbar-hide")
}
// navbar - change - when - enter

// hover navlink dropdown open
mainNAVLinks.forEach(function (item) {
    item.addEventListener("mouseenter", () => {
        for(let i = 0; i < mainNAVLinks.length; i++) {
            if(mainNAVLinks.item(i) !== item) {
                mainNAVLinks.item(i).style.color = "#6e6d6d"
            } else {
                navLinkNOTChangeColor = i
            }
        }
    })
    item.addEventListener("mouseleave", () => {
        for(let i = 0; i < mainNAVLinks.length; i++) {
            if(mainNAVLinks.item(i) !== item) {
                    mainNAVLinks.item(i).style.color = "white"
            } else {
                navLinkNOTChangeColor = i
            }
        }
    })
})
mainDropMenus.forEach(function (it) {
    it.addEventListener("mouseenter", () => {
        for(let i = 0; i < mainNAVLinks.length; i++) {
            if(mainNAVLinks.item(i) !== mainNAVLinks.item(navLinkNOTChangeColor)) {
                mainNAVLinks.item(i).style.color = "#6e6d6d"
            } else {
                navLinkNOTChangeColor = i
            }
        }
    })
    it.addEventListener("mouseleave", () => {
        for(let i = 0; i < mainNAVLinks.length; i++) {
            if(mainNAVLinks.item(i) !== mainNAVLinks.item(navLinkNOTChangeColor)) {
                    mainNAVLinks.item(i).style.color = "white"
            } else {
                navLinkNOTChangeColor = i
            }
        }
    })
})
dropMenusONSide.forEach(function (ite) {
    ite.addEventListener("mouseenter", () => {
        for(let i = 0; i < dropMenusONSide.length; i++) {
            if(dropMenusONSide.item(i) === ite) {
                dropLinkPUTColor = i
                break
            }
        }
        linkWithIcon.item(dropLinkPUTColor).style.color = "white"
    })
    ite.addEventListener("mouseleave", () => {
        for(let i = 0; i < dropMenusONSide.length; i++) {
            if(dropMenusONSide.item(i) !== ite) {
                dropLinkPUTColor = i
                break
            }
        }
        linkWithIcon.item(dropLinkPUTColor).style.color = ""
    })
})
linkWithIcon.forEach(function (ite2) {
    ite2.addEventListener("mouseleave", () => {
        ite2.style.color = ""
    })
})
// hover navlink dropdown open

// hide - navbar - when - enter
if(localStorage.getItem("navbar-last-status") !== null) {
    let navbar_last_status = localStorage.getItem("navbar-last-status")
    if(navbar_last_status === "hide") {
        getNavbar.classList.add("navbar-hide")
        replaceNavbar.classList.add("navbar-hide")
    }
}
// hide - navbar - enter

// footer - float - image
footerLink.addEventListener("mouseenter", () => {
    footerFloatIMG.classList.remove("opacity-0")
    footerFloatIMG.classList.add("opacity-100")
})
footerLink.addEventListener("mouseleave", () => {
    footerFloatIMG.classList.remove("opacity-100")
    footerFloatIMG.classList.add("opacity-0")
})
footerLink.addEventListener("mousemove", (e) => {
    footerFloatIMG.style.transform = "matrix(1, 0, 0, 1 ," + (e.clientX - window.innerWidth / 10) + " ," + (e.clientY - window.innerHeight / 2) + ")"
})
// footer -float - image

// swap - slider - project - case
// function min(distance){
//     let b = distance[0]
//     distance.forEach((item) => {
//         if(item < b) {
//             b = item
//         }
//     })
//     return b
// }
// function slider_move_project_case(e){
//     if(e.clientX < first_mouse_position_project_case) {
//         transform_slider_project_case -= 10
//         slider_body_project_case.style.transform = "translateX(" + transform_slider_project_case + "px)"
//         first_mouse_position_project_case = e.clientX
//     } else {
//         transform_slider_project_case += 10
//         slider_body_project_case.style.transform = "translateX(" + transform_slider_project_case + "px)"
//         first_mouse_position_project_case = e.clientX
//     }
// }
// slider_body_project_case.addEventListener("mousedown", (e) => {
//     first_mouse_position_project_case = e.clientX
//     slider_body_project_case.style.cursor = "grabbing"
//     slider_body_project_case.addEventListener("mousemove", slider_move_project_case)
// })
// slider_body_project_case.addEventListener("mouseup", () => {
//     slider_body_project_case.removeEventListener("mousemove", slider_move_project_case)
//     pic_positions_project_case.forEach((item) => {
//         if(- item - slider_body_project_case.style.transform.replace(/[^\d.]/g, '') < 0) {
//             distance_project_case.push(-(- item - slider_body_project_case.style.transform.replace(/[^\d.]/g, '')))
//         } else{
//             distance_project_case.push(- item - slider_body_project_case.style.transform.replace(/[^\d.]/g, ''))
//         }
//     })
//     index = distance_project_case.indexOf(min(distance_project_case))
//     slider_body_project_case.style.transform = "translateX(" + pic_positions_project_case[index] + "px)"
//     transform_slider_project_case = pic_positions_project_case[index]
//     slider_body_project_case.style.cursor = "grab"
//     distance_project_case = []
// })
// slider_body_project_case.addEventListener("mouseleave", () => {
//     slider_body_project_case.removeEventListener("mousemove", slider_move_project_case)
//     slider_body_project_case.style.cursor = "grab"
// })
// // swap - slider - project - case
//
// // swap - slider - menu - style
// function slider_move_menu_style(e){
//     if(e.clientX < first_mouse_position_menu_style) {
//         transform_slider_menu_style -= 10
//         slider_body_menu_style.style.transform = "translateX(" + transform_slider_menu_style + "px)"
//         first_mouse_position_menu_style = e.clientX
//     } else {
//         transform_slider_menu_style += 10
//         slider_body_menu_style.style.transform = "translateX(" + transform_slider_menu_style + "px)"
//         first_mouse_position_menu_style = e.clientX
//     }
//     mouse_position = e.clientX
// }
// slider_body_menu_style.addEventListener("mousedown", (e) => {
//     first_mouse_position_menu_style = e.clientX
//     slider_body_menu_style.style.cursor = "grabbing"
//     slider_body_menu_style.addEventListener("mousemove", slider_move_menu_style)
// })
// slider_body_menu_style.addEventListener("mouseup", () => {
//     slider_body_menu_style.removeEventListener("mousemove", slider_move_menu_style)
//     pic_positions_menu_style.forEach((item) => {
//         if(- item - slider_body_menu_style.style.transform.replace(/[^\d.]/g, '') < 0) {
//             distance_menu_style.push(-(- item - slider_body_menu_style.style.transform.replace(/[^\d.]/g, '')))
//         } else{
//             distance_menu_style.push(- item - slider_body_menu_style.style.transform.replace(/[^\d.]/g, ''))
//         }
//     })
//     index = distance_menu_style.indexOf(min(distance_menu_style))
//     slider_body_menu_style.style.transform = "translateX(" + pic_positions_menu_style[index] + "px)"
//     transform_slider_menu_style = pic_positions_menu_style[index]
//     slider_body_menu_style.style.cursor = "grab"
//     distance_menu_style = []
// })
// slider_body_menu_style.addEventListener("mouseleave", () => {
//     slider_body_menu_style.removeEventListener("mousemove", slider_move_menu_style)
//     slider_body_menu_style.style.cursor = "grab"
// })
// swap - slider - menu - style

// fullscreen navbar
fullNavbarTogglers[0].addEventListener("mousedown", function () {
    getFullNavbar.classList.remove("d-none")
    document.body.classList.add("overflow-hidden")
    setTimeout(function () {
        getFullNavbar.classList.remove("opacity-0")
        getFullNavbar.classList.add("opacity-100")
        getFullNavbar.classList.remove("z-index-n1")
        fullNavbarCloseTogglerLines[0].style.transform = "rotate(-45deg) translateX(-9.5px)"
        fullNavbarCloseTogglerLines[1].classList.add("opacity-0")
        fullNavbarCloseTogglerLines[2].style.transform = "rotate(45deg) translateX(-10.5px) translateY(-2px)"
    }, 20)
})
fullNavbarTogglers[1].addEventListener("mousedown" , function () {
    fullNavbarCloseTogglerLines[0].style.transform = "translateX(-9.5px)"
    fullNavbarCloseTogglerLines[1].classList.remove("opacity-0")
    fullNavbarCloseTogglerLines[2].style.transform = "translateX(-10.5px)"
    setTimeout(function(){
        getFullNavbar.classList.remove("opacity-100")
        getFullNavbar.classList.add("opacity-0")
        document.body.classList.remove("overflow-hidden")
    }, 50)
    setTimeout(function () {
        getFullNavbar.classList.remove("z-index-n1")
        getFullNavbar.classList.add("d-none")
    }, 200)
})
fullNavbarLinks.forEach(function (ite3) {
    ite3.addEventListener("mouseenter", () => {
        for(let i = 0; i < fullNavbarLinks.length; i++) {
            if(fullNavbarLinks.item(i) !== ite3) {
                fullNavbarLinks.item(i).style.color = "#6e6d6d"
            } else {
                navLinkNOTChangeColor = i
            }
        }
    })
    ite3.addEventListener("mouseleave", () => {
        for(let i = 0; i < fullNavbarLinks.length; i++) {
            if(fullNavbarLinks.item(i) !== ite3) {
                    fullNavbarLinks.item(i).style.color = "white"
            } else {
                navLinkNOTChangeColor = i
            }
        }
    })

})
socialMediaLinks.forEach(function (ite4) {
    ite4.addEventListener("mouseenter", () => {
        for(let i = 0; i < socialMediaLinks.length; i++) {
            if(socialMediaLinks.item(i) !== ite4) {
                socialMediaLinks.item(i).style.color = "#6e6d6d"
            } else {
                navLinkNOTChangeColor = i
            }
        }
    })
    ite4.addEventListener("mouseleave", () => {
        for(let i = 0; i < socialMediaLinks.length; i++) {
            if(socialMediaLinks.item(i) !== ite4) {
                socialMediaLinks.item(i).style.color = "white"
            } else {
                navLinkNOTChangeColor = i
            }
        }
    })
})
fullNavbarLinksWithIcon.forEach(function (ite5) {
    ite5.addEventListener("click", () => {
        for(let i = 0; i < fullNavbarLinksWithIcon.length; i++) {
            if(fullNavbarLinksWithIcon.item(i) === ite5){
                if(fullNavbarLinksIcon.item(i).style.transform === "rotate(0deg)") {
                    fullNavbarLinksIcon.item(i).style.transform = "rotate(90deg)"
                } else {
                    fullNavbarLinksIcon.item(i).style.transform = "rotate(0deg)"
                }
                break
            }
        }
    })
})
fullNavbarCollapseINCollapse.forEach(function (ite6){
    ite6.addEventListener("mouseenter", () => {
        for(let i = 0; i < fullNavbarCollapseINCollapse.length; i++) {
            if(fullNavbarCollapseINCollapse.item(i) === ite6){
                fullNavbarCollapsesToggler.item(i).classList.add("text-white")
                break
            }
        }
    })
    ite6.addEventListener("mouseleave", () => {
        for(let i = 0; i < fullNavbarCollapseINCollapse.length; i++) {
            if(fullNavbarCollapseINCollapse.item(i) === ite6){
                fullNavbarCollapsesToggler.item(i).classList.remove("text-white")
                break
            }
        }
    })
})
// fullscreen navbar

// header boxes
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
    if(time % 3 === 0) {
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
    footerTEXT.classList = "default-text-color-white h5 card-title"
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
function logColor(pathIMG) {
    presentBoxes.forEach((item) => {
        if(item.pathIMG === pathIMG) {
            console.log(item.pathColor)
        }
    })
    return 0
}
function createDescriptionBoxes(pathIMG, pathColor, parentSelector, transitiondelay) {
    let parentDIV = document.createElement("div")
    parentDIV.classList = "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 bau-description-layout show-on-scroll opacity-0"
    parentDIV.style.transform = "translateY(20px)"
    parentDIV.style.transitionDuration = "500ms"
    parentDIV.style.transitionDelay = transitiondelay

    let parentLINK = document.createElement("a")
    parentLINK.style = "cursor: pointer"
    parentLINK.setAttribute("onclick", "logColor('" + pathIMG + "')")
    parentLINK.classList = "bau-description-svg card demo-card"
    
    let newSpan = document.createElement("span")
    newSpan.classList = "p-18 card-image d-flex align-self-center"

    let newIMG = document.createElement("img")
    newIMG.src = pathIMG
    newIMG.alt = "layout"

    newSpan.appendChild(newIMG)
    parentLINK.appendChild(newSpan)
    parentDIV.appendChild(parentLINK)
    document.querySelector(parentSelector).appendChild(parentDIV)
}
presentBoxes.forEach((item) => {
    createDescriptionBoxes(item.pathIMG, item.pathColor, item.parentSelector, item.transitiondelay)
})
// description

// feature
transitiondelay = 100
time = 0
function createFeatureBoxes(iconPath, titleTEXT, detailTEXT, parentSelector) {
    let parentDIV = document.createElement("div")
    parentDIV.classList = "col-md-6 col-lg-4 show-on-scroll opacity-0"
    parentDIV.style.transform = "translateY(20px)"
    parentDIV.style.transitionDuration = "500ms"
    parentDIV.style.transitionDelay = transitiondelay + "ms"
    time += 1
    if(time % 3 === 0) {
        transitiondelay = 100
    } else {
        transitiondelay += 100
    }

    let parentBOX = document.createElement("div")
    parentBOX.classList = "feature d-flex"

    let iconBox = document.createElement("div")
    iconBox.classList = "feature-icon"

    let bigIcon = document.createElement("img")
    bigIcon.alt = "hexagon"
    bigIcon.src = "./assets/hexagon.svg"
    iconBox.appendChild(bigIcon)

    let smallIcon = document.createElement("img")
    smallIcon.alt = "icon"
    smallIcon.src = iconPath
    iconBox.appendChild(smallIcon)

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
    createFeatureBoxes(item.iconPath, item.title, item.detail, item.parentSelector)
})
// feature

// all scrolling changes
window.addEventListener("load", function () {
    let elementShouldAnimated = document.querySelectorAll(".show-on-scroll")
    elementShouldAnimated.forEach((item) => {
        if(item.getBoundingClientRect().top <= window.innerHeight - 10 && item.getBoundingClientRect().top >= -10) {
            item.style.transform = "translateY(0px)"
            item.style.transform = "translateX(0px)"
            item.classList.remove("opacity-0")
        }
    })
    window.onscroll = () => {
        if(document.body.scrollTop >=  160) {
            getNavbar.classList.add("navbar-scrolled")
        } else{
            getNavbar.classList.remove("navbar-scrolled")
        }
        if(document.body.scrollTop >= 600){
            if(windowScrollY < window.scrollY){
                windowScrollY = window.scrollY
                getNavbar.classList.add("navbar-hide")
                replaceNavbar.classList.add("navbar-hide")
            }
            localStorage.setItem("navbar-last-status", "hide")
            if(windowScrollY > window.scrollY){
                getNavbar.classList.remove("navbar-hide")
                replaceNavbar.classList.remove("navbar-hide")
                windowScrollY = window.scrollY
            }
        } else {
            localStorage.setItem("navbar-last-status", "show")
        }
        if(window.scrollY < 50) {
            headerScrollBall.style.transform = "translate(0px, -14px)"
        } else {
            headerScrollBall.style.transform = "translate(0px, -" + window.scrollY / 6 + "px)"
        }
        projectShowCaseScrollBall.style.transform = "translate(0px, " + window.scrollY / 20 + "px)"
        varietyScrollBall.style.transform = "translate(0px, " + window.scrollY / 20 + "px)"
        elementShouldAnimated.forEach((item) => {
            if(item.getBoundingClientRect().top <= window.innerHeight - 10 && item.getBoundingClientRect().top >= -20) {
                item.style.transform = "translateY(0px)"
                item.style.transform = "translateX(0px)"
                item.classList.remove("opacity-0")
            }
        })
    }
})
// all scrolling changes

// responsive slider
if(window.innerWidth < 588) {
    windowLastWidth = window.innerWidth
    sliderIMG.forEach((item) => {
        item.style.width = window.innerWidth - 90
    })
}
window.addEventListener("resize", () => {
    if(window.innerWidth < 588) {
        windowLastWidth = window.innerWidth
        sliderIMG.forEach((item) => {
            item.style.width = window.innerWidth - 90
        })
    }
})
// responsive slider