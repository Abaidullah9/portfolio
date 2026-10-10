/**
 * Modals: Project Deep-Dive Architecture, Interactive ATS Resume Viewer & Credential Proof Viewer
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

  const credentialBackdrop = document.getElementById("credential-modal-backdrop");
  const credentialTitle = document.getElementById("credential-modal-title");
  const credentialIssuer = document.getElementById("credential-modal-issuer");
  const credentialImage = document.getElementById("credential-modal-image");
  const credentialGithub = document.getElementById("credential-modal-github");
  const credentialCloseBtn = document.getElementById("credential-modal-close-btn");

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

  function closeCredentialModal() {
    if (credentialBackdrop) {
      credentialBackdrop.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (resumeCloseBtn) resumeCloseBtn.addEventListener("click", closeResumeModal);
  if (credentialCloseBtn) credentialCloseBtn.addEventListener("click", closeCredentialModal);

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

  if (credentialBackdrop) {
    credentialBackdrop.addEventListener("click", (e) => {
      if (e.target === credentialBackdrop) closeCredentialModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (backdrop && backdrop.classList.contains("open")) closeModal();
      if (resumeBackdrop && resumeBackdrop.classList.contains("open")) closeResumeModal();
      if (credentialBackdrop && credentialBackdrop.classList.contains("open")) closeCredentialModal();
    }
  });

  window.openResumeModal = function() {
    if (resumeBackdrop) {
      const iframe = document.getElementById("resume-modal-iframe");
      if (iframe && !iframe.getAttribute("src")) {
        iframe.src = "/Abaid_Ullah_Resume.pdf";
      }
      resumeBackdrop.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  };

  window.closeResumeModal = closeResumeModal;

  window.openCredentialModal = function(imageUrl, title, issuer, githubUrl) {
    if (credentialBackdrop) {
      if (credentialTitle) credentialTitle.textContent = title;
      if (credentialIssuer) credentialIssuer.textContent = issuer;
      if (credentialImage) credentialImage.src = imageUrl;
      if (credentialGithub) credentialGithub.href = githubUrl;
      credentialBackdrop.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  };

  window.closeCredentialModal = closeCredentialModal;

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
          <dl class="modal-arch-dl">
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

      <div class="modal-footer-actions">
        ${liveBtnHtml}
        ${githubBtnHtml}
        <button type="button" class="button" onclick="document.getElementById('project-modal-backdrop').classList.remove('open'); document.body.style.overflow = '';">Close</button>
      </div>
    `;

    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  };
}
