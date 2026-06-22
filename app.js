// State Management: Check for draft configuration in localStorage
let defaultData = {};
let appState = {};

// Fallback default in case data.js fails to load
const fallbackData = {
  personalInfo: {
    name: "KARTHIKEYAN E",
    title: "Front-End Developer | Full-Stack Developer",
    phone: "9600630469",
    email: "karthikeyaneswaran2006@gmail.com",
    location: "Palladam, Tamil Nadu",
    linkedin: "https://linkedin.com/in/karthikeyaneswaran",
    github: "https://github.com/Karthikeyaneswaran",
    portfolio: "https://karthikeyaneswaran.github.io/portfolio",
    summary: "Motivated Developer"
  },
  skills: [],
  experience: [],
  projects: [],
  education: [],
  certifications: [],
  codingProfiles: { leetcode: "", geeksforgeeks: "" }
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  // Store a deep copy of the original static data
  if (window.portfolioData) {
    defaultData = JSON.parse(JSON.stringify(window.portfolioData));
  } else {
    defaultData = fallbackData;
  }

  // Use static data as the single source of truth
  appState = JSON.parse(JSON.stringify(defaultData));

  // Initial render of sections
  renderAll();
  
  // Set up interaction listeners
  initNavigation();
  initProjectFilters();
  initContactForm();
  initAdminModal();
  
  // Initialize Lucide Icons
  lucide.createIcons();
});

/* ==========================================================================
   RENDER CORE CONTENT SECTIONS
   ========================================================================== */
function renderAll() {
  renderNavbarAndHero();
  renderAboutAndStats();
  renderSkillsSection();
  renderTimelineSection();
  renderProjectsSection();
  renderCertificationsSection();
  renderContactSection();
}

function saveStateLocally() {
  localStorage.setItem("karthikeyan_portfolio_data_v3", JSON.stringify(appState));
}

// 1. Navbar & Hero Section
function renderNavbarAndHero() {
  const info = appState.personalInfo;
  
  // Nav logo and copyright
  document.getElementById("nav-logo").innerHTML = `<span class="gradient-text">${info.name}</span>`;
  document.getElementById("footer-name").textContent = info.name;
  document.getElementById("footer-year").textContent = new Date().getFullYear();

  // Hero text
  document.getElementById("hero-name").textContent = info.name;
  document.getElementById("hero-subtitle").textContent = info.title;
  document.getElementById("hero-summary").textContent = info.summary;

  // Hero Links / CTA
  const resumeLink = document.getElementById("resume-link");
  if (info.portfolio && info.portfolio.includes("karthikeyaneswaran.github.io")) {
    resumeLink.setAttribute("href", info.resume || "Karthikeyan E Resume.pdf");
  } else {
    resumeLink.setAttribute("href", info.resume || "#");
  }

  // Social Pills in Hero
  const socialContainer = document.getElementById("hero-socials");
  let socialHtml = "";
  
  if (info.linkedin) {
    socialHtml += `
      <a href="${info.linkedin}" target="_blank" class="social-pill">
        <i data-lucide="linkedin"></i> LinkedIn
      </a>`;
  }
  if (info.github) {
    socialHtml += `
      <a href="${info.github}" target="_blank" class="social-pill">
        <i data-lucide="github"></i> GitHub
      </a>`;
  }

  // Competitive Coding Profiles
  const profiles = appState.codingProfiles;
  if (profiles) {
    if (profiles.leetcode) {
      socialHtml += `
        <a href="${profiles.leetcode}" target="_blank" class="social-pill">
          <i data-lucide="code"></i> LeetCode
        </a>`;
    }
    if (profiles.geeksforgeeks) {
      socialHtml += `
        <a href="${profiles.geeksforgeeks}" target="_blank" class="social-pill">
          <i data-lucide="terminal"></i> GeeksforGeeks
        </a>`;
    }
  }
  
  socialContainer.innerHTML = socialHtml;
  lucide.createIcons();
}

// 2. About section and numeric stats
function renderAboutAndStats() {
  const info = appState.personalInfo;
  document.getElementById("about-detailed-summary").textContent = info.summary;

  // Render quick stats dynamically based on actual arrays
  const projectCount = appState.projects ? appState.projects.length : 0;
  const certCount = appState.certifications ? appState.certifications.length : 0;
  
  // Find GPA or score & education label
  let gpaVal = "GPA 8.7";
  let eduLabel = "B.Tech IT";
  if (appState.education && appState.education[0]) {
    if (appState.education[0].score) {
      gpaVal = appState.education[0].score.replace("GPA:", "").trim();
    }
    if (appState.education[0].degree) {
      const deg = appState.education[0].degree;
      if (deg.toLowerCase().includes("master")) {
        eduLabel = "Master's Degree";
      } else if (deg.toLowerCase().includes("bachelor") || deg.toLowerCase().includes("b.tech")) {
        eduLabel = "B.Tech IT";
      } else {
        eduLabel = deg.split("—")[0].trim();
      }
    }
  }

  document.getElementById("stat-projects").textContent = `${projectCount}+`;
  document.getElementById("stat-certs").textContent = `${certCount}`;
  document.getElementById("stat-education").textContent = gpaVal;
  document.getElementById("stat-education-label").textContent = eduLabel;
}

