/* ============================================================
   GRADUATECOLLEGEFAST - LINK SETTINGS
   This is the only file you need to edit to change links.
   Replace the text inside the quotes. Save. Done.
   ============================================================ */

var GCF_LINKS = {

  // Your Beacons page. All buy buttons point here for now.
  beacons: "https://graduatefasthack.com",

  // Optional: if you have a direct Beacons link per product, put it here.
  // If you leave these as they are, they fall back to your main Beacons page.
  degreePlan:   "https://graduatefasthack.com/shop/12MDPB",
  sprint:       "",   // 30-Day Jump Start Sprint - no direct link yet
  successCall:  "https://graduatefasthack.com/shop/collegesuccess",
  customBlueprint: "https://graduatefasthack.com/shop/CourseBlueprint",
  book:         "",   // $5,000 Degree Blueprint Book - no direct link yet
  aiVault:      "https://graduatefasthack.com/shop/ScholarAIVault",

  // Social
  tiktok:    "https://www.tiktok.com/@GraduateCollegeFast",
  youtube:   "https://www.youtube.com/@Graduatecollegefast",
  instagram: "https://www.instagram.com/graduatecollegefast",

  // Email
  email: "graduatecollegefast@gmail.com",

  // Your Kit (ConvertKit) form ID. Find it in Kit under
  // Grow > Landing Pages & Forms > open your form > Embed > HTML.
  // The number in the URL is your form ID.
  kitFormId: "9230406"
};

/* ---------- wiring below, no need to edit ---------- */
(function () {
  function ready(fn) {
    if (document.readyState !== "loading") { fn(); }
    else { document.addEventListener("DOMContentLoaded", fn); }
  }

  ready(function () {
    var map = {
      beacons: GCF_LINKS.beacons,
      degreePlan: GCF_LINKS.degreePlan || GCF_LINKS.beacons,
      sprint: GCF_LINKS.sprint || GCF_LINKS.beacons,
      successCall: GCF_LINKS.successCall || GCF_LINKS.beacons,
      customBlueprint: GCF_LINKS.customBlueprint || GCF_LINKS.beacons,
      book: GCF_LINKS.book || GCF_LINKS.beacons,
      aiVault: GCF_LINKS.aiVault || GCF_LINKS.beacons,
      tiktok: GCF_LINKS.tiktok,
      youtube: GCF_LINKS.youtube,
      instagram: GCF_LINKS.instagram
    };

    document.querySelectorAll("[data-link]").forEach(function (el) {
      var key = el.getAttribute("data-link");
      if (map[key]) {
        el.setAttribute("href", map[key]);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      }
    });

    document.querySelectorAll("[data-email]").forEach(function (el) {
      el.setAttribute("href", "mailto:" + GCF_LINKS.email);
      if (el.hasAttribute("data-email-text")) { el.textContent = GCF_LINKS.email; }
    });

    document.querySelectorAll("form[data-kit]").forEach(function (f) {
      f.setAttribute("action", "https://app.kit.com/forms/" + GCF_LINKS.kitFormId + "/subscriptions");
    });

    // mobile menu
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".nav-links");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    // year
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  });
})();
