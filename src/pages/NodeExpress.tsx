import React from "react";
import { FaGithub } from "react-icons/fa";

export default function NodeExpress() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6 text-green-600">Portfólio - Node.js / Express</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Projetos backend escaláveis desenvolvidos com <span className="text-green-600 font-semibold">Node.js</span>, Express e Prisma.
      </p>

      {/* Exemplo de lista de projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-100 dark:bg-green-800 rounded-xl shadow p-6 border-l-4 border-green-600">
          <h2 className="text-xl font-semibold mb-2">Fundamentos Node.js</h2>
          <p className="text-gray-400 mb-4">
            Este repositório é um projeto prático para aprender os fundamentos do Node.js, a poderosa plataforma de JavaScript do lado do servidor.
          </p>
          <a
            href="https://github.com/JoseTayllan/Fundamentos-NodeJs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            <FaGithub /> Ver no GitHub
          </a>
        </div>
        <div className="bg-green-100 dark:bg-green-800 rounded-xl shadow p-6 border-l-4 border-green-600">
          <h2 className="text-xl font-semibold mb-2">Vaquejada-api</h2>
          <p className="text-gray-400 mb-4">
            Este repositório representa a API que atende o sistema de vaquejada,
            com foco em organizadores que possuem assinatura ativa e podem criar e gerenciar seus próprios eventos.
            <h1>Node.js + Express / Prisma ORM </h1>
            <h1>SQLite (desenvolvimento local)</h1>
            <h1>dotenv, cors, ts-node-dev</h1>
          </p>
          <a
            href="https://github.com/JoseTayllan/vaquejada-api"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            <FaGithub /> Ver no GitHub
          </a>
        </div>
        <div className="bg-green-100 dark:bg-green-800 rounded-xl shadow p-6 border-l-4 border-green-600">
          <h2 className="text-xl font-semibold mb-2">nextjs-ai-chatbot</h2>
          <p className="text-gray-400 mb-4">
            <li>Full-Stack AI Chatbot, Node.js + TypeScript + Next.js + AI SDK.</li>
            <h1>Chatbot Modelo Grok, Rodando lolalmente com Ollama e PostGres.</h1>
            Chat SDK is a free, open-source template built with Next.js and the AI SDK that helps you quickly build powerful chatbot applications.
          </p>
          <a
            href="https://github.com/JoseTayllan/nextjs-ai-chatbot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            <FaGithub /> Ver no GitHub
          </a>
        </div>
           <div className="bg-green-100 dark:bg-green-800 rounded-xl shadow p-6 border-l-4 border-green-600">
          <h2 className="text-xl font-semibold mb-2">EAD-backend</h2>
          <p className="text-gray-400 mb-4">
            <li>Projeto academico de EAD, Node.js + TypeScript</li>
            Adaptação de modelo já existente para senario desejado, no caso plataforma de Venda de cursos EAD.
          </p>
          <a
            href="https://github.com/JoseTayllan/EAD-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            <FaGithub /> Ver no GitHub
          </a>
        </div>
      </div>

    </div>
  );
}