// 3. Technical Skills Stack
function renderSkillsSection() {
  const container = document.getElementById("skills-container");
  if (!appState.skills || appState.skills.length === 0) {
    container.innerHTML = `<p class="text-center text-muted">No skills stack added yet.</p>`;
    return;
  }

  // Map category keywords to clean Lucide icons
  const iconMap = {
    "languages": "code-2",
    "frameworks": "layers",
    "databases": "database",
    "tools": "wrench",
    "devops": "terminal",
    "methodologies": "git-branch",
    "soft skills": "users"
  };

  let html = "";
  appState.skills.forEach(cat => {
    const cleanCat = cat.category.toLowerCase();
    let iconName = "cpu";
    
    // Attempt custom keyword mapping
    for (const key in iconMap) {
      if (cleanCat.includes(key)) {
        iconName = iconMap[key];
        break;
      }
    }

    const tagsHtml = cat.items.map(item => `<span class="skill-tag">${item}</span>`).join("");

    html += `
      <div class="glass-card skills-category-card">
        <h3><i data-lucide="${iconName}"></i> ${cat.category}</h3>
        <div class="skills-list-tags">
          ${tagsHtml}
        </div>
      </div>`;
  });

  container.innerHTML = html;
  lucide.createIcons();
}

// 4. Timeline (Experience & Education side-by-side)
function renderTimelineSection() {
  // Experience
  const expContainer = document.getElementById("experience-timeline");
  if (!appState.experience || appState.experience.length === 0) {
    expContainer.innerHTML = `<p class="text-muted">No experience entries available.</p>`;
  } else {
    let expHtml = "";
    appState.experience.forEach(job => {
      const bulletsHtml = job.highlights.map(pt => `<li>${pt}</li>`).join("");
      expHtml += `
        <div class="timeline-item">
          <div class="glass-card timeline-card">
            <div class="timeline-meta">
              <span class="timeline-date">${job.duration}</span>
              <span class="timeline-org">${job.company}</span>
            </div>
            <h4 class="timeline-role">${job.role}</h4>
            <span class="timeline-org">${job.location}</span>
            <ul class="timeline-desc">
              ${bulletsHtml}
            </ul>
          </div>
        </div>`;
    });
    expContainer.innerHTML = expHtml;
  }

  // Education
  const eduContainer = document.getElementById("education-timeline");
  if (!appState.education || appState.education.length === 0) {
    eduContainer.innerHTML = `<p class="text-muted">No education entries available.</p>`;
  } else {
    let eduHtml = "";
    appState.education.forEach(school => {
      eduHtml += `
        <div class="timeline-item">
          <div class="glass-card timeline-card">
            <div class="timeline-meta">
              <span class="timeline-date">${school.duration}</span>
              <span class="timeline-org">${school.location}</span>
            </div>
            <h4 class="timeline-role">${school.degree}</h4>
            <div class="timeline-org">${school.institution}</div>
            ${school.score ? `<span class="timeline-score">${school.score}</span>` : ""}
          </div>
        </div>`;
    });
    eduContainer.innerHTML = eduHtml;
  }
}

// 5. Projects Section (Filtering & Render)
let activeFilterTag = "All";
let activeSearchQuery = "";

