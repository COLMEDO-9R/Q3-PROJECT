document.addEventListener("DOMContentLoaded", function () {
    // Function to show a specific page and hide others
    function showPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.style.display = 'none';
        });
        // Show the selected page
        document.getElementById(pageId).style.display = 'block';
    }

    // Add event listeners to the navigation links
    document.querySelectorAll(".nav-link").forEach(navItem => {
        navItem.addEventListener("click", function (event) {
            event.preventDefault();
            // Get the page ID from the data-page attribute
            const pageId = this.getAttribute("data-page");
            // Show the corresponding page
            showPage(pageId);
        });
    });

    // Show the "home" page by default
    showPage("home");
});
