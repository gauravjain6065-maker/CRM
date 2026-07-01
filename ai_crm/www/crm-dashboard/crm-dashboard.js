// =====================================================
// INDEX / DASHBOARD JS – Saarva Admin
// =====================================================

document.addEventListener('DOMContentLoaded', function () {
    // Animate stat cards on load
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, i * 80);
    });
});
