document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.querySelector(".mobileMenu");
    const menuMobile = document.querySelector(".menuMobile");
    const header = document.querySelector("header");
    const svgStroke = document.querySelector(".cls-1");

    mobileMenu.addEventListener("click", () => {
        menuMobile.classList.toggle("active"); // Toggle menu visibility

        if (menuMobile.classList.contains("active")) {
            header.classList.add("menu-open");
            svgStroke.style.stroke = "#527ea1"; // Change SVG stroke color
            document.body.style.overflow = "hidden"; // Lock scroll
        } else {
            header.classList.remove("menu-open");
            svgStroke.style.stroke = "#000"; // Restore stroke color
            document.body.style.overflow = "auto"; // Unlock scroll
        }
    });
});
