//Navigation bar effects on scroll
window.addEventListener("scroll", function () {
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Services section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function (modalClick) {
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

//Our clients - Swiper
var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


//Website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});
/*
//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({
    //reset: true,
    distance: '90px',
    duration: 1000,
    delay: 50,
});

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.home .info .btn', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home-img, .about-img', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.about .description, .contact-right', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.about .professional-list li', { delay: 500, origin: 'right', interval: 200 });
ScrollReveal().reveal('.skills-description, .services-description, .contact-card, .client-swiper, .contact-left h2', { delay: 700, origin: 'left' });
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', { delay: 800, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('footer .group', { delay: 500, origin: 'top', interval: 200 });
*/
// new animation 
ScrollReveal({
    reset: true,  // Allow re-triggering the animation
    distance: '0px',  // No distance, no sliding effect
    duration: 800,  // Faster animation for less delay
    delay: 50,
    scale: 0.9,  // Slightly smaller to simulate zoom-in effect
    easing: 'ease-out', // Smoother zoom effect
    opacity: 1,  // Ensure full visibility without delay
});

ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 500 });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 600 });
ScrollReveal().reveal('.home .info .btn', { delay: 700 });
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 500, interval: 200 });
ScrollReveal().reveal('.home-img, .about-img', { delay: 500 });
ScrollReveal().reveal('.about .description, .contact-right', { delay: 600 });
ScrollReveal().reveal('.about .professional-list li', { delay: 500, interval: 200 });
ScrollReveal().reveal('.skills-description, .services-description, .contact-card, .client-swiper, .contact-left h2', { delay: 700 });
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', { delay: 800, interval: 200 });
ScrollReveal().reveal('footer .group', { delay: 500, interval: 200 });



// refresh to home page
document.addEventListener('DOMContentLoaded', function () {
    // Check if the current path is not the home page
    if (window.location.hash !== '#home') {
        window.location.hash = '#home'; // Redirects to the home section
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    }
});

// tying animation
var typed = new Typed(".auto-type", {
    strings: ["Rabuma", "Rabuma", "Rabuma"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});


/* display preview project on new tab by onclick function

function openConvertor() {
    window.open('convertor.html', '_blank');
}

function openCalculator() {
    window.open('calculator.html', '_blank');
}

function openQuiz() {
    window.open('quiz.html', '_blank');
}
*/


// Close portfolio modal when clicking outside the modal content
document.addEventListener("click", function (event) {
    portfolioModals.forEach((modal) => {
        const modalBody = modal.querySelector(".portfolio-model-body");

        // If the modal is active and the click is outside the modal body, close it
        if (modal.classList.contains("active") && !modalBody.contains(event.target) && !event.target.closest(".img-card")) {
            modal.classList.remove("active");
        }
    });
});

//

document.addEventListener("click", function (event) {
    const serviceModals = document.querySelectorAll(".service-modal");
    serviceModals.forEach((modal) => {
        const modalBody = modal.querySelector(".service-modal-body");

        // If the modal is active and the click is outside the modal body, close it
        if (modal.classList.contains("active") && !modalBody.contains(event.target) && !event.target.closest(".service-card")) {
            modal.classList.remove("active");
        }
    });
});

// To open the service modal when the "Learn More" button is clicked
const learnMoreButtons = document.querySelectorAll(".learn-more-btn");
learnMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const serviceContainer = button.closest(".service-container");
        const serviceModal = serviceContainer.querySelector(".service-modal");
        serviceModal.classList.add("active");
    });
});

// Close the modal when the close button is clicked
const closeModalButtons = document.querySelectorAll(".modal-close-btn");
closeModalButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const serviceModal = button.closest(".service-modal");
        serviceModal.classList.remove("active");
    });
});

//fasttttt

// This is a function that waits a moment before running another function
function debounce(func, delay) {
    let timeout; // This will keep track of the waiting time
    return function(...args) {
        const context = this; // Save the current context
        clearTimeout(timeout); // Clear the previous timer
        timeout = setTimeout(() => func.apply(context, args), delay); // Set a new timer
    };
}

// This adds the scroll event listener with debouncing
window.addEventListener("scroll", debounce(() => {
    console.log("Scrolling happened!");
}, 200)); // Runs the function 200 milliseconds after scrolling stops



// disable a_blank - opening in new tab
document.addEventListener("DOMContentLoaded", function() {
    // Select all anchor tags (<a>) on the page
    const links = document.querySelectorAll('a[target="_blank"]');
    
    // Loop through each link and remove the target="_blank" attribute
    links.forEach(link => {
      link.removeAttribute('target');
    });
  });
  



