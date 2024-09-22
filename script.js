document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Display the alert
        alert('Thank you for reaching out! We will get back to you soon.');

        // Optionally, reset the form after submission
        contactForm.reset();
    });
});