function renderProjectsSection() {
  const container = document.getElementById("projects-container");
  if (!appState.projects || appState.projects.length === 0) {
    container.innerHTML = `
      <div class="projects-empty-state">
        <i data-lucide="folder-open"></i>
        <h3>No projects showcase found</h3>
        <p>Click "Customize" to add interactive project cards.</p>
      </div>`;
    return;
  }

  // Filter projects list
  const filteredProjects = appState.projects.filter(proj => {
    // 1. Tag filter
    const matchesTag = activeFilterTag === "All" || proj.tech.some(t => t.toLowerCase() === activeFilterTag.toLowerCase());
    
    // 2. Search query filter
    const matchesSearch = activeSearchQuery === "" || 
      proj.title.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
      proj.tech.some(t => t.toLowerCase().includes(activeSearchQuery.toLowerCase()));
      
    return matchesTag && matchesSearch;
  });

  if (filteredProjects.length === 0) {
    container.innerHTML = `
      <div class="projects-empty-state">
        <i data-lucide="search-code"></i>
        <h3>No matching results</h3>
        <p>Try refining your search terms or selecting another category tag.</p>
      </div>`;
    lucide.createIcons();
    return;
  }

  let html = "";
  filteredProjects.forEach(proj => {
    const techTags = proj.tech.map(t => `<span class="project-tech-tag">${t}</span>`).join("");
    const bulletsHtml = proj.highlights.map(pt => `<li>${pt}</li>`).join("");
    
    let linkHtml = "";
    if (proj.links) {
      if (proj.links.github && proj.links.github !== "#") {
        linkHtml += `<a href="${proj.links.github}" target="_blank" class="project-link project-link-secondary"><i data-lucide="github"></i> Code</a>`;
      }
      if (proj.links.live && proj.links.live !== "#") {
        linkHtml += `<a href="${proj.links.live}" target="_blank" class="project-link project-link-primary"><i data-lucide="external-link"></i> Live Demo</a>`;
      }
    }

    html += `
      <div class="glass-card project-card">
        <div class="project-tech-tags">
          ${techTags}
        </div>
        <h3>${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        <ul class="project-bullet-details">
          ${bulletsHtml}
        </ul>
        <div class="project-links">
          ${linkHtml}
        </div>
      </div>`;
  });

  container.innerHTML = html;
  lucide.createIcons();
}

function initProjectFilters() {
  const filterContainer = document.getElementById("project-tags-filter");
  const searchInput = document.getElementById("project-search-input");

  if (!filterContainer || !searchInput) {
    window.rebuildProjectFilters = () => {};
    return;
  }

  // Collect unique skills/tech from all projects
  const getUniqueProjectTags = () => {
    const tags = new Set();
    if (appState.projects) {
      appState.projects.forEach(p => {
        p.tech.forEach(t => tags.add(t));
      });
    }
    return ["All", ...Array.from(tags)];
  };

  const renderFilterButtons = () => {
    const uniqueTags = getUniqueProjectTags();
    filterContainer.innerHTML = uniqueTags.map(tag => {
      const activeClass = tag.toLowerCase() === activeFilterTag.toLowerCase() ? "active" : "";
      return `<button class="filter-btn ${activeClass}" data-filter="${tag}">${tag}</button>`;
    }).join("");
  };

  renderFilterButtons();

  // Listen to filter buttons
  filterContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
      activeFilterTag = e.target.getAttribute("data-filter");
      
      // Update UI classes
      document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active");
      
      renderProjectsSection();
    }
  });

  // Listen to search updates
  searchInput.addEventListener("input", (e) => {
    activeSearchQuery = e.target.value;
    renderProjectsSection();
  });
  
  // Expose tags rendering so it can be called if projects are modified in Admin mode
  window.rebuildProjectFilters = () => {
    renderFilterButtons();
  };
}

// 6. Certifications Section
function renderCertificationsSection() {
  const container = document.getElementById("certifications-container");
  if (!appState.certifications || appState.certifications.length === 0) {
    container.innerHTML = `<p class="text-center text-muted">No certifications verified yet.</p>`;
    return;
  }

  let html = "";
  appState.certifications.forEach(cert => {
    const verifyLink = cert.link && cert.link !== "#" 
      ? `<a href="${cert.link}" target="_blank" class="cert-verify-link">Verify <i data-lucide="arrow-up-right"></i></a>`
      : `<span class="cert-verify-link" style="opacity:0.3;cursor:default;">CredID Verified</span>`;

    html += `
      <div class="glass-card cert-card">
        <div class="cert-top">
          <h3>${cert.name}</h3>
          <span class="cert-issuer"><i data-lucide="award"></i> ${cert.issuer}</span>
        </div>
        <div class="cert-bottom">
          <span class="cert-year">${cert.year}</span>
          ${verifyLink}
        </div>
      </div>`;
  });

  container.innerHTML = html;
  lucide.createIcons();
}

// 7. Contact Section (links and profiles)
function renderContactSection() {
  const info = appState.personalInfo;
  
  document.getElementById("contact-email").textContent = info.email;
  document.getElementById("contact-email-link").setAttribute("href", `mailto:${info.email}`);
  
  document.getElementById("contact-phone").textContent = info.phone;
  document.getElementById("contact-phone-link").setAttribute("href", `tel:${info.phone}`);
  
  document.getElementById("contact-location").textContent = info.location;
}

