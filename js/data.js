// ==============================================
// js/data.js
// Contém os dados estruturados do portfólio.
// ==============================================

const projectList = [
    {
      id: 1,
      title: "Chat FalaAi",
      description: "O FalaAí é um chatbot desenvolvido em Python, utilizando a API do Google. O chat está em versão BETA, mas já funcional para conversação.",
      technologies: ["Python", "Flask", "MySQL", "Argon2", "BootStrap"],
      imageUrl: "images/img_projects/falaai.png", 
      link_github: "https://github.com/devwarly/Chatbot-API-Python.git", 
      link_demo:"https://falaai.onrender.com/"
    },
    {
      id: 2,
      title: "Site da turma ADS",
      description: "Desenvolvi o site da minha turma de Análise e Desenvolvimento de Sistemas com intuíto de postar notícias sobre o curso e atlética do curso e també informações sobro curso em geral.",
      technologies: ["Html", "Css", "Java", "SpringBoot", "Jwt", "API Rest"],
      imageUrl: "images/img_projects/site_ads.png",
      link_github: "https://github.com/devwarly/ads-news-project.git",
      link_demo: "https://devwarly.github.io/ads-news-project/"
    }
];

const SKILLS_DATA = [
    { name: "Python", percentage: 40, iconClass: "fab fa-python", color: "#3776AB" },
    { name: "Java", percentage: 60, iconClass: "fab fa-java", color: "#ff570fff" },
    { name: "HTML5", percentage: 90, iconClass: "fab fa-html5", color: "#E34F26" },
    { name: "CSS3", percentage: 85, iconClass: "fab fa-css3-alt", color: "#1572B6" },
    { name: "JavaScript", percentage: 50, iconClass: "fab fa-js-square", color: "#F7DF1E" },
    { name: "React", percentage: 35, iconClass: "fab fa-react", color: "#61DAFB" },
    { name: "Node.js", percentage: 30, iconClass: "fab fa-node-js", color: "#339933" },
    { name: "Bootstrap", percentage: 70, iconClass: "fab fa-bootstrap", color: "#7952B3" },
    { name: "Git", percentage: 50, iconClass: "fab fa-git-alt", color: "#F05032" },
    { name: "Docker", percentage: 30, iconClass: "fab fa-docker", color: "#0fff5fff" },
    { name: "PostgresSQL / MySQL", percentage: 60, iconClass: "fa-solid fa-database", color: "#0f77ffff" },
];

const SECTIONS = ['home', 'sobre', 'habilidades', 'projetos', 'contato'];