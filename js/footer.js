/* Footer component (+ floating WhatsApp / call buttons) - edit once, it updates on every page.
   Pages just contain: <div id="site-footer"></div> */
(function () {
  var host = document.getElementById("site-footer");
  if (!host) return;
  host.outerHTML = `<footer class="site-footer">
  <div class="cta-band">
    <div class="cta-band__item">
      <h2>Book Your Consultation</h2>
      <p>Consult Dr. Swati &amp; Dr. Akhilesh for personalized physiotherapy &amp; sports injury rehabilitation in Lucknow. Quick booking &amp; compassionate care.</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap">
        <a class="btn btn--outline-light btn--sm" href="contact.html">Book Appointment</a>
        <a class="btn btn--light btn--sm" href="tel:+917985381733">Call: +91 79853 81733</a>
      </div>
    </div>
    <div class="cta-band__item">
      <h2>Visit Our Clinic in Lucknow</h2>
      <p><strong>Location:</strong> Near Saisoveer Mandir, Manas Nagar, Lucknow, Uttar Pradesh.</p>
      <a class="btn btn--outline-light btn--sm" href="https://www.google.com/maps/search/?api=1&amp;query=All+Is+Well+Near+Saisoveer+Mandir+Manas+Nagar+Lucknow" target="_blank" rel="noopener">Get Directions</a>
    </div>
  </div>
  <div class="cta-band__rule" aria-hidden="true"></div>
  <div class="container footer-main">
    <div class="footer-brand">
      <a class="footer-logo" href="index.html" aria-label="All Is Well Physiotherapy &amp; Rehabilitation Centre — home">
        <img src="assets/img/logo.png" alt="All Is Well Physiotherapy &amp; Rehabilitation Centre" width="56" height="56">
        <span class="logo__brand">
          <span class="logo__name">ALL IS WELL</span>
          <span class="logo__sub">Physiotherapy &amp; Rehab</span>
        </span>
      </a>
      <p style="margin-top:14px;font-size:14px;line-height:22px;color:rgba(255,255,255,0.75)">Rated <strong>5.0 ★</strong> (184+ Google reviews) &amp; <strong>4.9 ★</strong> (70+ Justdial ratings). Expert care by Dr. Swati &amp; Dr. Akhilesh.</p>
      <div class="footer-news" style="margin-top:20px">
        <p class="footer-title">Newsletter Signup</p>
        <p class="footer-note">Stay up to date with physiotherapy tips, injury recovery guides, and clinic updates.</p>
        <form class="news-form" data-form data-success="Subscribed. Thank you!" novalidate>
          <label class="sr-only" for="news-email">Email address</label>
          <input class="field" id="news-email" name="newsletter_email" type="email" placeholder="Email address" required autocomplete="email">
          <button type="submit" aria-label="Subscribe"><img src="assets/img/icon-arrow-right.svg" alt="" width="16" height="13"></button>
          <p class="form__status" role="status" aria-live="polite"></p>
        </form>
      </div>
    </div>
    <div class="footer-col"><p class="footer-title">Quick Links</p><ul><li><a href="index.html">Home</a></li><li><a href="about.html">About Us</a></li><li><a href="about.html#team">Meet the Doctors</a></li><li><a href="services.html">Services &amp; Therapies</a></li><li><a href="index.html#reviews">Patient Reviews</a></li><li><a href="index.html#faq">FAQs</a></li><li><a href="privacy.html">Privacy Policy</a></li><li><a href="terms.html">Terms of Care</a></li><li><a href="contact.html">Contact &amp; Locations</a></li></ul></div>
    <div class="footer-col"><p class="footer-title">Clinic Hours</p><ul class="hours"><li><span>Mon – Sat:</span><span>Closes 9:00 PM</span></li><li><span>Sunday:</span><span>Call for timings</span></li></ul>
      <p style="margin-top:16px;font-size:13px;color:rgba(255,255,255,0.65)">Emergency &amp; home consultation support available on request.</p>
    </div>
    <div class="footer-col"><p class="footer-title">Contact &amp; Location</p>
      <ul class="footer-contact">
        <li><img src="assets/img/footer-phone.svg" alt="" width="13" height="13"><div><a href="tel:+917985381733">+91 79853 81733</a><br><a href="tel:07942700816">07942700816</a></div></li>
        <li class="is-address"><img src="assets/img/footer-pin.svg" alt="" width="11" height="15"><span>Near Saisoveer Mandir, Manas Nagar, Lucknow, Uttar Pradesh</span></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container footer-bottom__inner">
      <p>Copyright © 2026 All Is Well Physiotherapy &amp; Rehabilitation Centre. All Rights Reserved.</p>
      <div class="footer-legal"><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms of Care</a><a href="#">Accessibility</a></div>
      <img class="footer-social" src="assets/img/footer-social.svg" alt="Social media icons" width="128" height="16">
    </div>
  </div>
</footer>
<div class="float-actions">
  <a class="float-btn float-btn--wa" href="https://wa.me/917985381733?text=Hi%20All%20Is%20Well%20Physiotherapy%2C%20I%27d%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true"><path fill="#fff" d="M16 3C8.800 3 3 8.800 3 16c0 2.300.6 4.500 1.700 6.400L3 29l6.800-1.800A13 13 0 1 0 16 3zm0 23.700c-2 0-3.900-.6-5.500-1.600l-.4-.2-4 1 1.100-3.900-.3-.4A10.700 10.700 0 1 1 16 26.700zm5.900-8c-.3-.2-1.900-.9-2.200-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7.100a8.700 8.700 0 0 1-4.300-3.800c-.3-.6.300-.5.900-1.700.1-.2 0-.4 0-.5l-1-2.300c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400s-1 1-1 2.500 1.100 2.900 1.200 3.100c.2.200 2.100 3.300 5.200 4.600 1.900.8 2.700.9 3.600.7.600-.1 1.900-.8 2.100-1.500.3-.7.300-1.400.2-1.500l-.5-.3z"/></svg></a>
  <a class="float-btn float-btn--call" href="tel:+917985381733" aria-label="Call us"><svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path fill="#fff" d="M6.600 10.800a15 15 0 0 0 6.600 6.600l2.200-2.200a1 1 0 0 1 1-.25 11.400 11.400 0 0 0 3.600.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.500a1 1 0 0 1 1 1c0 1.300.2 2.500.6 3.600a1 1 0 0 1-.25 1z"/></svg></a>
</div>`;
})();
