'use strick';

/**
 * add event on multiplem elements
 * 
*/

const addEventOnElement = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

/**
 * navbar toggle for mobile
 * */
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElement([navToggleBtn, overlay], "click", toggleNavbar)


// Parallax Effect 
const parallaxElements = document.querySelectorAll("[data-parallax]");

window.addEventListener("mousemove", event => {
    parallaxElements.forEach(element => {
        const parallaxSpeed = parseFloat(element.getAttribute("data-parallax-speed"));
        const movementX = (event.clientX / window.innerWidth - 0.5) * parallaxSpeed;
        const movementY = (event.clientY / window.innerHeight - 0.5) * parallaxSpeed;

        element.style.transform = `translate(${movementX}px, ${movementY}px)`;
    });
});



