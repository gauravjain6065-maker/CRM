// =====================================================
//   LEAD-IMPORT.JS – Saarva Admin CRM
//   File upload, drag-and-drop, and import flow
// =====================================================

(function () {
  'use strict';

  var uploadBox   = document.getElementById('liUploadBox');
  var fileInput   = document.getElementById('liFileInput');
  var uploadBtn   = document.getElementById('liUploadBtn');
  var filePill    = document.getElementById('liFilePill');
  var pillName    = document.getElementById('liPillName');
  var importBtn   = document.getElementById('liImportBtn');

  // ── Click "Upload File" button → trigger hidden input ──
  if (uploadBtn) {
    uploadBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      fileInput.click();
    });
  }

  // ── Click anywhere on the box → also trigger input ──
  if (uploadBox) {
    uploadBox.addEventListener('click', function () {
      fileInput.click();
    });
  }

  // ── File selected via dialog ──
  if (fileInput) {
    fileInput.addEventListener('change', function () {
      if (fileInput.files && fileInput.files[0]) {
        showSelectedFile(fileInput.files[0]);
      }
    });
  }

  // ── Drag & Drop ──────────────────────────────────────
  if (uploadBox) {
    uploadBox.addEventListener('dragover', function (e) {
      e.preventDefault();
      uploadBox.classList.add('drag-over');
    });

    uploadBox.addEventListener('dragleave', function () {
      uploadBox.classList.remove('drag-over');
    });

    uploadBox.addEventListener('drop', function (e) {
      e.preventDefault();
      uploadBox.classList.remove('drag-over');
      var file = e.dataTransfer.files[0];
      if (file) showSelectedFile(file);
    });
  }

  // ── Show selected file pill ──────────────────────────
  function showSelectedFile(file) {
    var allowed = ['csv', 'xls', 'xlsx'];
    var ext     = file.name.split('.').pop().toLowerCase();

    if (!allowed.includes(ext)) {
      alert('⚠️ Only CSV or Excel (.xls / .xlsx) files are supported.');
      return;
    }

    if (pillName) pillName.textContent = file.name;
    if (filePill) filePill.classList.add('visible');
    if (importBtn) importBtn.style.display = 'inline-flex';
  }

  // ── Import button (stub — wire to Frappe API) ────────
  if (importBtn) {
    importBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (!fileInput.files || !fileInput.files[0]) {
        alert('Please select a file first.');
        return;
      }

      importBtn.disabled = true;
      importBtn.textContent = 'Importing…';

      // TODO: upload via FormData → frappe.call or fetch('/api/method/...')
      setTimeout(function () {
        alert('✅ Import complete! (mock — wire to your Frappe API)');
        importBtn.disabled = false;
        importBtn.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i> Import Now';
      }, 1500);
    });
  }

})();
