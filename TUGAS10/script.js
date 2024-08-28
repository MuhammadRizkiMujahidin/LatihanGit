document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validasi form
        if (!name || !email || !message) {
            alert('Semua field harus diisi.');
            event.preventDefault();
            return;
        }
        
        // Validasi email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Email tidak valid.');
            event.preventDefault();
            return;
        }
    });
});
