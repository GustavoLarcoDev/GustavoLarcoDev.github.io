// Project data - showcasing best technical projects
const projects = [
    {
        title: "MyHotel — Hotel Management System",
        description: "Enterprise-grade hotel operations platform built with ASP.NET Core MVC featuring 29 controllers spanning front desk, housekeeping, maintenance, budgeting, HR, and guest services. Includes real-time notifications via SignalR and automated CI/CD with GitHub Actions.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        technologies: ["C#", "ASP.NET Core", "Entity Framework", "SignalR", "GitHub Actions"],
        github: "https://github.com/GustavoLarcoDev/myhotel",
        live: null
    },
    {
        title: "EduTools — Educational Platform",
        description: "Full-stack educational platform for university students with career-specific tools, tutorials, and video content. Features Stripe payment processing for premium subscriptions and AWS S3 for file storage.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
        technologies: ["Django", "Next.js", "TypeScript", "PostgreSQL", "Stripe", "AWS S3"],
        github: "https://github.com/GustavoLarcoDev/EduTools",
        live: null
    },
    {
        title: "Expenses — Financial Receipt Manager",
        description: "Django financial management application with user authentication, receipt CRUD operations, and multi-category expense tracking. Built with modular multi-app architecture, mypy type checking, and comprehensive test suite.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
        technologies: ["Python", "Django", "SQLite", "mypy", "pytest"],
        github: "https://github.com/GustavoLarcoDev/expenses",
        live: null
    },
    {
        title: "GameStore API — Game Catalog Backend",
        description: "RESTful game store API using ASP.NET Core Minimal APIs with .NET 9.0. Implements DTO pattern, entity mapping layer, and clean endpoint architecture for game and genre management.",
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
        technologies: ["C#", ".NET 9.0", "Minimal APIs", "Entity Framework", "SQLite"],
        github: "https://github.com/GustavoLarcoDev/backendgamestore",
        live: null
    },
    {
        title: "BlogCore — Content Management Platform",
        description: "Blog/CMS platform built with ASP.NET Core following N-tier architecture with separate data access and business logic layers. Uses .NET 8.0 with Areas pattern for modular organization.",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
        technologies: ["C#", ".NET 8.0", "ASP.NET MVC", "Entity Framework", "N-tier"],
        github: "https://github.com/GustavoLarcoDev/blogcore",
        live: null
    },
    {
        title: "Cocktails — Recipe Management App",
        description: "Django web application for browsing and managing cocktail recipes with media uploads, static file serving, and automated CI/CD deployment via GitHub Actions.",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
        technologies: ["Python", "Django", "GitHub Actions", "CI/CD"],
        github: "https://github.com/GustavoLarcoDev/cocktails",
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

        const liveLink = project.live
            ? `<a href="${project.live}" target="_blank" class="project-link project-link-live"><i class="fas fa-external-link-alt"></i> Live Demo</a>`
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
                    <a href="${project.github}" target="_blank" class="project-link">
                        <i class="fab fa-github"></i> View on GitHub
                    </a>
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

    // Close menu when a link is clicked
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
