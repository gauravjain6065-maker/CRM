// =====================================================
// CALLER REPLACEMENT JS – Saarva Admin
// =====================================================

function handleReassign() {
    const from     = document.getElementById('fromCaller').value;
    const to       = document.getElementById('toCaller').value;
    const leadType = document.getElementById('leadType').value;

    if (from === 'Select caller' || to === 'Select caller') {
        alert('Please select both From and To caller.');
        return;
    }

    if (from === to) {
        alert('From and To caller cannot be the same.');
        return;
    }

    const confirmed = confirm(
        `Reassign ${leadType} from "${from}" to "${to}"?`
    );

    if (confirmed) {
        alert(`✅ Done! All ${leadType} reassigned from ${from} → ${to}.`);
    }
}
