const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const authStatus = document.getElementById('authStatus');

function updateAuthStatus() {
    const isLoggedIn = localStorage.getItem('auth') === 'true';
    authStatus.textContent = isLoggedIn ? 'Logged In' : 'Not Logged In';
}

loginBtn.addEventListener('click', function() {
    localStorage.setItem('auth', 'true');
    updateAuthStatus();
});

logoutBtn.addEventListener('click', function() {
    localStorage.removeItem('auth');
    updateAuthStatus();
});

updateAuthStatus();
