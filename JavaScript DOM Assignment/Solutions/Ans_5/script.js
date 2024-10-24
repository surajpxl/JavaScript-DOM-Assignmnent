const toggleBtn = document.getElementById('toggleBtn');
const imageState = document.getElementById('imageState');
const toggleImage = document.getElementById('toggleImage');

toggleBtn.addEventListener('click', function() {
    if (toggleImage.style.display === 'none') {
        toggleImage.style.display = 'block';
        imageState.textContent = 'Image is Visible';
    } else {
        toggleImage.style.display = 'none';
        imageState.textContent = 'Image is Hidden';
    }
});
