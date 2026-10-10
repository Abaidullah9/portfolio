/**
 * Theme Engine
 * Faithful recreation of Litho Template Marketplace theme switcher
 * Supported: dark, light, tokyo-night, catppuccin, nord
 */

export const THEMES = [
  { id: "dark", label: "Dark" },
  { id: "light", label: "Light" },
  { id: "tokyo-night", label: "Tokyo" },
  { id: "catppuccin", label: "Mocha" },
  { id: "nord", label: "Nord" }
];

export function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const themeLabel = document.getElementById("theme-label");

  let savedTheme = "dark";
  try {
    savedTheme = localStorage.getItem("litho-theme") || "dark";
  } catch (e) {
    savedTheme = "dark";
  }

  // Set theme on root
  setTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const currentIndex = THEMES.findIndex(t => t.id === current);
      const nextIndex = (currentIndex + 1) % THEMES.length;
      const nextTheme = THEMES[nextIndex];
      setTheme(nextTheme.id);
    });
  }

  function setTheme(themeId) {
    const valid = THEMES.some(t => t.id === themeId) ? themeId : "dark";
    document.documentElement.setAttribute("data-theme", valid);
    try {
      localStorage.setItem("litho-theme", valid);
    } catch (e) {}

    const found = THEMES.find(t => t.id === valid);
    if (themeLabel && found) {
      themeLabel.textContent = found.label;
    }
  }
}
