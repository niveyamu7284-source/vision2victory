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
export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center
      bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"
    >
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Transform Your Skills Into Confidence
        </h1>

        <p className="mt-4 text-gray-600">
          Hands-on internships designed for real-world success
        </p>

        <a
          href="#contact"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:scale-105 transition"
        >
          Start Your Journey
        </a>
      </div>
    </section>
  );
}
