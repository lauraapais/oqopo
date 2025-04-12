const slides = document.querySelectorAll(".slide");
const circles = document.querySelectorAll(".circle");

let currentIndex = 0;
let interval; 

function updateActiveElements(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    circles.forEach(circle => circle.classList.remove("active"));

    slides[index].classList.add("active");
    circles[index].classList.add("active");
}

function startAutoSlide() {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateActiveElements(currentIndex);
    }, 3000);
}

circles.forEach((circle, index) => {
    circle.addEventListener("click", () => {
        clearInterval(interval); 
        currentIndex = index;
        updateActiveElements(currentIndex);
        startAutoSlide(); 
    });
});

startAutoSlide();
