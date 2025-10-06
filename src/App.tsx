import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
  SiSharp,
  SiLaravel,
  SiPostgresql,
  SiReacthookform, // só se quiser usar hook form, ignora se for React Native abaixo
  SiTypescript,
  SiJavascript,
  SiDotnet,
} from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
// Páginas
import NodeExpress from "./pages/NodeExpress";
import CSharp from "./pages/CSharp";
import Python from "./pages/Python";
import PhpMvc from "./pages/PhpMvc";
import ReactNext from "./pages/ReactNext";
//import Automacao from "./pages/Automacao";
import IaMl from "./pages/IaMl";
import Root from './../node_modules/react-router/dist/production/index-react-server-client-DKvU8YRr.d';

function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Meus Portfólios</h2>

      {/* Grid de Portfólios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
         <PortfolioCard
          title="C# / .NET"
          description="Criação de APIs e aplicações backend em .NET, aplicando princípios SOLID, autenticação segura e integração eficiente com SQL Server, garantindo performance e escalabilidade."
          link="/CSharp"
        />
         <PortfolioCard
          title="Python / Django/ fastAPI"
          description="Desenvolvimento de APIs e sistemas backend escaláveis com Flask e FastAPI, integrados a bancos de dados relacionais e NoSQL, sempre com foco em segurança e boas práticas.
          Automação, análise de dados e ML."
          link="/python"
        />
        <PortfolioCard
          title="Node.js / Express / Prisma / JWT "
          description="Projetos de APIs e sistemas backend escaláveis, com foco em performace e segurança. "
          link="/node"
        />
        <PortfolioCard
          title="PHP MVC"
          description="Sistemas web estruturados com PHP e MySQL."
          link="/php"
        />
        <PortfolioCard
          title="React / Next.js"
          description="Interfaces modernas e performáticas."
          link="/react"
        />
         <PortfolioCard
          title="IA / Machine Learning, Python / TensorFlow / Jupyter Notebook"
          description="Explorando modelos e inteligência artificial aplicada."
          link="/ia"
        />
        <PortfolioCard
          title="Automação (n8n / Scripts)"
          description="Fluxos automatizados e integrações inteligentes."
          link="/automacao"
        />
       
      </div>

      {/* Seção de Skills */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Minhas Skills</h2>
          <p className="mb-10 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Embora meu foco principal seja em <span className="font-semibold">Backend</span>,
            como desenvolvedor júnior estou aberto a atuar em diferentes áreas do
            desenvolvimento: frontend, automação, inteligência artificial e muito mais.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow flex flex-col items-center">
              <SiSharp className="text-4xl" style={{ color: "#512BD4" }} />
              <p className="font-semibold">C# </p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow flex flex-col items-center">
              <SiPython className="text-4xl text-yellow-500 mb-2" />
              <p className="font-semibold">Python</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow flex flex-col items-center">
              <SiDotnet className="text-4xl" style={{ color: "#512BD4" }} />
              <p className="text-sm mt-1">.NET</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow flex flex-col items-center">
              <SiNodedotjs className="text-4xl text-green-600 mb-2" />
              <p className="font-semibold">Node.js</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow flex flex-col items-center">
              <SiPhp className="text-4xl text-indigo-600 mb-2" />
              <p className="font-semibold">PHP</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow flex flex-col items-center">
              <SiMysql className="text-4xl text-blue-500 mb-2" />
              <p className="font-semibold">MySQL</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow flex flex-col items-center">
              <SiReact className="text-4xl text-cyan-400 mb-2" />
              <p className="font-semibold">React</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow flex flex-col items-center">
              <SiNextdotjs className="text-4xl text-gray-700 dark:text-white mb-2" />
              <p className="font-semibold">Next.js</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow flex flex-col items-center">
              <SiN8N className="text-4xl text-pink-500 mb-2" />
              <p className="font-semibold">n8n</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow flex flex-col items-center">
              <SiTensorflow className="text-4xl text-orange-500 mb-2" />
              <p className="font-semibold">Machine Learning</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow flex flex-col items-center">
              <SiLaravel className="text-4xl" style={{ color: "#FF2D20" }} />
              <p className="font-semibold">Laravel</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow flex flex-col items-center">
              <SiPostgresql className="text-4xl" style={{ color: "#4169E1" }} />
              <p className="text-sm mt-1">PostgreSQL</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow flex flex-col items-center">
              <SiReact className="text-4xl" style={{ color: "#61DAFB" }} />
              <p className="text-sm mt-1">React.js</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow flex flex-col items-center">
              <SiTypescript className="text-4xl" style={{ color: "#3178C6" }} />
              <p className="text-sm mt-1">TypeScript</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow flex flex-col items-center">
              <SiJavascript className="text-4xl" style={{ color: "#F7DF1E" }} />
              <p className="text-sm mt-1">JavaScript</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow flex flex-col items-center">
              <div className="flex items-center gap-2">
                <SiReact style={{ color: "#61DAFB" }} className="text-3xl" />
                <FaMobileAlt className="text-gray-500 text-xl" />
              </div>
              <p className="text-sm mt-1">React Native</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/node" element={<NodeExpress />} />
          <Route path="/csharp" element={<CSharp />} />
          <Route path="/python" element={<Python />} />
          <Route path="/php" element={<PhpMvc />} />
          <Route path="/react" element={<ReactNext />} />
          <Route path="/ia" element={<IaMl />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
 
  //<Route path="/react" element={<ReactNext />} />
  //<Route path="/automacao" element={<Automacao />} />
  // 
}
