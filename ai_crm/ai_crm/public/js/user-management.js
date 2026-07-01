/* =====================================================
   USER-MANAGEMENT.JS – Saarva Admin CRM
   User Management live search + filter
   ===================================================== */

'use strict';

CRM.ready(function () {
  var searchInput = document.getElementById('userSearch');
  var roleSelect  = document.getElementById('roleSelect');

  function filterUsers() {
    var search = (searchInput ? searchInput.value.toLowerCase() : '');
    var role   = (roleSelect  ? roleSelect.value : 'All Roles');
    var rows   = document.querySelectorAll('#userTableBody tr');

    rows.forEach(function (row) {
      var nameEl   = row.querySelector('.user-name');
      var badgeEl  = row.querySelector('.badge');
      var name     = nameEl  ? nameEl.textContent.toLowerCase() : '';
      var roleTxt  = badgeEl ? badgeEl.textContent : '';
      var matchName = name.includes(search);
      var matchRole = (role === 'All Roles') || roleTxt.includes(role);
      row.style.display = (matchName && matchRole) ? '' : 'none';
    });
  }

  if (searchInput) searchInput.addEventListener('input',  filterUsers);
  if (roleSelect)  roleSelect.addEventListener('change', filterUsers);
});
