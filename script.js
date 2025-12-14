// ===== MOBILE MENU TOGGLE =====
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const mobileClose = document.getElementById("mobile-close");

  if (!menuToggle || !mobileNav || !mobileClose) return;

  function openMenu() {
    mobileNav.classList.add("open");
    mobileNav.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileNav.classList.remove("open");
    mobileNav.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  menuToggle.addEventListener("click", openMenu);
  mobileClose.addEventListener("click", closeMenu);

  // Close when clicking a link
  document.querySelectorAll("#mobile-nav a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close on ESC key (accessibility)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileNav.classList.contains("open")) {
      closeMenu();
    }
  });

  // Close when clicking outside menu
  mobileNav.addEventListener("click", (e) => {
    if (e.target === mobileNav) {
      closeMenu();
    }
  });
});
