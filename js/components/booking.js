export function initBooking() {
    const modal = document.getElementById('booking-modal');
    const openBtns = document.querySelectorAll('.btn-primary'); // Using existing buttons as triggers for now
    const closeBtn = document.querySelector('.close-modal');
    const nextBtn = document.getElementById('next-step');
    const prevBtn = document.getElementById('prev-step');
    const confirmBtn = document.getElementById('confirm-booking');

    let currentStep = 1;
    let bookingData = { service: '', time: '', tech: '' };

    // --- Modal Control ---
    // Specifically target "Đặt Lịch" buttons
    document.querySelectorAll('.pricing-card button').forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        });
    });

    closeBtn.onclick = () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    };

    window.onclick = (e) => {
        if (e.target == modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };

    // --- Step Logic ---
    function updateSteps() {
        // Hide all contents
        document.querySelectorAll('.step-content').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));

        // Show current content
        const currentContent = document.getElementById(`step-${currentStep}`);
        currentContent.classList.remove('hidden');
        currentContent.classList.add('active');

        // Update Header
        document.querySelectorAll('.progress-step').forEach(el => {
            const step = parseInt(el.dataset.step);
            if (step === currentStep) el.classList.add('active', 'text-accent');
            else if (step < currentStep) el.classList.add('completed');
            else el.classList.remove('active', 'text-accent', 'completed');
        });

        // Update Buttons
        prevBtn.disabled = currentStep === 1;
        if (currentStep === 3) {
            nextBtn.classList.add('hidden');
        } else {
            nextBtn.classList.remove('hidden');
        }
    }

    // --- Service Selection ---
    document.querySelectorAll('.service-opt').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.service-opt').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            bookingData.service = opt.dataset.service;
        });
    });

    // --- Navigation ---
    nextBtn.onclick = () => {
        if (currentStep === 1 && !bookingData.service) {
            alert('Vui lòng chọn dịch vụ!');
            return;
        }
        currentStep++;
        updateSteps();

        if (currentStep === 3) {
            document.getElementById('summary-service').innerText = bookingData.service;
            document.getElementById('summary-time').innerText = document.querySelector('input[type="datetime-local"]').value || 'Chưa chọn';
        }
    };

    prevBtn.onclick = () => {
        currentStep--;
        updateSteps();
    };

    confirmBtn.onclick = () => {
        alert(`Đã đặt lịch thành công!\nDịch vụ: ${bookingData.service}`);
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        // Reset
        currentStep = 1;
        updateSteps();
    };
}
