// navbar
let navbar = document.querySelector("#navbar")
let replace_navbar = document.querySelector("#replace-navbar")
let main_nav_link = document.querySelectorAll(".main-nav-link")
let nav_link_full = document.querySelectorAll(".nav-link-full")
let nav_link_social = document.querySelectorAll(".navbar-social .nav-link")
let main_drop_menu = document.querySelectorAll(".main-dropdown-menu")
let side_drop_menu = document.querySelectorAll(".side-dropdown-menu")
let navigetor_link = document.querySelectorAll(".nav-link-navigator")
let full_navigator_link = document.querySelectorAll(".nav-link-w-navigator")
let angle = document.querySelectorAll(".nav-link-w-navigator .link-navigator-full .fas")
let collapse_full_navbar = document.querySelectorAll(".collapse-in-collapse") 
let collapse_toggler= document.querySelectorAll(".collapse-toggler") 
let window_scroll = window.scrollY
let n_c = 0
let show_drop = false
let w_n_l = false 
// navbar
// make element
let element = document.createElement("a")
// make element
// scroll - balls
let scroll_ball = document.querySelector(".scroll-ball-img")
let scroll_ball_project_case = document.querySelector(".scroll-ball-project-case")
let scroll_ball_varity = document.querySelector(".scroll-ball-varity")
// scroll - balls
// slider - project - case
let slider_body_project_case = document.querySelector(".slider-body")
let pic_positions_project_case = [0, -570, -970, -1540, -1880]
let distance_project_case = []
let first_mouse_position_project_case = 0
let mouse_position = 0
let transform_slider_project_case = slider_body_project_case.style.transform.replace(/[^\d.]/g, '')
let index = 0
// slider - project - case
// slider - menu - style
let slider_body_menu_style = document.querySelectorAll(".slider-body")[1]
let pic_positions_menu_style = [0, -330]
let distance_menu_style = []
let first_mouse_position_menu_style = 0
let transform_slider_menu_style = slider_body_menu_style.style.transform.replace(/[^\d.]/g, '')
// slider - menu - style
// footer - float - img
let float_img = document.querySelector(".float-img")
let footer_link = document.querySelector(".footer-link")
let client_y = 0
let client_x = 0
// footer - float - img
// fullscreen navbar
let fullnavbar_open_close = document.querySelectorAll(".navbar-toggler-replace")
let full_navbar = document.querySelector(".full-screen-navbar")
let toggler_lines = document.querySelectorAll(".full-screen-navbar .navbar-toggler-line")
// fullscreen navbar