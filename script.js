//your JS code here. If required.
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    // Check if user is already logged in using cookies
    const storedUsername = getCookie('username');
    if (storedUsername) {
        alert(`Welcome back, ${storedUsername}!`);
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulate a login check (replace with actual authentication logic)
        if (username === 'demo' && password === 'password') {
            alert('Login successful!');
            
            // Set the username in a cookie
            setCookie('username', username, 7); // Cookie expires in 7 days
        } else {
            alert('Invalid username or password');
        }
    });
});

// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to get a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}

// Function to delete a cookie by name
function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}

