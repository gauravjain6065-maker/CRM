// =====================================================
// USER MANAGEMENT JS – Saarva Admin
// =====================================================

function filterUsers() {
    const search    = document.getElementById('searchInput').value.toLowerCase();
    const role      = document.getElementById('roleSelect').value;
    const rows      = document.querySelectorAll('#userTableBody tr');

    rows.forEach(row => {
        const name     = row.querySelector('.user-name')?.textContent.toLowerCase() || '';
        const roleBadge = row.querySelector('.badge')?.textContent || '';
        const matchName = name.includes(search);
        const matchRole = (role === 'All Roles') || roleBadge.includes(role);
        row.style.display = (matchName && matchRole) ? '' : 'none';
    });
}
