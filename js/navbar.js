/* Navbar component - edit the HTML below once, it updates on every page.
   Pages just contain: <div id="site-navbar"></div> */
(function () {
  var host = document.getElementById("site-navbar");
  if (!host) return;
  host.outerHTML = `<header class="site-header">
  <div class="site-header__inner">
    <a class="logo" href="index.html" aria-label="All Is Well Physiotherapy &amp; Rehabilitation Centre — home">
      <img src="assets/img/logo.png" alt="All Is Well Physiotherapy &amp; Rehabilitation Centre" width="48" height="48">
      <span class="logo__brand">
        <span class="logo__name">ALL IS WELL</span>
        <span class="logo__sub">Physiotherapy &amp; Rehab</span>
      </span>
    </a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-menu" aria-label="Open menu"><span></span><span></span><span></span></button>
    <div class="nav-group" id="site-menu">
      <nav class="nav-pill" aria-label="Primary"><ul><li><a href="index.html" data-page="index.html">Home</a></li><li><a href="about.html" data-page="about.html">About Us</a></li><li><a href="services.html" data-page="services.html">Services</a></li><li><a href="about.html#team" data-page="about.html#team">Our Doctors</a></li><li><a href="index.html#reviews" data-page="index.html#reviews">Reviews</a></li><li><a href="privacy.html" data-page="privacy.html">Privacy Policy</a></li><li><a href="terms.html" data-page="terms.html">Terms of Care</a></li><li><a href="contact.html" data-page="contact.html">Contact</a></li></ul></nav>
      <a class="nav-phone" href="tel:+917985381733"><img src="assets/img/icon-phone.svg" alt="" width="16" height="16"> +91 79853 81733</a>
      <a class="btn btn--light btn--nav" href="contact.html">Book Appointment</a>
    </div>
  </div>
</header>
<div class="menu-backdrop"></div>`;
  var file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-pill a[data-page]").forEach(function (a) {
    if (a.getAttribute("data-page").toLowerCase() === file) a.setAttribute("aria-current", "page");
  });
})();
