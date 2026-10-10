# Abaid Ullah Bhatti — Software Engineering Portfolio & Systems Registry

A high-performance personal portfolio and engineering showcase designed with the exact visual language, technical aesthetic, and interaction patterns of the **[Litho Template Marketplace](https://litho-template-marketplace.onrender.com/Litho-Template-Marketplace/index.html)**.

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)](https://vercel.com)
[![Render Deployment](https://img.shields.io/badge/Deploy-Render-46E3B7?style=flat&logo=render)](https://render.com)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222222?style=flat&logo=github)](https://pages.github.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](LICENSE)

---

## 🌟 Live Flagship Deployments

1. **[Shop.co — Full-Stack E-Commerce Platform](https://shop-co-rust-phi.vercel.app/)**
   - **Frontend:** React 18, Vite, TypeScript, Tailwind CSS
   - **Backend:** Node.js, Express, TypeScript, MongoDB Atlas
   - **Architecture:** Granular RBAC, cookie JWT auth with refresh rotation, unified guest/user cart, Stripe checkouts & cryptographically verified webhooks, atomic MongoDB transactions, and native aggregation analytics.
   - **GitHub:** [`Abaidullah9/Shop.co`](https://github.com/Abaidullah9/Shop.co)

2. **[Litho Template Marketplace](https://litho-template-marketplace.onrender.com/Litho-Template-Marketplace/index.html)**
   - **Frontend:** Next.js 16 (App Router), React, Tailwind CSS
   - **Backend & Database:** Express 5 API, Supabase PostgreSQL with automated schema migrations (`db:migrate`)
   - **Features:** Full-text tokenized search engine, dual cards/split views, parametric ray canvas visualizer, multi-theme engine, and administrative moderation dashboard.
   - **GitHub:** [`Abaidullah9/Litho-Template-Marketplace`](https://github.com/Abaidullah9/Litho-Template-Marketplace)

3. **[Attendance Management System (AMS)](https://attendance-management-system-weld.vercel.app/)**
   - **Architecture:** Enterprise ASP.NET Core API + TypeScript/React frontend on Vercel.
   - **GitHub:** [`Abaidullah9/AttendanceManagementSystem`](https://github.com/Abaidullah9/AttendanceManagementSystem)

---

## 🎨 Litho Marketplace Design Features

- **Litho Design System:** Crisp monospace typography (`JetBrains Mono`), refined borders (`1px solid var(--line)`), 3px border radii, high-contrast black palette (`#000000`), and coral orange accents (`#ff5a36`).
- **5 Switchable Color Themes:**
  1. `dark` (Litho pitch black & coral orange)
  2. `light` (Minimal warm paper gray & deep red)
  3. `tokyo-night` (Midnight navy & cyan)
  4. `catppuccin` (Mocha & peach)
  5. `nord` (Arctic dark & frost ice)
- **Interactive Parametric Ray Visualizer:** Live canvas ray/waveform generator (`RAY 01/05` through `RAY 05/05`) with interactive click-cycling (Harmonic, Vortex, Lattice, Quantum, Neural).
- **Dual Catalog Browsing Modes:**
  - **Cards Grid:** Comprehensive cards with status tags, tech badges, and instant links.
  - **Split View:** Dual-pane layout featuring keyboard arrow navigation (`↑` / `↓`) and real-time standing metric meters.
- **Deep-Dive Architecture Modal:** Click "Inspect ⓘ" on any project to view technical architecture, engineering trade-offs, database schemas, and endpoints.
- **Interactive Developer Terminal:** Built-in CLI emulator (`cat resume`, `projects --live`, `skills`, `contact`, `theme`).
- **One-Click Contact & Copy:** Clipboard buttons with live toast notifications.

---

## 📂 Complete Project Registry

All 11 GitHub repositories from [@Abaidullah9](https://github.com/Abaidullah9) are integrated:

| Project | Category | Primary Stack | Key Highlights |
| :--- | :--- | :--- | :--- |
| **Shop.co** | Full-Stack | React, TypeScript, Express, MongoDB | RBAC, JWT rotation, Stripe, Atomic Txns |
| **Litho Template Marketplace** | Full-Stack | Next.js 16, Express 5, Supabase, Docker | Academic document registry, Admin console |
| **Attendance Management System** | Full-Stack | TypeScript, React, ASP.NET Core, SQL Server | Live roster tracking & attendance logs |
| **HR Portal Backend** | Backend & APIs | Express 5, TypeScript, MongoDB, Jest | 58 Jest tests, Action-based RBAC, JWT cookies |
| **Cross-Database Benchmarking Tool** | Systems & Data | Python, SQL Server, Postgres, Mongo, Redis | Apples-to-apples performance comparisons |
| **Mini-Compiler** | Systems & C++ | C++17, Flex, Bison, Three-Address Code | Lexer, LALR parser, AST, Symbol table, TAC |
| **Inventory Management System** | Backend & APIs | TypeScript, Prisma ORM, PostgreSQL, Vitest | SKU tracking, warehouse transfers, Vitest |
| **Secure Cyber Reconnaissance** | Systems / Security | Python, Scapy, Linux | UET research reducing attack surface by 30% |
| **Graphical Chess in MASM32** | Systems / Assembly | x86 MASM32, Win32 GDI | Register-optimized move logic & pixel blitting |
| **ECO-Friendly Advisor AI Bot** | AI / Utilities | JavaScript, Node.js, Prompt Engineering | Sustainability LLM chatbot assistant |
| **Tools-For-Web** | Browser Tools | Vanilla JavaScript (ES6+), DOM APIs | Browser automation and utility scripts |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or pnpm

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Local Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
```

The optimized static output will be generated in `dist/`.

---

## 🌐 1-Click Deployment Options

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select this repository.
4. Vercel automatically detects Vite with:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.

Alternatively, via Vercel CLI:
```bash
npx vercel --prod
```

### Deploy to GitHub Pages

You can deploy the built `dist/` directory using `gh-pages`:

```bash
npx gh-pages -d dist
```

### Deploy to Render or Netlify

- **Render:** Connect GitHub repository, select **Static Site**, set publish directory to `dist`, and build command to `npm run build`.
- **Netlify:** Drag and drop the `dist/` folder or link the GitHub repo.

---

## 👤 Profile & Credentials

- **Name:** Abaid Ullah Bhatti
- **Education:** University of Engineering and Technology (UET), Lahore
- **Degree:** Bachelors in Computer Science (2023 – 2027)
- **Academic CGPA:** 3.38 / 4.00
- **Honors:** Merit-Based Academic Scholarship from Government (2020 – 2025)
- **Email:** [abaidullah99999@gmail.com](mailto:abaidullah99999@gmail.com)
- **Phone:** +92-327-9399269
- **LinkedIn:** [linkedin.com/in/abaidullah-bhatti-579b98290](https://www.linkedin.com/in/abaidullah-bhatti-579b98290)
- **GitHub:** [github.com/Abaidullah9](https://github.com/Abaidullah9)

---

## 📄 License

MIT License © 2026 Abaid Ullah Bhatti.