/* ==========================================================================
   NAVIGATION & MOBILE DRAWER LOGIC
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector(".header");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");
  
  // 1. Scroll shadow & dynamic headers
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = "var(--shadow-lg)";
      header.style.backgroundColor = "rgba(11, 15, 25, 0.9)";
    } else {
      header.style.boxShadow = "none";
      header.style.backgroundColor = "rgba(11, 15, 25, 0.7)";
    }

    // Active Section Tracking
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  // 2. Mobile Drawer Navigation
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const drawerCloseBtn = document.getElementById("mobile-drawer-close");
  const drawerLinks = document.querySelectorAll(".drawer-link");
  const drawerOverlay = document.getElementById("mobile-drawer-overlay");

  const openDrawer = () => {
    mobileDrawer.classList.add("open");
    if (drawerOverlay) drawerOverlay.classList.add("open");
  };
  
  const closeDrawer = () => {
    mobileDrawer.classList.remove("open");
    if (drawerOverlay) drawerOverlay.classList.remove("open");
  };

  mobileMenuBtn.addEventListener("click", openDrawer);
  drawerCloseBtn.addEventListener("click", closeDrawer);
  if (drawerOverlay) {
    drawerOverlay.addEventListener("click", closeDrawer);
  }

  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

/* ==========================================================================
   CONTACT FORM SUBMISSION (SIMULATED)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("contact-form-status");

  if (!form || !status) {
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const submitBtn = document.getElementById("contact-submit-btn");
    const originalText = submitBtn.innerHTML;
    
    // Simulate Loading State
    submitBtn.setAttribute("disabled", "true");
    submitBtn.innerHTML = `Sending... <i data-lucide="loader" class="icon-spin"></i>`;
    lucide.createIcons();
    
    status.className = "form-status hidden";

    setTimeout(() => {
      submitBtn.removeAttribute("disabled");
      submitBtn.innerHTML = originalText;
      lucide.createIcons();
      
      // Clear inputs
      form.reset();
      
      // Display simulated success state
      status.textContent = "Message sent successfully! Thank you for reaching out.";
      status.className = "form-status success";
      
      // Auto fade status
      setTimeout(() => {
        status.className = "form-status hidden";
      }, 5000);
    }, 1500);
  });
}

/* ==========================================================================
   INTERACTIVE PORTFOLIO CONFIGURATOR (ADMIN PANEL MODAL)
   ========================================================================== */
function initAdminModal() {
  const adminToggleBtn = document.getElementById("admin-toggle-btn");
  const adminDrawerBtn = document.getElementById("admin-drawer-btn");
  const adminModal = document.getElementById("admin-modal");
  const adminCloseBtn = document.getElementById("admin-modal-close");
  
  if (!adminToggleBtn || !adminDrawerBtn || !adminModal || !adminCloseBtn) {
    return;
  }
  
  const openModal = () => {
    populateAdminForms();
    adminModal.classList.add("open");
    // If mobile menu open, close it
    document.getElementById("mobile-drawer").classList.remove("open");
  };

  const closeModal = () => {
    adminModal.classList.remove("open");
  };

  adminToggleBtn.addEventListener("click", openModal);
  adminDrawerBtn.addEventListener("click", openModal);
  adminCloseBtn.addEventListener("click", closeModal);

  // Click outside to close
  adminModal.addEventListener("click", (e) => {
    if (e.target === adminModal) {
      closeModal();
    }
  });

  // Modal Sidebar Panel Tab switching
  const tabs = document.querySelectorAll(".sidebar-tab");
  const sections = document.querySelectorAll(".form-section");
  
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      sections.forEach(s => s.classList.remove("active"));
      
      tab.classList.add("active");
      const targetId = tab.getAttribute("data-target");
      document.getElementById(targetId).classList.add("active");
    });
  });

  // Modal footer utility actions
  document.getElementById("admin-reset-btn").addEventListener("click", handleResetDefaults);
  document.getElementById("admin-copy-btn").addEventListener("click", handleCopyConfig);
  document.getElementById("admin-export-btn").addEventListener("click", handleExportConfig);

  // Bind key inputs for real-time live preview update
  bindRealTimeInputs();
}

/* ==========================================================================
   POPULATE CONFIGURATOR FORMS WITH ACTIVE STATE
   ========================================================================== */
function populateAdminForms() {
  // 1. Personal Details Form
  const info = appState.personalInfo;
  document.getElementById("edit-name").value = info.name || "";
  document.getElementById("edit-title").value = info.title || "";
  document.getElementById("edit-email").value = info.email || "";
  document.getElementById("edit-phone").value = info.phone || "";
  document.getElementById("edit-location").value = info.location || "";
  document.getElementById("edit-resume").value = info.resume || "Karthikeyan E Resume.pdf";
  document.getElementById("edit-linkedin").value = info.linkedin || "";
  document.getElementById("edit-github").value = info.github || "";
  document.getElementById("edit-summary").value = info.summary || "";
  
  // Coding profiles
  const profiles = appState.codingProfiles || {};
  document.getElementById("edit-leetcode").value = profiles.leetcode || "";
  document.getElementById("edit-geeksforgeeks").value = profiles.geeksforgeeks || "";

  // 2. Skills lists
  buildSkillsForm();

  // 3. Experience lists
  buildExperienceForm();

  // 4. Projects lists
  buildProjectsForm();

  // 5. Education lists
  buildEducationForm();

  // 6. Certifications lists
  buildCertificationsForm();
}

