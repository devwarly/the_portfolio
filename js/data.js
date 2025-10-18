// ==============================================
// js/data.js
// Contém os dados estruturados do portfólio.
// ==============================================

const projectList = [
    {
      id: 1,
      title: "E-commerce API",
      description: "API RESTful construída com Node.js e Express, utilizando PostgreSQL para gerenciamento de pedidos, estoque e autenticação de usuários. Serviço dedicado à geração e validação de tokens, utilizando Redis para cache de sessões.",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      imageUrl: "images/img_projects/falaai.png", 
      link_github: "#", 
      link_demo:"https://falaai.onrender.com/"
    },
    {
      id: 2,
      title: "Sistema de Gerenciamento de Tarefas",
      description: "Aplicação full-stack para organizar tarefas diárias. Front-end em React e API em Python (Django). Serviço dedicado à geração e validação de tokens, utilizando Redis para cache de sessões.",
      technologies: ["React", "Python", "Django", "SQLite", "Hooks"],
      imageUrl: "images/placeholder.jpg",
      link_github: "#",
      link_demo: "#"
    },
    {
      id: 3,
      title: "Microserviço de Autenticação",
      description: "Serviço dedicado à geração e validação de tokens, utilizando Redis para cache de sessões. Serviço dedicado à geração e validação de tokens, utilizando Redis para cache de sessões.",
      technologies: ["Node.js", "Redis", "Docker", "Typescript"],
      imageUrl: "images/placeholder.jpg",
      link_github: "#",
      link_demo: null
    },
];

const SKILLS_DATA = [
    { name: "HTML5", percentage: 90, iconClass: "fab fa-html5", color: "#E34F26" },
    { name: "CSS3", percentage: 85, iconClass: "fab fa-css3-alt", color: "#1572B6" },
    { name: "JavaScript", percentage: 80, iconClass: "fab fa-js-square", color: "#F7DF1E" },
    { name: "React", percentage: 75, iconClass: "fab fa-react", color: "#61DAFB" },
    { name: "Node.js", percentage: 70, iconClass: "fab fa-node-js", color: "#339933" },
    { name: "Sass/SCSS", percentage: 85, iconClass: "fab fa-sass", color: "#CC6699" },
    { name: "Bootstrap", percentage: 70, iconClass: "fab fa-bootstrap", color: "#7952B3" },
    { name: "Git", percentage: 80, iconClass: "fab fa-git-alt", color: "#F05032" },
    { name: "Python", percentage: 60, iconClass: "fab fa-python", color: "#3776AB" },
    { name: "Java", percentage: 80, iconClass: "fab fa-java", color: "#ff570fff" },
    { name: "Docker", percentage: 30, iconClass: "fab fa-docker", color: "#0fff5fff" },
];

const SECTIONS = ['home', 'sobre', 'habilidades', 'projetos', 'contato'];