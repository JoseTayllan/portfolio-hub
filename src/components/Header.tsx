import React from "react";
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
} from "react-icons/si";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-12 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-6 text-center md:text-left">

        {/* Foto de perfil */}
        <div className="flex-shrink-0">
          <img
            src="/jose.png"  // ✅ corrigido
            alt="Foto de José Tayllan"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>

        {/* Texto principal */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            José Tayllan Pinto Almeida
          </h1>
          <p className="mt-2 text-sm md:text-lg opacity-80 leading-relaxed max-w-xl">
            Desenvolvedor <span className="font-semibold">Backend</span> | Especialista em <span className="font-semibold">Integração de Dados & IA</span>.<br /><br />

            Desenvolvedor com foco em soluções de alta performance utilizando <span className="font-semibold">.NET (C#)</span> e <span className="font-semibold">Python</span>.
            Especialista na construção de arquiteturas escaláveis e na implementação de modelos de
            <span className="font-semibold"> Machine Learning</span> para automação de processos de negócio.<br /><br />

            Com sólido domínio de <span className="font-semibold">SQL</span> e <span className="font-semibold">NoSQL</span>, atuo na criação de
            <span className="font-semibold"> APIs robustas</span> e possuo vivência em ambientes
            <span className="font-semibold"> Full Stack (React / Next.js)</span>.
            Diferencio-me pela capacidade de traduzir requisitos técnicos em produtos funcionais, unindo o rigor analítico da minha formação em
            <span className="font-semibold">Inteligência Artificial</span> com as melhores práticas de desenvolvimento de software.<br /><br />

            Pronto para atuar em times ágeis e contribuir imediatamente para a escalabilidade de produtos digitais.
          </p>
          {/* Barra de stacks */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 text-3xl">
            <SiNodedotjs className="text-green-500" title="Node.js" />
            <SiPhp className="text-indigo-300" title="PHP" />
            <SiMysql className="text-blue-400" title="MySQL" />
            <SiReact className="text-cyan-400" title="React" />
            <SiNextdotjs className="text-white dark:text-gray-300" title="Next.js" />
            <SiN8N className="text-pink-400" title="n8n" />
            <SiPython className="text-yellow-400" title="Python" />
            <SiTensorflow className="text-orange-400" title="Machine Learning" />
            <SiSharp className="text-purple-400" title="C# .NET" />
          </div>
        </div>
      </div>
    </header>
  );
}
