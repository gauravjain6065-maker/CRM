/* =====================================================
   PRICE-CONFIG.JS – Saarva Admin CRM
   Price Config tab switching
   ===================================================== */

'use strict';

/**
 * Switch between pricing tabs
 * @param {string} tabName - tab identifier (base | area | property)
 * @param {HTMLElement} el  - clicked tab button element
 */
function switchTab(tabName, el) {
  document.querySelectorAll('.tab-content').forEach(function (t) {
    t.classList.remove('active');
  });
  document.querySelectorAll('.tab-btn').forEach(function (t) {
    t.classList.remove('active');
  });
  document.getElementById('tab-' + tabName).classList.add('active');
  el.classList.add('active');
}
