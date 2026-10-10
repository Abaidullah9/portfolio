/**
 * Abaid Ullah Bhatti — Project Registry, FYP, Certifications & Experience Data
 * Sourced directly from GitHub, UET Lahore, and Professional Credentials
 */

export const FYP_DATA = {
  title: "Litho: Markdown-to-LaTeX Publishing Ecosystem for Reproducible Technical Documents",
  institution: "University of Engineering and Technology (UET), Lahore",
  department: "Department of Computer Science (Session 2023–2027)",
  degree: "BS Computer Science",
  team: [
    { name: "Abaidullah Bhatti", roll: "2023-CS-713", role: "Compiler & LaTeX Backend Engine Lead" },
    { name: "Rabia Nadeem", roll: "2023-CS-705", role: "Grammar Spec, Parser & Metadata Embedding" },
    { name: "Abdul Rahman", roll: "2023-CS-725", role: "CLI, Template Packages & MCP/API Server" },
    { name: "Sohaib Shaukat", roll: "2023-CS-740", role: "Editor Tooling & Template Marketplace App" }
  ],
  description: "A template-driven Markdown-to-LaTeX publishing ecosystem with full round-trip reproducibility. Authors write CommonMark-compatible Markdown extended with front matter and shortcodes; a custom Python interpreter parses it, binds it to versioned publisher LaTeX templates via formal schemas, and compiles it through an optimized Tectonic fork into PDFs that embed the original Markdown source and template ID in their XMP metadata for lossless recovery.",
  abaidullahOwnership: [
    {
      feature: "Template-Binding Compiler (F4)",
      detail: "Engineered the schema resolution and template-binding compiler mapping parsed CommonMark AST nodes into structured publisher LaTeX templates."
    },
    {
      feature: "LaTeX Code Generator (F5)",
      detail: "Developed high-fidelity Jinja2 and format-string LaTeX emission pipeline handling callouts, mathematical formulae, figures, citations, and Gantt charts."
    },
    {
      feature: "Litho-Optimized Tectonic Backend (F6)",
      detail: "Configured and trimmed the Tectonic TeX fork, bundling precompiled format files and containerized subprocess execution for reproducible builds."
    },
    {
      feature: "Golden-PDF Regression Testing (F22)",
      detail: "Designed the automated golden-PDF regression harness in CI comparing pixel-diff baselines across thesis, IEEE paper, and technical book templates."
    }
  ],
  liveUrl: "https://litho-template-marketplace.onrender.com/Litho-Template-Marketplace/index.html",
  githubUrl: "https://github.com/Abaidullah9/Litho-Template-Marketplace"
};

export const CERTIFICATIONS_DATA = [
  {
    id: "cert-web",
    title: "Full-Stack Web Development & Modern Architecture",
    issuer: "Coursera / Online Technical Specialization",
    period: "2023 – 2025",
    skills: ["React 18", "Next.js", "Node.js", "Express", "Tailwind CSS", "REST APIs"],
    description: "Comprehensive training in building production-ready single-page applications, component architectures, client-side routing, JWT authentication, and responsive corporate user interfaces."
  },
  {
    id: "cert-sql",
    title: "Advanced SQL & Relational Database Architecture",
    issuer: "Technical Specialization & UET Coursework",
    period: "2023 – 2025",
    skills: ["PostgreSQL", "SQL Server", "Complex Joins", "Indexing", "Aggregations"],
    description: "Mastery of database schema normalization, transaction isolation levels, ACID compliance, query execution plans, and multi-database benchmarking."
  },
  {
    id: "cert-python",
    title: "Python Programming & Algorithmic Tooling",
    issuer: "Online Technical Certification",
    period: "2023 – 2024",
    skills: ["Python 3.12", "Data Structures", "PyMongo", "SQLAlchemy", "Automation"],
    description: "Deep dive into object-oriented Python, CLI tooling, database drivers, automated synthetic data generation, and telemetry benchmarking engines."
  },
  {
    id: "cert-mongodb",
    title: "MongoDB & NoSQL Data Modeling",
    issuer: "MongoDB Technical Curriculum",
    period: "2024 – 2025",
    skills: ["MongoDB Atlas", "Mongoose 9", "Aggregation Pipelines", "Atomic Transactions"],
    description: "Advanced document modeling, native aggregation pipelines for real-time analytics, replica sets, index optimization, and concurrency handling."
  },
  {
    id: "cert-js",
    title: "Advanced JavaScript & Asynchronous Patterns",
    issuer: "Online Certification",
    period: "2023 – 2024",
    skills: ["ES6+", "Promises/Async-Await", "DOM APIs", "Event Loop", "Closures"],
    description: "Core JavaScript language mastery, prototypes, asynchronous control flow, web storage, browser extensions, and performance profiling."
  },
  {
    id: "cert-dsa",
    title: "Data Structures & Algorithms (DSA)",
    issuer: "UET Lahore / Academic Curriculum",
    period: "2023 – 2025",
    skills: ["Trees & Graphs", "Dynamic Programming", "Sorting", "Time/Space Complexity"],
    description: "Algorithmic problem-solving in C++ and Python covering memory allocation, recursion, graph traversals, greedy approaches, and complexity analysis."
  }
];

