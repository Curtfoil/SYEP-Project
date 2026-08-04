const button = document.getElementById('color-btn');

button.addEventListener('click', () => {
    // Generate a random hex color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});