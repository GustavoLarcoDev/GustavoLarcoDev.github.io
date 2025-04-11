// Datos de los proyectos
const projects = [
  {
    title: "Bella Nails – Beauty Salon Website",
    description: "Modern and responsive website for a beauty salon, built with HTML, CSS, and JavaScript. Features a service gallery, online booking system, and mobile-optimized design using Bootstrap.",
    image: "https://cdn.pixabay.com/photo/2023/02/15/10/22/backlinks-7791410_1280.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design"],
    github: "https://gustavolarcodev.github.io/bella-nails-salon/"
  },
  {
    title: "La Mesa – Restaurant & Bar",
    description: "Elegant restaurant website showcasing Mediterranean cuisine, with an interactive menu, customer reviews, and reservation functionality. Designed using HTML, CSS, JavaScript, and Bootstrap.",
    image: "https://cdn.pixabay.com/photo/2023/02/15/10/22/backlinks-7791414_1280.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design"],
    github: "https://github.com/GustavoLarcoDev/restaurant-la-mesa"
  },
  {
    title: "Urban Style – Fashion E-Commerce",
    description: "Trendy clothing store website featuring a dynamic catalog, filterable product categories, and stylish visuals. Built with HTML, CSS, JavaScript, and Bootstrap for a smooth user experience.",
    image: "https://cdn.pixabay.com/photo/2016/07/27/15/56/link-1545625_1280.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design"],
    github: "https://github.com/GustavoLarcoDev/urban-style-clothing"
  },
  {
    title: "Casa & Estilo – Furniture and Decor",
    description: "Furniture store website presenting featured products, design inspirations, and personalized service sections. Developed with HTML, CSS, JavaScript, and Bootstrap for cross-device compatibility.",
    image: "https://cdn.pixabay.com/photo/2023/02/15/10/19/backlinks-7791387_1280.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design"],
    github: "https://github.com/GustavoLarcoDev/casa-estilo-furniture"
  },
  {
    title: "Impulsoyz – Digital Marketing Agency",
    description: "Corporate website for a digital marketing agency, highlighting services like professional photography, video production, web development, and digital strategies. Built with HTML, CSS, JavaScript, and Bootstrap.",
    image: "https://media.istockphoto.com/id/691886452/photo/colorful-light-bulb-and-business-icons.jpg?s=2048x2048&w=is&k=20&c=qqXkmgX2ho5GGAOpdDDNQuO2DRucZvatRzPF42Rzw08=",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design"],
    github: "https://github.com/GustavoLarcoDev/impulsoyz"
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
