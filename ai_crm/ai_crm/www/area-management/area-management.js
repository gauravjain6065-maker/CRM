// =====================================================
// AREA MANAGEMENT JS – Saarva Admin
// =====================================================

document.addEventListener('DOMContentLoaded', function () {
    // Card hover animation
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
            card.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
            card.style.transition = 'all 0.25s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
        });
    });

    // Add Area button
    const addBtn = document.querySelector('.btn');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            alert('Add Area form will open here.');
        });
    }
});
