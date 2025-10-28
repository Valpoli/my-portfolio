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
import pytestIcon from "../assets/tech_icon/pytest_icon.svg";
import muiIcon from "../assets/tech_icon/mui_icon.svg";
import formikIcon from "../assets/tech_icon/formik_icon.png";
import vueIcon from "../assets/tech_icon/vue_icon.svg";
import viteIcon from "../assets/tech_icon/vite_icon.svg";
import streamlitIcon from "../assets/tech_icon/streamlit_icon.svg";
import nifiIcon from "../assets/tech_icon/nifi_icon.svg";
import activemqIcon from "../assets/tech_icon/activemq_icon.svg";
import mqttIcon from "../assets/tech_icon/mqtt_icon.svg";
import nginxIcon from "../assets/tech_icon/nginx_icon.svg";
import noderedIcon from "../assets/tech_icon/nodered_icon.svg";
import sqliteIcon from "../assets/tech_icon/sqlite_icon.svg";
import qdrantIcon from "../assets/tech_icon/qdrant_icon.png";
import sqlIcon from "../assets/tech_icon/sql_icon.png";
import mavenIcon from "../assets/tech_icon/maven_icon.svg";
import npmIcon from "../assets/tech_icon/npm_icon.svg";
import azureIcon from "../assets/tech_icon/azure_icon.png";
import azurewebIcon from "../assets/tech_icon/azureweb_icon.png";
import azurestorageIcon from "../assets/tech_icon/azurestorage_icon.png";
import azuresearchIcon from "../assets/tech_icon/azuresearch_icon.png";
import arduinoIcon from "../assets/tech_icon/arduino_icon.png";
import esp32Icon from "../assets/tech_icon/esp32_icon.svg";
import raspIcon from "../assets/tech_icon/rasp_icon.svg";
import junitIcon from "../assets/tech_icon/junit_icon.png";
import langchainIcon from "../assets/tech_icon/langchain_icon.png";
import ollamaIcon from "../assets/tech_icon/ollama_icon.png";
import githubmodelsIcon from "../assets/tech_icon/githubmodels_icon.png";
import whisperIcon from "../assets/tech_icon/whisper_icon.png";
import coquiIcon from "../assets/tech_icon/coqui_icon.png";
import leonardoIcon from "../assets/tech_icon/leonardo_icon.jpg";
import uvIcon from "../assets/tech_icon/uv_icon.png";
import ruffIcon from "../assets/tech_icon/ruff_icon.svg";
import clineIcon from "../assets/tech_icon/cline_icon.png";

// --- Experience Icons ---
import wobzLogo from "../assets/experience_icon/wobz.png";
import rtLogo from "../assets/experience_icon/rt.png";
import vizityLogo from "../assets/experience_icon/vizity.png";

