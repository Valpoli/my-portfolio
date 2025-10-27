import { experiences, educations, stackColor } from "./index"

export default function Experiences(){
    const formatDate = (date) =>
        date.toLocaleDateString("en-US", { month: "short", year: "numeric" });

     const calculateDuration = (start, end) => {
        const months =
        (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth());
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        return `${years ? years + " yr " : ""}${remainingMonths ? remainingMonths + " mo" : ""}`;
    };

      return (
        <div className="flex flex-col items-center p-4 gap-8 bg-gray-50 text-gray-800 text-left">
        {/* --- Job Experiences --- */}
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
            <h2 className="text-xl font-bold mb-6 text-left">Job Experiences</h2>

            <div className="flex flex-col gap-6">
            {Object.values(experiences).map((exp, i) => (
                <div
                key={i}
                className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow duration-300 bg-white"
                >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    {exp.logo && (
                    <img
                        src={exp.logo}
                        alt={exp.enterprise}
                        className="w-16 h-16 object-contain"
                    />
                    )}
                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold">
                            {exp.enterprise} – {exp.job}
                        </h3>
                        <p className="text-gray-500 text-sm">
                            {formatDate(exp.begining)} → {formatDate(exp.end)} •{" "}
                            {calculateDuration(exp.begining, exp.end)} • {exp.contract} •{" "}
                            {exp.localisation}
                        </p>
                    </div>
                </div>

                <ul className="list-disc list-inside mt-3 text-gray-700">
                    {exp.missions.map((m, idx) => (
                    <li key={idx}>{m}</li>
                    ))}
                </ul>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {Object.entries(exp.stack).map(([type, elements]) =>
                    elements?.map((el, idx) => (
                        <span
                        key={idx}
                        className={`px-3 py-1 text-sm font-medium rounded-full ${
                            stackColor[type] || stackColor.languages
                        }`}
                        >
                        {el}
                        </span>
                    ))
                    )}
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* --- Education --- */}
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
            <h2 className="text-2xl font-bold mb-6">Education</h2>

            <div className="flex flex-col gap-6">
            {Object.values(educations).map((edu, i) => (
                <div
                key={i}
                className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow duration-300 bg-white"
                >
                    <h3 className="text-lg font-semibold">{edu.school}</h3>
                    <p className="text-gray-500 text-sm">
                        {edu.years} • {edu.location}
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                        {edu.info.map((info, idx) => (
                        <li key={idx}>{info}</li>
                        ))}
                    </ul>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}