import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { 
    Experiences,
    Education,
    Skills,
    Projects
 } from "./index"

export default function Home(){
    const [activeTab, setActiveTab] = useState("Experiences");

    const renderContent = () => {
        switch(activeTab){
            case "Experiences":
                return <Experiences />
            case "Education":
                return <Education />
            case "Skills":
                return <Skills />
            case "Projects":
                return <Projects />
            default:
                return <Experiences />
        }
    }

    return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center">
      {/* --- Bandeau --- */}
      <header className="w-full bg-white shadow-md flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-xl font-bold">Poli Valentin</h1>
            <p className="text-sm text-gray-600">valentin.poli7@gmail.com</p>
            <p className="text-sm text-gray-600">+33 7 81 74 76 55</p>
          </div>
        </div>
        <div className="flex gap-4 mt-4 sm:mt-0">
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
      </header>

      {/* --- Menu --- */}
      <nav className="flex gap-6 mt-6 border-b pb-2">
        {["Experiences", "Projects", "Skills", "Education"].map((tab) => (
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
      <main className="w-full max-w-4xl mt-8 p-4">{renderContent()}</main>
    </div>
  );
}