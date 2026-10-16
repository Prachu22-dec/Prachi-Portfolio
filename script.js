/**
 * Prachi Barpete — Portfolio Client Engine
 * Handles theme toggling, contact form validation & real sending,
 * modal dialogs, copy helpers, and accessibility features.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initContactForm();
  initCertificates();
  initScrollEffects();
});

/* ==========================================================================
   1. Theme Management (Light / Dark mode with system & local storage persistence)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (systemPrefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}

/* ==========================================================================
   2. Navigation & Mobile Menu
   ========================================================================== */
function initNavigation() {
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');
  const header = document.querySelector('.site-header');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        if (mobileToggle) {
          mobileToggle.setAttribute('aria-expanded', 'false');
          const icon = mobileToggle.querySelector('i');
          if (icon) icon.className = 'fa-solid fa-bars';
        }
      });
    });
  }

  // Active link scroll spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    if (header) {
      header.classList.toggle('scrolled', scrollY > 20);
    }

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   3. Real Contact Form Handling (Formspree / EmailJS ready with validation & states)
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const feedbackEl = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');

  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('senderName').value.trim();
    const email = document.getElementById('senderEmail').value.trim();
    const subject = document.getElementById('messageSubject')?.value.trim() || 'Portfolio Contact from ' + name;
    const message = document.getElementById('senderMessage').value.trim();

    // Client-side Validation
    if (!name || name.length < 2) {
      showFeedback('Please enter your full name.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFeedback('Please enter a valid email address.', 'error');
      return;
    }

    if (!message || message.length < 10) {
      showFeedback('Please write a message of at least 10 characters.', 'error');
      return;
    }

    // Set Loading State
    setButtonLoading(submitBtn, true);
    feedbackEl.className = 'form-feedback';
    feedbackEl.style.display = 'none';

    // FormSubmit AJAX Endpoint targeting Prachi's email directly
    const endpoint = 'https://formsubmit.co/ajax/prachibarpete640@gmail.com';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: subject,
          message: message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && (data.success === 'true' || data.success === true)) {
        showFeedback('Thank you! Your message has been sent successfully to Prachi. I will get back to you within 24 hours.', 'success');
        contactForm.reset();
      } else if (data.message && data.message.toLowerCase().includes('activation')) {
        showFeedback('Message submitted! Please note: Form activation is pending. Check prachibarpete640@gmail.com to activate.', 'success');
        contactForm.reset();
      } else {
        const errMessage = data?.message || 'Submission failed. Please click below to email directly at prachibarpete640@gmail.com';
        showFeedback(errMessage, 'error');
      }
    } catch (err) {
      // Network failure or offline -> provide graceful direct mailto trigger
      showFeedback('Network error. Opening your email app to send directly...', 'error');
      window.location.href = `mailto:prachibarpete640@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
    } finally {
      setButtonLoading(submitBtn, false);
    }
  });

  function showFeedback(msg, type) {
    if (!feedbackEl) return;
    feedbackEl.className = `form-feedback ${type}`;
    feedbackEl.innerHTML = type === 'success' 
      ? `<i class="fa-solid fa-circle-check"></i> <span>${msg}</span>` 
      : `<i class="fa-solid fa-triangle-exclamation"></i> <span>${msg}</span>`;
    feedbackEl.style.display = 'flex';
  }

  function setButtonLoading(btn, isLoading) {
    if (!btn) return;
    if (isLoading) {
      btn.classList.add('btn-loading');
      btn.disabled = true;
      btn.innerHTML = `<span class="spinner"></span> Sending Message...`;
    } else {
      btn.classList.remove('btn-loading');
      btn.disabled = false;
      btn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Send Message`;
    }
  }
}

/* ==========================================================================
   4. Certificate Lightbox & Modals
   ========================================================================== */
