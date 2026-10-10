/**
 * Catalog Module
 * Faithful recreation of Litho Template Marketplace Catalog
 * Dual Modes: Cards Grid & Split View with Keyboard navigation
 */

import { PROJECTS_DATA } from "../data/projects.js";

export function initCatalog() {
  const pluginGrid = document.getElementById("plugin-grid");
  const catalogSplit = document.getElementById("catalog-split");
  const splitGrid = document.getElementById("split-grid");
  const splitCard = document.getElementById("split-card");
  const splitStatsBody = document.getElementById("split-stats-body");
  const searchInput = document.getElementById("search-input");
  const searchClear = document.getElementById("search-clear");
  const sortSelect = document.getElementById("sort-select");
  const categoryFilters = document.getElementById("category-filters");
  const clearFiltersBtn = document.getElementById("clear-filters");
  const pluginCount = document.getElementById("plugin-count");
  const viewCardsBtn = document.querySelector('[data-view="cards"]');
  const viewSplitBtn = document.querySelector('[data-view="split"]');

  let currentCategory = "all";
  let searchQuery = "";
  let currentSort = "featured";
  let currentView = "cards";
  let activeSplitIndex = 0;

  const CATEGORIES = [
    { id: "all", label: "All Works" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "backend", label: "Backend & APIs" },
    { id: "systems", label: "Systems & C++" },
    { id: "ai", label: "AI & Utilities" }
  ];

  // Render category buttons
  if (categoryFilters) {
    categoryFilters.innerHTML = CATEGORIES.map(c => `
      <button type="button" class="cat-pill ${c.id === 'all' ? 'active' : ''}" data-cat="${c.id}">
        ${c.label}
      </button>
    `).join("");

    categoryFilters.addEventListener("click", (e) => {
      const btn = e.target.closest(".cat-pill");
      if (!btn) return;
      categoryFilters.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.cat;
      activeSplitIndex = 0;
      render();
    });
  }

  // Filter & Sort Data
  function getFilteredProjects() {
    let list = [...PROJECTS_DATA];

    if (currentCategory !== "all") {
      list = list.filter(p => p.category === currentCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(p => {
        const matchName = p.name.toLowerCase().includes(q);
        const matchSub = (p.subtitle || "").toLowerCase().includes(q);
        const matchDesc = p.description.toLowerCase().includes(q);
        const matchTags = p.tags.some(t => t.toLowerCase().includes(q));
        const matchKind = (p.kind || "").toLowerCase().includes(q);
        return matchName || matchSub || matchDesc || matchTags || matchKind;
      });
    }

    // Sort
    list.sort((a, b) => {
      if (currentSort === "featured") {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return (b.metrics?.productionReadiness || 0) - (a.metrics?.productionReadiness || 0);
      }
      if (currentSort === "updated") {
        return new Date(b.updated) - new Date(a.updated);
      }
      if (currentSort === "name") {
        return a.name.localeCompare(b.name);
      }
      if (currentSort === "complexity") {
        const sumA = (a.metrics?.backendComplexity || 0) + (a.metrics?.systemsLogic || 0);
        const sumB = (b.metrics?.backendComplexity || 0) + (b.metrics?.systemsLogic || 0);
        return sumB - sumA;
      }
      return 0;
    });

    return list;
  }

  // Render Cards Grid View
  function renderCards(projects) {
    if (!pluginGrid) return;

    if (projects.length === 0) {
      pluginGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 48px 24px; text-align: center; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius-md);">
          <h3 style="font-family: var(--mono); font-size: 1.1rem; color: var(--heading); margin-bottom: 8px;">No projects found</h3>
          <p style="font-size: 0.9rem; color: var(--muted); margin-bottom: 16px;">Try another search term or reset active filters.</p>
          <button type="button" class="button market-primary" id="empty-reset-btn">Reset Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById("empty-reset-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", resetFilters);
      }
      return;
    }

    pluginGrid.innerHTML = projects.map(p => {
      const isLive = !!p.liveUrl;
      const statusClass = isLive ? "live" : (p.featured ? "featured" : "");
      const liveBtn = p.liveUrl ? `
        <a href="${p.liveUrl}" target="_blank" rel="noreferrer" class="btn-card-action primary">
          Live Demo ↗
        </a>
      ` : "";
      const githubBtn = p.githubUrl ? `
        <a href="${p.githubUrl}" target="_blank" rel="noreferrer" class="btn-card-action" title="View Source on GitHub">
          GitHub ↗
        </a>
      ` : "";

      return `
        <article class="plugin-card" data-id="${p.id}">
          <div class="card-top">
            <span class="card-status ${statusClass}">${p.status || (isLive ? 'LIVE' : 'VERIFIED')}</span>
            <span class="card-updated">${p.updated}</span>
          </div>
          <h4>${p.name}</h4>
          <div class="card-subtitle">${p.subtitle || p.kind}</div>
          <p>${p.description}</p>
          <div class="card-tags">
            ${p.tags.slice(0, 5).map(t => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
          <div class="card-actions">
            <div class="card-links">
              ${liveBtn}
              ${githubBtn}
            </div>
            <button type="button" class="btn-card-action" onclick="window.openProjectModal('${p.id}')">
              Inspect ⓘ
            </button>
          </div>
        </article>
      `;
    }).join("");
  }

  // Render Split View Mode
  function renderSplit(projects) {
    if (!splitGrid || !splitCard || !splitStatsBody) return;

    if (projects.length === 0) {
      splitGrid.innerHTML = `<div style="padding: 24px; color: var(--muted); font-family: var(--mono); font-size: 12px;">No matching projects.</div>`;
      splitCard.innerHTML = "";
      splitStatsBody.innerHTML = "";
      return;
    }

    if (activeSplitIndex >= projects.length) {
      activeSplitIndex = 0;
    }

    const activeProject = projects[activeSplitIndex];

    // Left Panel List
    splitGrid.innerHTML = projects.map((p, idx) => `
      <div class="split-item ${idx === activeSplitIndex ? 'active' : ''}" data-idx="${idx}" data-id="${p.id}" tabindex="0" role="option" aria-selected="${idx === activeSplitIndex}">
        <div class="split-item-info">
          <h5>${p.name}</h5>
          <span>${p.tags.slice(0, 3).join(" • ")}</span>
        </div>
        <div class="split-item-meta">
          <div style="color: ${p.liveUrl ? 'var(--accent)' : 'var(--faint)'}; font-weight: 600;">
            ${p.liveUrl ? '● LIVE' : 'VERIFIED'}
          </div>
          <div style="font-size: 9px; margin-top: 2px;">${p.updated}</div>
        </div>
      </div>
    `).join("");

    // Right Panel Detail Card
    const liveLink = activeProject.liveUrl ? `
      <a href="${activeProject.liveUrl}" target="_blank" rel="noreferrer" class="button market-primary">Live Application ↗</a>
    ` : "";
    const githubLink = activeProject.githubUrl ? `
      <a href="${activeProject.githubUrl}" target="_blank" rel="noreferrer" class="button publish-primary">GitHub Repository ↗</a>
    ` : "";

    splitCard.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
        <span class="card-status ${activeProject.liveUrl ? 'live' : 'featured'}">${activeProject.status || 'VERIFIED'}</span>
        <span style="font-family: var(--mono); font-size: 11px; color: var(--faint);">${activeProject.kind}</span>
      </div>
      <h3 style="font-size: 1.45rem; color: var(--heading); margin-bottom: 4px;">${activeProject.name}</h3>
      <div style="font-family: var(--mono); font-size: 12px; color: var(--accent); margin-bottom: 14px;">${activeProject.subtitle}</div>
      <p style="font-size: 0.92rem; line-height: 1.6; color: var(--muted); margin-bottom: 16px;">
        ${activeProject.description}
      </p>
      <div class="tag-list" style="margin-bottom: 20px;">
        ${activeProject.tags.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: auto; padding-top: 16px; border-top: 1px solid var(--line-soft);">
        ${liveLink}
        ${githubLink}
        <button type="button" class="button" onclick="window.openProjectModal('${activeProject.id}')">
          Architecture Breakdown ⓘ
        </button>
      </div>
    `;

    // Right Panel Standing Metrics & Stats Bar (Signature Litho Split Stats)
    const m = activeProject.metrics || {
      backendComplexity: 85,
      databaseArchitecture: 80,
      testCoverage: 80,
      systemsLogic: 85,
      productionReadiness: 90
    };

    splitStatsBody.innerHTML = `
      <div class="stat-metric-row">
        <div class="stat-label-bar">
          <span>Backend & API Architecture</span>
          <strong>${m.backendComplexity}%</strong>
        </div>
        <div class="split-stat-bar"><i style="width: ${m.backendComplexity}%;"></i></div>
      </div>
      <div class="stat-metric-row">
        <div class="stat-label-bar">
          <span>Database & Persistence Engineering</span>
          <strong>${m.databaseArchitecture}%</strong>
        </div>
        <div class="split-stat-bar"><i style="width: ${m.databaseArchitecture}%;"></i></div>
      </div>
      <div class="stat-metric-row">
        <div class="stat-label-bar">
          <span>Systems Logic & Algorithms</span>
          <strong>${m.systemsLogic}%</strong>
        </div>
        <div class="split-stat-bar"><i style="width: ${m.systemsLogic}%;"></i></div>
      </div>
      <div class="stat-metric-row">
        <div class="stat-label-bar">
          <span>Production Readiness & Scalability</span>
          <strong>${m.productionReadiness}%</strong>
        </div>
        <div class="split-stat-bar"><i style="width: ${m.productionReadiness}%;"></i></div>
      </div>
    `;
  }

  // Switch View Mode (Cards vs. Split)
  function setViewMode(mode) {
    currentView = mode;
    if (viewCardsBtn && viewSplitBtn) {
      viewCardsBtn.setAttribute("aria-pressed", mode === "cards");
      viewSplitBtn.setAttribute("aria-pressed", mode === "split");
    }

    if (mode === "cards") {
      if (pluginGrid) {
        pluginGrid.hidden = false;
        pluginGrid.style.display = "";
      }
      if (catalogSplit) {
        catalogSplit.hidden = true;
        catalogSplit.style.display = "none";
      }
    } else {
      if (pluginGrid) {
        pluginGrid.hidden = true;
        pluginGrid.style.display = "none";
      }
      if (catalogSplit) {
        catalogSplit.hidden = false;
        catalogSplit.style.display = "grid";
      }
    }
    render();
  }

  if (viewCardsBtn) viewCardsBtn.addEventListener("click", () => setViewMode("cards"));
  if (viewSplitBtn) viewSplitBtn.addEventListener("click", () => setViewMode("split"));

  // Event handlers for Split View Item selection
  if (splitGrid) {
    splitGrid.addEventListener("click", (e) => {
      const item = e.target.closest(".split-item");
      if (!item) return;
      activeSplitIndex = parseInt(item.dataset.idx, 10);
      render();
    });

    // Keyboard navigation (Arrow Up, Arrow Down)
    splitGrid.addEventListener("keydown", (e) => {
      const projects = getFilteredProjects();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        activeSplitIndex = Math.min(projects.length - 1, activeSplitIndex + 1);
        render();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        activeSplitIndex = Math.max(0, activeSplitIndex - 1);
        render();
      } else if (e.key === "Enter") {
        const p = projects[activeSplitIndex];
        if (p) window.openProjectModal(p.id);
      }
    });
  }

  // Search input handling
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (searchClear) {
        if (searchQuery.length > 0) {
          searchClear.classList.add("visible");
        } else {
          searchClear.classList.remove("visible");
        }
      }
      activeSplitIndex = 0;
      render();
    });

    // Global shortcut Ctrl+K to focus search
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInput.focus();
        searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      if (e.key === "Escape" && document.activeElement === searchInput) {
        resetSearch();
      }
    });
  }

  if (searchClear) {
    searchClear.addEventListener("click", resetSearch);
  }

  function resetSearch() {
    searchQuery = "";
    if (searchInput) {
      searchInput.value = "";
      searchInput.blur();
    }
    if (searchClear) searchClear.classList.remove("visible");
    render();
  }

  function resetFilters() {
    searchQuery = "";
    currentCategory = "all";
    if (searchInput) searchInput.value = "";
    if (searchClear) searchClear.classList.remove("visible");
    if (categoryFilters) {
      categoryFilters.querySelectorAll(".cat-pill").forEach(p => {
        p.classList.toggle("active", p.dataset.cat === "all");
      });
    }
    activeSplitIndex = 0;
    render();
  }

  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", resetFilters);
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      render();
    });
  }

  function render() {
    const projects = getFilteredProjects();

    if (pluginCount) {
      pluginCount.textContent = `${projects.length}`;
    }

    // Always render both views so split view is never empty
    renderCards(projects);
    renderSplit(projects);
  }

  // Initial display setup
  if (catalogSplit) {
    catalogSplit.hidden = true;
    catalogSplit.style.display = "none";
  }
  if (pluginGrid) {
    pluginGrid.hidden = false;
    pluginGrid.style.display = "";
  }

  // Initial render
  render();
}
