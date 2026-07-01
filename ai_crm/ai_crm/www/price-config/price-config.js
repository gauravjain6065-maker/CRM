// =====================================================
// PRICE CONFIG JS – Saarva Admin
// =====================================================

function switchTab(tabName, el) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById('tab-' + tabName).classList.add('active');
    el.classList.add('active');
}
