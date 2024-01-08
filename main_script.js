window.onload = function() {
    let loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        updateGreeting(loggedInUser);
    }
}

function updateGreeting(username) {
    // Select the greeting element
    let greetingElement = document.getElementById('usernameGreeting');

    // Update the text content of the greeting element
    greetingElement.textContent = `Welcome back, ${username}!`;
}