// Bind simple text fields to update live state immediately
function bindRealTimeInputs() {
  const fieldsMap = [
    { id: "edit-name", parent: "personalInfo", key: "name", render: renderNavbarAndHero },
    { id: "edit-title", parent: "personalInfo", key: "title", render: renderNavbarAndHero },
    { id: "edit-email", parent: "personalInfo", key: "email", render: () => { renderNavbarAndHero(); renderContactSection(); } },
    { id: "edit-phone", parent: "personalInfo", key: "phone", render: () => { renderNavbarAndHero(); renderContactSection(); } },
    { id: "edit-location", parent: "personalInfo", key: "location", render: renderContactSection },
    { id: "edit-resume", parent: "personalInfo", key: "resume", render: renderNavbarAndHero },
    { id: "edit-linkedin", parent: "personalInfo", key: "linkedin", render: renderNavbarAndHero },
    { id: "edit-github", parent: "personalInfo", key: "github", render: renderNavbarAndHero },
    { id: "edit-summary", parent: "personalInfo", key: "summary", render: () => { renderNavbarAndHero(); renderAboutAndStats(); } }
  ];

  fieldsMap.forEach(field => {
    const input = document.getElementById(field.id);
    input.addEventListener("input", (e) => {
      appState[field.parent][field.key] = e.target.value;
      saveStateLocally();
      field.render();
    });
  });

  // Bind coding profiles
  const bindProfile = (id, key) => {
    document.getElementById(id).addEventListener("input", (e) => {
      if (!appState.codingProfiles) appState.codingProfiles = {};
      appState.codingProfiles[key] = e.target.value;
      saveStateLocally();
      renderContactSection();
    });
  };
  bindProfile("edit-leetcode", "leetcode");
  bindProfile("edit-geeksforgeeks", "geeksforgeeks");
}

/* ==========================================================================
   DYNAMIC FORM BUILDERS FOR NESTED LIST DATA
   ========================================================================== */

// 1. Skills Category Comma Separated Strings
function buildSkillsForm() {
  const listContainer = document.getElementById("skills-edit-list");
  listContainer.innerHTML = "";
  
  if (!appState.skills) appState.skills = [];

  appState.skills.forEach((cat, index) => {
    const card = document.createElement("div");
    card.className = "skill-category-edit-card";
    
    // Convert array values back to raw list
    const itemsRawStr = cat.items.join(", ");
    
    card.innerHTML = `
      <h5>Category: ${cat.category}</h5>
      <div class="form-group">
        <label>Skills tags (Comma-separated)</label>
        <textarea rows="3" class="skill-category-csv-input" data-index="${index}">${itemsRawStr}</textarea>
      </div>`;
      
    listContainer.appendChild(card);
  });

  // Bind text area updates
  document.querySelectorAll(".skill-category-csv-input").forEach(textarea => {
    textarea.addEventListener("input", (e) => {
      const index = parseInt(e.target.getAttribute("data-index"));
      const rawText = e.target.value;
      // Split by comma, trim whitespace, filter empty values
      const parsedItems = rawText.split(",")
                                 .map(item => item.trim())
                                 .filter(item => item.length > 0);
      
      appState.skills[index].items = parsedItems;
      saveStateLocally();
      renderSkillsSection();
    });
  });
}

