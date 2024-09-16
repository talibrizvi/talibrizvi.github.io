document.addEventListener("DOMContentLoaded", function() {
    const heading = document.querySelector('.Heading');
    const text = heading.textContent;
    heading.textContent = '';

    // Split each letter into its own span for individual animation
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;

        // Check if the character is a space and add class 'space' for proper spacing
        if (char === ' ') {
            span.classList.add('letter', 'space');
        } else {
            span.classList.add('letter');
        }

        span.style.animationDelay = `${index * 0.2}s`; // Delay to create the wave effect
        heading.appendChild(span);
    });
});
