/**
 * Mobile Navigation Drawer Module
 * Provides seamless navigation on smartphones and tablets
 */

export function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-nav-drawer");
  const backdrop = document.getElementById("mobile-nav-backdrop");
  const navItems = document.querySelectorAll(".mobile-nav-item");
  const resumeTrigger = document.getElementById("mobile-resume-trigger");

  function openNav() {
    if (drawer && toggleBtn && backdrop) {
      drawer.classList.add("open");
      toggleBtn.classList.add("active");
      toggleBtn.setAttribute("aria-expanded", "true");
      backdrop.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  }

  function closeNav() {
    if (drawer && toggleBtn && backdrop) {
      drawer.classList.remove("open");
      toggleBtn.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
      backdrop.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  // Expose to window for external click handlers
  window.closeMobileNav = closeNav;
  window.openMobileNav = openNav;

  if (toggleBtn) {
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = drawer && drawer.classList.contains("open");
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeNav);
  }

  // Close nav on clicking any internal navigation anchor
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      closeNav();
    });
  });

  // Resume trigger button in mobile drawer
  if (resumeTrigger) {
    resumeTrigger.addEventListener("click", () => {
      closeNav();
      if (typeof window.openResumeModal === "function") {
        window.openResumeModal();
      }
    });
  }

  // Close with Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer && drawer.classList.contains("open")) {
      closeNav();
    }
  });

  // Automatically close mobile menu if viewport resized to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 860 && drawer && drawer.classList.contains("open")) {
      closeNav();
    }
  });
}
