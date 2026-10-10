/**
 * Application Entry Point
 * Orchestrates Litho Portfolio modules
 */

import { initTheme } from "./modules/theme.js";
import { initRayCanvas } from "./modules/ray-canvas.js";
import { initCatalog } from "./modules/catalog.js";
import { initProjectModal } from "./modules/modal.js";
import { initTerminal } from "./modules/terminal.js";
import { initMobileNav } from "./modules/mobile-nav.js";
import { showToast } from "./modules/toast.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Core Systems
  initTheme();
  initRayCanvas();
  initCatalog();
  initProjectModal();
  initTerminal();
  initMobileNav();

  // Setup Clipboard Copy Buttons
  const copyButtons = document.querySelectorAll("[data-copy]");
  copyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied to clipboard: ${textToCopy}`);
        }).catch(() => {
          showToast(`Copied: ${textToCopy}`);
        });
      }
    });
  });

  // Setup Contact Form
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contact-name").value;
      const email = document.getElementById("contact-email").value;
      const message = document.getElementById("contact-message").value;

      // Construct mailto
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Sender: ${name} (${email})\n\nMessage:\n${message}`);
      window.location.href = `mailto:abaidullah99999@gmail.com?subject=${subject}&body=${body}`;

      showToast("Opening mail client...", "✉");
      contactForm.reset();
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
