import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const resumeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Abaid Ullah Bhatti — Software Engineer Resume (ATS Optimized)</title>
<style>
  @page {
    size: letter;
    margin: 0.42in 0.48in;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #111827;
    background: #ffffff;
    font-size: 9.3pt;
    line-height: 1.34;
  }
  a {
    color: #111827;
    text-decoration: none;
  }
  .header {
    text-align: center;
    margin-bottom: 8px;
    border-bottom: 1.5px solid #111827;
    padding-bottom: 6px;
  }
  .header h1 {
    font-size: 20pt;
    font-weight: 800;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #000000;
    margin-bottom: 2px;
  }
  .header .title-sub {
    font-size: 9.8pt;
    font-weight: 600;
    color: #1f2937;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
  .contact-bar {
    font-size: 8.8pt;
    color: #374151;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
  }
  .contact-bar span {
    display: inline-flex;
    align-items: center;
  }
  .contact-bar .sep {
    color: #9ca3af;
  }

  .section {
    margin-bottom: 9px;
  }
  .section-title {
    font-size: 10.2pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #000000;
    border-bottom: 1px solid #1f2937;
    padding-bottom: 2px;
    margin-bottom: 5px;
  }

  .entry {
    margin-bottom: 6px;
    page-break-inside: avoid;
  }
  .entry-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 9.4pt;
  }
  .entry-title {
    font-weight: 700;
    color: #000000;
  }
  .entry-meta {
    font-size: 8.6pt;
    color: #374151;
    font-weight: 600;
    text-align: right;
  }
  .entry-sub {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 8.8pt;
    font-style: italic;
    color: #374151;
    margin-bottom: 2px;
  }

  ul.bullets {
    margin-left: 15px;
    margin-top: 2px;
  }
  ul.bullets li {
    font-size: 8.9pt;
    line-height: 1.33;
    color: #1f2937;
    margin-bottom: 1.5px;
  }
  ul.bullets li strong {
    color: #000000;
    font-weight: 600;
  }

  .skills-grid {
    display: table;
    width: 100%;
    font-size: 8.9pt;
  }
  .skills-row {
    display: table-row;
  }
  .skills-label {
    display: table-cell;
    font-weight: 700;
    color: #000000;
    width: 19%;
    padding-bottom: 2px;
    vertical-align: top;
  }
  .skills-val {
    display: table-cell;
    color: #1f2937;
    padding-bottom: 2px;
    vertical-align: top;
  }

  .cert-row {
    display: flex;
    justify-content: space-between;
    font-size: 8.8pt;
    margin-bottom: 2px;
  }

  .page-break {
    page-break-after: always;
    break-after: page;
  }
