/* ==========================================================================
   Ahmed Aadhil - Portfolio Interactive Logic & Canvas Engine
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
    // 1. Data Constellation Canvas Background Animation
    initCanvasAnimation();

    // 2. Dynamic Typewriter Effect for Hero Subtitle
    initTypewriter();

    // 3. Project Filter System
    initProjectFilters();

    // 4. Mobile Menu Toggle
    initMobileMenu();

    // 5. Active Section Navigation Highlighter & Back-to-Top
    initScrollInteractions();

    // 6. Real-time Live Clock
    initLiveClock();
});

/* --------------------------------------------------------------------------
   1. Interactive Data Particle / Constellation Canvas
   -------------------------------------------------------------------------- */
function initCanvasAnimation() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = Math.floor((width * height) / 14000); // Responsive density
    const maxDistance = 130;
    const mouse = { x: null, y: null, radius: 150 };

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.8;
            this.vy = (Math.random() - 0.5) * 0.8;
            this.radius = Math.random() * 1.5 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(0, 242, 254, 0.6)";
            ctx.fill();
        }
    }

    // Populate particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            // Connect nearby particles
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDistance) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 242, 254, ${1 - dist / maxDistance * 0.8})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }

            // Connect to mouse cursor
            if (mouse.x !== null && mouse.y !== null) {
                const mdx = particles[i].x - mouse.x;
                const mdy = particles[i].y - mouse.y;
                const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

                if (mdist < mouse.radius) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(139, 92, 246, ${1 - mdist / mouse.radius})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}

/* --------------------------------------------------------------------------
   2. Hero Subtitle Typewriter Effect
   -------------------------------------------------------------------------- */
function initTypewriter() {
    const textElement = document.querySelector(".typing-text");
    if (!textElement) return;

    const roles = [
        "Data Science & MLOps",
        "Machine Learning Engineering",
        "Data Engineering & Analytics",
        "Computer Vision Systems",
        "Predictive Modeling & Drift Detection"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            textElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 40 : 90;

        if (!isDeleting && charIndex === currentRole.length) {
            speed = 2200; // Pause at end of text
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 400; // Pause before typing next
        }

        setTimeout(type, speed);
    }

    setTimeout(type, 800);
}

/* --------------------------------------------------------------------------
   3. Project Category Filter Engine
   -------------------------------------------------------------------------- */
function initProjectFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            projectCards.forEach((card) => {
                const categories = card.getAttribute("data-category");
                
                if (filterValue === "all" || categories.includes(filterValue)) {
                    card.style.display = "flex";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 50);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.95)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 250);
                }
            });
        });
    });
}

/* --------------------------------------------------------------------------
   4. Mobile Menu Navigation Handler
   -------------------------------------------------------------------------- */
function initMobileMenu() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("mobile-active");
        });

        // Close menu when a link is clicked
        document.querySelectorAll(".nav-link").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("mobile-active");
            });
        });
    }
}

/* --------------------------------------------------------------------------
   5. Scroll Interactions (Active Nav Link & Back To Top Button)
   -------------------------------------------------------------------------- */
function initScrollInteractions() {
    const sections = document.querySelectorAll("section, header");
    const navLinks = document.querySelectorAll(".nav-link");
    const backToTopBtn = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        let currentSection = "";
        const scrollPosition = window.pageYOffset + 200;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });

        // Back to top button visibility
        if (backToTopBtn) {
            if (window.pageYOffset > 400) {
                backToTopBtn.classList.add("active");
            } else {
                backToTopBtn.classList.remove("active");
            }
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
}

/* --------------------------------------------------------------------------
   6. Live Digital Clock
   -------------------------------------------------------------------------- */
function initLiveClock() {
    const clockElement = document.getElementById("clock");
    if (!clockElement) return;

    function updateClock() {
        const now = new Date();
        clockElement.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }

    updateClock();
    setInterval(updateClock, 1000);
}

/* --------------------------------------------------------------------------
   7. Project Detail Modal Popups
   -------------------------------------------------------------------------- */