export const INTERNSHIPS_DATA = [
  {
    role: "Full-Stack Software Engineering Intern / Solo Developer",
    organization: "Shop.co E-Commerce Platform",
    period: "2024 – Present",
    location: "Remote / Independent",
    points: [
      "Designed and developed a production-ready corporate clothing e-commerce platform using React, TypeScript, Node.js, and MongoDB.",
      "Engineered cookie-based JWT authentication with refresh token rotation and granular Role-Based Access Control (RBAC).",
      "Integrated Stripe checkout with cryptographic webhook fulfillment and atomic MongoDB stock transactions.",
      "Deployed frontend to Vercel and backend microservices to Render container infrastructure."
    ]
  },
  {
    role: "Lead Cybersecurity Researcher",
    organization: "Secure Cyber Reconnaissance Project (UET Lahore)",
    period: "2024",
    location: "Lahore, Pakistan",
    points: [
      "Led the reconnaissance design team focusing on stealth network mapping and attack surface enumeration.",
      "Engineered an early-warning vulnerability discovery framework using passive OSINT and non-intrusive traffic analysis.",
      "Reduced simulated network attack surfaces by over 30% in controlled evaluation tests."
    ]
  },
  {
    role: "Documentation Lead & Research Contributor",
    organization: "Automated Restaurant Management System",
    period: "2024",
    location: "UET Lahore",
    points: [
      "Headed technical system architecture documentation and functional requirement gathering.",
      "Designed normalized SQL schemas for real-time table management, user roles, billing, and order workflows.",
      "Coordinated with development teams to ensure architectural alignment with software engineering standards."
    ]
  },
  {
    role: "Event Management Coordinator",
    organization: "UET ACM Society",
    period: "2023 – 2025",
    location: "Lahore, Pakistan",
    points: [
      "Coordinated major technical events, coding hackathons, and guest lectures for UET Computer Science students.",
      "Managed logistics, team scheduling, and cross-departmental communications."
    ]
  },
  {
    role: "Community Outreach Volunteer",
    organization: "Kaar-e-Kamal Welfare",
    period: "2023 – Present",
    location: "Muridke, Pakistan",
    points: [
      "Contributed to educational assistance, youth empowerment programs, and community welfare initiatives."
    ]
  }
];

