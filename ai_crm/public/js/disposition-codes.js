// Disposition Codes page JS
document.addEventListener("DOMContentLoaded", function () {
    // Edit button click
    document.querySelectorAll(".icon-btn.edit").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const row = btn.closest("tr");
            const code = row.querySelector("td strong").innerText;
            alert("Edit: " + code);
        });
    });

    // Delete button click
    document.querySelectorAll(".icon-btn.delete").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const row = btn.closest("tr");
            const code = row.querySelector("td strong").innerText;
            if (confirm("Delete \"" + code + "\"?")) {
                row.remove();
            }
        });
    });

    // Add Disposition button
    var addBtn = document.getElementById("addDispositionBtn");
    if (addBtn) {
        addBtn.addEventListener("click", function () {
            alert("Add Disposition form coming soon.");
        });
    }
});
