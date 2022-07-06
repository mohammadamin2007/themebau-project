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

// all - scrolling - changes
window.onscroll = function() {
    if(document.body.scrollTop >=  160) {
        navbar.classList.add("navbar-scrolled")
    } else{
        navbar.classList.remove("navbar-scrolled")
    }
    if(document.body.scrollTop >= 600){
        if(window_scroll < window.scrollY){
            window_scroll = window.scrollY
            navbar.classList.add("navbar-hide")
            replace_navbar.classList.add("navbar-hide")
            localStorage.setItem("navbar-last-status", "hide")
        }
        if(window_scroll > window.scrollY){
            navbar.classList.remove("navbar-hide")
            replace_navbar.classList.remove("navbar-hide")
            window_scroll = window.scrollY
            localStorage.setItem("navbar-last-status", "show")
        }
    }
    scroll_ball.style.transform = "translate(0px, -" + window.scrollY / 6+ "px)"
    scroll_ball_project_case.style.transform = "translate(0px, " + window.scrollY / 20 + "px)"
    scroll_ball_varity.style.transform = "translate(0px, " + window.scrollY / 20 + "px)"
}
// all - scrolling - changes

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
    float_img.style.transform = "matrix(1, 0, 0, 1 ," + (e.clientX - 200) + " ," + (e.clientY - 400) + ")"
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
// element maker - clid
function make_element(type, Id, classes = []){
    element = document.createElement(type)
    for(let i  = 0; i < classes.length; i++) {
        element.classList.add(classes[i])
    }
    if(Id != "") {
        element.setAttribute("id", Id)
    }
    return element
}
function pclid(type ,propertys) {
    element = document.createElement(type)
    for(let e = 0; e < Object.keys(propertys).length; e++) {
        element.setAttribute(Object.keys(propertys)[e], Object.values(propertys)[e])
    }
    return element
}
// element maker - clid
// header boxes
for(let i = 0; i < present_boxes.length; i++) {
    parentel = make_element(present_boxes[i].type, "", present_boxes[i].classes)
    for(let y = 0; y < present_boxes[i].inner_child_count; y++) {
        code = "present_boxes["+ i +"].inner_child_" + y.toString()
        type = "present_boxes["+ i +"].inner_child_" + y.toString() + ".type"
        classes = "present_boxes["+ i +"].inner_child_" + y.toString() + ".classes"
        p_element = make_element(eval(type), "", eval(classes))
        for(let z = 0; z < eval(code).inner_child_count; z++) {
            code2 = "present_boxes["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString()
            type = "present_boxes["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".type"
            classes = "present_boxes["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".classes"
            p2_element = make_element(eval(type), "", eval(classes))
            for(let w = 0; w < eval(code2).inner_child_count; w++) {
                code3 = "present_boxes["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_" + w.toString()
                type = "present_boxes["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+w.toString() +".type"
                propertys = "present_boxes["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+ w.toString()+ ".propertys"
                p3_element = pclid(eval(type), eval(propertys))
                for(let q = 0; q < eval(code).inner_child_count; q++) {
                    code3 = "present_boxes["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_" + w.toString() + q.toString()
                    type = "present_boxes["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+w.toString() +  ".inner_child_"+ q.toString() +".type"
                    propertys = "present_boxes["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+ w.toString()+  ".inner_child_"+ q.toString() +".propertys"
                    p4_element = pclid(eval(type), eval(propertys))
                    p3_element.appendChild(p4_element)
                }
                p2_element.appendChild(p3_element)
            }
            p_element.appendChild(p2_element)
        }
    }
    parentel.appendChild(p_element)
}
// header boxes
// feature
for(let i = 0; i < features.length; i++) {
    parentel = make_element(features[i].type, "", features[i].classes)
    for(let y = 0; y < features[i].inner_child_count; y++) {
        code = "features["+ i +"].inner_child_" + y.toString()
        type = "features["+ i +"].inner_child_" + y.toString() + ".type"
        classes = "features["+ i +"].inner_child_" + y.toString() + ".classes"
        p_element = make_element(eval(type), "", eval(classes))
        for(let z = 0; z < eval(code).inner_child_count; z++) {
            code2 = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString()
            type = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".type"
            classes = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".classes"
            p2_element = make_element(eval(type), "", eval(classes))
            for(let w = 0; w < eval(code2).inner_child_count; w++) {
                code3 = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_" + w.toString()
                type = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+w.toString() +".type"
                switch(eval(type)) {
                    case "svg":       
                        propertys = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+ w.toString()+ ".propertys"
                        p3_element = pclid(eval(type), eval(propertys))
                        p2_element.appendChild(p3_element)
                        for(let q = 0; q < eval(code3).inner_child_count; q++) {
                            code4 = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_" + w.toString() + q.toString()
                            type = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+w.toString() +  ".inner_child_"+ q.toString() +".type"
                            propertys = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+ w.toString()+  ".inner_child_"+ q.toString() +".propertys"
                            p4_element = pclid(eval(type), eval(propertys))
                            p3_element.appendChild(p4_element)
                        }
                        break
                    case "div":
                        code3 = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_" + w.toString()
                        type = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+w.toString() +".type"
                        classes = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+w.toString() +".classes"
                        text = "features["+ i +"].inner_child_" + y.toString() + ".inner_child_" + z.toString() + ".inner_child_"+w.toString() +".text"
                        p4_element = make_element(eval(type), "", eval(classes))
                        p4_element.textContent = eval(text)
                        p2_element.appendChild(p4_element)
                        break
                }
            }
            p_element.appendChild(p2_element)
        }
    }
    parentel.appendChild(p_element)
}
// feature
// animation page
// animation page