const projectData = {
    mlops: {
        title: "Real-Time MLOps Drift Detection & Monitoring System",
        date: "Aug 2026 – Present",
        tags: ["MLOps", "Model Monitoring", "Data Drift", "Concept Drift", "Python", "scikit-learn", "Alerting Dashboard"],
        bullets: [
            "Building an end-to-end production model-monitoring system to detect Data Drift, Concept Drift, and Prediction Drift in machine learning models post-deployment.",
            "Designing architecture that bridges static model training with dynamic real-world environments to ensure continuous model reliability.",
            "Implementing automated alerting and response workflows to flag and address model performance decay before business impact.",
            "Applying statistical drift-detection methods (e.g., KS-test, PSI) and building a real-time monitoring dashboard for model health visualization."
        ]
    },
    churn: {
        title: "Customer Churn Prediction Platform",
        date: "Jul 2026 – Jul 2026",
        tags: ["Machine Learning", "XGBoost", "Docker", "REST API", "Streamlit", "Feature Engineering"],
        bullets: [
            "Built an end-to-end ML pipeline that ingests CRM data, trains and evaluates churn-prediction models, and serves predictions through a REST API.",
            "Developed an interactive Streamlit dashboard for business users to explore churn risk scores and feature importances in real time.",
            "Containerized the full stack with Docker for reproducible training and deployment, mirroring a production ML-serving workflow.",
            "Applied advanced feature engineering and model evaluation (XGBoost vs. baseline classifiers), directly relevant to scalable ML deployment systems."
        ]
    },
    traffic: {
        title: "Traffic Red-Light-Running Violation Detection System",
        date: "Jul 2025 – Oct 2025",
        tags: ["Computer Vision", "Python", "OpenCV", "MySQL", "Image Processing", "Vehicle Tracking"],
        bullets: [
            "Developed a computer vision system using Python and OpenCV to detect vehicles running red-light signals from video feeds automatically.",
            "Applied image processing techniques for vehicle detection, tracking, and violation-frame evidence capture.",
            "Integrated with a MySQL database to log violation records with exact timestamps, vehicle frames, and license evidence.",
            "Demonstrated practical application of computer vision and database management in a real-world traffic-enforcement use case."
        ],
        github: "https://github.com/AadhilAslam88/Traffic_Red-Light-Running_Violation_Detection"
    },
    hostel: {
        title: "Cloud-Based Hostel Entry–Exit Management System",
        date: "Feb 2025 – May 2025",
        tags: ["Cloud (AWS/Firebase)", "QR Code", "Real-Time Analytics", "Security Alerts", "Web App"],
        bullets: [
            "Designed and proposed a cloud-based hostel management system for real-time monitoring of student entry/exit activities.",
            "Implemented QR-code–based check-in/out using university ID cards to eliminate manual logging and improve verification accuracy.",
            "Utilized cloud databases (Firebase/AWS) for secure, scalable data storage and real-time dashboard analytics for wardens and administrators.",
            "Built an automated notification system to alert administrators of suspicious or unauthorized exits, enhancing campus safety."
        ],
        live: "https://sltc-unigo.netlify.app/"
    },
    retail: {
        title: "Retail Analytics Dashboard",
        date: "Aug 2025 – Sep 2025",
        tags: ["Power BI", "SQL", "Data Wrangling", "BI Reporting", "KPI Design"],
        bullets: [
            "Built a Power BI dashboard using transactional retail data to analyze sales trends, top products, and revenue by category/region.",
            "Wrote SQL queries for data cleaning, aggregation, and feature extraction to support visual analytics and executive KPIs.",
            "Demonstrated skills in data wrangling, BI reporting, and data-driven decision-support dashboards."
        ]
    },
    facerecog: {
        title: "Face Recognition System",
        date: "May 2024 – Jun 2024",
        tags: ["Computer Vision", "Python", "OpenCV", "MySQL", "Real-Time Logs"],
        bullets: [
            "Developed a real-time face recognition application using Python and OpenCV for face detection and identification.",
            "Integrated with an online MySQL database to manage user profiles and recognition access logs (user ID, timestamp, status).",
            "Demonstrated full-stack development by combining front-end logic (image capture, recognition) with back-end data storage and retrieval."
        ],
        github: "https://github.com/AadhilAslam88/facerecognition"
    }
};

function openProjectModal(key) {
    const modal = document.getElementById("project-modal");
    const container = document.getElementById("modal-body-content");
    const project = projectData[key];

    if (!project || !modal || !container) return;

    let tagsHtml = project.tags.map(t => `<span class="skill-tag primary">${t}</span>`).join(" ");
    let bulletsHtml = project.bullets.map(b => `<li>${b}</li>`).join("");
    
    let linksHtml = "";
    if (project.github) {
        linksHtml += `<a href="${project.github}" target="_blank" class="btn btn-primary" style="margin-right: 10px;"><i class="fab fa-github"></i> View Repository</a>`;
    }
    if (project.live) {
        linksHtml += `<a href="${project.live}" target="_blank" class="btn btn-whatsapp"><i class="fas fa-external-link-alt"></i> Open Live Demo</a>`;
    }

    container.innerHTML = `
        <h2 class="modal-title">${project.title}</h2>
        <div class="modal-date"><i class="far fa-calendar-alt"></i> ${project.date}</div>
        <div class="skill-tags" style="margin-bottom: 1.5rem;">${tagsHtml}</div>
        <ul class="modal-bullets">${bulletsHtml}</ul>
        <div style="margin-top: 2rem;">${linksHtml}</div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeProjectModal() {
    const modal = document.getElementById("project-modal");
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
}

// Close modal when clicking backdrop
document.getElementById("project-modal")?.addEventListener("click", function (e) {
    if (e.target === this) {
        closeProjectModal();
    }
});