export const PROJECTS_DATA = [
  {
    id: "shop-co",
    name: "Shop.co",
    subtitle: "Full-Stack Enterprise E-Commerce Platform",
    featured: true,
    liveUrl: "https://shop-co-rust-phi.vercel.app/",
    githubUrl: "https://github.com/Abaidullah9/Shop.co",
    category: "fullstack",
    tags: ["react", "typescript", "nodejs", "express", "mongodb", "stripe", "tailwind", "docker"],
    status: "LIVE ON VERCEL & RENDER",
    kind: "Full-Stack Web Application",
    stars: 1,
    forks: 0,
    updated: "2026-07-30",
    description: "Production-ready, highly scalable, and fully-typed MERN stack e-commerce platform built to showcase enterprise-level architectural patterns. Features granular RBAC, cookie JWT auth with refresh token rotation, Stripe checkout, atomic MongoDB transactions, and admin analytics.",
    highlights: [
      "Cookie-based JWT authentication with access/refresh token rotation and bcrypt password hashing",
      "Granular API-level Role-Based Access Control (RBAC) managed via dynamic permissions",
      "Unified cart engine supporting Guest UUIDs and authenticated user cart merging",
      "Stripe Checkout integration with cryptographically verified webhook fulfillment",
      "Atomic MongoDB transactions ensuring zero overselling concurrency during peak checkouts",
      "Admin dashboard with native MongoDB aggregation pipelines for revenue, sales charts, and top products",
      "Integrated Cloudinary CDN for optimized asset delivery and product gallery uploads"
    ],
    architecture: {
      frontend: "React 18, Vite, TypeScript, Tailwind CSS, React Router SPA",
      backend: "Node.js, Express.js, TypeScript, RESTful API architecture",
      database: "MongoDB Atlas with Mongoose schemas & aggregation pipelines",
      auth: "httpOnly secure cookies, Access Token + Refresh Token rotation, RBAC middleware",
      payments: "Stripe Payment Gateway + Webhook fulfillment workers",
      deployment: "Frontend on Vercel, Backend API on Render, Database on MongoDB Atlas"
    },
    metrics: {
      backendComplexity: 95,
      databaseArchitecture: 92,
      testCoverage: 88,
      systemsLogic: 85,
      productionReadiness: 98
    }
  },
  {
    id: "litho-marketplace",
    name: "Litho Template Marketplace",
    subtitle: "Curated Academic & Technical Document Registry (FYP)",
    featured: true,
    liveUrl: "https://litho-template-marketplace.onrender.com/Litho-Template-Marketplace/index.html",
    githubUrl: "https://github.com/Abaidullah9/Litho-Template-Marketplace",
    category: "fullstack",
    tags: ["nextjs", "javascript", "express", "supabase", "postgresql", "docker", "render", "fyp"],
    status: "FINAL YEAR PROJECT (FYP)",
    kind: "Full-Stack Registry & Admin",
    stars: 1,
    forks: 0,
    updated: "2026-10-08",
    description: "Curated registry for academic and technical document templates (theses, research papers, technical reports, CVs) part of the Litho Publishing Ecosystem. Features full-text search with token parsing, split-view catalog, multi-theme engine, parametric canvas visualizer, and an administrative dashboard.",
    highlights: [
      "Final Year Project at UET Lahore",
      "Next.js 16 App Router architecture paired with Express 5 backend API",
      "Supabase PostgreSQL database with schema migrations and sample seeders",
      "Dual browsing modes: Responsive cards catalog and dual-pane keyboard-navigable split view",
      "Full-text search engine with multi-tag token parsing (tag:, kind:, @publisher)",
      "Interactive parametric ray canvas animation with real-time waveform generator",
      "Comprehensive Admin dashboard for reviewing template submissions, tag management, and staff roles",
      "Dual deployment model: Static catalog export for GitHub Pages + Docker web service on Render"
    ],
    architecture: {
      frontend: "Next.js 16 (App Router), React, Tailwind CSS, JetBrains Mono typography",
      backend: "Express 5 API, Session authentication, Admin dashboard",
      database: "Supabase PostgreSQL, database migration scripts (`db:migrate`)",
      deployment: "Docker Container Web Service on Render + GitHub Pages Static Export"
    },
    metrics: {
      backendComplexity: 92,
      databaseArchitecture: 90,
      testCoverage: 85,
      systemsLogic: 94,
      productionReadiness: 96
    }
  },
  {
    id: "ams",
    name: "Attendance Management System",
    subtitle: "Enterprise Attendance & Roster Tracking Portal",
    featured: true,
    liveUrl: "https://attendance-management-system-weld.vercel.app/",
    githubUrl: "https://github.com/Abaidullah9/AttendanceManagementSystem",
    category: "fullstack",
    tags: ["typescript", "react", "csharp", "aspnet", "sqlserver", "vercel"],
    status: "LIVE ON VERCEL",
    kind: "Full-Stack Enterprise Portal",
    stars: 0,
    forks: 0,
    updated: "2026-01-07",
    description: "Enterprise attendance and employee/student roster tracking solution. Provides real-time status logging, historical audit trails, punch-in/out records, leave tracking, and an interactive analytics dashboard.",
    highlights: [
      "Modular solution split between scalable backend API and responsive TypeScript frontend",
      "Real-time attendance recording with duplicate-check validation and timestamp hashing",
      "Comprehensive reporting dashboard with monthly attendance percentages and leave breakdowns",
      "Role-based views for administrators, instructors, and individual members",
      "Deployed and verified live on Vercel"
    ],
    architecture: {
      frontend: "TypeScript, React, Modern CSS Components, Vercel SPA",
      backend: "C# / ASP.NET Core REST API (`AMS.API`) & Data Access Layer",
      database: "SQL Server / Relational Schema with index-optimized punch logs",
      deployment: "Vercel frontend hosting + Cloud API endpoints"
    },
    metrics: {
      backendComplexity: 86,
      databaseArchitecture: 85,
      testCoverage: 80,
      systemsLogic: 84,
      productionReadiness: 92
    }
  },
  {
    id: "hr-portal-backend",
    name: "HR Portal Backend",
    subtitle: "Enterprise HR REST API with Action-Based RBAC & Jest Suite",
    featured: false,
    liveUrl: null,
    githubUrl: "https://github.com/Abaidullah9/HR-Portal-Backend",
    category: "backend",
    tags: ["typescript", "nodejs", "express", "mongodb", "jest", "rbac"],
    status: "VERIFIED REPO (58 TESTS)",
    kind: "Backend API & Microservice",
    stars: 0,
    forks: 0,
    updated: "2026-09-08",
    description: "Production-grade REST API powering enterprise HR operations: employee lifecycles, attendance, leave requests/balances, payroll, appraisals, performance cycles, and organization settings. Backed by 58 unit and integration tests in Jest.",
    highlights: [
      "Built with Express 5, TypeScript, and MongoDB (Mongoose 9)",
      "Strict action-based RBAC permissions (`authorize('read_X', 'create_X')`) across all resources",
      "JWT authentication stored in httpOnly secure cookies with rate limiting protection",
      "Complete test suite with 58 automated unit and Supertest integration tests",
      "Consistent API envelope architecture with standardized pagination and structured error handling",
      "Comprehensive resource coverage: Payroll, Appraisals, Interviews, Leave balances, Departments"
    ],
    architecture: {
      runtime: "Node.js 20+, TypeScript, Express 5",
      database: "MongoDB with Mongoose 9 models, indexes, and population hooks",
      testing: "Jest + Supertest (58 unit & integration test cases)",
      security: "httpOnly cookies, express-rate-limit (5 attempts/15min login), CORS credentials"
    },
    metrics: {
      backendComplexity: 96,
      databaseArchitecture: 90,
      testCoverage: 95,
      systemsLogic: 88,
      productionReadiness: 94
    }
  },
  {
    id: "cross-db-benchmark",
    name: "Cross-Database Benchmarking Tool",
    subtitle: "Automated Multi-Database Performance Benchmarking Suite",
    featured: false,
    liveUrl: null,
    githubUrl: "https://github.com/Abaidullah9/Cross-DataBase-Benchmarking-Tool",
    category: "systems",
    tags: ["python", "postgresql", "mongodb", "redis", "sqlserver", "docker"],
    status: "SOLO RESEARCH PROJECT",
    kind: "Performance Engineering Tool",
    stars: 0,
    forks: 0,
    updated: "2026-07-03",
    description: "Command-line benchmarking engine that stress-tests and compares four database engines — SQL Server, PostgreSQL, MongoDB, and Redis — running identical workloads (CRUD, JOINs, complex aggregations, indexed vs non-indexed queries), outputting CSV metrics and comparative charts.",
    highlights: [
      "Apples-to-apples performance comparisons using identical synthetic datasets and schema equivalents",
      "Benchmarks inserts, batch updates, point selects, relational JOINs, aggregations, and delete cycles",
      "Demonstrates empirical throughput and latency differences across Relational vs Document vs Key-Value stores",
      "Includes complete Docker Compose configuration for spin-up of all 4 database engines in seconds",
      "Generates visual charts, CSV telemetry, and automated executive summary reports"
    ],
    architecture: {
      language: "Python 3.11+, SQLAlchemy, PyMongo, Redis-py, pyodbc",
      visualization: "Matplotlib & Pandas telemetry exporter",
      orchestration: "Docker Compose multi-container test cluster",
      analytics: "CSV raw telemetry, percentiles (p50, p95, p99), latency bar charts"
    },
    metrics: {
      backendComplexity: 88,
      databaseArchitecture: 98,
      testCoverage: 85,
      systemsLogic: 94,
      productionReadiness: 90
    }
  },
  {
    id: "mini-compiler",
    name: "Mini-Compiler",
    subtitle: "C++ Compiler Front-End, Lexer, Parser & TAC Optimizer",
    featured: false,
    liveUrl: null,
    githubUrl: "https://github.com/Abaidullah9/Mini-Compiler",
    category: "systems",
    tags: ["cpp", "compiler", "flex", "bison", "assembly", "ast"],
    status: "SYSTEMS & COMPILER DESIGN",
    kind: "Systems Engineering",
    stars: 0,
    forks: 0,
    updated: "2026-06-15",
    description: "Comprehensive C++ compiler front-end and intermediate code optimizer. Implements a lexical scanner with Flex, an LALR(1) syntax parser with Bison/Yacc, symbol table resolution, semantic validation, Three-Address Code (TAC) emission, and basic block optimization.",
    highlights: [
      "Lexical analysis with Flex tokenizing identifiers, keywords, literals, and operators",
      "LALR(1) grammatical parsing with Bison constructing complete Abstract Syntax Trees (AST)",
      "Scope-aware symbol table managing identifier types, function declarations, and memory offsets",
      "Semantic analyzer enforcing static typing, variable initialization, and return consistency",
      "Intermediate code generation emitting Three-Address Code (TAC) representations",
      "Control-flow graph optimizer implementing constant folding and dead code elimination"
    ],
    architecture: {
      core: "C++17, Flex (Lexical Analyzer), Bison / Yacc (Grammar Parser)",
      ir: "Three-Address Code (TAC) representation and Quadruple structure",
      algorithms: "LALR(1) parsing, AST traversals, Symbol Table scoping, DAG optimization"
    },
    metrics: {
      backendComplexity: 92,
      databaseArchitecture: 70,
      testCoverage: 84,
      systemsLogic: 99,
      productionReadiness: 88
    }
  },
  {
    id: "inventory-management",
    name: "Inventory Management System",
    subtitle: "Enterprise Stock & Warehouse Management API with Prisma",
    featured: false,
    liveUrl: null,
    githubUrl: "https://github.com/Abaidullah9/Inventory-Management-System",
    category: "backend",
    tags: ["typescript", "nodejs", "prisma", "vitest", "postgresql"],
    status: "TESTED REPO (VITEST)",
    kind: "Backend API",
    stars: 0,
    forks: 0,
    updated: "2026-08-18",
    description: "Robust inventory and warehouse management backend. Implements automated SKU tracking, low-stock reorder thresholds, multi-warehouse transfers, supplier management, and audit-logged purchase orders using Prisma ORM.",
    highlights: [
      "Strict TypeScript type-safety across schema models and API DTOs",
      "Prisma ORM for migration-driven database schemas and relation modeling",
      "Automated stock level tracking with transactional safeguards against negative inventory",
      "Comprehensive test coverage utilizing Vitest for unit and integration specs",
      "Includes ready-to-run Postman collection test suites"
    ],
    architecture: {
      stack: "TypeScript, Node.js, Express, Prisma ORM",
      database: "PostgreSQL / SQLite with relational referential integrity",
      testing: "Vitest test framework + Postman integration runners"
    },
    metrics: {
      backendComplexity: 89,
      databaseArchitecture: 91,
      testCoverage: 90,
      systemsLogic: 82,
      productionReadiness: 90
    }
  },
  {
    id: "cyber-reconnaissance",
    name: "Secure Cyber Reconnaissance",
    subtitle: "Stealth Attack Surface Mapping & Vulnerability Framework",
    featured: false,
    liveUrl: null,
    githubUrl: "https://github.com/Abaidullah9",
    category: "systems",
    tags: ["python", "security", "networking", "recon", "linux"],
    status: "LEAD RESEARCHER (UET)",
    kind: "Cybersecurity Framework",
    stars: 0,
    forks: 0,
    updated: "2025-11-20",
    description: "Cybersecurity research initiative at UET Lahore focusing on stealth network information gathering and attack surface mapping using modern reconnaissance methodologies.",
    highlights: [
      "Served as Lead Researcher heading design and defensive validation",
      "Developed early-warning framework for identifying vulnerabilities in simulated enterprise networks",
      "Utilized passive intelligence and OSINT techniques without triggering IDS alarms",
      "Demonstrated reduction in unmonitored attack vectors by over 30% in controlled test scenarios"
    ],
    architecture: {
      methodology: "Passive intelligence gathering, packet inspection, DNS auditing",
      tools: "Python, Scapy, Network socket wrappers, Linux security toolchains"
    },
    metrics: {
      backendComplexity: 85,
      databaseArchitecture: 75,
      testCoverage: 80,
      systemsLogic: 94,
      productionReadiness: 85
    }
  },
  {
    id: "masm32-chess",
    name: "Graphical Chess in MASM32",
    subtitle: "x86 Assembly Language Chess Engine & Pixel Graphics",
    featured: false,
    liveUrl: null,
    githubUrl: "https://github.com/Abaidullah9",
    category: "systems",
    tags: ["assembly", "masm32", "x86", "low-level", "graphics"],
    status: "LOW-LEVEL SYSTEMS RESEARCH",
    kind: "Systems / Assembly",
    stars: 0,
    forks: 0,
    updated: "2025-05-10",
    description: "Low-level x86 Assembly language chess game simulation built using MASM32. Direct hardware register optimization and custom frame-buffer pixel manipulation with zero high-level game engine dependencies.",
    highlights: [
      "Engineered move validation logic, legal move generator, and turn state strictly in x86 registers",
      "Direct pixel manipulation and custom sprite blitting for board and piece rendering",
      "Sub-millisecond move execution speed with minimal footprint in resource-constrained memory",
      "Showcases deep understanding of computer architecture, calling conventions, and CPU registers"
    ],
    architecture: {
      assembly: "MASM32 (Microsoft Macro Assembler), Win32 API GDI primitives",
      optimization: "Register-based arithmetic (EAX, EBX, ECX, EDX) and bitboard coordinate mapping"
    },
    metrics: {
      backendComplexity: 78,
      databaseArchitecture: 60,
      testCoverage: 82,
      systemsLogic: 98,
      productionReadiness: 82
    }
  },
  {
    id: "eco-advisor-ai",
    name: "ECO-Friendly Advisor AI Bot",
    subtitle: "Conversational Sustainability & Clean Energy AI Assistant",
    featured: false,
    liveUrl: null,
    githubUrl: "https://github.com/Abaidullah9/ECO-Friendly-Advisor-AI-Bot",
    category: "ai",
    tags: ["javascript", "ai", "llm", "prompt-engineering", "nodejs"],
    status: "AI CHATBOT",
    kind: "AI / Web Assistant",
    stars: 0,
    forks: 0,
    updated: "2025-08-19",
    description: "Conversational sustainability advisor bot that guides users on reducing personal carbon footprints, adopting energy-efficient practices, and calculating daily renewable energy impact through tailored prompt chains.",
    highlights: [
      "Prompt-engineered conversational agent utilizing LLM reasoning patterns",
      "Interactive recommendations for home energy efficiency and recycling logistics",
      "Lightweight JavaScript client with conversational state management"
    ],
    architecture: {
      stack: "JavaScript, Node.js, LLM API client, Dynamic prompt templates"
    },
    metrics: {
      backendComplexity: 80,
      databaseArchitecture: 72,
      testCoverage: 76,
      systemsLogic: 82,
      productionReadiness: 86
    }
  },
  {
    id: "tools-for-web",
    name: "Tools-For-Web",
    subtitle: "Browser Productivity & Web Automation Utilities Suite",
    featured: false,
    liveUrl: null,
    githubUrl: "https://github.com/Abaidullah9/Tools-For-Web",
    category: "ai",
    tags: ["javascript", "dom", "browser-tools", "productivity"],
    status: "OPEN SOURCE UTILITIES",
    kind: "Browser Utilities",
    stars: 0,
    forks: 0,
    updated: "2025-07-03",
    description: "Curated suite of lightweight client-side tools and scripts designed to enhance browser workflows, inspect web elements, format payloads, and automate repetitive online tasks.",
    highlights: [
      "Client-side text transformation, JSON formatter, and URL inspector",
      "Zero external dependency design for instant execution across any browser"
    ],
    architecture: {
      stack: "Vanilla JavaScript (ES6+), DOM APIs, LocalStorage persistence"
    },
    metrics: {
      backendComplexity: 75,
      databaseArchitecture: 65,
      testCoverage: 78,
      systemsLogic: 80,
      productionReadiness: 88
    }
  }
];

