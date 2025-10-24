// Pages
export { default as Home } from "./Home";
export { default as Experiences } from "./Experiences";
export { default as Projects } from "./Projects";
export { default as Skills } from "./Skills";

// Imports d'images
// --- Tech Icons ---
import gitIcon from "../assets/tech_icon/git_icon.png";
import pythonIcon from "../assets/tech_icon/python_icon.png";
import javaIcon from "../assets/tech_icon/java_icon.png";
import cIcon from "../assets/tech_icon/c_icon.svg";
import cppIcon from "../assets/tech_icon/cpp_icon.svg";
import jsIcon from "../assets/tech_icon/js_icon.svg";
import htmlIcon from "../assets/tech_icon/html_icon.png";
import cssIcon from "../assets/tech_icon/css_icon.png";
import tailwindIcon from "../assets/tech_icon/tailwind_icon.png";
import reactIcon from "../assets/tech_icon/react_icon.png";
import flaskIcon from "../assets/tech_icon/flask_icon.png";
import djangoIcon from "../assets/tech_icon/django_icon.png";
import nodejsIcon from "../assets/tech_icon/nodejs_icon.svg";
import springbootIcon from "../assets/tech_icon/springboot_icon.png";
import mysqlIcon from "../assets/tech_icon/mysql_icon.png";
import dockerIcon from "../assets/tech_icon/docker_icon.png";

// --- Experience Icons ---
import wobzLogo from "../assets/experience_icon/wobz.png";
import rtLogo from "../assets/experience_icon/rt.png";
import vizityLogo from "../assets/experience_icon/vizity.png";

// --- Project Pictures ---
import story from "../assets/projects/story.png";

// Background Gradients
export const bgColors = {
  Experiences: "linear-gradient(to bottom, #4281A4, #9CAFB7)",
  // Education: "linear-gradient(to bottom right, #EAD2AC, #FEFAE0)",
  Skills: "linear-gradient(to top left, #FE938C, #E6B89C)",
  Projects: "linear-gradient(to left, #E6B89C, #B6C9BB)",
};

// Experiences
export const experiences = {
  wobz: {
    enterprise: "Wobz (Exens consultant)",
    logo: wobzLogo,
    job: "Software Developer",
    missions: [
      "Development of an IoT solution in Python designed for RFID chip reading.",
      "Supervision of 30 connected devices, including user feedback, automated testing, and technical documentation.",
      "Active participation in development within an agile team (sprints, daily meetings, code reviews).",
    ],
    stack: {
      languages: ["Python", "C", "C++"],
      frameworks: ["Flask", "Arduino"],
      tools: null,
    },
    localisation: "St-Priest",
    country: "France",
    contract: "CDI",
    begining: new Date(2025, 1, 10),
    end: new Date(2025, 7, 29),
  },
  rtruck: {
    enterprise: "Renault Trucks",
    logo: rtLogo,
    job: "Software Developer",
    missions: [
      "Implementation of a RAG chatbot for a sales application.",
      "Development and deployment of a complete AI solution in Python.",
      "Technology watch and selection of AI libraries, agile project management, and knowledge sharing.",
    ],
    stack: {
      languages: ["Python"],
      frameworks: ["Streamlit"],
      tools: [
        "Microsoft Azure",
        "Azure Search Index",
        "Azure Web Application",
        "Azure Storage",
      ],
    },
    localisation: "Venissieux",
    country: "France",
    contract: "Internship",
    begining: new Date(2024, 2, 4),
    end: new Date(2024, 8, 7),
  },
  vizity: {
    enterprise: "Vizity",
    logo: vizityLogo,
    job: "Software Developer",
    missions: [
      "Design of an interactive mapping solution.",
      "Full-stack contribution to the project — from frontend to cloud infrastructure.",
      "Autonomous participation in a startup-like environment using an agile methodology.",
    ],
    stack: {
      languages: ["Python", "JavaScript"],
      frameworks: ["Flask", "React", "Material UI"],
      tools: null,
    },
    localisation: "Lyon",
    country: "France",
    contract: "Internship",
    begining: new Date(2023, 8, 11),
    end: new Date(2023, 0, 12),
  },
};

// Projects
export const projects = {
  project1: {
    title: "Ai video creator",
    description: "A fully automated system that creates complete story-based videos :"
    + " script writing, image generation, voice synthesis, subtitles, editing, and background music.",
    picture: story,
    technos: ["Python", "SQLite", "CSS", "Uv", "Ruff", "GitHub Models", "Whisper", "Coqui TTS", "Leonardo AI API"],
    gh_link: "https://github.com/Valpoli/ai-content-creator/tree/main"
  },
  project2: {
    title: "project2",
    description: "todo",
    picture: gitIcon,
    technos: ["C", "HTML", "CSS"],
    gh_link: "https://github.com/Valpoli/ai-content-creator/tree/main"
  },
  project3: {
    title: "project3",
    description: "todo",
    picture: gitIcon,
    technos: ["C", "HTML", "CSS"],
    gh_link: "https://github.com/Valpoli/ai-content-creator/tree/main"
  },
};

// Education
export const educations = {
  highschool: {
    location: "Lyon/Toulouse",
    years: "2019 - 2024",
    school: "EPITA - École pour l'informatique et les techniques avancées",
    info: [
      "Engineering Degree in Computer Science",
      "Major: SSIE – Safety and Security of Embedded Intelligence",
    ],
  },
  sup: {
    location: "Lyon",
    years: "2016 - 2019",
    school: "Lycée Edouart Herriot",
    info: ["Bac S - Mention Bien"],
  },
};

// Stack Colors
export const stackColor = {
  languages: "bg-blue-100 text-blue-700",
  frameworks: "bg-yellow-100 text-yellow-700",
  tools: "bg-orange-100 text-orange-700",
};

// Skills
export const skills = {
  programming_languages: {
    name: "Programming Languages",
    related_icons: [
      { name: "Python", src: pythonIcon },
      { name: "Java", src: javaIcon },
      { name: "C", src: cIcon },
      { name: "C++", src: cppIcon },
      { name: "JavaScript", src: jsIcon },
    ],
  },
  frontend: {
    name: "Frontend",
    related_icons: [
      { name: "HTML", src: htmlIcon },
      { name: "CSS", src: cssIcon },
      { name: "Tailwind", src: tailwindIcon },
      { name: "React", src: reactIcon },
    ],
  },
  backend: {
    name: "Backend",
    related_icons: [
      { name: "Flask", src: flaskIcon },
      { name: "Django", src: djangoIcon },
      { name: "Node.js", src: nodejsIcon },
      { name: "SpringBoot", src: springbootIcon },
    ],
  },
  database: {
    name: "Database",
    related_icons: [{ name: "MySQL", src: mysqlIcon }],
  },
  devops: {
    name: "DevOps",
    related_icons: [{ name: "Docker", src: dockerIcon }],
  },
  cli: {
    name: "CLI",
    related_icons: [{ name: "Git", src: gitIcon }],
  },
};
