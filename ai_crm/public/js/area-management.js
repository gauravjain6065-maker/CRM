/* =====================================================
   AREA-MANAGEMENT.JS – Saarva Admin CRM
   Area Management page logic
   ===================================================== */

'use strict';

CRM.ready(function () {
  CRM.animateCards('.area-card');

  var addBtn = document.getElementById('addAreaBtn');
  if (addBtn) {
    addBtn.addEventListener('click', function () {
      alert('Add Area form will open here.');
    });
  }
});