// --- Project Pictures ---
import story from "../assets/projects/story.png";
import chat from "../assets/projects/chat.png";
import iot_dashboard from "../assets/projects/iot_dashboard.png";
import telematic from "../assets/projects/telematic.png";

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
      tools: ["RaspberryPi"],
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
      languages: ["Java", "JavaScript"],
      frameworks: ["SpringBoot", "React", "Material UI"],
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
    title: "rag-templates",
    description: "This project provide a base to build custom chatbots capable of"
    + "answering questions based on your own documents and the page where the information was found",
    picture: chat,
    technos: ["Python", "Streamlit", "langchain", "Ollama", "Github Models", "Qdrant", "docker", "Uv", "Ruff"],
    gh_link: "https://github.com/Valpoli/rag-templates"
  },
  project2: {
    title: "RWC Telematics Platform",
    description: "A web application capable of displaying, in real time, the number of passengers across different"
    + " public transport modes in Toulouse, in order to monitor their usage during the 2023 Rugby World Cup.",
    picture: telematic,
    technos: ["Java", "JavaScript", "Spring Boot", "Python", "Vue.js", "Vite", "Node.js", "Apache NiFi", "ActiveMQ",
     "MQTT", "SQL", "Nginx", "Docker", "Maven", "npm"],
    gh_link: "https://github.com/Valpoli/rwc-telematics-platform"
  },
  project3: {
    title: "Ai video creator",
    description: "A fully automated system that creates complete story-based videos :"
    + " script writing, image generation, voice synthesis, subtitles, editing, and background music.",
    picture: story,
    technos: ["Python", "SQLite", "CSS", "Uv", "Ruff", "GitHub Models", "Whisper", "Coqui TTS", "Leonardo AI API"],
    gh_link: "https://github.com/Valpoli/ai-content-creator"
  },
  project4: {
    title: "Smart Env",
    description: "An IoT-Based Real-Time Environment Controller. Capable of monitoring and regulating the"
    + " environmental conditions of a room (temperature, humidity, and luminosity)",
    picture: iot_dashboard,
    technos: ["Java", "C++", "Arduino", "JavaScript", "Node-RED", "SprintBoot", "Maven", "JUnit", "Esp32"],
    gh_link: "https://github.com/Valpoli/smart-env"
  }
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
      { name: "React", src: reactIcon },
      { name: "Material UI", src: muiIcon },
      { name: "Formik", src: formikIcon },
      { name: "Vue.js", src: vueIcon },
      { name: "Vite", src: viteIcon },
      { name: "Tailwind", src: tailwindIcon },
      { name: "Streamlit", src: streamlitIcon },
    ],
  },

  backend: {
    name: "Backend",
    related_icons: [
      { name: "Flask", src: flaskIcon },
      { name: "Django", src: djangoIcon },
      { name: "Spring Boot", src: springbootIcon },
      { name: "Node.js", src: nodejsIcon },
      { name: "Apache NiFi", src: nifiIcon },
      { name: "ActiveMQ", src: activemqIcon },
      { name: "MQTT", src: mqttIcon },
      { name: "Nginx", src: nginxIcon },
      { name: "Node-RED", src: noderedIcon },
    ],
  },

  ai_tools: {
    name: "AI Tools & Frameworks",
    related_icons: [
      { name: "LangChain", src: langchainIcon },
      { name: "Ollama", src: ollamaIcon },
      { name: "GitHubModels", src: githubmodelsIcon },
      { name: "Whisper", src: whisperIcon },
      { name: "CoquiTTS", src: coquiIcon },
      { name: "LeonardoAI", src: leonardoIcon },
      { name: "Cline", src: clineIcon }
    ],
  },

  database: {
    name: "Database",
    related_icons: [
      { name: "MySQL", src: mysqlIcon },
      { name: "SQLite", src: sqliteIcon },
      { name: "Qdrant", src: qdrantIcon },
      { name: "SQL", src: sqlIcon }
    ],
  },

  devops: {
    name: "DevOps",
    related_icons: [
      { name: "Docker", src: dockerIcon },
      { name: "Maven", src: mavenIcon },
      { name: "npm", src: npmIcon },
      { name: "Nginx", src: nginxIcon },
    ],
  },

  cloud: {
    name: "Cloud & Azure",
    related_icons: [
      { name: "Microsoft Azure", src: azureIcon },
      { name: "Azure Web App", src: azurewebIcon },
      { name: "Azure Storage", src: azurestorageIcon },
      { name: "Azure Search Index", src: azuresearchIcon },
    ],
  },

  hardware: {
    name: "Hardware & IoT",
    related_icons: [
      { name: "Arduino", src: arduinoIcon },
      { name: "ESP32", src: esp32Icon },
      { name: "RaspberryPi", src: raspIcon}
    ],
  },

  testing: {
    name: "Testing",
    related_icons: [
      { name: "JUnit", src: junitIcon },
      { name: "pytest", src: pytestIcon },
    ],
  },

  cli_tools: {
    name: "CLI & Code Quality",
    related_icons: [
      { name: "Git", src: gitIcon },
      { name: "Uv", src: uvIcon },
      { name: "Ruff", src: ruffIcon },
    ],
  },
};

