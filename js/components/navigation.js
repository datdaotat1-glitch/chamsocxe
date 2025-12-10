export function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const sections = {
        sales: document.getElementById('sales-section'),
        service: document.getElementById('service-section')
    };

    // Mode Cards
    const salesCard = document.getElementById('mode-sales');
    const serviceCard = document.getElementById('mode-service');

    function switchMode(target) {
        // Update Nav Visuals
        navLinks.forEach(l => {
            if (l.dataset.target === target) l.classList.add('active');
            else l.classList.remove('active');
        });

        // Hide all sections first
        Object.values(sections).forEach(sec => sec.classList.add('hidden'));

        // Handle Logic
        if (target === 'sales') {
            heroTitle.innerHTML = 'KHO PHỤ TÙNG <span class="text-gradient">SỐ 1</span> THÀNH PHỐ';
            heroSubtitle.textContent = 'Nguồn hàng sỉ ổn định, đa dạng dòng xe. Cam kết giá tốt nhất.';
            sections.sales.classList.remove('hidden');
            // Scroll to content
            setTimeout(() => sections.sales.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        } else if (target === 'service') {
            heroTitle.innerHTML = 'CHĂM SÓC XE <span class="text-gradient">CHUẨN 5 SAO</span>';
            heroSubtitle.textContent = 'Uy tín là sinh mệnh. Cứu hộ 24/7. Kỹ sư chuyên môn cao.';
            sections.service.classList.remove('hidden');
            setTimeout(() => sections.service.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        } else {
            // Home
            heroTitle.innerHTML = 'CHUYÊN GIA <span class="text-gradient">ĐA NĂNG</span> CHO XẾ YÊU';
            heroSubtitle.textContent = 'Giải pháp toàn diện từ Linh kiện Chính hãng đến Chăm sóc Spa Cao cấp';
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.dataset.target;
            // Only handle defined targets
            if (['home', 'sales', 'service'].includes(target)) {
                switchMode(target);
            }
        });
    });

    // Handle Mode Card Clicks
    if (salesCard) {
        salesCard.addEventListener('click', () => switchMode('sales'));
    }
    if (serviceCard) {
        serviceCard.addEventListener('click', () => switchMode('service'));
    }
}
