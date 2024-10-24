
const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');


fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the selected file
    
   
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader(); 

        reader.onload = function(e) {
            imagePreview.src = e.target.result; 
            imagePreview.style.display = 'block'; 
        };
        
        reader.readAsDataURL(file); 
    } else {
        imagePreview.style.display = 'none'; 
    }
});
