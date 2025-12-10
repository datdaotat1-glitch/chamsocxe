export function initTracking() {
    const trackBtn = document.getElementById('track-btn');
    const plateInput = document.getElementById('plate-input');
    const resultDiv = document.getElementById('tracking-result');

    if (!trackBtn || !plateInput) return;

    trackBtn.onclick = () => {
        const plate = plateInput.value.trim().toUpperCase();
        if (!plate) {
            alert('Vui lòng nhập biển số xe!');
            return;
        }

        // Mock Logic: If plate ends in even number -> Step 2, Odd -> Step 3
        const lastChar = parseInt(plate.slice(-1));
        const statusStep = isNaN(lastChar) ? 2 : (lastChar % 4) + 1; // Randomish 1-4

        // Update UI
        resultDiv.classList.remove('hidden');
        const steps = resultDiv.querySelectorAll('.t-step');
        const lines = resultDiv.querySelectorAll('.t-line');

        // Reset
        steps.forEach(s => s.classList.remove('active', 'completed'));
        lines.forEach(l => l.classList.remove('active'));

        // Set
        steps.forEach((s, idx) => {
            if (idx + 1 === statusStep) s.classList.add('active');
            else if (idx + 1 < statusStep) s.classList.add('completed');
        });

        lines.forEach((l, idx) => {
            if (idx + 1 < statusStep) l.classList.add('active');
        });

        // Mock scrolling to result
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };
}
