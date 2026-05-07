// --- 1. Custom Cursor Animation (Lagging Effect) ---
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;

    // Direct movement for the dot
    cursorDot.style.left = `${clientX}px`;
    cursorDot.style.top = `${clientY}px`;

    // Lagging movement for the outline (uses CSS transition delay)
    // IMPORTANT: The outline element's positioning should handle offset in CSS (e.g., translate(-50%, -50%))
    cursorOutline.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 500, fill: "forwards" }); // 500ms duration creates the "lag"
});

// --- 2. Cursor Hover Effects on Inter-actable Items ---
// Targets are links, buttons, and anything with .hover-target
const hoverables = document.querySelectorAll("a, button, .hover-target");

hoverables.forEach((item) => {
    item.addEventListener("mouseover", () => {
        cursorDot.classList.add("hovered");
        cursorOutline.classList.add("hovered");
    });
    item.addEventListener("mouseout", () => {
        cursorDot.classList.remove("hovered");
        cursorOutline.classList.remove("hovered");
    });
});

// --- 3. Scroll Reveal Animations (fade-in sections) ---
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // Distance of reveal trigger

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            // Optional: reveals[i].classList.remove("active"); // Allows it to disappear when you scroll up
        }
    }
}
window.addEventListener("scroll", reveal);

// --- 4. Smooth Scrolling for Navigation Links ---
// Select all links with hashes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
    });
});

});

// --- 5. Initial Animations (Ensure Hero fades in on load) ---
window.addEventListener("load", () => {
    document.querySelectorAll(".fade-in").forEach(el => {
        el.classList.add("visible");
    });
});