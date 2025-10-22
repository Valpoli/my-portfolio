export default function Skills() {
  const skills = {
    programming_languages: {
      name: "Programming Languages",
      related_icons: [
        { name: "Python", src: "../src/assets/tech_icon/python_icon.png" },
        { name: "Java", src: "../src/assets/tech_icon/java_icon.png" },
        { name: "C", src: "../src/assets/tech_icon/c_icon.svg" },
        { name: "C++", src: "../src/assets/tech_icon/cpp_icon.svg" },
        { name: "JavaScript", src: "../src/assets/tech_icon/js_icon.svg" },
      ],
    },
    frontend: {
      name: "Frontend",
      related_icons: [
        { name: "HTML", src: "../src/assets/tech_icon/html_icon.png" },
        { name: "CSS", src: "../src/assets/tech_icon/css_icon.png" },
        { name: "Tailwind", src: "../src/assets/tech_icon/tailwind_icon.png" },
        { name: "React", src: "../src/assets/tech_icon/react_icon.png" },
      ],
    },
    backend: {
      name: "Backend",
      related_icons: [
        { name: "Flask", src: "../src/assets/tech_icon/flask_icon.png" },
        { name: "Django", src: "../src/assets/tech_icon/django_icon.png" },
        { name: "Node.js", src: "../src/assets/tech_icon/nodejs_icon.svg" },
        { name: "Spring Boot", src: "../src/assets/tech_icon/springboot_icon.png" },
      ],
    },
    database: {
      name: "Database",
      related_icons: [
        { name: "MySQL", src: "../src/assets/tech_icon/mysql_icon.png" },
      ],
    },
    devops: {
      name: "DevOps",
      related_icons: [
        { name: "Docker", src: "../src/assets/tech_icon/docker_icon.png" },
      ],
    },
    cli: {
      name: "CLI",
      related_icons: [
        { name: "Git", src: "../src/assets/tech_icon/git_icon.png" },
      ],
    },
  };

  return (
    <div className="flex flex-wrap justify-center gap-8 bg-gray-50">
      {Object.values(skills).map((category) => (
        <div
          key={category.name}
          className="flex flex-col items-center w-52 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg"
        >
            <h3 className="text-sm font-semibold text-gray-700 mt-4 text-center">
            {category.name}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-2 mt-4 mb-4">
                {category.related_icons.map((icon, index) => (
                    <div key={index} className="relative group w-8 h-8 flex items-center justify-center">
                        <img
                            src={icon.src}
                            alt={icon.name}
                        />
                        <span className="bg-gray-50 p-1 absolute bottom-[-1.5rem] text-xs text-black opacity-0 group-hover:opacity-100 transition-opacity">
                            {icon.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
      ))}
    </div>
  );
}
