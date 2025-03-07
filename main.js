document.addEventListener("DOMContentLoaded", function () {
    function showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.style.display = 'none';
        });
        document.getElementById(pageId).style.display = 'block';
    }

    document.querySelectorAll(".nav-link").forEach(navItem => {
        navItem.addEventListener("click", function (event) {
            event.preventDefault();
            const pageId = this.getAttribute("data-page");
            showPage(pageId);
        });
    });

    showPage("home"); // Show home page by default
});
