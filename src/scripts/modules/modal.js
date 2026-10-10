/**
 * Modals: Project Deep-Dive Architecture & Interactive ATS Resume Viewer
 */

import { PROJECTS_DATA } from "../data/projects.js";

export function initProjectModal() {
  const backdrop = document.getElementById("project-modal-backdrop");
  const modalTitle = document.getElementById("modal-project-title");
  const modalSubtitle = document.getElementById("modal-project-subtitle");
  const modalBody = document.getElementById("modal-project-body");
  const closeBtn = document.getElementById("modal-close-btn");

  const resumeBackdrop = document.getElementById("resume-modal-backdrop");
  const resumeCloseBtn = document.getElementById("resume-modal-close-btn");

  function closeModal() {
    if (backdrop) {
      backdrop.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  function closeResumeModal() {
    if (resumeBackdrop) {
      resumeBackdrop.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (resumeCloseBtn) resumeCloseBtn.addEventListener("click", closeResumeModal);

  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  if (resumeBackdrop) {
    resumeBackdrop.addEventListener("click", (e) => {
      if (e.target === resumeBackdrop) closeResumeModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (backdrop && backdrop.classList.contains("open")) closeModal();
      if (resumeBackdrop && resumeBackdrop.classList.contains("open")) closeResumeModal();
    }
  });

  window.openResumeModal = function() {
    if (resumeBackdrop) {
      resumeBackdrop.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  };

  window.closeResumeModal = closeResumeModal;

  window.openProjectModal = function(projectId) {
    if (!backdrop || !modalBody) return;
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!project) return;

    modalTitle.textContent = project.name;
    modalSubtitle.textContent = project.subtitle || project.kind;

    const liveBtnHtml = project.liveUrl
      ? `<a href="${project.liveUrl}" target="_blank" rel="noreferrer" class="button market-primary">Live Application ↗</a>`
      : "";

    const githubBtnHtml = project.githubUrl
      ? `<a href="${project.githubUrl}" target="_blank" rel="noreferrer" class="button publish-primary">GitHub Repository ↗</a>`
      : "";

    let architectureHtml = "";
    if (project.architecture) {
      architectureHtml = `
        <div style="margin-top: 20px; background: var(--code-bg); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 16px;">
          <h4 style="font-family: var(--mono); font-size: 11px; text-transform: uppercase; color: var(--accent); margin-bottom: 10px;">Engineering & Stack Architecture</h4>
          <dl style="display: grid; grid-template-columns: auto 1fr; gap: 8px 16px; font-family: var(--mono); font-size: 12px;">
            ${Object.entries(project.architecture).map(([k, v]) => `
              <dt style="color: var(--faint); text-transform: capitalize;">${k}:</dt>
              <dd style="color: var(--text);">${v}</dd>
            `).join("")}
          </dl>
        </div>
      `;
    }

    modalBody.innerHTML = `
      <div style="margin-bottom: 16px;">
        <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text); margin-bottom: 16px;">
          ${project.description}
        </p>
      </div>

      <div style="margin-bottom: 20px;">
        <h4 style="font-family: var(--mono); font-size: 11px; text-transform: uppercase; color: var(--heading); margin-bottom: 12px; letter-spacing: 0.05em;">Key Architectural Highlights</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; padding-left: 0;">
          ${project.highlights.map(h => `
            <li style="display: flex; gap: 8px; font-size: 0.88rem; color: var(--text); line-height: 1.5;">
              <span style="color: var(--accent); font-family: var(--mono); font-weight: bold;">▪</span>
              <span>${h}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div style="margin-bottom: 20px;">
        <h4 style="font-family: var(--mono); font-size: 11px; text-transform: uppercase; color: var(--faint); margin-bottom: 8px;">Technologies & Tools</h4>
        <div class="tag-list" style="margin-bottom: 0;">
          ${project.tags.map(t => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>

      ${architectureHtml}

      <div style="display: flex; gap: 12px; margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--line-soft);">
        ${liveBtnHtml}
        ${githubBtnHtml}
        <button type="button" class="button" onclick="document.getElementById('project-modal-backdrop').classList.remove('open'); document.body.style.overflow = '';">Close</button>
      </div>
    `;

    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  };
}
