/* =====================================================
   LEAD-MANAGEMENT.JS – Saarva Admin CRM
   Lead Management Chart.js bar chart
   ===================================================== */

'use strict';

CRM.ready(function () {
  var canvas = document.getElementById('momChart');
  if (!canvas) return;

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: ['Calls', 'Hot Leads', 'Visits', 'Conversions'],
      datasets: [
        {
          label:              'This Month',
          data:               [155, 14, 10, 6],
          backgroundColor:    '#2a78d6',
          borderRadius:       { topLeft: 4, topRight: 4 },
          borderSkipped:      'bottom',
          barPercentage:      0.55,
          categoryPercentage: 0.65
        },
        {
          label:              'Last Month',
          data:               [130, 11, 7, 4],
          backgroundColor:    '#c8c2b0',
          borderRadius:       { topLeft: 4, topRight: 4 },
          borderSkipped:      'bottom',
          barPercentage:      0.55,
          categoryPercentage: 0.65
        }
      ]
    },
    options: {
      responsive:          true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          grid:   { display: false },
          ticks:  { color: '#888', font: { size: 12 } },
          border: { display: false }
        },
        y: {
          min:    0,
          max:    160,
          ticks:  { stepSize: 40, color: '#aaa', font: { size: 11 } },
          grid:   { color: '#ebebeb' },
          border: { display: false }
        }
      }
    }
  });
});