// 2. Experience Nested Form
function buildExperienceForm() {
  const container = document.getElementById("experience-edit-list");
  container.innerHTML = "";
  
  if (!appState.experience) appState.experience = [];

  appState.experience.forEach((job, index) => {
    const card = document.createElement("div");
    card.className = "edit-item-card";
    card.innerHTML = `
      <div class="edit-item-card-header">
        <span class="edit-item-title">Entry #${index + 1}: ${job.company || "New entry"}</span>
        <span class="btn-delete-item delete-experience-btn" data-index="${index}">
          <i data-lucide="trash-2"></i> Delete
        </span>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Role</label>
          <input type="text" class="exp-input" data-index="${index}" data-key="role" value="${job.role || ""}">
        </div>
        <div class="form-group">
          <label>Company / Organization</label>
          <input type="text" class="exp-input" data-index="${index}" data-key="company" value="${job.company || ""}">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Duration (e.g. May 2024)</label>
          <input type="text" class="exp-input" data-index="${index}" data-key="duration" value="${job.duration || ""}">
        </div>
        <div class="form-group">
          <label>Location / Settings (e.g. Remote)</label>
          <input type="text" class="exp-input" data-index="${index}" data-key="location" value="${job.location || ""}">
        </div>
      </div>
      <div class="form-group">
        <label>Highlights (One bullet point per line)</label>
        <textarea rows="4" class="exp-highlights-textarea" data-index="${index}">${job.highlights.join("\n")}</textarea>
      </div>`;
      
    container.appendChild(card);
  });

  lucide.createIcons();

  // Add Item Button Listener
  const addBtn = document.getElementById("btn-add-experience");
  // Remove existing listeners to avoid cloning handlers
  const cleanAddBtn = addBtn.cloneNode(true);
  addBtn.parentNode.replaceChild(cleanAddBtn, addBtn);
  
  cleanAddBtn.addEventListener("click", () => {
    appState.experience.push({
      role: "Software Intern",
      company: "Tech Solutions",
      location: "Remote",
      duration: "Present",
      highlights: ["Implemented dynamic front-end pages.", "Collaborated with team developers."]
    });
    saveStateLocally();
    renderTimelineSection();
    buildExperienceForm();
  });

  // Delete Card click
  document.querySelectorAll(".delete-experience-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt(btn.getAttribute("data-index"));
      appState.experience.splice(idx, 1);
      saveStateLocally();
      renderTimelineSection();
      buildExperienceForm();
    });
  });

  // Bind form card input changes
  document.querySelectorAll(".exp-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"));
      const key = e.target.getAttribute("data-key");
      appState.experience[idx][key] = e.target.value;
      saveStateLocally();
      renderTimelineSection();
    });
  });

  // Highlights bullets text area splits
  document.querySelectorAll(".exp-highlights-textarea").forEach(textarea => {
    textarea.addEventListener("input", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"));
      const text = e.target.value;
      // Split by line breaks, trim, and drop empty items
      appState.experience[idx].highlights = text.split("\n")
                                                .map(pt => pt.trim())
                                                .filter(pt => pt.length > 0);
      saveStateLocally();
      renderTimelineSection();
    });
  });
}

// 3. Projects Nested Form
function buildProjectsForm() {
  const container = document.getElementById("projects-edit-list");
  container.innerHTML = "";
  
  if (!appState.projects) appState.projects = [];

  appState.projects.forEach((proj, index) => {
    const card = document.createElement("div");
    card.className = "edit-item-card";
    card.innerHTML = `
      <div class="edit-item-card-header">
        <span class="edit-item-title">Project #${index + 1}: ${proj.title || "New Project"}</span>
        <span class="btn-delete-item delete-project-btn" data-index="${index}">
          <i data-lucide="trash-2"></i> Delete
        </span>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Project Title</label>
          <input type="text" class="proj-input" data-index="${index}" data-key="title" value="${proj.title || ""}">
        </div>
        <div class="form-group">
          <label>Tech Stack Tags (Comma-separated)</label>
          <input type="text" class="proj-tech-input" data-index="${index}" value="${proj.tech.join(", ")}">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>GitHub Repository URL</label>
          <input type="text" class="proj-link-input" data-index="${index}" data-key="github" value="${(proj.links && proj.links.github) || "#"}">
        </div>
        <div class="form-group">
          <label>Live Demo URL (or '#' if none)</label>
          <input type="text" class="proj-link-input" data-index="${index}" data-key="live" value="${(proj.links && proj.links.live) || "#"}">
        </div>
      </div>
      <div class="form-group">
        <label>Short Description</label>
        <textarea rows="2" class="proj-input" data-index="${index}" data-key="description">${proj.description || ""}</textarea>
      </div>
      <div class="form-group">
        <label>Key Features / Highlights (One point per line)</label>
        <textarea rows="3" class="proj-highlights-textarea" data-index="${index}">${proj.highlights.join("\n")}</textarea>
      </div>`;
      
    container.appendChild(card);
  });

  lucide.createIcons();

  // Add Item Button Listener
  const addBtn = document.getElementById("btn-add-project");
  const cleanAddBtn = addBtn.cloneNode(true);
  addBtn.parentNode.replaceChild(cleanAddBtn, addBtn);
  
  cleanAddBtn.addEventListener("click", () => {
    appState.projects.push({
      title: "New Amazing Application",
      tech: ["HTML5", "CSS3", "JavaScript"],
      description: "A super interactive web application made with modern styling.",
      highlights: ["Implemented full responsive breakpoints.", "Engineered performance tuning of assets."],
      links: { github: "https://github.com/Karthikeyaneswaran", live: "#" }
    });
    saveStateLocally();
    renderProjectsSection();
    if (window.rebuildProjectFilters) window.rebuildProjectFilters();
    buildProjectsForm();
  });

  // Delete Card click
  document.querySelectorAll(".delete-project-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt(btn.getAttribute("data-index"));
      appState.projects.splice(idx, 1);
      saveStateLocally();
      renderProjectsSection();
      if (window.rebuildProjectFilters) window.rebuildProjectFilters();
      buildProjectsForm();
    });
  });

  // Bind core input changes
  document.querySelectorAll(".proj-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"));
      const key = e.target.getAttribute("data-key");
      appState.projects[idx][key] = e.target.value;
      saveStateLocally();
      renderProjectsSection();
    });
  });

  // Tech stack split array updates
  document.querySelectorAll(".proj-tech-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"));
      const text = e.target.value;
      appState.projects[idx].tech = text.split(",")
                                        .map(t => t.trim())
                                        .filter(t => t.length > 0);
      saveStateLocally();
      renderProjectsSection();
      if (window.rebuildProjectFilters) window.rebuildProjectFilters();
    });
  });

  // Links updating
  document.querySelectorAll(".proj-link-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"));
      const key = e.target.getAttribute("data-key");
      if (!appState.projects[idx].links) appState.projects[idx].links = { github: "#", live: "#" };
      appState.projects[idx].links[key] = e.target.value;
      saveStateLocally();
      renderProjectsSection();
    });
  });

  // Highlights updates
  document.querySelectorAll(".proj-highlights-textarea").forEach(textarea => {
    textarea.addEventListener("input", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"));
      const text = e.target.value;
      appState.projects[idx].highlights = text.split("\n")
                                              .map(pt => pt.trim())
                                              .filter(pt => pt.length > 0);
      saveStateLocally();
      renderProjectsSection();
    });
  });
}

