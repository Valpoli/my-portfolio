import { skills } from "./index"

export default function Skills() {
  return (
    <div className="flex flex-wrap justify-center gap-8 bg-gray-50 text-lg p-4">
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
                        <span className="bg-gray-50 p-1 absolute bottom-[-3rem] text-black opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
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
