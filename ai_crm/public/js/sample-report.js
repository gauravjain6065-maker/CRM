// =====================================================
//   SAMPLE-REPORT.JS – Saarva Admin CRM
//   Sample Report page interactions
// =====================================================

(function () {
  'use strict';

  // ── Live search filter ─────────────────────────────
  var searchBox = document.getElementById('srSearch');
  var tableBody = document.getElementById('srTableBody');

  if (searchBox && tableBody) {
    searchBox.addEventListener('input', function () {
      var query = searchBox.value.toLowerCase().trim();
      var rows   = tableBody.querySelectorAll('tr');

      rows.forEach(function (row) {
        var text = row.textContent.toLowerCase();
        row.style.display = (!query || text.includes(query)) ? '' : 'none';
      });
    });
  }

  // ── Filters ───────────────────────────────────────
  var serviceFilter = document.getElementById('srServiceFilter');
  var resultFilter  = document.getElementById('srResultFilter');

  function applyFilters() {
    var service = serviceFilter ? serviceFilter.value : '';
    var result  = resultFilter  ? resultFilter.value  : '';
    var rows    = tableBody ? tableBody.querySelectorAll('tr') : [];

    rows.forEach(function (row) {
      var rowService = row.getAttribute('data-service') || '';
      var rowResult  = row.getAttribute('data-result')  || '';

      var matchService = (!service || service === 'All Services' || rowService === service);
      var matchResult  = (!result  || result  === 'All Results'  || rowResult  === result);

      row.style.display = (matchService && matchResult) ? '' : 'none';
    });
  }

  if (serviceFilter) serviceFilter.addEventListener('change', applyFilters);
  if (resultFilter)  resultFilter.addEventListener('change', applyFilters);

  // ── Export button (placeholder) ───────────────────
  var exportBtn = document.getElementById('srExportBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', function () {
      alert('Export triggered – wire to Frappe API / CSV download as needed.');
    });
  }

  // ── New Report button (placeholder) ───────────────
  var newBtn = document.getElementById('srNewBtn');
  if (newBtn) {
    newBtn.addEventListener('click', function () {
      alert('New Report – open your form/modal here.');
    });
  }

})();
