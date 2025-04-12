document.addEventListener('DOMContentLoaded', function() {
    // Get all title elements
    const titles = document.querySelectorAll('.aboutSection-title');
    
    // Add click event to each title
    titles.forEach(title => {
        title.addEventListener('click', function() {
            // Find the corresponding section and paragraph
            const section = this.closest('.aboutSection');
            const paragraph = section.querySelector('.aboutSection-p');
            
            // Toggle active classes
            this.classList.toggle('active');
            
            // Handle max-height
            if (paragraph.classList.contains('active')) {
                paragraph.style.maxHeight = '0';
            } else {
                // Set max-height to scrollHeight when opening
                paragraph.style.maxHeight = paragraph.scrollHeight + 'px';
            }
            
            paragraph.classList.toggle('active');
        });
        
        // Initialize already active sections
        if (title.classList.contains('active')) {
            const paragraph = title.closest('.aboutSection').querySelector('.aboutSection-p');
            paragraph.style.maxHeight = paragraph.scrollHeight + 'px';
        }
    });
});