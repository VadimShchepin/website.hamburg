/* Steuerberatung Marek Hejzel - Entwurf. Kein Framework, keine Abhaengigkeiten. */
(function () {
  "use strict";

  /* ---------------------------------------------------------- Kopfzeile */
  var hd = document.querySelector(".hd");
  if (hd) {
    var solid = function () {
      hd.classList.toggle("solid", window.scrollY > 24);
    };
    solid();
    window.addEventListener("scroll", solid, { passive: true });
  }

  /* ------------------------------------------------------ Mobile-Menue */
  var burger = document.querySelector(".burger");
  var drawer = document.querySelector(".drawer");
  if (burger && drawer) {
    burger.addEventListener("click", function () {
      var open = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!open));
      drawer.classList.toggle("open", !open);
      document.body.style.overflow = !open ? "hidden" : "";
    });
    drawer.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        burger.setAttribute("aria-expanded", "false");
        drawer.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.classList.contains("open")) {
        burger.setAttribute("aria-expanded", "false");
        drawer.classList.remove("open");
        document.body.style.overflow = "";
        burger.focus();
      }
    });
  }

  /* ------------------------------------------------- Einblenden beim Scrollen */
  var rv = document.querySelectorAll(".rv");
  if (rv.length) {
    if (!("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      rv.forEach(function (el) { el.classList.add("in"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
      rv.forEach(function (el, i) {
        el.style.transitionDelay = Math.min(i % 4, 3) * 70 + "ms";
        io.observe(el);
      });
    }
  }

  /* ------------------------------------------------ Mandatsanfrage: Schritte */
  var form = document.querySelector("[data-stepform]");
  if (form) {
    var steps = Array.prototype.slice.call(form.querySelectorAll(".fstep"));
    var railItems = Array.prototype.slice.call(document.querySelectorAll(".frail li"));
    var done = document.querySelector(".fdone");
    var at = 0;
    var first = true;

    var paint = function () {
      steps.forEach(function (s, i) { s.classList.toggle("active", i === at); });
      railItems.forEach(function (li, i) {
        li.classList.toggle("done", i < at);
        li.classList.toggle("now", i === at);
        li.setAttribute("aria-current", i === at ? "step" : "false");
      });
      var h = form.querySelector(".fstep.active legend");
      if (h && !first) {
        h.setAttribute("tabindex", "-1");
        h.focus({ preventScroll: true });
      }
      if (first) { first = false; return; }
      var box = form.getBoundingClientRect();
      if (box.top < 0) {
        window.scrollTo({
          top: window.scrollY + box.top - 110,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
        });
      }
    };

    form.addEventListener("click", function (e) {
      var next = e.target.closest("[data-next]");
      var prev = e.target.closest("[data-prev]");
      if (next) {
        e.preventDefault();
        if (at < steps.length - 1) { at++; paint(); }
        return;
      }
      if (prev) {
        e.preventDefault();
        if (at > 0) { at--; paint(); }
      }
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.style.display = "none";
      var rail = document.querySelector(".frail");
      if (rail) rail.style.display = "none";
      if (done) {
        done.classList.add("show");
        var hh = done.querySelector("h2");
        if (hh) { hh.setAttribute("tabindex", "-1"); hh.focus({ preventScroll: true }); }
        done.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    });

    paint();
  }
})();