const allCertificates = [
  {
    title: "Generative AI Professional",
    issuer: "Oracle University",
    date: "October 2025",
    credId: "102804677OCI25GAIOCP",
    filePath: "certificates/eCertificate.pdf",
    previewPath: "certificates/thumbs/eCertificate_preview.png",
    category: "AI & GenAI",
    icon: "fa-solid fa-brain"
  },
  {
    title: "SQL (Basic & Intermediate)",
    issuer: "HackerRank",
    date: "March 2026",
    credId: "HackerRank Verified",
    filePath: "certificates/sql_basic_certificate.pdf",
    previewPath: "certificates/thumbs/sql_basic_certificate_preview.png",
    category: "Databases & SQL",
    icon: "fa-solid fa-database"
  },
  {
    title: "Angular",
    issuer: "Infosys Springboard",
    date: "April 2025",
    credId: "verify.onwingspan.com",
    filePath: "certificates/Angular_Infosys_Certificate.pdf",
    previewPath: "certificates/thumbs/Angular_Infosys_Certificate_preview.png",
    category: "Frontend Development",
    icon: "fa-brands fa-angular"
  },
  {
    title: "IoT (Internet of Things)",
    issuer: "Cisco Networking Academy",
    date: "September 2025",
    credId: "Cisco Verified Credential",
    filePath: "certificates/IOT_certificate.pdf",
    previewPath: "certificates/thumbs/IOT_certificate_preview.png",
    category: "Connected Systems",
    icon: "fa-solid fa-network-wired"
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "November 2024",
    credId: "Cisco Verified",
    filePath: "certificates/Javascript_Essential.certificate.jpeg",
    previewPath: "certificates/Javascript_Essential.certificate.jpeg",
    category: "Programming Languages",
    icon: "fa-brands fa-js"
  },
  {
    title: "Learning Microsoft Power BI",
    issuer: "Infosys Springboard",
    date: "April 2025",
    credId: "verify.onwingspan.com",
    filePath: "certificates/Learning_Microsoft_Power_BI_Certificate.pdf",
    previewPath: "certificates/thumbs/Learning_Microsoft_Power_BI_Certificate_preview.png",
    category: "Data Analytics",
    icon: "fa-solid fa-chart-line"
  },
  {
    title: "GenAI for Everyone",
    issuer: "Coursera / Starweaver",
    date: "April 2025",
    credId: "A2PLML7O05R6",
    filePath: "certificates/GENAI_for_Everyone_Certificate.pdf",
    previewPath: "certificates/thumbs/GENAI_for_Everyone_Certificate_preview.png",
    category: "AI & GenAI",
    icon: "fa-solid fa-wand-magic-sparkles"
  },
  {
    title: "Introduction to Python",
    issuer: "Infosys Springboard",
    date: "April 2025",
    credId: "verify.onwingspan.com",
    filePath: "certificates/Introduction_To_Python_Certificate.pdf",
    previewPath: "certificates/thumbs/Introduction_To_Python_Certificate_preview.png",
    category: "Programming Languages",
    icon: "fa-brands fa-python"
  },
  {
    title: "Front-End Software Engineering Simulation",
    issuer: "Forage",
    date: "April 2025",
    credId: "dszz4d7d9uK2HkXMi",
    filePath: "certificates/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_dszz4d7d9uK2HkXMi_1745454473674_completion_certificate.pdf",
    previewPath: "certificates/thumbs/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_dszz4d7d9uK2HkXMi_1745454473674_completion_certificate_preview.png",
    category: "Software Engineering",
    icon: "fa-solid fa-laptop-code"
  },
  {
    title: "Power BI Data Analyst Prep",
    issuer: "Coursera / SkillUp",
    date: "April 2025",
    credId: "1PIHHKIUZ4GU",
    filePath: "certificates/Power_BI_Data_Analyst.certificate.pdf",
    previewPath: "certificates/thumbs/Power_BI_Data_Analyst.certificate_preview.png",
    category: "Data Analytics",
    icon: "fa-solid fa-chart-pie"
  },
  {
    title: "Artificial Intelligence for All",
    issuer: "Infosys Springboard",
    date: "April 2025",
    credId: "verify.onwingspan.com",
    filePath: "certificates/Artificial_Intelligence_for_All.certificate.pdf",
    previewPath: "certificates/thumbs/Artificial_Intelligence_for_All.certificate_preview.png",
    category: "AI & GenAI",
    icon: "fa-solid fa-microchip"
  },
  {
    title: "Software Engineering",
    issuer: "Infosys Springboard",
    date: "April 2025",
    credId: "verify.onwingspan.com",
    filePath: "certificates/Software_Engineering_Infosys_Certificate.pdf",
    previewPath: "certificates/thumbs/Software_Engineering_Infosys_Certificate_preview.png",
    category: "Software Engineering",
    icon: "fa-solid fa-code"
  }
];

