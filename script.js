document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    let currentSection = 'home';
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.dataset.section;
            if (targetSection === currentSection) return;
            
            // Update navigation active state
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            
            // Get current and target sections
            const current = document.getElementById(currentSection);
            const target = document.getElementById(targetSection);
            
            // Add previous class to current section
            current.classList.add('previous');
            current.classList.remove('active');
            
            // Show new section
            target.classList.add('active');
            
            // Update current section
            currentSection = targetSection;
            
            // Clean up previous class after animation
            setTimeout(() => {
                current.classList.remove('previous');
            }, 500);
        });
    });

    // Form handlers
    document.getElementById('orderForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Order submitted! Your cyber pizza is being prepared.');
    });

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message sent! We will respond through the neural network shortly.');
    });
});