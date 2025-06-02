document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;
  const interval = 5000; // Change slide every 3 seconds
  
  // Initialize first slide
  slides[currentIndex].classList.add('active');
  
  function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    
    // Prepare next slide
    slides[nextIndex].classList.add('next');
    
    setTimeout(() => {
      // Animate current slide out and next slide in
      slides[currentIndex].classList.remove('active');
      slides[currentIndex].classList.add('exiting');
      
      slides[nextIndex].classList.remove('next');
      slides[nextIndex].classList.add('active');
      
      // Reset after animation completes
      setTimeout(() => {
        slides[currentIndex].classList.remove('exiting');
        currentIndex = nextIndex;
      }, 1000);
    }, 10);
  }
  
  // Start automatic sliding
  setInterval(nextSlide, interval);
});