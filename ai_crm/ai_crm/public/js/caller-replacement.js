/* =====================================================
   CALLER-REPLACEMENT.JS – Saarva Admin CRM
   Caller Replacement page logic
   ===================================================== */

'use strict';

/**
 * Handle lead reassignment
 */
function handleReassign() {
  var from     = document.getElementById('fromCaller').value;
  var to       = document.getElementById('toCaller').value;
  var leadType = document.getElementById('leadType').value;

  if (from === 'Select caller' || to === 'Select caller') {
    alert('Please select both From and To caller.');
    return;
  }

  if (from === to) {
    alert('From and To caller cannot be the same person.');
    return;
  }

  var confirmed = confirm(
    'Reassign ' + leadType + ' from "' + from + '" to "' + to + '"?'
  );

  if (confirmed) {
    alert('✅ Done! All ' + leadType + ' reassigned from ' + from + ' → ' + to + '.');
  }
}
