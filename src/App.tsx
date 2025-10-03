import React from "react";
import Header from "./components/Header";
import PortfolioCard from "./components/PortfolioCard";
import Footer from "./components/Footer";

// Ícones
import {
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiN8N,
  SiPython,
  SiTensorflow,
} from "react-icons/si";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          Meus Portfólios
        </h2>

        {/* Grid de Portfólios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <PortfolioCard
            title="Node.js / Express"
            description="Projetos de APIs e sistemas backend escaláveis."
            link="#"
          />
          <PortfolioCard
            title="PHP MVC"
            description="Sistemas web estruturados com PHP e MySQL."
            link="#"
          />
          <PortfolioCard
            title="React / Next.js"
            description="Interfaces modernas e performáticas."
            link="#"
          />
          <PortfolioCard
            title="Automação (n8n / Scripts)"
            description="Fluxos automatizados e integrações inteligentes."
            link="#"
          />
        </div>

        {/* Nova Seção de Skills */}
        <section className="py-12 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Minhas Skills</h2>
            <p className="mb-10 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Embora meu foco principal seja em{" "}
              <span className="font-semibold">Backend</span>, como desenvolvedor
              júnior estou aberto a atuar em diferentes áreas do
              desenvolvimento: frontend, automação, inteligência artificial e
              muito mais.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow hover:scale-105 transition flex flex-col items-center">
                <SiNodedotjs className="text-4xl text-green-600 mb-2" />
                <p className="font-semibold">Node.js</p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow hover:scale-105 transition flex flex-col items-center">
                <SiPhp className="text-4xl text-indigo-600 mb-2" />
                <p className="font-semibold">PHP</p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow hover:scale-105 transition flex flex-col items-center">
                <SiMysql className="text-4xl text-blue-500 mb-2" />
                <p className="font-semibold">MySQL</p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow hover:scale-105 transition flex flex-col items-center">
                <SiReact className="text-4xl text-cyan-400 mb-2" />
                <p className="font-semibold">React</p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow hover:scale-105 transition flex flex-col items-center">
                <SiNextdotjs className="text-4xl text-gray-700 dark:text-white mb-2" />
                <p className="font-semibold">Next.js</p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow hover:scale-105 transition flex flex-col items-center">
                <SiN8N className="text-4xl text-pink-500 mb-2" />
                <p className="font-semibold">n8n</p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow hover:scale-105 transition flex flex-col items-center">
                <SiPython className="text-4xl text-yellow-500 mb-2" />
                <p className="font-semibold">Python</p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow hover:scale-105 transition flex flex-col items-center">
                <SiTensorflow className="text-4xl text-orange-500 mb-2" />
                <p className="font-semibold">Machine Learning</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
