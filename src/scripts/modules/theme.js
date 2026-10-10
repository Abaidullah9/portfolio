/**
 * Theme Engine
 * Faithful recreation of Litho Template Marketplace Theme Picker Cards
 * High-contrast comparison cards for all themes
 */

export const THEMES = [
  {
    id: "dark",
    name: "Litho Dark",
    bg: "#000000",
    panel: "#0b0b0d",
    panel2: "#141416",
    accent: "#ff5a36",
    accentContrast: "#ffffff",
    heading: "#ffffff",
    text: "#e0e0e0",
    muted: "#888888",
    desc: "Signature Litho Black & Coral"
  },
  {
    id: "light",
    name: "Litho Light",
    bg: "#f8f8f6",
    panel: "#ffffff",
    panel2: "#f1f1ee",
    accent: "#c6371c",
    accentContrast: "#ffffff",
    heading: "#0a0a0c",
    text: "#161618",
    muted: "#484852",
    desc: "Warm Minimal Paper & Crimson"
  },
  {
    id: "tokyo-night",
    name: "Tokyo Night",
    bg: "#1a1b26",
    panel: "#202334",
    panel2: "#272c44",
    accent: "#7aa2f7",
    accentContrast: "#15161e",
    heading: "#7aa2f7",
    text: "#c0caf5",
    muted: "#a9b1d6",
    desc: "Midnight Navy & Neon Cyan"
  },
  {
    id: "catppuccin",
    name: "Mocha",
    bg: "#1e1e2e",
    panel: "#24253a",
    panel2: "#313244",
    accent: "#fab387",
    accentContrast: "#11111b",
    heading: "#f5e0dc",
    text: "#cdd6f4",
    muted: "#bac2de",
    desc: "Catppuccin Pastel Peach"
  },
  {
    id: "nord",
    name: "Nord",
    bg: "#2e3440",
    panel: "#373e4d",
    panel2: "#434c5e",
    accent: "#88c0d0",
    accentContrast: "#2e3440",
    heading: "#88c0d0",
    text: "#eceff4",
    muted: "#d8dee9",
    desc: "Arctic Slate & Frost Ice"
  },
  {
    id: "everforest",
    name: "Everforest",
    bg: "#2d353b",
    panel: "#343e44",
    panel2: "#3d484f",
    accent: "#7fbbb3",
    accentContrast: "#232a2e",
    heading: "#a7c080",
    text: "#d3c6aa",
    muted: "#c0b395",
    desc: "Earthy Forest & Sage Green"
  },
  {
    id: "retro-82",
    name: "Retro 82",
    bg: "#05182e",
    panel: "#0a2240",
    panel2: "#0f2c52",
    accent: "#faa968",
    accentContrast: "#05182e",
    heading: "#faa968",
    text: "#f6dcac",
    muted: "#e6c890",
    desc: "Cyber Navy & Sunset Gold"
  },
  {
    id: "rose-pine",
    name: "Rosé Pine",
    bg: "#faf4ed",
    panel: "#ffffff",
    panel2: "#f2e9de",
    accent: "#b4637a",
    accentContrast: "#ffffff",
    heading: "#286983",
    text: "#454060",
    muted: "#6e6988",
    desc: "Warm Sand & Deep Berry"
  },
  {
    id: "hackerman",
    name: "Hackerman",
    bg: "#070d07",
    panel: "#0d1a0d",
    panel2: "#142614",
    accent: "#00ff66",
    accentContrast: "#070d07",
    heading: "#00ff66",
    text: "#d0ffd0",
    muted: "#80cc80",
    desc: "Matrix Terminal & Phosphor"
  },
  {
    id: "gruvbox",
    name: "Gruvbox",
    bg: "#282828",
    panel: "#32302f",
    panel2: "#3c3836",
    accent: "#fe8019",
    accentContrast: "#282828",
    heading: "#fabd2f",
    text: "#ebdbb2",
    muted: "#a89984",
    desc: "Retro Warm Carbon & Amber"
  }
];

export function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const mobileToggleBtn = document.getElementById("mobile-theme-btn");
  const themeLabel = document.getElementById("theme-label");
  const mobileThemeLabel = document.getElementById("mobile-theme-text");
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
        <div class="theme-card-preview" style="background: ${t.bg}; border-color: ${t.accent}44;">
          <div class="preview-top-row">
            <span class="preview-chip" style="background: ${t.accent}; color: ${t.accentContrast};">
              ${t.id.toUpperCase()}
            </span>
            <span class="preview-dot" style="background: ${t.accent};"></span>
          </div>
          <div class="preview-card-body" style="background: ${t.panel}; border: 1px solid ${t.accent}33;">
            <div class="preview-text-line title" style="background: ${t.heading};"></div>
            <div class="preview-text-line subtitle" style="background: ${t.muted};"></div>
            <div class="preview-text-line short" style="background: ${t.accent};"></div>
          </div>
          <div class="theme-palette-dots">
            <span class="palette-swatch-pip" style="background: ${t.bg};" title="Background: ${t.bg}"></span>
            <span class="palette-swatch-pip" style="background: ${t.panel};" title="Panel: ${t.panel}"></span>
            <span class="palette-swatch-pip" style="background: ${t.text};" title="Text: ${t.text}"></span>
            <span class="palette-swatch-pip" style="background: ${t.accent};" title="Accent: ${t.accent}"></span>
          </div>
        </div>
        <div class="theme-card-info">
          <div>
            <div class="theme-card-title">${t.name}</div>
            <div class="theme-card-genre">${t.desc}</div>
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
      if (mobileToggleBtn) mobileToggleBtn.setAttribute("aria-expanded", "true");
    }
  }

  function closePicker() {
    if (overlay && picker) {
      overlay.classList.remove("open");
      picker.classList.remove("open");
      if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
      if (mobileToggleBtn) mobileToggleBtn.setAttribute("aria-expanded", "false");
    }
  }

  function handleToggle(e) {
    e.stopPropagation();
    const isOpen = picker && picker.classList.contains("open");
    if (isOpen) {
      closePicker();
    } else {
      openPicker();
    }
  }

  if (toggleBtn) toggleBtn.addEventListener("click", handleToggle);
  if (mobileToggleBtn) mobileToggleBtn.addEventListener("click", handleToggle);

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
    if (found) {
      const labelText = found.name.replace("Litho ", "");
      if (themeLabel) themeLabel.textContent = labelText;
      if (mobileThemeLabel) mobileThemeLabel.textContent = labelText;
    }

    // Update active state in cards
    if (cardsContainer) {
      cardsContainer.querySelectorAll(".theme-card-option").forEach(card => {
        card.classList.toggle("is-selected", card.dataset.themeId === valid);
      });
    }

    // Notification is permanently omitted per user request
  }

  // Set initial theme without toast
  setTheme(currentTheme);
}