export const PROFILE_INFO = {
  name: "Abaid Ullah Bhatti",
  handle: "Abaidullah9",
  eyebrow: "Full-Stack Software Engineer & CS Undergrad @ UET Lahore",
  title: "Building Scalable Web Systems, Distributed APIs & High-Throughput Developer Tools",
  bio: "Computer Science senior (7th Semester) at University of Engineering and Technology (UET) Lahore (CGPA 3.351). Passionate about architecting production full-stack web applications, resilient REST APIs, low-level compilers, and database performance benchmarking.",
  location: "Lahore, Pakistan",
  email: "abaidullah99999@gmail.com",
  altEmail: "abaidullahhatti998@gmail.com",
  phone: "+92-327-9399269",
  github: "https://github.com/Abaidullah9",
  linkedin: "https://www.linkedin.com/in/abaidullah-bhatti-579b98290",
  education: {
    institution: "University of Engineering and Technology (UET), Lahore",
    degree: "Bachelors in Computer Science (7th Semester)",
    period: "2023 – 2027",
    cgpa: "3.351 / 4.00",
    honors: "Government Merit-Based Academic Scholarship (2020 – 2025)"
  },
  skills: {
    languages: ["TypeScript", "JavaScript (ES6+)", "Python", "C / C++", "x86 Assembly (MASM32)", "SQL"],
    frontend: ["React 18", "Next.js 16 (App Router)", "Vite", "Tailwind CSS", "HTML5 & CSS3", "Responsive UI/UX"],
    backend: ["Node.js", "Express 5", "ASP.NET Core", "RESTful APIs", "JWT", "RBAC Permissions"],
    databases: ["MongoDB & Mongoose 9", "PostgreSQL", "SQL Server", "Redis", "SQLite", "Prisma ORM", "Supabase"],
    systems: ["Flex & Bison (LALR Parser)", "Compiler Design (TAC, AST)", "Docker", "Linux / Bash", "Git & GitHub"],
    testing: ["Jest (58 Tests)", "Supertest", "Vitest", "Postman API Testing", "Rate Limiting & Security"]
  }
};
