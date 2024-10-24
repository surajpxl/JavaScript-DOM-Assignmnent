const themeToggleBtn = document.getElementById('themeToggleBtn');
const modeText = document.getElementById('modeText');

themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    
    modeText.textContent = document.body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
});
