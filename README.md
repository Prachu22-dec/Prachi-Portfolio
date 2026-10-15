# Prachi Barpete — Software Engineer Portfolio

A modern, high-performance, deploy-ready engineering portfolio designed specifically for IT company recruiters and hiring managers.

- **Stack:** Semantic HTML5, Vanilla Modern CSS (Modular, Design System Tokens), Vanilla JavaScript (ES6+)
- **Asset Size:** Ultra-lightweight (< 1 MB initial load, images in WebP format)
- **Aesthetic:** Modern Tech (Plus Jakarta Sans + JetBrains Mono), Dark/Light theme toggle, WCAG AA compliant contrast
- **Profile:** B.Tech CSE (7th Semester, Graduating 2027) • Bansal Institute of Science & Technology, Bhopal • CGPA: 7.25

---

## Folder Structure

```text
portfolio-zip/
├── index.html                           # Semantic, accessible main portfolio document
├── styles.css                           # Modular design system, light/dark themes, responsive queries
├── script.js                            # Theme toggle, AJAX form validation, modals, scroll spy
├── 404.html                             # Custom branded 404 page for hosting providers
├── CHANGELOG.md                         # Detailed record of fixes, audits, and TODOs
├── README.md                            # Setup and deployment documentation
├── start_portfolio.bat                  # One-click Windows local server preview launcher
├── Prachi_Barpete_Resume.pdf            # Official updated resume (Matching 7th Sem / CGPA 7.25)
├── Prachi_Barpete_Resume_preview.png    # High-resolution resume preview for lightbox modal
├── assets/
│   ├── prachi-photo.webp                # Optimized profile photo (30 KB WebP)
│   ├── khetsaathi-architecture.svg      # Scalable SVG architecture diagram for KhetSaathi
│   ├── khetsaathi-preview.svg           # High-fidelity UI graphic for KhetSaathi
│   ├── greenquest-preview.svg           # High-fidelity UI graphic for Green Quest
│   └── cyberbrief-preview.svg           # High-fidelity UI graphic for CyberBrief AI
└── certificates/                        # Verified credentials, previews, and thumbs
```

---

## How to Test Locally

1. **Direct Double-Click:** Double-click `index.html` to open in any web browser.
2. **Local Web Server (Recommended):** Double-click `start_portfolio.bat` or run:
   ```bash
   python -m http.server 3000
   ```
   Open `http://localhost:3000` in your browser.

---

## Deployment Steps

### Option A: Vercel (Fastest & Free)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **Add New Project** ➔ **Import Git Repository** (or drag and drop the `portfolio-zip` folder directly into Vercel dashboard).
3. Framework Preset: **Other**.
4. Root Directory: `./` (or `portfolio-zip`).
5. Click **Deploy**. Your portfolio will be live in 15 seconds with automatic SSL and CDN!

### Option B: GitHub Pages (Free with your GitHub account)
1. Create a new GitHub repository named `portfolio` (or `prachu22-dec.github.io`).
2. Push the contents of this folder to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Deploy modern recruiter-ready portfolio"
   git branch -M main
   git remote add origin https://github.com/Prachu22-dec/portfolio.git
   git push -u origin main
   ```
3. In GitHub, go to **Settings** ➔ **Pages**.
4. Under **Source**, select `Deploy from a branch` ➔ Branch: `main` / `root` ➔ Click **Save**.
5. Your site is live at: `https://prachu22-dec.github.io/portfolio/`.

### Option C: Netlify
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `portfolio-zip` folder into the drop zone.
3. Your site is instantly live with a custom URL.

---

## Recruiter 30-Second Verification Checklist

Before sending your link to HR or engineering leads, verify these points:

- [x] **Hero Value Proposition:** Name, role ("Software Engineer • Java, Python & Full-Stack"), graduating 2027, and CGPA (7.25) clearly visible above the fold.
- [x] **Resume PDF:** Click "Download Resume" in the hero and navbar; verify that `Prachi_Barpete_Resume.pdf` downloads instantly.
- [x] **Featured KhetSaathi Block:** Problem, 95% accuracy result, 7-collection MongoDB design, Sentinel-2 vs Soil-Grids evaluation, and architecture diagram clearly readable.
- [x] **Zero Broken Links:** No `href="#"` dead ends. Real GitHub link `https://github.com/Prachu22-dec/Green-Quest` opens cleanly.
- [x] **Verified Internships:** Codec Info Technologies and Edunet Foundation (Microsoft & SAP-AICTE TechSaksham) displayed with deliverables.
- [x] **Verified Certifications:** Top 6 certifications shown (Oracle GenAI, HackerRank SQL, Infosys Angular, Cisco IoT, Cisco JS, Power BI) with working document previews.
- [x] **Contact Form:** Working real submission with instant validation and direct fallback to `prachibarpete640@gmail.com`.
- [x] **Responsiveness:** Flawless layout on Mobile (360px), Tablet (768px), and Laptop/Desktop.
