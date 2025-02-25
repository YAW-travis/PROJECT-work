document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    let errorMessage = '';

    if (!passwordPattern.test(password)) {
        errorMessage = 'Password must be at least 6 characters long, contain numbers and symbols.';
    } else if (password !== confirmPassword) {
        errorMessage = 'Passwords do not match.';
    }

    if (errorMessage) {
        alert(errorMessage);
    } else {
        // Store registration details in local storage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('email', email);
        alert('Registration successful!');
        document.getElementById('registerForm').reset();
        window.location.href = 'login.html'; // Redirect to login page after registration
    }
});
