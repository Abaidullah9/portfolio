/**
 * Theme Engine
 * Faithful recreation of Litho Template Marketplace Theme Picker Cards
 * Supported: dark, light, tokyo-night, catppuccin, nord, kanagawa, gruvbox, rose-pine, hackerman
 */

import { showToast } from "./toast.js";

export const THEMES = [
  {
    id: "dark",
    name: "Litho Dark",
    bg: "#000000",
    panel: "#0b0b0d",
    accent: "#ff5a36",
    desc: "Signature Litho Black & Coral"
  },
  {
    id: "light",
    name: "Litho Light",
    bg: "#f8f8f6",
    panel: "#f1f1ef",
    accent: "#c6371c",
    desc: "Warm Minimal Paper & Crimson"
  },
  {
    id: "tokyo-night",
    name: "Tokyo Night",
    bg: "#1a1b26",
    panel: "#1f2230",
    accent: "#7aa2f7",
    desc: "Midnight Navy & Neon Cyan"
  },
  {
    id: "catppuccin",
    name: "Mocha",
    bg: "#1e1e2e",
    panel: "#181825",
    accent: "#fab387",
    desc: "Catppuccin Pastel Peach"
  },
  {
    id: "nord",
    name: "Nord",
    bg: "#2e3440",
    panel: "#242933",
    accent: "#88c0d0",
    desc: "Arctic Slate & Frost Ice"
  },
  {
    id: "kanagawa",
    name: "Kanagawa",
    bg: "#1f1f28",
    panel: "#16161e",
    accent: "#c34043",
    desc: "Traditional Indigo & Autumn Red"
  },
  {
    id: "gruvbox",
    name: "Gruvbox",
    bg: "#282828",
    panel: "#1d2021",
    accent: "#fe8019",
    desc: "Retro Warm Carbon & Amber"
  },
  {
    id: "rose-pine",
    name: "Rosé Pine",
    bg: "#191724",
    panel: "#1f1d2e",
    accent: "#eb6f92",
    desc: "Muted Lavender & Rose Gold"
  },
  {
    id: "hackerman",
    name: "Hackerman",
    bg: "#050a05",
    panel: "#0a140a",
    accent: "#00ff66",
    desc: "Matrix Terminal & Phosphor"
  }
];

export function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const themeLabel = document.getElementById("theme-label");
  const overlay = document.getElementById("theme-picker-overlay");
  const picker = document.getElementById("theme-picker");
  const cardsContainer = document.getElementById("theme-cards-container");
  const closeBtn = document.getElementById("theme-picker-close");

  let currentTheme = "dark";
  try {
    currentTheme = localStorage.getItem("litho-theme") || "dark";
  } catch (e) {
    currentTheme = "dark";
  }

  // Render Theme Cards in Picker
  if (cardsContainer) {
    cardsContainer.innerHTML = THEMES.map(t => `
      <div 
        class="theme-card-option ${t.id === currentTheme ? 'is-selected' : ''}" 
        data-theme-id="${t.id}"
        role="button"
        tabindex="0"
        aria-label="Select ${t.name} color theme"
      >
        <div class="theme-card-preview" style="background: ${t.bg};">
          <div class="theme-card-swatch-bar" style="background: ${t.accent};"></div>
          <div class="theme-card-swatch-line" style="background: ${t.panel}; border: 1px solid ${t.accent};"></div>
          <div class="theme-card-swatch-line short" style="background: ${t.panel};"></div>
        </div>
        <div class="theme-card-info">
          <div>
            <div class="theme-card-title">${t.name}</div>
            <div style="font-family: var(--mono); font-size: 9px; color: var(--faint);">${t.desc}</div>
          </div>
          <span class="theme-card-indicator"></span>
        </div>
      </div>
    `).join("");

    cardsContainer.addEventListener("click", (e) => {
      const card = e.target.closest(".theme-card-option");
      if (!card) return;
      const themeId = card.dataset.themeId;
      setTheme(themeId);
      closePicker();
    });
  }

  function openPicker() {
    if (overlay && picker) {
      overlay.classList.add("open");
      picker.classList.add("open");
      if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "true");
    }
  }

  function closePicker() {
    if (overlay && picker) {
      overlay.classList.remove("open");
      picker.classList.remove("open");
      if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = picker && picker.classList.contains("open");
      if (isOpen) {
        closePicker();
      } else {
        openPicker();
      }
    });
  }

  if (closeBtn) closeBtn.addEventListener("click", closePicker);
  if (overlay) overlay.addEventListener("click", closePicker);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && picker && picker.classList.contains("open")) {
      closePicker();
    }
  });

  function setTheme(themeId) {
    const valid = THEMES.some(t => t.id === themeId) ? themeId : "dark";
    currentTheme = valid;
    document.documentElement.setAttribute("data-theme", valid);
    try {
      localStorage.setItem("litho-theme", valid);
    } catch (e) {}

    const found = THEMES.find(t => t.id === valid);
    if (themeLabel && found) {
      themeLabel.textContent = found.name.replace("Litho ", "");
    }

    // Update active state in cards
    if (cardsContainer) {
      cardsContainer.querySelectorAll(".theme-card-option").forEach(card => {
        card.classList.toggle("is-selected", card.dataset.themeId === valid);
      });
    }

    showToast(`Color scheme: ${found ? found.name : valid}`);
  }

  // Set initial theme
  setTheme(currentTheme);
}
