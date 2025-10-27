import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { 
    Experiences,
    Skills,
    Projects,
    bgColors
 } from "./index"

export default function Home(){
    const [activeTab, setActiveTab] = useState("Experiences");

    const renderContent = () => {
        switch(activeTab){
            case "Experiences":
                return <Experiences />
            case "Skills":
                return <Skills />
            case "Projects":
                return <Projects />
            default:
                return <Experiences />
        }
    }

    const currentBg = bgColors[activeTab] || "#ffffff";

    useEffect(() => {
        document.body.style.background = currentBg;
    }, [currentBg]);

    return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center">
      {/* --- Bandeau --- */}
      <header className="w-full bg-white shadow-md flex flex-col sm:flex-row items-center p-4 sm:p-6">
        <div className="flex items-center gap-1 flex-col">

            <h1 className="text-xl font-bold">Poli Valentin</h1>
            <p className="text-sm text-gray-600">valentin.poli7@gmail.com</p>
            <p className="text-sm text-gray-600">+33 7 81 74 76 55</p>
            <div className="flex justify-center gap-4 sm:mt-1">
              <a
                href="https://linkedin.com/in/liynkpgf9hek46mdtguibozauliaztbj2sehqbc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/Valpoli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black"
              >
                <FaGithub size={28} />
              </a>

          </div>
        </div>
        <p className="text-2xl font-bold text-center flex-1 m-1">Software Engineer Developer Java/Python/FullStack </p>
      </header>

      {/* --- Menu --- */}
      <nav className="flex gap-6 mt-6 pb-2 text-xl">
        {["Experiences", "Projects", "Skills"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 font-medium ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* --- Contenu principal --- */}
      <main className="w-full">{renderContent()}</main>
    </div>
  );
}