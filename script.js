document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('customButton');
    button.addEventListener('click', () => {
        alert('Custom button clicked!');
        // Implement custom functionality here
    });

    // Example of modifying existing game logic
    // Assuming the game has a global object named `game`
    if (window.game) {
        window.game.customFeature = () => {
            console.log('Custom feature activated');
            // Add custom functionality to the game
        };
    }
});
