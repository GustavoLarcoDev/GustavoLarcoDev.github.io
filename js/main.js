// Project data - real deployed projects and best technical work
const projects = [
    {
        title: "TryQL — Donation & Micro-Philanthropy Platform",
        description: "Production SaaS platform built at Simplicity Software that rounds up debit/credit card transactions and directs spare change to local nonprofits, churches, and community organizations. Serving 10,000+ donors and 500+ causes with secure payment processing.",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
        technologies: ["C#", ".NET", "Tailwind CSS", "Cloudflare", "Google Analytics", "Stripe"],
        github: null,
        live: "https://tryql.com"
    },
    {
        title: "MyHotel — Hotel Management System",
        description: "Enterprise-grade hotel operations platform with 29 controllers spanning front desk, housekeeping, maintenance, budgeting, HR evaluations, and guest services. Features real-time push notifications via SignalR and automated CI/CD deployment.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        technologies: ["C#", "ASP.NET Core MVC", "Entity Framework", "SignalR", "GitHub Actions"],
        github: "https://github.com/GustavoLarcoDev/myhotel",
        live: null
    },
    {
        title: "MiGimnasio — Gym Management SaaS",
        description: "Full-stack SaaS platform for gym owners featuring client management, automated payment reminders via WhatsApp/SMS, financial reporting, QR attendance tracking, and online payments. Built with ASP.NET backend and modern responsive frontend.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        technologies: ["C#", "ASP.NET", "SQL Server", "Bootstrap", "JavaScript", "AOS"],
        github: "https://github.com/GustavoLarcoDev/gimnasio",
        live: "https://gustavolarcodev.github.io/migimnasiolandingpage/"
    },
    {
        title: "EduTools — Educational Platform",
        description: "Full-stack educational platform for university students with career-specific tools, tutorials, and video content. Integrated Stripe payment processing for premium subscriptions and AWS S3 for scalable file storage.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
        technologies: ["Django", "Next.js", "TypeScript", "PostgreSQL", "Stripe", "AWS S3"],
        github: "https://github.com/GustavoLarcoDev/EduTools",
        live: null
    },
    {
        title: "Impulsoyz — Digital Marketing Agency",
        description: "Professional multi-page website for a real digital marketing agency in Ecuador. Features service catalog, portfolio gallery, tiered pricing for marketing and web development packages, WhatsApp integration, and SEO optimization. Deployed with custom domain.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        technologies: ["HTML5", "CSS3", "JavaScript", "SEO", "WhatsApp API", "Custom Domain"],
        github: "https://github.com/GustavoLarcoDev/Impulsoyz",
        live: "https://impulsoyz.com"
    },
    {
        title: "Trap House Performance — Auto Customization Shop",
        description: "Client website for a real truck customization and diesel performance shop in Austin, TX. Features service showcase, build portfolio gallery with carousel, quote request form, and SMS/WhatsApp integration for customer contact.",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "WhatsApp"],
        github: "https://github.com/GustavoLarcoDev/Traphouseperformance",
        live: "https://gustavolarcodev.github.io/Traphouseperformance/"
    },
    {
        title: "SkyFumig — Agricultural Drone Fumigation",
        description: "Professional website for a drone-based agricultural fumigation service specializing in precision pest control for banana and cacao crops. Features service catalog, video gallery, interactive pricing calculator, and client testimonials.",
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
        technologies: ["HTML5", "CSS3", "JavaScript", "Video Integration", "WhatsApp API"],
        github: "https://github.com/GustavoLarcoDev/Fumigation",
        live: "https://gustavolarcodev.github.io/Fumigation/"
    },
    {
        title: "GameStore API — Game Catalog Backend",
        description: "RESTful game store API using ASP.NET Core Minimal APIs with .NET 9.0. Implements DTO pattern, entity mapping layer, and clean endpoint architecture for game and genre management.",
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
        technologies: ["C#", ".NET 9.0", "Minimal APIs", "Entity Framework", "SQLite"],
        github: "https://github.com/GustavoLarcoDev/backendgamestore",
        live: null
    }
];

// Load projects dynamically
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    const fragment = document.createDocumentFragment();

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const githubLink = project.github
            ? `<a href="${project.github}" target="_blank" class="project-link"><i class="fab fa-github"></i> GitHub</a>`
            : '';

        const liveLink = project.live
            ? `<a href="${project.live}" target="_blank" class="project-link project-link-live"><i class="fas fa-external-link-alt"></i> Live Site</a>`
            : '';

        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${githubLink}
                    ${liveLink}
                </div>
            </div>
        `;
        fragment.appendChild(card);
    });

    projectsGrid.appendChild(fragment);
}

// Mobile menu
function setupMobileMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        });
    });
}

// Contact form
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        console.log('Form submitted:', formData);
        contactForm.reset();
        alert('Thank you for your message! I will get back to you soon.');
    });
}

// Smooth scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupMobileMenu();
    setupContactForm();
    setupSmoothScroll();
});
