// =====================================================
//   LEAD-SOURCE.JS – Saarva Admin CRM
//   Lead Sources page interactions
// =====================================================

(function () {
  'use strict';

  // ── Tab switching ──────────────────────────────────
  const tabs      = document.querySelectorAll('.ls-tab');
  const panels    = document.querySelectorAll('.ls-tab-panel');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      panels.forEach(function (p) { p.classList.remove('active'); });

      tab.classList.add('active');
      var target = tab.getAttribute('data-tab');
      var panel  = document.getElementById('panel-' + target);
      if (panel) panel.classList.add('active');
    });
  });

  // ── "Add New Source" modal ─────────────────────────
  var addBtn   = document.getElementById('lsAddSourceBtn');
  var overlay  = document.getElementById('lsModalOverlay');
  var closeBtn = document.getElementById('lsModalClose');
  var cancelBtn = document.getElementById('lsModalCancel');
  var saveBtn   = document.getElementById('lsModalSave');

  function openModal()  { overlay.classList.add('open'); }
  function closeModal() { overlay.classList.remove('open'); }

  if (addBtn)    addBtn.addEventListener('click', openModal);
  if (closeBtn)  closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  // Close if clicking outside the modal box
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
  }

  // Save handler (placeholder – wire to Frappe API as needed)
  if (saveBtn) {
    saveBtn.addEventListener('click', function () {
      var name     = document.getElementById('lsSourceName').value.trim();
      var platform = document.getElementById('lsSourcePlatform').value;
      var service  = document.getElementById('lsSourceService').value.trim();
      var tag      = document.getElementById('lsSourceTag').value.trim();
      var bucket   = document.getElementById('lsSourceBucket').value;

      if (!name) {
        alert('Source Name is required.');
        return;
      }

      // TODO: frappe.call({ method: '...', args: {...} })
      console.log('New source saved (mock):', { name, platform, service, tag, bucket });

      alert('Source "' + name + '" added successfully! (mock)');
      closeModal();
    });
  }

  // ── Sidebar active link highlight ─────────────────
  var links = document.querySelectorAll('.sidebar__menu a');
  links.forEach(function (link) {
    if (link.getAttribute('href') === '/lead-source') {
      link.parentElement.classList.add('sidebar__menu-item--active');
    }
  });

})();
