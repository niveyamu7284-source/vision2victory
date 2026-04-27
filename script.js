// Form message
document.getElementById("applicationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("responseMessage").innerText =
        "Application submitted successfully!";
    this.reset();
});

// Navbar shadow on scroll
window.addEventListener("scroll", function() {
    const nav = document.getElementById("navbar");
    nav.style.boxShadow = window.scrollY > 50
        ? "0 5px 15px rgba(0,0,0,0.3)"
        : "none";
});
