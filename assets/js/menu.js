document.addEventListener('DOMContentLoaded', function() {
    const menuOpen = document.getElementById('menuOpen');
    const menuMobile = document.getElementById('menuMobile');
    let isMenuOpen = false;

    // Initialize menu state (closed)
    menuMobile.style.opacity = '0';
    menuMobile.style.pointerEvents = 'none';
    menuMobile.style.visibility = 'hidden';

    menuOpen.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen; // Toggle state

        if (isMenuOpen) {
            // Open menu
            menuMobile.style.visibility = 'visible';
            menuMobile.style.pointerEvents = 'auto';
            menuMobile.style.opacity = '1';
            menuOpen.textContent = 'Fechar';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            // Close menu
            menuMobile.style.opacity = '0';
            menuMobile.style.pointerEvents = 'none';
            // Wait for transition to complete before hiding
            setTimeout(() => {
                menuMobile.style.visibility = 'hidden';
            }, 300); // Match this with your CSS transition duration
            menuOpen.textContent = 'Menu';
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
});