// Toggle the mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Handle form submission (you can integrate this with a back-end or use a service)
function handleSubmit(event) {
    event.preventDefault();
    alert('Your message has been sent!');
    document.getElementById('contactForm').reset();
}