// 4. Education Nested Form
function buildEducationForm() {
  const container = document.getElementById("education-edit-list");
  container.innerHTML = "";
  
  if (!appState.education) appState.education = [];

  appState.education.forEach((school, index) => {
    const card = document.createElement("div");
    card.className = "edit-item-card";
    card.innerHTML = `
      <div class="edit-item-card-header">
        <span class="edit-item-title">Entry #${index + 1}: ${school.degree || "New qualification"}</span>
        <span class="btn-delete-item delete-education-btn" data-index="${index}">
          <i data-lucide="trash-2"></i> Delete
        </span>
      </div>
      <div class="form-group">
        <label>Degree / Level (e.g. Bachelor of Technology)</label>
        <input type="text" class="edu-input" data-index="${index}" data-key="degree" value="${school.degree || ""}">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Institution / School</label>
          <input type="text" class="edu-input" data-index="${index}" data-key="institution" value="${school.institution || ""}">
        </div>
        <div class="form-group">
          <label>Location (e.g. Coimbatore)</label>
          <input type="text" class="edu-input" data-index="${index}" data-key="location" value="${school.location || ""}">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Duration / Years (e.g. 2023 - 2026)</label>
          <input type="text" class="edu-input" data-index="${index}" data-key="duration" value="${school.duration || ""}">
        </div>
        <div class="form-group">
          <label>Score / GPA (e.g. GPA: 8.7 / 10)</label>
          <input type="text" class="edu-input" data-index="${index}" data-key="score" value="${school.score || ""}">
        </div>
      </div>`;
      
    container.appendChild(card);
  });

  lucide.createIcons();

  // Add Item Button Listener
  const addBtn = document.getElementById("btn-add-education");
  const cleanAddBtn = addBtn.cloneNode(true);
  addBtn.parentNode.replaceChild(cleanAddBtn, addBtn);
  
  cleanAddBtn.addEventListener("click", () => {
    appState.education.push({
      degree: "Academic Degree",
      institution: "University/College",
      location: "City, State",
      duration: "Year",
      score: "GPA: 0.0"
    });
    saveStateLocally();
    renderTimelineSection();
    buildEducationForm();
  });

  // Delete Card click
  document.querySelectorAll(".delete-education-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt(btn.getAttribute("data-index"));
      appState.education.splice(idx, 1);
      saveStateLocally();
      renderTimelineSection();
      buildEducationForm();
    });
  });

  // Bind input changes
  document.querySelectorAll(".edu-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"));
      const key = e.target.getAttribute("data-key");
      appState.education[idx][key] = e.target.value;
      saveStateLocally();
      renderTimelineSection();
    });
  });
}

