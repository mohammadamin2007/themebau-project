// navbar
let getNavbar = document.querySelector("#navbar")
let replaceNavbar = document.querySelector("#replace-navbar")
let mainNAVLinks = document.querySelectorAll(".main-nav-link")
let fullNavbarLinks = document.querySelectorAll(".nav-link-full")
let socialMediaLinks = document.querySelectorAll(".navbar-social .nav-link")
let mainDropMenus = document.querySelectorAll(".main-dropdown-menu")
let dropMenusONSide = document.querySelectorAll(".side-dropdown-menu")
let linkWithIcon = document.querySelectorAll(".nav-link-navigator")
let fullNavbarLinksWithIcon = document.querySelectorAll(".nav-link-w-navigator")
let fullNavbarLinksIcon = document.querySelectorAll(".nav-link-w-navigator .link-navigator-full .fas")
let fullNavbarCollapseINCollapse = document.querySelectorAll(".collapse-in-collapse")
let fullNavbarCollapsesToggler= document.querySelectorAll(".collapse-toggler")
let windowScrollY = window.scrollY
let navLinkNOTChangeColor = 0
let dropLinkPUTColor = 0
// navbar
// scroll - balls
let headerScrollBall = document.querySelector(".scroll-ball-img")
let projectShowCaseScrollBall = document.querySelector(".scroll-ball-project-case")
let varietyScrollBall = document.querySelector(".scroll-ball-variety")
// scroll - balls
// slider - project - case
// let slider_body_project_case = document.querySelector(".slider-body")
// let pic_positions_project_case = [0, -570, -970, -1540, -1880]
// let distance_project_case = []
// let first_mouse_position_project_case = 0
// let mouse_position = 0
// let transform_slider_project_case = slider_body_project_case.style.transform.replace(/[^\d.]/g, '')
// let index = 0
// let indicator_project_showcase = document.querySelector("#project-showcase .indicator-line")
// let transform_indicator_project_case = indicator_project_showcase.style.transform.replace(/[^\d.]/g, '')
// slider - project - case
// // slider - menu - style
// let slider_body_menu_style = document.querySelectorAll(".slider-body")[1]
// let pic_positions_menu_style = [0, -330]
// let distance_menu_style = []
// let first_mouse_position_menu_style = 0
// let transform_slider_menu_style = slider_body_menu_style.style.transform.replace(/[^\d.]/g, '')
// let indicator_menu_style = document.querySelector("#menu-style .indicator-line")
// slider - menu - style
// footer - float - img
let footerFloatIMG = document.querySelector(".float-img")
let footerLink = document.querySelector(".footer-link")
// footer - float - img
// fullscreen navbar
let fullNavbarTogglers = document.querySelectorAll(".navbar-toggler-replace")
let getFullNavbar = document.querySelector(".full-screen-navbar")
let fullNavbarCloseTogglerLines = document.querySelectorAll(".full-screen-navbar .navbar-toggler-line")
// fullscreen navbar
// header boxes
let transitiondelay = 100
let time = 0
let headerBOXES = [
    el1 = {
        imgPATH: "./assets/main-home-740-600.jpg",
        imgAlt: "main-home",
        textHeader: "main-home",
        parentSelector: "#header .container .header-boxes",
    },
    el2 = {
        imgPATH: "./assets/simple-portfolio-740-600.jpg",
        imgAlt: "simple-portfolio",
        textHeader: "Simple Portfolio",
        parentSelector: "#header .container .header-boxes",
    },
    el3 = {
        imgPATH: "./assets/creative-agency-740-600.jpg",
        imgAlt: "creative-agency",
        textHeader: "Creative Agency",
        parentSelector: "#header .container .header-boxes",
    },
    el4 = {
        imgPATH: "./assets/freelancer-portfolio-740-600.jpg",
        imgAlt: "freelancer-portfolio",
        textHeader: "Freelancer Portfolio",
        parentSelector: "#header .container .header-boxes",
    },
    el5 = {
        imgPATH: "./assets/interactive-dark-740-600.jpg",
        imgAlt: "interactive-dark",
        textHeader: "Interactive Dark",
        parentSelector: "#header .container .header-boxes",
    },
    el6 = {
        imgPATH: "./assets/digital-agency-740-600.jpg",
        imgAlt: "digital-agency",
        textHeader: "Digital Agency",
        parentSelector: "#header .container .header-boxes",
    },
    el7 = {
        imgPATH: "./assets/fullscreen-slider-740-362.jpg",
        imgAlt: "fullscreen-slider",
        textHeader: "Fullscreen Slider",
        parentSelector: "#header .container .header-boxes",
    },
    el8 = {
        imgPATH: "./assets/carousel-light-740-362.jpg",
        imgAlt: "carousel-light",
        textHeader: "Carousel Light",
        parentSelector: "#header .container .header-boxes",
    },
    el9 = {
        imgPATH: "./assets/carousel-dark-740-362.jpg",
        imgAlt: "carousel-dark",
        textHeader: "Carousel Dark",
        parentSelector: "#header .container .header-boxes",
    },
    el10 = {
        imgPATH: "./assets/interactive-light-740-600.jpg",
        imgAlt: "interactive-light",
        textHeader: "Interactive Light",
        parentSelector: "#header .container .header-boxes",
    },
    el11 = {
        imgPATH: "./assets/left-menu-740-600.jpg",
        imgAlt: "left-menu",
        textHeader: "Left Menu",
        parentSelector: "#header .container .header-boxes",
    }
]
// header boxes
// present unique
let presentBoxes = [
    el1 = {
        pathIMG: "./assets/layout-1.svg",
        pathColor: "red",
        parentSelector: "#themebau-description .container .themebau-bottom-description-model",
        transitiondelay: "150ms",
    }
    ,el2 = {
        pathIMG: "./assets/layout-2.svg",
        pathColor: "green",
        parentSelector: "#themebau-description .container .themebau-bottom-description-model",
        transitiondelay: "100ms",
    }
    ,el3 = {
        pathIMG: "./assets/layout-3.svg",
        pathColor: "yellow",
        parentSelector: "#themebau-description .container .themebau-bottom-description-model",
        transitiondelay: "0ms",
    }
    ,el4 = {
        pathIMG: "./assets/layout-4.svg",
        pathColor: "black",
        parentSelector: "#themebau-description .container .themebau-bottom-description-model",
        transitiondelay: "0ms",
    }
    ,el5 = {
        pathIMG: "./assets/layout-5.svg",
        pathColor: "blue",
        parentSelector: "#themebau-description .container .themebau-bottom-description-model",
        transitiondelay: "100ms",
    },
    el6 = {
        pathIMG: "./assets/layout-6.svg",
        pathColor: "white",
        parentSelector: "#themebau-description .container .themebau-bottom-description-model",
        transitiondelay: "150ms",
    }
]
// present unique
// features
let features = [
    el1 = {
        iconPath: "./assets/bootstrap.svg",
        title: "Bootstrap 4",
        detail: "Themebau based on Bootstrap 4, so layout changes is so much easily.",
        parentSelector: "#themebau-features .container .row",
    },
    el2 = {
        iconPath: "./assets/sass.svg",
        title: "Sass Available",
        detail: "Easy customization with SASS variables. You can change colors, typography and more.",
        parentSelector: "#themebau-features .container .row",
    },
    el3 = {
        iconPath: "./assets/figma.svg",
        title: "Figma Files Included",
        detail: "We provided a source Figma file with Themebau.",
        parentSelector: "#themebau-features .container .row",
    },
    el4 = {
        iconPath: "./assets/heart.svg",
        title: "Modern Design",
        detail: "High usability, organizing content, fully responsive design as per latest design trends.",
        parentSelector: "#themebau-features .container .row",
    },
    el5 = {
        iconPath: "./assets/support.svg",
        title: "Customer Support",
        detail: "We are here to help you if you have any queries about template.",
        parentSelector: "#themebau-features .container .row",
    },
    el6 = {
        iconPath: "./assets/update.svg",
        title: "Regular Updates",
        detail: "Lifetime reliable and regular updates with your purchase.",
        parentSelector: "#themebau-features .container .row",
    }
]
// features