</style>
</head>
<body>

  <!-- ================= PAGE 1 ================= -->

  <!-- HEADER / CONTACT INFO (ATS STANDARD) -->
  <header class="header">
    <h1>ABAID ULLAH BHATTI</h1>
    <div class="title-sub">Software Engineer • Full-Stack Developer • Systems & Backend Lead</div>
    <div class="contact-bar">
      <span>Lahore, Pakistan</span>
      <span class="sep">|</span>
      <span>+92-327-9399269</span>
      <span class="sep">|</span>
      <a href="mailto:abaidullah99999@gmail.com"><strong>abaidullah99999@gmail.com</strong></a>
      <span class="sep">|</span>
      <a href="https://linkedin.com/in/abaidullah-bhatti-579b98290">linkedin.com/in/abaidullah-bhatti</a>
      <span class="sep">|</span>
      <a href="https://github.com/Abaidullah9">github.com/Abaidullah9</a>
    </div>
  </header>

  <!-- EDUCATION -->
  <section class="section">
    <div class="section-title">Education</div>
    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">University of Engineering and Technology (UET), Lahore</span>
        <span class="entry-meta">Lahore, Pakistan</span>
      </div>
      <div class="entry-sub">
        <span>Bachelor of Science in Computer Science — CGPA: <strong>3.38 / 4.00</strong></span>
        <span>2023 – 2027</span>
      </div>
      <ul class="bullets">
        <li><strong>Honors & Awards:</strong> Awarded Government Merit-Based Academic Scholarship (2020 – 2025).</li>
        <li><strong>Core Coursework:</strong> Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Operating Systems, Computer Networks, Software Engineering, Theory of Automata, Compiler Construction.</li>
      </ul>
    </div>
  </section>

  <!-- TECHNICAL SKILLS -->
  <section class="section">
    <div class="section-title">Technical Skills</div>
    <div class="skills-grid">
      <div class="skills-row">
        <div class="skills-label">Languages:</div>
        <div class="skills-val">TypeScript, JavaScript (ES6+), Python, C, C++, SQL, x86 Assembly (MASM32), HTML5, CSS3</div>
      </div>
      <div class="skills-row">
        <div class="skills-label">Frontend:</div>
        <div class="skills-val">React 18, Next.js 16 (App Router), Tailwind CSS, Vite, Redux Toolkit, Component Architecture</div>
      </div>
      <div class="skills-row">
        <div class="skills-label">Backend & APIs:</div>
        <div class="skills-val">Node.js, Express.js, ASP.NET Core, RESTful APIs, JWT, Role-Based Access Control (RBAC), Middleware</div>
      </div>
      <div class="skills-row">
        <div class="skills-label">Databases & Cloud:</div>
        <div class="skills-val">PostgreSQL, MongoDB (Atlas/Mongoose), SQL Server, Redis, Supabase, Cloudinary, Docker</div>
      </div>
      <div class="skills-row">
        <div class="skills-label">Tools & Testing:</div>
        <div class="skills-val">Git, GitHub, Docker, Postman, Jest (58+ suites), Vitest, Supertest, Linux / Bash, CI/CD, Markdown</div>
      </div>
      <div class="skills-row">
        <div class="skills-label">Engineering Focus:</div>
        <div class="skills-val">AST Compilers, Database Benchmarking, Concurrency Transactions, Stripe Payment Integration</div>
      </div>
    </div>
  </section>

  <!-- FEATURED ENGINEERING PROJECTS -->
  <section class="section">
    <div class="section-title">Flagship Engineering Projects</div>

    <!-- PROJECT 1: LITHO FYP -->
    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Litho: Markdown-to-LaTeX Publishing Ecosystem (Final Year Project)</span>
        <span class="entry-meta">Python, AST Compiler, Tectonic TeX, Jinja2, CI/CD</span>
      </div>
      <div class="entry-sub">
        <span>Compiler & LaTeX Backend Engine Lead — Department of Computer Science, UET Lahore</span>
        <span>2024 – Present</span>
      </div>
      <ul class="bullets">
        <li>Architected an end-to-end technical publishing compiler mapping CommonMark AST nodes into versioned publisher LaTeX templates with lossless round-trip metadata recovery.</li>
        <li>Engineered a custom Jinja2 template-binding emitter generating high-fidelity LaTeX for callouts, math equations, citations, figures, and Gantt charts.</li>
        <li>Configured and packaged a trimmed Tectonic TeX engine fork with precompiled format files, accelerating PDF compilation times by over 40%.</li>
        <li>Built an automated golden-PDF visual regression testing harness in CI, verifying pixel-perfect diff rendering across IEEE, Springer, and thesis templates.</li>
      </ul>
    </div>

    <!-- PROJECT 2: SHOP.CO -->
    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Shop.co — Enterprise MERN Stack E-Commerce Platform</span>
        <span class="entry-meta">React 18, TypeScript, Node.js, Express, MongoDB, Stripe</span>
      </div>
      <div class="entry-sub">
        <span>Full-Stack Architect & Developer — Live on Vercel & Render Cloud</span>
        <span>2024</span>
      </div>
      <ul class="bullets">
        <li>Engineered a production-ready, fully-typed clothing commerce application with strict RBAC authorization and JWT authentication featuring access/refresh token rotation.</li>
        <li>Implemented unified shopping cart persistence supporting guest UUID sessions and automatic cart merging upon user authentication.</li>
        <li>Leveraged atomic MongoDB transactions to guarantee inventory consistency during concurrent multi-item checkouts and Stripe webhook fulfillment.</li>
        <li>Built an admin analytics dashboard with MongoDB native aggregation pipelines tracking revenue, product velocity, and customer cohort metrics.</li>
      </ul>
    </div>

    <!-- PROJECT 3: LITHO MARKETPLACE -->
    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Litho Template Marketplace — Curated Document Registry</span>
        <span class="entry-meta">Next.js 16, React, Express 5, Supabase PostgreSQL, Docker</span>
      </div>
      <div class="entry-sub">
        <span>Full-Stack Developer — Live on Render Cloud Docker Container</span>
        <span>2024</span>
      </div>
      <ul class="bullets">
        <li>Developed a responsive template registry featuring dual-pane split view, real-time multi-token search (tag:, kind:), and a 10-theme CSS design system.</li>
        <li>Integrated Supabase PostgreSQL database with schema migration pipelines and built administrative moderation controls for submissions.</li>
        <li>Configured dual-deployment pipelines: static catalog export for GitHub Pages and production Docker web service on Render.</li>
      </ul>
    </div>
  </section>

  <!-- Clean Page Break for ATS 2-Page Standard -->
  <div class="page-break"></div>

  <!-- ================= PAGE 2 ================= -->

  <!-- PROJECTS (CONTINUED) -->
  <section class="section">
    <div class="section-title">Engineering Projects (Continued)</div>

    <!-- PROJECT 4: CROSS-DB BENCHMARK -->
    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Cross-Database Performance Benchmarking Suite</span>
        <span class="entry-meta">Python, PostgreSQL, MongoDB, SQL Server, Redis, Matplotlib</span>
      </div>
      <div class="entry-sub">
        <span>Solo Developer & Benchmarking Researcher</span>
        <span>2024</span>
      </div>
      <ul class="bullets">
        <li>Engineered an automated Python benchmarking framework measuring throughput and latency for CRUD, multi-table JOINs, and complex aggregation operations.</li>
        <li>Benchmarked SQL Server, PostgreSQL, MongoDB Atlas, and Redis under concurrent workloads, analyzing index optimization and query execution plans.</li>
        <li>Generated comparative visualization reports identifying performance sweet spots for relational vs. document vs. key-value storage paradigms.</li>
      </ul>
    </div>

    <!-- PROJECT 5: AMS -->
    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Attendance Management System (AMS)</span>
        <span class="entry-meta">Next.js 14, React, Supabase PostgreSQL, Tailwind CSS</span>
      </div>
      <div class="entry-sub">
        <span>Full-Stack Web Engineer</span>
        <span>2024</span>
      </div>
      <ul class="bullets">
        <li>Built an administrative attendance tracking platform with role-based access for faculty and administrators, daily attendance logging, and CSV exports.</li>
        <li>Engineered responsive interfaces with Tailwind CSS and integrated Supabase authentication with Row-Level Security (RLS) policies.</li>
      </ul>
    </div>

    <!-- PROJECT 6: CYBER RECONNAISSANCE -->
    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Secure Cyber Reconnaissance Framework</span>
        <span class="entry-meta">Python, Network Sockets, Information Security</span>
      </div>
      <div class="entry-sub">
        <span>Lead Security Researcher</span>
        <span>2024</span>
      </div>
      <ul class="bullets">
        <li>Developed an early-warning reconnaissance framework mapping attack surfaces and identifying vulnerabilities in simulated enterprise networks using passive intelligence techniques.</li>
        <li>Reduced simulated threat vectors by over 30% through automated port auditing and misconfiguration discovery routines.</li>
      </ul>
    </div>

    <!-- PROJECT 7: MASM32 CHESS -->
    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Graphical Chess Game in MASM32 Assembly</span>
        <span class="entry-meta">x86 Assembly, MASM32 SDK, Windows API</span>
      </div>
      <div class="entry-sub">
        <span>Low-Level Systems Developer</span>
        <span>2023</span>
      </div>
      <ul class="bullets">
        <li>Implemented full chess rule verification and graphical board rendering using low-level Win32 GDI pixel manipulation and direct register allocation.</li>
        <li>Optimized memory footprint and CPU register usage to achieve zero-latency move validation in constrained 32-bit execution environments.</li>
      </ul>
    </div>
  </section>

  <!-- EXPERIENCE & LEADERSHIP -->
  <section class="section">
    <div class="section-title">Professional Experience & Leadership</div>
    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Solo Full-Stack Engineer / Open-Source Contributor</span>
        <span class="entry-meta">Remote / Lahore, Pakistan</span>
      </div>
      <div class="entry-sub">
        <span>Independent Software Development</span>
        <span>2024 – Present</span>
      </div>
      <ul class="bullets">
        <li>Architected and deployed 11 open-source software engineering repositories spanning full-stack web platforms, compiler toolchains, cybersecurity scanners, and low-level systems.</li>
        <li>Engineered production-grade security architectures including JWT authentication, rate limiting, helmet security headers, and comprehensive unit/integration test coverage with Jest.</li>
      </ul>
    </div>
    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">UET ACM Student Chapter</span>
        <span class="entry-meta">UET Lahore, Pakistan</span>
      </div>
      <div class="entry-sub">
        <span>Event Coordinator & Technical Volunteer</span>
        <span>2023 – Present</span>
      </div>
      <ul class="bullets">
        <li>Coordinated collegiate technical workshops, coding bootcamps, and hackathons for 300+ computer science students.</li>
        <li>Mentored junior undergraduates in introductory programming, version control workflows with Git, and data structures problem solving.</li>
      </ul>
    </div>
  </section>

  <!-- TECHNICAL CERTIFICATIONS & COURSEWORK -->
  <section class="section">
    <div class="section-title">Technical Certifications & Coursework</div>
    <ul class="bullets">
      <li><strong>Full-Stack Web Development:</strong> Comprehensive single-page application architectures, Next.js / React, and RESTful Express APIs (2024).</li>
      <li><strong>Relational Databases & SQL:</strong> Advanced query optimization, schema normalization (1NF–BCNF), and ACID transactions (2024).</li>
      <li><strong>Python Programming & Scripting:</strong> Object-oriented design, systems automation, and data pipeline scripting (2024).</li>
      <li><strong>MongoDB & Document Databases:</strong> Aggregation pipelines, Atlas cluster administration, and Mongoose schema modeling (2024).</li>
      <li><strong>Modern JavaScript (ES6+) & Data Structures (DSA):</strong> Asynchronous event loop, closures, and algorithmic problem solving (2023).</li>
    </ul>
  </section>

