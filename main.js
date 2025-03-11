
// OLMEDO

document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    const navLinks = document.querySelectorAll(".nav-link-item");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const pageId = this.getAttribute("data-page");

            // Hide all pages
            pages.forEach(page => page.style.display = "none");

            // Show selected page
            document.getElementById(pageId).style.display = "block";
        });
    });
});
