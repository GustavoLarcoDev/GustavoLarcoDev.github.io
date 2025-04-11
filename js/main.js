// Datos de los proyectos
const projects = [
    {
        title: "",
        description: "Enterprise-level IoT system built with C# and .NET Core for real-time environmental monitoring. Features include RESTful API architecture, microservices for data processing, Azure IoT Hub integration, and real-time dashboard with SignalR. Implements design patterns like Repository, CQRS, and Event Sourcing.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
        technologies: ["C#", ".NET Core", "Azure IoT", "SignalR", "SQL Server", "Docker"],
        github: "https://github.com/GustavoLarcoDev"
    },
    {
        title: "AI-Powered Data Analysis Suite",
        description: "Advanced data analysis platform using Python and machine learning for environmental predictions. Features include ML models with scikit-learn and TensorFlow, data processing with Pandas, interactive visualizations with Plotly, and a FastAPI backend. Includes CI/CD pipeline with GitHub Actions.",
        image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        technologies: ["Python", "TensorFlow", "FastAPI", "Pandas", "Docker", "GitHub Actions"],
        github: "https://github.com/GustavoLarcoDev"
    },
    {
        title: "Real-time Hotel Analytics Dashboard",
        description: "Enterprise dashboard developed with TypeScript and React for hotel data analytics. Features component-based architecture, state management with Redux Toolkit, interactive charts with D3.js, and optimized caching system. Integrates with Salesforce APIs and booking systems.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        technologies: ["TypeScript", "React", "Redux", "D3.js", "Salesforce API", "Jest"],
        github: "https://github.com/GustavoLarcoDev"
    },
    {
        title: "Environmental Data Analysis Platform",
        description: "Comprehensive platform combining C# and Python for advanced environmental data analysis. Features clean architecture backend in .NET Core, Python microservices for data processing, and TypeScript frontend with Next.js. Implements CI/CD, automated testing, and Azure Application Insights monitoring.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        technologies: ["C#", "Python", "TypeScript", "Next.js", "Azure", "Docker"],
        github: "https://github.com/GustavoLarcoDev"
    },
    {
        title: "Power BI Custom Visualization Tool",
        description: "Custom visualization toolkit for Power BI developed with TypeScript. Features reusable components for advanced charts, external API integration for data enrichment, and a dynamic reporting template system. Enhances data storytelling capabilities in enterprise environments.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
        technologies: ["TypeScript", "Power BI", "D3.js", "Azure Functions", "REST APIs"],
        github: "https://github.com/GustavoLarcoDev"
    },
    {
        title: "Multi-tenant Resource Management System",
        description: "Enterprise-grade multi-tenant resource management system built with C# and .NET 6. Features microservices architecture, Identity Server authentication, RabbitMQ messaging system, and distributed caching with Redis. Deployed using Docker and Kubernetes for scalability.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80",
        technologies: ["C#", ".NET 6", "RabbitMQ", "Redis", "Docker", "Kubernetes"],
        github: "https://github.com/GustavoLarcoDev"
    }
];

// Cargar proyectos dinámicamente
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = `
            <div class="project-card">
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
                    </div>
                </div>
            </div>
        `;
        projectsGrid.innerHTML += projectCard;
    });
}

// Menú móvil
function setupMobileMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Formulario de contacto
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Aquí puedes agregar la lógica para enviar el formulario
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        console.log('Formulario enviado:', formData);
        // Limpia el formulario
        contactForm.reset();
        alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
    });
}

// Animación suave del scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Inicializar todas las funciones cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupMobileMenu();
    setupContactForm();
    setupSmoothScroll();
});