</body>
</html>
`;

const htmlPath = path.join(rootDir, "scripts", "resume_preview.html");
const pdfPublicPath = path.join(rootDir, "public", "Abaid_Ullah_Resume.pdf");
const pdfDistPath = path.join(rootDir, "dist", "Abaid_Ullah_Resume.pdf");

fs.writeFileSync(htmlPath, resumeHtml, "utf8");
console.log("Written resume HTML to:", htmlPath);

// Generate PDF using Microsoft Edge headless
const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const fileUrl = `file:///${htmlPath.replace(/\\/g, "/")}`;

console.log("Executing Edge headless to generate PDF...");
execFileSync(edgePath, [
  "--headless=new",
  "--disable-gpu",
  "--no-pdf-header-footer",
  `--print-to-pdf=${pdfPublicPath}`,
  fileUrl
]);

if (fs.existsSync(pdfPublicPath)) {
  const stats = fs.statSync(pdfPublicPath);
  console.log("Successfully generated public PDF! Size:", stats.size, "bytes");
  // Also copy to dist if dist exists
  if (fs.existsSync(path.join(rootDir, "dist"))) {
    fs.copyFileSync(pdfPublicPath, pdfDistPath);
    console.log("Copied to dist PDF:", pdfDistPath);
  }
} else {
  console.error("PDF generation failed: file does not exist.");
  process.exit(1);
}