// 5. Certifications Nested Form
function buildCertificationsForm() {
  const container = document.getElementById("certifications-edit-list");
  container.innerHTML = "";
  
  if (!appState.certifications) appState.certifications = [];

  appState.certifications.forEach((cert, index) => {
    const card = document.createElement("div");
    card.className = "edit-item-card";
    card.innerHTML = `
      <div class="edit-item-card-header">
        <span class="edit-item-title">Entry #${index + 1}: ${cert.name || "New certificate"}</span>
        <span class="btn-delete-item delete-cert-btn" data-index="${index}">
          <i data-lucide="trash-2"></i> Delete
        </span>
      </div>
      <div class="form-group">
        <label>Certificate Name</label>
        <input type="text" class="cert-input" data-index="${index}" data-key="name" value="${cert.name || ""}">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Issuer (e.g. Meta / Coursera)</label>
          <input type="text" class="cert-input" data-index="${index}" data-key="issuer" value="${cert.issuer || ""}">
        </div>
        <div class="form-group">
          <label>Year of Issuance (e.g. 2024)</label>
          <input type="text" class="cert-input" data-index="${index}" data-key="year" value="${cert.year || ""}">
        </div>
      </div>
      <div class="form-group">
        <label>Verification Link URL (or '#' if none)</label>
        <input type="text" class="cert-input" data-index="${index}" data-key="link" value="${cert.link || "#"}">
      </div>`;
      
    container.appendChild(card);
  });

  lucide.createIcons();

  // Add Item Button Listener
  const addBtn = document.getElementById("btn-add-cert");
  const cleanAddBtn = addBtn.cloneNode(true);
  addBtn.parentNode.replaceChild(cleanAddBtn, addBtn);
  
  cleanAddBtn.addEventListener("click", () => {
    appState.certifications.push({
      name: "New Industry Certification",
      issuer: "Credential Authority",
      year: "Year",
      link: "#"
    });
    saveStateLocally();
    renderCertificationsSection();
    buildCertificationsForm();
  });

  // Delete Card click
  document.querySelectorAll(".delete-cert-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt(btn.getAttribute("data-index"));
      appState.certifications.splice(idx, 1);
      saveStateLocally();
      renderCertificationsSection();
      buildCertificationsForm();
    });
  });

  // Bind input changes
  document.querySelectorAll(".cert-input").forEach(input => {
    input.addEventListener("input", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"));
      const key = e.target.getAttribute("data-key");
      appState.certifications[idx][key] = e.target.value;
      saveStateLocally();
      renderCertificationsSection();
    });
  });
}

/* ==========================================================================
   UTILITY METHODS: RESET DEFAULT, COPY CONFIG, EXPORT TO FILE
   ========================================================================== */

// 1. Revert to original resume default data.js
function handleResetDefaults() {
  if (confirm("Are you sure you want to revert all changes back to your original resume details? This will clear draft customizations.")) {
    appState = JSON.parse(JSON.stringify(defaultData));
    saveStateLocally();
    renderAll();
    
    // Rebuild filtering tags
    if (window.rebuildProjectFilters) window.rebuildProjectFilters();
    
    // Re-populate and sync inputs
    populateAdminForms();
    
    alert("Reverted back to default data! Website updated.");
  }
}

// Helper to stringify data cleanly to paste in data.js
function generateDataJsCode() {
  const serialized = JSON.stringify(appState, null, 2);
  return `const portfolioData = ${serialized};\n\nif (typeof window !== 'undefined') {\n  window.portfolioData = portfolioData;\n}`;
}

// 2. Copy configurations code representation to clipboard
function handleCopyConfig() {
  const jsCode = generateDataJsCode();
  
  navigator.clipboard.writeText(jsCode).then(() => {
    const copyBtn = document.getElementById("admin-copy-btn");
    const originalText = copyBtn.innerHTML;
    
    // Visual feedback
    copyBtn.innerHTML = `<i data-lucide="check"></i> Copied!`;
    lucide.createIcons();
    copyBtn.setAttribute("disabled", "true");
    
    setTimeout(() => {
      copyBtn.innerHTML = originalText;
      lucide.createIcons();
      copyBtn.removeAttribute("disabled");
    }, 2000);
  }).catch(err => {
    alert("Could not copy config code to clipboard: " + err);
  });
}

// 3. Export / Download data.js file
function handleExportConfig() {
  const jsCode = generateDataJsCode();
  
  // Create virtual link & download blob file
  const blob = new Blob([jsCode], { type: "application/javascript;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  
  const tempLink = document.createElement("a");
  tempLink.setAttribute("href", url);
  tempLink.setAttribute("download", "data.js");
  tempLink.style.display = "none";
  
  document.body.appendChild(tempLink);
  tempLink.click();
  
  // Cleanup
  document.body.removeChild(tempLink);
  URL.revokeObjectURL(url);
}
