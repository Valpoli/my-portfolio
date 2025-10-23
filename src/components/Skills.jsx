export default function Skills() {
  const skills = {
    programming_languages: {
      name: "Programming Languages",
      related_icons: [
        { name: "Python", src: "../assets/tech_icon/python_icon.png" },
        { name: "Java", src: "../assets/tech_icon/java_icon.png" },
        { name: "C", src: "../assets/tech_icon/c_icon.svg" },
        { name: "C++", src: "../assets/tech_icon/cpp_icon.svg" },
        { name: "JavaScript", src: "../assets/tech_icon/js_icon.svg" },
      ],
    },
    frontend: {
      name: "Frontend",
      related_icons: [
        { name: "HTML", src: "../assets/tech_icon/html_icon.png" },
        { name: "CSS", src: "../assets/tech_icon/css_icon.png" },
        { name: "Tailwind", src: "../assets/tech_icon/tailwind_icon.png" },
        { name: "React", src: "../assets/tech_icon/react_icon.png" },
      ],
    },
    backend: {
      name: "Backend",
      related_icons: [
        { name: "Flask", src: "../assets/tech_icon/flask_icon.png" },
        { name: "Django", src: "../assets/tech_icon/django_icon.png" },
        { name: "Node.js", src: "../assets/tech_icon/nodejs_icon.svg" },
        { name: "SpringBoot", src: "../assets/tech_icon/springboot_icon.png" },
      ],
    },
    database: {
      name: "Database",
      related_icons: [
        { name: "MySQL", src: "../assets/tech_icon/mysql_icon.png" },
      ],
    },
    devops: {
      name: "DevOps",
      related_icons: [
        { name: "Docker", src: "../assets/tech_icon/docker_icon.png" },
      ],
    },
    cli: {
      name: "CLI",
      related_icons: [
        { name: "Git", src: "../assets/tech_icon/git_icon.png" },
      ],
    },
  };

  return (
    <div className="flex flex-wrap justify-center gap-8 bg-gray-50 text-lg">
      {Object.values(skills).map((category) => (
        <div
          key={category.name}
          className="flex flex-col items-center w-80 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg p-3"
        >
            <h3 className="font-semibold text-gray-700 mt-4 text-center">
            {category.name}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-5 mt-4 mb-4">
                {category.related_icons.map((icon, index) => (
                    <div key={index} className="relative group w-12 h12 flex items-center justify-center">
                        <img
                            src={icon.src}
                            alt={icon.name}
                        />
                        <span className="bg-gray-50 p-1 absolute bottom-[-2rem] text-black opacity-0 group-hover:opacity-100 transition-opacity">
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
