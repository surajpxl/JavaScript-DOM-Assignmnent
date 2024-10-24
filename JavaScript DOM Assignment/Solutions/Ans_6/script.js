const optionsArray = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

const container = document.getElementById('container');

const heading = document.createElement('h1');
heading.textContent = 'Select an Option';
container.appendChild(heading);

const dropdown = document.createElement('select');
optionsArray.forEach(optionText => {
    const option = document.createElement('option');
    option.textContent = optionText;
    dropdown.appendChild(option);
});

container.appendChild(dropdown);
