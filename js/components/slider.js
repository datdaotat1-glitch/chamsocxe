export function initSlider() {
    const slider = document.getElementById('ba-slider');
    if (!slider) return;

    const beforeImage = slider.querySelector('.image-before');
    const handle = slider.querySelector('.slider-handle');
    let isDragging = false;

    const updateSlider = (x) => {
        const rect = slider.getBoundingClientRect();
        let percentage = (x - rect.left) / rect.width * 100;

        // Clamp
        percentage = Math.max(0, Math.min(100, percentage));

        beforeImage.style.width = `${percentage}%`;
        handle.style.left = `${percentage}%`;
    };

    // Mouse Events
    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        updateSlider(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        updateSlider(e.clientX);
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Touch Events
    slider.addEventListener('touchstart', (e) => {
        isDragging = true;
        updateSlider(e.touches[0].clientX);
    });

    window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        updateSlider(e.touches[0].clientX);
    });

    window.addEventListener('touchend', () => {
        isDragging = false;
    });
}
