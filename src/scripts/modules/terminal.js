/**
 * Interactive Developer Terminal
 */

import { PROJECTS_DATA, PROFILE_INFO, FYP_DATA, CERTIFICATIONS_DATA, INTERNSHIPS_DATA } from "../data/projects.js";

export function initTerminal() {
  const terminalBody = document.getElementById("terminal-body");
  const terminalInput = document.getElementById("terminal-input");
  const terminalOutput = document.getElementById("terminal-output");

  if (!terminalInput || !terminalOutput) return;

  const HISTORY = [];
  let historyIndex = -1;

  const COMMANDS = {
    help: () => `
Available Commands:
  help              Display this command guide
  cat fyp           Inspect Final Year Project (Litho Publishing Ecosystem)
  cat resume        Print condensed resume & academic credentials
  certs             List verified online courses & technical certifications
  internships       Display professional & academic experience
  projects          List all engineering projects
  projects --live   List only verified live production deployments
  skills            Display full-stack & systems tech stack matrix
  contact           Output direct contact channels (Email, Phone, LinkedIn)
  whoami            Print current visitor identity
  theme <name>      Change color scheme (dark, light, tokyo, mocha, nord, kanagawa, gruvbox, rose, hackerman)
  clear             Clear terminal screen
    `,

    "cat fyp": () => `
================================================================
FINAL YEAR PROJECT (FYP) — LITHO PUBLISHING ECOSYSTEM
================================================================
Title:        ${FYP_DATA.title}
Institution:  ${FYP_DATA.institution}
Degree:       ${FYP_DATA.degree || 'BS Computer Science (2023–2027)'}

Team Members:
${FYP_DATA.team.map(m => `  • ${m.name} (${m.roll}) — ${m.role}`).join("\n")}

Abaidullah's Direct Ownership:
${FYP_DATA.abaidullahOwnership.map(o => `  [${o.feature}]
   ${o.detail}`).join("\n\n")}

Live Marketplace: ${FYP_DATA.liveUrl}
GitHub Repo:      ${FYP_DATA.githubUrl}
    `,

    "cat resume": () => `
================================================================
ABAID ULLAH BHATTI — SOFTWARE ENGINEER & CS SENIOR @ UET LAHORE
================================================================
Institution:   ${PROFILE_INFO.education.institution}
Degree:        ${PROFILE_INFO.education.degree} (${PROFILE_INFO.education.period})
Academic CGPA: ${PROFILE_INFO.education.cgpa}
Honors:        ${PROFILE_INFO.education.honors}
Portfolio:     ${PROFILE_INFO.portfolio}
Primary Focus: Production MERN/Next.js Web Platforms, Low-Level Compilers & DB Benchmarking
Interactive:   Type 'resume' or 'open resume' to view the interactive ATS resume sheet.
Download:      Direct PDF available at /Abaid_Ullah_Resume.pdf
    `,

    resume: () => {
      if (window.openResumeModal) window.openResumeModal();
      return "Opening interactive ATS resume viewer modal...";
    },

    "open resume": () => {
      if (window.openResumeModal) window.openResumeModal();
      return "Opening interactive ATS resume viewer modal...";
    },

    certs: () => `
Verified Certifications & Technical Coursework (${CERTIFICATIONS_DATA.length}):
${CERTIFICATIONS_DATA.map((c, i) => `  [${i + 1}] ${c.title.padEnd(46)} | ${c.issuer} (${c.period})
      Skills: ${c.skills.join(", ")}`).join("\n\n")}
    `,

    internships: () => `
Professional & Academic Experience / Internships (${INTERNSHIPS_DATA.length}):
${INTERNSHIPS_DATA.map((x, i) => `  [${i + 1}] ${x.role} — ${x.organization} (${x.period})
      ${x.points[0]}`).join("\n\n")}
    `,

    projects: () => `
All Engineering Projects & Systems (${PROJECTS_DATA.length}):
${PROJECTS_DATA.map((p, i) => `  [${i + 1}] ${p.name.padEnd(30)} | ${p.kind.padEnd(26)} | ${p.liveUrl ? 'LIVE DEMO ↗' : 'GitHub Repo'}`).join("\n")}
    `,

    "projects --live": () => `
Verified Live Deployments:
  1. Shop.co (Full-Stack E-Commerce):
     ${PROJECTS_DATA[0].liveUrl}
  2. Litho Template Marketplace (Academic Registry - FYP):
     ${PROJECTS_DATA[1].liveUrl}
  3. Attendance Management System (Enterprise Portal):
     ${PROJECTS_DATA[2].liveUrl}
    `,

    skills: () => `
Technical Stack Matrix:
  Languages:   ${PROFILE_INFO.skills.languages.join(", ")}
  Frontend:    ${PROFILE_INFO.skills.frontend.join(", ")}
  Backend:     ${PROFILE_INFO.skills.backend.join(", ")}
  Databases:   ${PROFILE_INFO.skills.databases.join(", ")}
  Systems/Low: ${PROFILE_INFO.skills.systems.join(", ")}
  Testing/Dev: ${PROFILE_INFO.skills.testing.join(", ")}
    `,

    contact: () => `
Direct Contact Channels:
  Email:       ${PROFILE_INFO.email}
  Phone:       ${PROFILE_INFO.phone}
  Portfolio:   ${PROFILE_INFO.portfolio}
  GitHub:      ${PROFILE_INFO.github}
  LinkedIn:    ${PROFILE_INFO.linkedin}
  Location:    ${PROFILE_INFO.location}
    `,

    whoami: () => `guest@recruiter-workstation: visitor exploring Abaid Ullah's engineering portfolio.`,

    clear: () => {
      terminalOutput.innerHTML = "";
      return null;
    }
  };

  function runCommand(rawCmd) {
    if (!rawCmd) return;

    HISTORY.push(rawCmd);
    historyIndex = HISTORY.length;

    // Echo command
    const cmdLine = document.createElement("div");
    cmdLine.innerHTML = `<span style="color: var(--accent); font-weight: bold;">guest@abaid:~$</span> <span>${rawCmd}</span>`;
    terminalOutput.appendChild(cmdLine);

    const lowerCmd = rawCmd.toLowerCase();

    // Theme command support
    if (lowerCmd.startsWith("theme ")) {
      const themeArg = lowerCmd.split(" ")[1];
      const themeMap = {
        dark: "dark",
        light: "light",
        tokyo: "tokyo-night",
        "tokyo-night": "tokyo-night",
        mocha: "catppuccin",
        catppuccin: "catppuccin",
        nord: "nord",
        kanagawa: "kanagawa",
        gruvbox: "gruvbox",
        rose: "rose-pine",
        "rose-pine": "rose-pine",
        hackerman: "hackerman",
        matrix: "hackerman"
      };
      const targetTheme = themeMap[themeArg];
      if (targetTheme) {
        document.documentElement.setAttribute("data-theme", targetTheme);
        localStorage.setItem("litho-theme", targetTheme);
        const out = document.createElement("div");
        out.style.color = "var(--stable)";
        out.textContent = `Theme updated to '${targetTheme}'.`;
        terminalOutput.appendChild(out);
      } else {
        const out = document.createElement("div");
        out.style.color = "#ef4444";
        out.textContent = `Unknown theme '${themeArg}'. Available: dark, light, tokyo, mocha, nord, kanagawa, gruvbox, rose, hackerman`;
        terminalOutput.appendChild(out);
      }
    } else if (COMMANDS[lowerCmd]) {
      const result = COMMANDS[lowerCmd]();
      if (result !== null) {
        const out = document.createElement("pre");
        out.style.color = "var(--text)";
        out.style.margin = "6px 0 14px";
        out.style.whiteSpace = "pre-wrap";
        out.textContent = result.trim();
        terminalOutput.appendChild(out);
      }
    } else {
      const out = document.createElement("div");
      out.style.color = "#ef4444";
      out.textContent = `Command not recognized: '${rawCmd}'. Type 'help' for available commands.`;
      terminalOutput.appendChild(out);
    }

    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const rawCmd = terminalInput.value.trim();
      terminalInput.value = "";
      runCommand(rawCmd);
    } else if (e.key === "ArrowUp") {
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = HISTORY[historyIndex];
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex < HISTORY.length - 1) {
        historyIndex++;
        terminalInput.value = HISTORY[historyIndex];
      } else {
        historyIndex = HISTORY.length;
        terminalInput.value = "";
      }
    }
  });

  // Setup Quick Command Chips
  const quickChips = document.querySelectorAll(".term-chip");
  quickChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const cmd = chip.getAttribute("data-cmd");
      if (cmd) {
        terminalInput.value = "";
        runCommand(cmd);
      }
    });
  });
}
