// ==============================================
// js/main.js
// Contém toda a lógica de manipulação de DOM e eventos.
// Depende do data.js para as constantes SKILLS_DATA, projectList e SECTIONS.
// ==============================================

document.addEventListener('DOMContentLoaded', () => {

    // ------------------------------------------
    // 1. Lógica do Header (Menu Mobile e Scroll Spy)
    // ------------------------------------------
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.navbar a');
    let isMenuOpen = false;

    // Função de rolagem (baseada no utils.js)
    const scrollToCenter = (id, event) => {
        if (event) {
            event.preventDefault();
        }

        const targetElement = document.getElementById(id);

        if (targetElement) {
            // Usa comportamento suave nativo
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center', 
                inline: 'start'
            });
        }
    };

    // Toggle do Menu Mobile
    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
        menuToggle.classList.toggle('open', isMenuOpen);
        navbar.classList.toggle('open', isMenuOpen);
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Fechar menu e rolar ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const id = link.getAttribute('href').substring(1);
            scrollToCenter(id, e);
            if (isMenuOpen) {
                toggleMenu(); // Fecha o menu se estiver aberto (mobile UX)
            }
        });
    });

    // Implementação do Scroll Spy (baseada no useScrollSpy.js)
    const observerOptions = {
        root: null, 
        rootMargin: '0px 0px -50% 0px', // Detecta quando o meio da seção cruza o meio da viewport
        threshold: 0.1, 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.id;
                
                // Remove a classe 'active' de todos os links
                navLinks.forEach(link => link.classList.remove('active'));

                // Adiciona a classe 'active' ao link correspondente
                const activeLink = document.querySelector(`.navbar a[href="#${activeId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    SECTIONS.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            observer.observe(section);
        }
    });

    // ------------------------------------------
    // 2. Lógica das Habilidades (Skills)
    // ------------------------------------------
    const skillsContainer = document.getElementById('skills-container');

    const renderSkills = () => {
        if (!skillsContainer) return;

        skillsContainer.innerHTML = SKILLS_DATA.map((skill, index) => `
            <div class="skill-card">
                <div class="skill-icon-wrapper" style="background-color: ${skill.color}20;">
                    <i class="${skill.iconClass}" style="color: ${skill.color};"></i>
                </div>
                <div class="skill-content">
                    <span class="skill-title">${skill.name}</span>
                    <div class="skill-bar-wrapper">
                        <div class="skill-bar-bg">
                            <span 
                                class="skill-progress-bar"
                                id="skill-bar-${index}"
                                style="width: 0%; background-color: ${skill.color}; transition: width 1.5s ease-out;"
                            >
                                <span class="skill-tooltip">${skill.percentage}%</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        // Animação das barras de progresso (substituindo o useEffect em React)
        setTimeout(() => {
            SKILLS_DATA.forEach((skill, index) => {
                const bar = document.getElementById(`skill-bar-${index}`);
                if (bar) {
                    bar.style.width = `${skill.percentage}%`;
                }
            });
        }, 100);
    };

    // ------------------------------------------
    // 3. Lógica dos Projetos (Projects)
    // ------------------------------------------
    const projectsGrid = document.getElementById('projects-grid');

    const renderProjects = () => {
        if (!projectsGrid) return;

        projectsGrid.innerHTML = projectList.map((project, index) => {
            const isFeatured = index === 0;
            const cardClass = isFeatured ? "project-card featured-card" : "project-card";
            
            const imageHtml = project.imageUrl 
                ? `<img src="${project.imageUrl}" alt="Imagem do projeto ${project.title}" style="width: 100%; height: 100%; object-fit: cover;" />`
                : `<div style="padding: 20px; font-size: 0.9em;"><p style="color: gray;">Imagem ou Snippet de Código...</p></div>`;

            const demoLinkHtml = project.link_demo 
                ? `<a href="${project.link_demo}" target="_blank" rel="noopener noreferrer" class="demo-link">Ver Protótipo</a>`
                : '';

            const techTagsHtml = project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('');

            return `
                <div class="${cardClass}"> 
                    <div class="project-image-placeholder">
                        ${imageHtml}
                    </div>
                    
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    
                    <div class="tech-tags">
                        ${techTagsHtml}
                    </div>
                    
                    <div class="project-links">
                        ${demoLinkHtml}
                        <a href="${project.link_github}" target="_blank" rel="noopener noreferrer">
                            Repositório GitHub
                        </a>
                    </div>
                </div>
            `;
        }).join('');
    };

    // ------------------------------------------
    // 4. Lógica do Contato (Formulário)
    // ------------------------------------------
    const contactForm = document.getElementById('contact-form');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };

        // Simulação do envio (como no React)
        console.log('Dados do formulário enviados:', formData);
        alert(`Mensagem de ${formData.name} enviada! Entrarei em contato em breve.`);
        
        // Limpa o formulário
        contactForm.reset();
    };

    if (contactForm) {
        contactForm.addEventListener('submit', handleSubmit);
    }

    // ------------------------------------------
    // 5. Lógica do Footer (Ano atual)
    // ------------------------------------------
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // ------------------------------------------
    // 6. Lógica do Particles.js (Hero Section)
    // ------------------------------------------
    const initParticles = (color = "#00CED1") => {
        const particlesContainer = document.getElementById('particles-js');

        // Checa se a biblioteca particlesJS e o container existem
        if (typeof particlesJS !== 'undefined' && particlesContainer) {
            // O particlesJS deve ser chamado apenas uma vez, 
            // e ele se encarrega de limpar e recriar o canvas se chamado novamente.
            
            particlesJS('particles-js', {
                "particles": {
                    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                    "color": { "value": color },
                    "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
                    "opacity": { "value": 0.5, "random": false, "anim": { "enable": false } },
                    "size": { "value": 3, "random": true, "anim": { "enable": false } },
                    "line_linked": { "enable": true, "distance": 150, "color": color, "opacity": 0.4, "width": 1 },
                    "move": { "enable": true, "speed": 2, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                    "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } }
                },
                "retina_detect": true
            });
        }
    };


    // Inicia a renderização e o particles
    renderSkills();
    renderProjects();
    initParticles("#00CED1"); // Cor definida no HeroSection do React
});