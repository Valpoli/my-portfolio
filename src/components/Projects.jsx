import { projects } from "./index"

export default function Projects(){
    return (
    <div className="flex flex-wrap justify-center gap-8 bg-gray-200 text-lg p-4">
      {Object.values(projects).map((project, index) => (
         <a
          key={index}
          href={project.gh_link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mx-2 bg-white shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={project.picture}
            alt={project.title}
            className="w-full h-40 object-cover"
          />

          <div className="p-4 flex text-xl flex-col gap-2">
            <h2 className="font-semibold text-gray-800 text-center break-words whitespace-normal">
              {project.title}
            </h2>

            <p className="text-gray-600 text-center break-words whitespace-normal">
              {project.description}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {project.technos.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-600 font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}