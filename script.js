
// ==================================
// TYPING ANIMATION
// ==================================

const typingElement = document.getElementById("typing");

const words = [
    "Data Enthusiast",
    "Python Developer",
    "Problem Solver",
    "Technology Explorer" ,
    "Freelance Professional",
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingElement.textContent =
        currentWord.substring(0, characterIndex);

    let speed = deleting ? 55 : 100;

    if (!deleting && characterIndex === currentWord.length) {
        deleting = true;
        speed = 1400;
    }

    if (deleting && characterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ==================================
// MOBILE NAVIGATION
// ==================================

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {

    navigation.classList.toggle("open");

    menuToggle.textContent =
        navigation.classList.contains("open") ? "✕" : "☰";

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll("#navigation a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");
        menuToggle.textContent = "☰";

    });

});


// ==================================
// AUTOMATIC COPYRIGHT YEAR
// ==================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==================================
// BACK TO TOP
// ==================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==================================
// SCROLL REVEAL ANIMATION
// ==================================

const revealElements = document.querySelectorAll(
    ".section-heading, .skill-card, .project-card, .timeline-item"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// ==================================
// ACTIVE NAVIGATION
// ==================================

const pageSections = document.querySelectorAll(
    "section[id]"
);

const navLinks = document.querySelectorAll(
    "#navigation a"
);

const sectionObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navLinks.forEach(link => {

                link.classList.toggle(
                    "active",
                    link.getAttribute("href") ===
                    "#" + entry.target.id
                );

            });

        }

    });

}, {
    rootMargin: "-35% 0px -55% 0px"
});

pageSections.forEach(section => {

    sectionObserver.observe(section);

});
