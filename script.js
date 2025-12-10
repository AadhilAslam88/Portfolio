/* Global Styles */
:root {
    --primary-color: #00d2d3;
    /* Teal */
    --bg-color: #020617;
    /* Very Dark Blue base */
    --bg-card: rgba(30, 41, 59, 0.6);
    /* Glassy Card */
    --text-color: #f1f5f9;
    --text-muted: #94a3b8;
    --glass-border: 1px solid rgba(255, 255, 255, 0.08);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background: linear-gradient(135deg, #020617 0%, #0f172a 40%, #1e1b4b 100%);
    background-attachment: fixed;
    color: var(--text-color);
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    background-color: rgba(15, 23, 42, 0.7);
    /* Translucent */
    backdrop-filter: blur(12px);
    /* Glass blur */
    -webkit-backdrop-filter: blur(12px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    border-bottom: var(--glass-border);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
}

.nav-links {
    display: flex;
    gap: 2rem;
}

@media (min-width: 769px) {
    .nav-links {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
}

.nav-links a:hover {
    color: var(--primary-color);
    transition: 0.3s;
}

.hamburger {
    display: none;
    cursor: pointer;
    font-size: 1.5rem;
}

/* Hero Section */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 60px;
}

.profile-img-container {
    margin-bottom: 1.5rem;
}

.profile-img-container img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--primary-color);
    box-shadow: 0 0 20px rgba(0, 210, 211, 0.4);
    transition: transform 0.3s ease;
}

.profile-img-container img:hover {
    transform: scale(1.05);
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.highlight {
    color: var(--primary-color);
}

.hero p {
    font-size: 1.5rem;
    color: var(--text-muted);
    margin-bottom: 2rem;
}

.social-icons a {
    font-size: 2rem;
    margin: 0 15px;
    color: var(--text-color);
    transition: 0.3s;
}

.social-icons a:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
}

.btn {
    display: inline-block;
    padding: 0.8rem 2rem;
    background: var(--primary-color);
    color: #000;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 2rem;
    transition: 0.3s;
    border: none;
    cursor: pointer;
}

.btn:hover {
    background: #fff;
}

.btn-outline {
    background: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    margin-left: 10px;
}

.btn-outline:hover {
    background: var(--primary-color);
    color: #000;
}

/* Sections */
.section {
    padding: 5rem 10%;
}

.bg-dark {
    background-color: transparent;
}

/* Remove solid bg since we have gradient body */
.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    border-bottom: 2px solid var(--primary-color);
    display: inline-block;
    padding-bottom: 5px;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
}

/* Skills Grid */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.skill-card {
    background: var(--bg-card);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: var(--glass-border);
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.skill-card:hover {
    transform: translateY(-10px);
    border-bottom: 3px solid var(--primary-color);
    background: rgba(30, 41, 59, 0.8);
}

.skill-card i {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

/* Projects Grid */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    background: var(--bg-card);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: var(--glass-border);
    border-radius: 15px;
    overflow: hidden;
    transition: 0.3s;
    padding: 1.5rem;
    text-align: center;
    /* Center content inside card */
}

.project-card:hover {
    border-color: var(--primary-color);
    background: rgba(30, 41, 59, 0.8);
}

.project-info h3 {
    margin-bottom: 0.5rem;
    color: var(--primary-color);
}

.project-info p {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.tags span {
    background: rgba(51, 65, 85, 0.8);
    color: #fff;
    padding: 0.3rem 0.6rem;
    border-radius: 20px;
    font-size: 0.75rem;
    margin-right: 5px;
    display: inline-block;
    margin-bottom: 5px;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.project-links {
    margin-top: 1rem;
}

.project-links a {
    margin: 0 10px;
    /* Even spacing */
    font-size: 0.9rem;
}

.project-links a:hover {
    color: var(--primary-color);
}

/* Education Section */
.education-grid {
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 2rem;
    margin: 0 auto 3rem auto;
    max-width: 1200px;
    padding: 0 1rem;
}

.edu-card {
    background: var(--bg-card);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: var(--glass-border);
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    flex: 1 1 350px;
    max-width: 500px;
    border-left: 4px solid var(--primary-color);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.edu-card i {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.edu-card .institution {
    color: var(--primary-color);
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.edu-card .details {
    font-size: 0.9rem;
    color: var(--text-muted);
}

.subsection-title {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
}

.cert-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.8rem;
    max-width: 900px;
    margin: 0 auto;
}

.cert-item {
    background: rgba(51, 65, 85, 0.6);
    backdrop-filter: blur(4px);
    border: var(--glass-border);
    color: #e2e8f0;
    padding: 0.6rem 1.2rem;
    border-radius: 20px;
    font-size: 0.85rem;
    transition: all 0.3s ease;
    cursor: default;
}

.cert-item:hover {
    border-color: var(--primary-color);
    background: rgba(0, 210, 211, 0.15);
    transform: translateY(-2px);
}

/* Contact Form */
.contact-info {
    text-align: center;
    font-size: 1.2rem;
}

.contact-info i {
    color: var(--primary-color);
    margin-right: 10px;
}

/* Footer */
.footer {
    text-align: center;
    padding: 2rem;
    background: rgba(11, 17, 32, 0.8);
    backdrop-filter: blur(5px);
    color: var(--text-muted);
}

/* Responsive */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .hamburger {
        display: block;
    }

    .hero h1 {
        font-size: 2.5rem;
    }
}

/* Live Features */
/* 1. Real-time Clock */
.clock {
    color: var(--primary-color);
    font-size: 1.1rem;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    border: 1px solid rgba(0, 210, 211, 0.3);
    background: rgba(0, 0, 0, 0.2);
    padding: 0.3rem 0.8rem;
    border-radius: 5px;
    margin-left: auto;
    margin-right: 20px;
    display: none;
}

@media (min-width: 769px) {
    .clock {
        display: block;
    }
}

/* 2. WhatsApp Floating Button */
.whatsapp-float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 30px;
    right: 30px;
    background-color: #25d366;
    color: #FFF;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
    z-index: 1001;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.whatsapp-float:hover {
    background-color: #1faf57;
    transform: scale(1.1);
}

.whatsapp-float i {
    margin-top: 2px;
}

/* 3. GitHub Chart */
.github-chart-container {
    margin-top: 3rem;
    text-align: center;
    width: 100%;
    overflow-x: auto;
}

.github-chart-container img {
    max-width: 100%;
    border-radius: 5px;
    border: var(--glass-border);
    background: rgba(15, 23, 42, 0.5);
    padding: 10px;
}
