# Portfolio Rebuild Changelog & Recruiter Readiness Audit

**Candidate:** Prachi Kisanlal Barpete  
**Target Role:** Trainee Software Engineer / Full-Stack & Java Developer  
**Status:** B.Tech CSE (7th Semester, Graduating 2027) • Bansal Institute of Science & Technology, Bhopal  
**Updated:** October 2026

---

## 1. Bugs Fixed First

- **Contact Form Real Submission:** Replaced dummy toast notification with real AJAX submission pipeline. Configured for Formspree (`action="https://formspree.io/f/mqkrqjwv"`), with live email regex validation, minimum message length checks, loading spinner state (`btn-loading`), inline error banner, and automated fallback to native `mailto:prachibarpete640@gmail.com`.
- **Stray Hero Typo Removed:** Removed literal syntax error `</div>v>` around the hero CTA container.
- **Dead `#` Links Eliminated:** Removed all five `href="#"` buttons. Linked real GitHub repositories (`https://github.com/Prachu22-dec/Green-Quest`, `https://github.com/Prachu22-dec`). Where a live URL is pending, converted action to interactive Architecture modal rather than leaving a broken dead link.
- **Footer Links Fixed:** Replaced dummy `prachi.barpete@example.com` and generic root domains with Prachi's verified credentials:
  - Email: `prachibarpete640@gmail.com`
  - GitHub: `https://github.com/Prachu22-dec`
  - LinkedIn: `https://www.linkedin.com/in/prachi-barpete-a61923294`
  - HackerRank: `https://www.hackerrank.com/profile/prachibarpete640`
- **Inconsistent Stats Resolved:** Removed unverifiable "300+ commits" and conflicting "4+ certifications vs 17". Replaced with verifiable facts: **2 Developer Internships**, **Hackathon Finalist (Rank 11)**, **Oracle Certified GenAI Professional**, and **B.Tech CSE '27 (CGPA: 7.25)**.

---

## 2. Content Aligned Strictly with the Latest Resume (Zero Overclaiming)

- **Old Resume Data Removed:**
  - Removed old 6th-semester reference and updated to **7th Semester (CGPA: 7.25)**.
  - Removed college assignment placeholders ("Cute Notes App", "C++ Library System", "AI Resume Parser").
  - Removed fake percentage bars (no unscientific "Java 95%", "React 80%").
  - Removed fabricated "ConcurrentCache" / "MandiPrices" algorithms.
- **Featured Projects Updated in Required Order:**
  1. **Khet-Saathi (AI Assistant for Farmers):**
     - Full-stack agricultural platform: React, FastAPI, TensorFlow, Gemini AI, MongoDB.
     - Documented **95% accuracy** in crop disease detection with Hindi voice interface.
     - Highlighted real engineering decisions: Structured testing of Sentinel-2 NDVI satellite monitoring vs Soil-Grids, and 7-collection MongoDB schema for farmer utilities & B2B feeds.
     - Linked system architecture diagram (`assets/khetsaathi-architecture.svg`).
  2. **Green Quest App:**
     - Full-stack sustainability tracker: React, Node.js, Express, MongoDB Atlas.
     - Documented feature set, carbon offset calculator, and deployment troubleshooting across Vercel & Render.
     - Direct repo link: `https://github.com/Prachu22-dec/Green-Quest`.
  3. **CyberBrief AI:**
     - Claude-API cybersecurity log simplifier utility with plain-English threat triage.
- **Real Code Snippet Showcased:** Extracted genuine Python + Gemini 1.5 Flash vernacular agriculture chatbot code directly from Prachi's own `chatbot.py` repository.
- **Real Internships Highlighted:**
  - **Codec Info Technologies:** Java Developer Intern (Completed) — Core Java, OOP principles, unit testing, and documentation.
  - **Edunet Foundation (Microsoft & SAP-AICTE TechSaksham):** AI Intern (Completed) — 4-week AICTE-certified track on AI, computer vision, and cloud tech.
- **Top 6 Certifications Featured:**
  1. Generative AI Professional — Oracle (Oct 2025)
  2. SQL — HackerRank (Mar 2026)
  3. Angular — Infosys Springboard (Apr 2025)
  4. IoT — Cisco Networking Academy (Sep 2025)
  5. JavaScript Essentials 1 — Cisco Networking Academy (Nov 2024)
  6. Learning Microsoft Power BI — Infosys Springboard (Apr 2025)
  *(All other 11 verified credentials organized inside a clean modal).*

---

- **Typography Configured:** All typography set to **'Times New Roman', Times, serif** across headings, body, navigation, badges, and forms per candidate request.
- **Academic Streamlining:** Removed 10th & 12th school records; focused solely on B.Tech in Computer Science Engineering (7th Sem, CGPA: 7.25, Bansal Institute of Science & Technology).
- **Personalized "About Me":** Integrated candidate's exact narrative covering hands-on product creation across Java, Python, and React, multi-disciplinary AI/full-stack projects, and hackathon/pitch communication strengths.
- **Dark / Light Mode Toggle:** Implemented sleek, contrast-compliant (WCAG AA) light and dark themes with system preference detection and `localStorage` persistence.
- **Real Photograph:** Replaced AI-generated avatar with Prachi's authentic professional photo (`assets/prachi-photo.webp`), optimized to only 30 KB.
- **Architecture Diagram:** Added dedicated scalable SVG diagram for Khet-Saathi showing Client ➔ FastAPI ➔ TensorFlow & Gemini ➔ MongoDB.
- **Human Story:** Added genuine 4-5 line personal narrative highlighting agricultural roots in Multai (Betul, MP) and motivation for building practical software.
- **Modular Codebase:** Split the monolithic file into `index.html`, `styles.css`, `script.js`, `404.html`, and `assets/`.

---

## 4. Remaining TODOs for Candidate Before Sharing Link

| Item | Status | Action Required |
| :--- | :---: | :--- |
| **Formspree Form ID** | `Optional` | Form is ready. To receive emails into your private inbox, register a free form at [formspree.io](https://formspree.io) and replace `https://formspree.io/f/mqkrqjwv` in `index.html` line 440 with your form endpoint. |
| **KhetSaathi Live URL** | `TODO` | When public hosted demo is deployed (Vercel/Render), add the URL to the project button in `index.html`. |
| **Green Quest Live URL** | `TODO` | Add your live Vercel/Render link to the Green Quest card in `index.html` when ready. |
| **Verify Email** | `Verified` | Verified against resume: `prachibarpete640@gmail.com`. |
