let counter = 0;
const counterDisplay = document.getElementById('counterDisplay');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');

incrementBtn.addEventListener('click', function() {
    counter++;
    counterDisplay.textContent = counter;
});

decrementBtn.addEventListener('click', function() {
    if (counter > 0) {
        counter--;
        counterDisplay.textContent = counter;
    } else {
        alert('Counter cannot go below zero');
    }
});