function initCertificates() {
  window.openCertModal = function(index) {
    const cert = allCertificates[index];
    if (!cert) return;

    document.getElementById('modalCertTitle').textContent = cert.title;
    document.getElementById('modalCertIssuer').textContent = cert.issuer;
    document.getElementById('modalCertDate').textContent = cert.date;
    document.getElementById('modalCertCredId').textContent = cert.credId || 'Verified';
    document.getElementById('modalCertCategory').textContent = cert.category;
    document.getElementById('modalCertImg').src = cert.previewPath;
    document.getElementById('modalCertDocLink').href = cert.filePath;

    const modal = document.getElementById('certModal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeCertModal = function() {
    const modal = document.getElementById('certModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  window.openAllCertsModal = function() {
    const listContainer = document.getElementById('allCertsList');
    if (listContainer) {
      listContainer.innerHTML = allCertificates.map((cert, idx) => `
        <div class="card cert-card" style="padding:16px;">
          <div class="cert-icon"><i class="${cert.icon}"></i></div>
          <div class="cert-content">
            <h4 class="cert-name" style="font-size:0.95rem;">${cert.title}</h4>
            <p class="cert-issuer" style="font-size:0.8rem; margin-bottom:4px;">${cert.issuer}</p>
            <div class="cert-meta" style="font-size:0.75rem;">
              <span><i class="fa-regular fa-calendar"></i> ${cert.date}</span>
              <button onclick="closeAllCertsModal(); openCertModal(${idx})" class="cert-view-btn" style="margin-left:auto;">
                <i class="fa-solid fa-eye"></i> View Credential
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }

    const modal = document.getElementById('allCertsModal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeAllCertsModal = function() {
    const modal = document.getElementById('allCertsModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // Resume Modal
  window.openResumeModal = function() {
    const modal = document.getElementById('resumeModal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeResumeModal = function() {
    const modal = document.getElementById('resumeModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };
}

/* ==========================================================================
   5. Copy Helper & Scroll Effects
   ========================================================================== */
function initScrollEffects() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  window.addEventListener('scroll', () => {
    if (backToTopBtn) {
      backToTopBtn.classList.toggle('show', window.pageYOffset > 400);
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Quick Copy Text Helper (for Email, Phone)
  window.copyText = function(text, btnElement) {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text).then(() => {
      const originalHTML = btnElement.innerHTML;
      btnElement.innerHTML = `<i class="fa-solid fa-check" style="color:var(--accent);"></i> Copied!`;
      setTimeout(() => {
        btnElement.innerHTML = originalHTML;
      }, 2000);
    });
  };

  // Code Copying Helper
  window.copySnippet = function(codeId, btnElement) {
    const codeEl = document.getElementById(codeId);
    if (!codeEl || !navigator.clipboard) return;
    navigator.clipboard.writeText(codeEl.innerText).then(() => {
      const originalHTML = btnElement.innerHTML;
      btnElement.innerHTML = `<i class="fa-solid fa-check" style="color:#34D399;"></i> Copied!`;
      setTimeout(() => {
        btnElement.innerHTML = originalHTML;
      }, 2000);
    });
  };

  // Close modals on clicking outside
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Close modals on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.active').forEach(modal => {
        modal.classList.remove('active');
      });
      document.body.style.overflow = '';
    }
  });
}
