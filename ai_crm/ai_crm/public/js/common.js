/* =====================================================
   COMMON.JS – Saarva Admin CRM
   Shared utilities used across all pages
   ===================================================== */

'use strict';

/**
 * CRM namespace to avoid polluting global scope
 */
window.CRM = window.CRM || {};

/**
 * DOM ready helper
 * @param {Function} fn
 */
CRM.ready = function (fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

/**
 * Mark active sidebar link based on current path
 */
CRM.setActiveSidebarLink = function () {
  var path    = window.location.pathname;           // e.g. /area-management
  var segment = path.split('/').filter(Boolean)[0]; // e.g. area-management

  document.querySelectorAll('.sidebar__menu li').forEach(function (li) {
    var link = li.querySelector('a');
    if (!link) return;
    var linkPath = link.getAttribute('href') || '';
    var linkSeg  = linkPath.split('/').filter(Boolean)[0];

    if (linkSeg && linkSeg === segment) {
      li.classList.add('active');
    } else {
      li.classList.remove('active');
    }
  });
};

/**
 * Generic card entrance animation
 * @param {string} selector - CSS selector for cards
 */
CRM.animateCards = function (selector) {
  var cards = document.querySelectorAll(selector || '.animate-card');
  cards.forEach(function (card, i) {
    card.style.opacity   = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    setTimeout(function () {
      card.style.opacity   = '1';
      card.style.transform = 'translateY(0)';
    }, i * 80);
  });
};

// Auto-run on every page
CRM.ready(function () {
  CRM.setActiveSidebarLink();
});
