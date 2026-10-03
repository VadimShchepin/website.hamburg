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
      if (e.target.closest("a")) {
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
  // Verzweigter Fragebogen in drei Schritten (seit 03.10.2026).
  // Die Art aus Schritt 1 steht als data-type am Formular. CSS blendet in
  // Schritt 2 alles aus, was nicht zu dieser Art passt, hier werden dieselben
  // Felder abgeschaltet, damit sie nicht mitgeschickt werden.
  var form = document.querySelector("[data-stepform]");
  if (form) {
    var steps = Array.prototype.slice.call(form.querySelectorAll(".fstep"));
    var railItems = Array.prototype.slice.call(document.querySelectorAll(".frail li"));
    var done = document.querySelector(".fdone");
    var at = 0;
    var first = true;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
        window.scrollTo({ top: window.scrollY + box.top - 110, behavior: reduce ? "auto" : "smooth" });
      }
    };

    var applyType = function (type) {
      form.setAttribute("data-type", type);
      form.querySelectorAll("[data-for]").forEach(function (g) {
        var on = g.getAttribute("data-for").split(" ").indexOf(type) > -1;
        g.querySelectorAll("input").forEach(function (i) {
          i.disabled = !on;
          if (!on) i.checked = false;
        });
      });
      // Nachfragen der anderen Arten zuruecksetzen
      form.querySelectorAll("[data-pop]").forEach(function (p) {
        if (p.getAttribute("data-pop") !== type) {
          p.querySelectorAll("input").forEach(function (i) { i.checked = false; });
        }
      });
    };

    var err = function (step, msg) {
      var box = step.querySelector(".ferr");
      if (box) box.textContent = msg || "";
      step.classList.toggle("has-err", !!msg);
    };

    var valid = function (step) {
      var need = step.getAttribute("data-need");
      if (need === "type") return !!form.querySelector('input[name="type"]:checked');
      if (need === "need") return !!form.querySelector('input[name="need"]:checked:not(:disabled)');
      if (need === "contact") {
        var n = form.querySelector("#name"), m = form.querySelector("#email");
        var c = form.querySelector('input[name="consent"]');
        return n.value.trim() !== "" && /.+@.+\..+/.test(m.value.trim()) && c.checked;
      }
      return true;
    };

    form.addEventListener("change", function (e) {
      if (e.target.name === "type") applyType(e.target.value);
      err(steps[at], "");
    });
    form.addEventListener("input", function () { err(steps[at], ""); });

    // Enter in einem Feld blaettert weiter statt vorzeitig abzuschicken
    form.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && e.target.tagName === "INPUT" && at < steps.length - 1) {
        e.preventDefault();
        var n = steps[at].querySelector("[data-next]");
        if (n) n.click();
      }
    });

    form.addEventListener("click", function (e) {
      var next = e.target.closest("[data-next]");
      var prev = e.target.closest("[data-prev]");
      if (next) {
        e.preventDefault();
        if (!valid(steps[at])) { err(steps[at], form.getAttribute("data-err")); return; }
        if (at < steps.length - 1) { at++; paint(); }
        return;
      }
      if (prev) {
        e.preventDefault();
        err(steps[at], "");
        if (at > 0) { at--; paint(); }
      }
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!valid(steps[at])) { err(steps[at], form.getAttribute("data-err-contact")); return; }
      form.style.display = "none";
      var rail = document.querySelector(".frail");
      if (rail) rail.style.display = "none";
      if (done) {
        done.classList.add("show");
        var hh = done.querySelector("h2");
        if (hh) { hh.setAttribute("tabindex", "-1"); hh.focus({ preventScroll: true }); }
        done.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" });
      }
    });

    var pre = form.querySelector('input[name="type"]:checked');
    if (pre) applyType(pre.value);
    paint();
  }
})();
