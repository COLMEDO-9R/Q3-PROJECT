document.addEventListener("DOMContentLoaded", function () {
    // Function to show the selected page
    function showPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.style.display = 'none';
        });

        // Show the selected page
        document.getElementById(pageId).style.display = 'block';
    }

    // Add click event listener to each navigation item
    document.querySelectorAll(".nav-link").forEach(navItem => {
        navItem.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor link behavior
            const pageId = this.getAttribute("data-page"); // Get the data-page attribute value
            showPage(pageId); // Show the corresponding page
        });
    });

    // Show the home page by default when the page loads
    showPage("home");
});
