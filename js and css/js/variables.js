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
let varityScrollBall = document.querySelector(".scroll-ball-varity")
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
let fullNavbarCloseTooglerLines = document.querySelectorAll(".full-screen-navbar .navbar-toggler-line")
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
// present uniqu
let peresentBoxes = [
    el1 = {
        pathData: "M134 0H0V50H134V0ZM134 59H0V109H134V59Z",
        pathColor: "red",
        parentSelector: "#themebau-description .container .themebau-bottom-description-model",
        transitiondelay: "150ms",
    }
    ,el2 = {
        pathData: "M62 0H0V50H62V0ZM62 59H0V109H62V59ZM72 59H134V109H72V59ZM134 0H72V50H134V0Z",
        pathColor: "green",
        parentSelector: "#themebau-description .container .themebau-bottom-description-model",
        transitiondelay: "100ms",
    }
    ,el3 = {
        pathData: "M62 0H0V64H62V0ZM134 45H72V109H134V45ZM72 0H134V36H72V0ZM62 73H0V109H62V73Z",
        pathColor: "yellow",
        parentSelector: "#themebau-description .container .themebau-bottom-description-model",
        transitiondelay: "0ms",
    }
    ,el4 = {
        pathData: "M38 0H0V50H38V0ZM86 0H47V50H86V0ZM95 0H134V50H95V0ZM38 59H0V109H38V59ZM47 59H86V109H47V59ZM134 59H95V109H134V59Z",
        pathColor: "black",
        parentSelector: "#themebau-description .container .themebau-bottom-description-model",
        transitiondelay: "0ms",
    }
    ,el5 = {
        pathData: "M38 0H0V62H38V0ZM86 0H47V38H86V0ZM95 0H134V62H95V0ZM38 71H0V109H38V71ZM47 47H86V109H47V47ZM134 71H95V109H134V71Z",
        pathColor: "blue",
        parentSelector: "#themebau-description .container .themebau-bottom-description-model",
        transitiondelay: "100ms",
    },
    el6 = {
        pathData: "M29 0H0V32H29V0ZM29 38H0V71H29V38ZM0 77H29V109H0V77ZM64 0H35V32H64V0ZM35 38H64V71H35V38ZM64 77H35V109H64V77ZM70 0H99V32H70V0ZM99 38H70V71H99V38ZM70 77H99V109H70V77ZM134 0H105V32H134V0ZM105 38H134V71H105V38ZM134 77H105V109H134V77Z",
        pathColor: "white",
        parentSelector: "#themebau-description .container .themebau-bottom-description-model",
        transitiondelay: "150ms",
    }
]
// present uniqu
// features
let features = [
    el1 = {
        width: 17,
        height: 23,
        d: "M1 11.5H10.2308C11.4548 11.5 12.6288 10.9469 13.4943 9.96231C14.3599 8.97774 14.8462 7.64239 14.8462 6.25C14.8462 4.85761 14.3599 3.52226 13.4943 2.53769C12.6288 1.55312 11.4548 1 10.2308 1H1V11.5ZM1 11.5H11.3846C12.6087 11.5 13.7826 12.0531 14.6482 13.0377C15.5137 14.0223 16 15.3576 16 16.75C16 18.1424 15.5137 19.4777 14.6482 20.4623C13.7826 21.4469 12.6087 22 11.3846 22H1V11.5Z",
        title: "Bootstrap 4",
        detail: "Themebau based on Bootstrap 4, so layout changes is so much easily.",
        parentSelector: "#themebau-features .container .row",
    },
    el2 = {
        width: 17,
        height: 23,
        d: "M1 11.5H10.2308C11.4548 11.5 12.6288 10.9469 13.4943 9.96231C14.3599 8.97774 14.8462 7.64239 14.8462 6.25C14.8462 4.85761 14.3599 3.52226 13.4943 2.53769C12.6288 1.55312 11.4548 1 10.2308 1H1V11.5ZM1 11.5H11.3846C12.6087 11.5 13.7826 12.0531 14.6482 13.0377C15.5137 14.0223 16 15.3576 16 16.75C16 18.1424 15.5137 19.4777 14.6482 20.4623C13.7826 21.4469 12.6087 22 11.3846 22H1V11.5Z",
        title: "Sass Available",
        detail: "Easy customization with SASS variables. You can change colors, typography and more.",
        parentSelector: "#themebau-features .container .row",
    },
    el3 = {
        width: 17,
        height: 25,
        d: "M8.5 1H4.75C3.75544 1 2.80161 1.40387 2.09835 2.12276C1.39509 2.84165 1 3.81667 1 4.83333C1 5.85 1.39509 6.82502 2.09835 7.54391C2.80161 8.2628 3.75544 8.66667 4.75 8.66667M8.5 1V8.66667M8.5 1H12.25C12.7425 1 13.2301 1.09915 13.6851 1.2918C14.14 1.48444 14.5534 1.7668 14.9017 2.12276C15.2499 2.47872 15.5261 2.9013 15.7145 3.36638C15.903 3.83146 16 4.32993 16 4.83333C16 5.33673 15.903 5.83521 15.7145 6.30029C15.5261 6.76537 15.2499 7.18795 14.9017 7.54391C14.5534 7.89987 14.14 8.18223 13.6851 8.37487C13.2301 8.56751 12.7425 8.66667 12.25 8.66667M8.5 8.66667H4.75M8.5 8.66667H12.25M8.5 8.66667V16.3333M4.75 8.66667C3.75544 8.66667 2.80161 9.07053 2.09835 9.78942C1.39509 10.5083 1 11.4833 1 12.5C1 13.5167 1.39509 14.4917 2.09835 15.2106C2.80161 15.9295 3.75544 16.3333 4.75 16.3333M12.25 8.66667C11.7575 8.66667 11.2699 8.76582 10.8149 8.95846C10.36 9.1511 9.94657 9.43347 9.59835 9.78942C9.25013 10.1454 8.97391 10.568 8.78545 11.033C8.597 11.4981 8.5 11.9966 8.5 12.5C8.5 13.0034 8.597 13.5019 8.78545 13.967C8.97391 14.432 9.25013 14.8546 9.59835 15.2106C9.94657 15.5665 10.36 15.8489 10.8149 16.0415C11.2699 16.2342 11.7575 16.3333 12.25 16.3333C12.7425 16.3333 13.2301 16.2342 13.6851 16.0415C14.14 15.8489 14.5534 15.5665 14.9017 15.2106C15.2499 14.8546 15.5261 14.432 15.7145 13.967C15.903 13.5019 16 13.0034 16 12.5C16 11.9966 15.903 11.4981 15.7145 11.033C15.5261 10.568 15.2499 10.1454 14.9017 9.78942C14.5534 9.43347 14.14 9.1511 13.6851 8.95846C13.2301 8.76582 12.7425 8.66667 12.25 8.66667ZM4.75 16.3333C3.75544 16.3333 2.80161 16.7372 2.09835 17.4561C1.39509 18.175 1 19.15 1 20.1667C1 21.1833 1.39509 22.1584 2.09835 22.8772C2.80161 23.5961 3.75544 24 4.75 24C5.74456 24 6.69839 23.5961 7.40165 22.8772C8.10491 22.1584 8.5 21.1833 8.5 20.1667V16.3333M4.75 16.3333H8.5",
        title: "Figma Files Included",
        detail: "We provided a source Figma file with Themebau.",
        parentSelector: "#themebau-features .container .row",
    },
    el4 = {
        width: 23,
        height: 20,
        d: "M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L11.4997 19L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z",
        title: "Modern Design",
        detail: "High usability, organizing content, fully responsive design as per latest design trends.",
        parentSelector: "#themebau-features .container .row",
    },
    el5 = {
        width: 24,
        height: 24,
        d: "M8.799 8.7C9.05761 7.96483 9.56807 7.34492 10.24 6.95005C10.9118 6.55518 11.7018 6.41083 12.4699 6.54258C13.238 6.67433 13.9347 7.07368 14.4366 7.66988C14.9385 8.26609 15.2132 9.02067 15.212 9.8C15.212 12 11.912 13.1 11.912 13.1M12 17.5H12.011M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z",
        title: "Customer Support",
        detail: "We are here to help you if you have any queries about template.",
        parentSelector: "#themebau-features .container .row",
    },
    el6 = {
        width: 23,
        height: 20,
        d: "M22 1.9979V7.99947M22 7.99947H16.2727M22 7.99947L17.5709 3.63833C16.545 2.56276 15.2758 1.77704 13.8818 1.3545C12.4877 0.931957 11.0142 0.886355 9.59882 1.22195C8.1834 1.55755 6.87217 2.2634 5.78749 3.27365C4.70281 4.2839 3.88002 5.56562 3.39591 6.99921M1 18.0021V12.0005M1 12.0005H6.72727M1 12.0005L5.42909 16.3617C6.45499 17.4372 7.72417 18.223 9.11823 18.6455C10.5123 19.068 11.9858 19.1136 13.4012 18.778C14.8166 18.4425 16.1278 17.7366 17.2125 16.7263C18.2972 15.7161 19.12 14.4344 19.6041 13.0008",
        title: "Regular Updates",
        detail: "Lifetime reliable and regular updates with your purchase.",
        parentSelector: "#themebau-features .container .row",
    }
]
// features