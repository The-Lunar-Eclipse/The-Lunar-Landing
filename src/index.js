document.addEventListener('DOMContentLoaded', function() {
    const starField = document.getElementById('stars');
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    const numStars = 200; // Adjust the number of stars based on your preference

    function clearStars() {
        while (starField.firstChild) {
            starField.removeChild(starField.firstChild);
        }
    }

    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        const x = Math.random() * windowWidth;
        const y = Math.random() * windowHeight;
        const size = Math.random() * 1.6;
        const duration = Math.random() * 1 + 1;

        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDuration = duration + 's';

        starField.appendChild(star);
    }

    function createStars() {
        clearStars(); // Clear existing stars before creating new ones
        for (let i = 0; i < numStars; i++) {
            createStar();
        }
    }

    createStars(); // Create initial stars

    window.addEventListener('resize', function() {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        createStars(); // Recreate stars on window resize
    });
});