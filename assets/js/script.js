// NAVBAR
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// FAQ
document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", () => {
        const item = q.parentElement;

        document.querySelectorAll(".faq-item").forEach(i => {
            if (i !== item) i.classList.remove("active");
        });

        item.classList.toggle("active");
    });
});

// SCROLL ANIMATION
const boxes = document.querySelectorAll('.contact-box');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

boxes.forEach(box => observer.observe(box));

// 🔹 PROJECT CARD SCROLL ANIMATION
const projectCards = document.querySelectorAll('.project-card');

const projectObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

}, { threshold: 0.2 });

projectCards.forEach(card => {
    projectObserver.observe(card);
});