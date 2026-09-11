(function () {
  var header = document.querySelector("header.site");
  if (!header) return;

  var toggle = header.querySelector(".menu-toggle");
  var links = header.querySelectorAll(".links a");
  if (!toggle) return;

  function closeMenu() {
    header.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    var isOpen = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  }

  toggle.setAttribute("aria-expanded", "false");
  toggle.addEventListener("click", toggleMenu);

  links.forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });
})();
