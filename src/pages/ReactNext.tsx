import React from "react";
import { FaGithub } from "react-icons/fa";

export default function ReactNext() {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-cyan-600">React, Next.js, Angular.</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
                Projetos Frontend desenvolvidos com <span className="text-cyan-600 font-semibold">Next.js, React, TypeScript, TailwindCSS, Angular</span>,
                Desenvolvimento Web Full Stack, SPA/SSR/SSG, APIs RESTfull.
            </p>

            {/* Exemplo de lista de projetos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-100 dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-cyan-600">
                    <h2 className="text-xl font-semibold mb-2">Sistema de Vaquejada - Painel do Organizador</h2>
                    <p className="text-gray-400 mb-4">
                        Este projeto faz parte do sistema de gerenciamento de vaquejadas, com foco no painel exclusivo para organizadores, que possuem assinatura ativa e podem criar, visualizar e administrar suas próprias vaquejadas.
                        <li> Next.js (App Router + TypeScript)
                            Tailwind CSS (layout moderno e responsivo)</li>
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/vaquejada-web-frontend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>
                <div className="bg-cyan-100 dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-cyan-600">
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
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>
                <div className="bg-green-100 dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-cyan-600">
                    <h2 className="text-xl font-semibold mb-2">DevLink Frontend</h2>
                    <p className="text-gray-400 mb-4">
                        O DevLink Frontend é a interface do usuário do sistema DevLink, responsável por permitir cadastro, login, gerenciamento de skills e projetos, geração de portfólio e currículos.
                        Este frontend foi desenvolvido em Angular 17 (standalone) e integra-se com o backend em FastAPI.
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/devlink-frontend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>
                <div className="bg-green-100 dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-cyan-600">
                    <h2 className="text-xl font-semibold mb-2">TaskFlow - Frontend</h2>
                    <p className="text-gray-400 mb-4">
                        Este é o frontend do sistema TaskFlow, uma aplicação completa para gerenciamento de tarefas, desenvolvida em React com Vite, TailwindCSS e consumo de API REST.
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/TaskFlow-frontend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>
                <div className="bg-green-100 dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-cyan-600">
                    <h2 className="text-xl font-semibold mb-2"> Portfólio Hub</h2>
                    <p className="text-gray-400 mb-4">
                        Este é o hub central dos meus portfólios.
                        Aqui apresento minhas principais stacks, projetos e áreas de interesse como Backend, Frontend, Automação (n8n) e Inteligência Artificial.
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/portfolio-hub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>

                <div className="bg-green-100 dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-cyan-600">
                    <h2 className="text-xl font-semibold mb-2">Fundamentos-react</h2>
                    <p className="text-gray-400 mb-4">
                        Aplicando conceitos de cursos Rocketseat
                        React + Vite This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

                    </p>
                    <a
                        href="https://github.com/JoseTayllan/Fundamentos-react"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>



                <div className="bg-green-100 dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-cyan-600">
                    <h2 className="text-xl font-semibold mb-2">Imheres - React Native Application</h2>
                    <p className="text-gray-400 mb-4">
                        Imheres é uma aplicação desenvolvida com React Native, com o objetivo de oferecer uma experiência de usuário fluida e interativa em dispositivos móveis. O projeto foi criado para demonstrar a implementação de
                        funcionalidades essenciais utilizando React Native com TypeScript.
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/Agenda-eventos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>
                <div className="bg-green-100 dark:bg-gray-800 rounded-xl shadow p-6 border-l-4 border-cyan-600">
                    <h2 className="text-xl font-semibold mb-2">EAD-frontend</h2>
                    <p className="text-gray-400 mb-4">
                        O EAD-frontend é uma aplicação web fictícia para venda de cursos  EAD . Modificando um sistema ja existente  Rocketseat Explorer
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/EAD-frontend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>

            </div>
            <br />
            <section className="py-10 bg-white dark:bg-red-800 rounded-2xl shadow-lg text-left max-w-3xl mx-auto px-6">
                <h2 className="text-2xl font-bold mb-6 text-cyan-600 text-center">
                    Competências Técnicas <br /> <small className="text-sm">(3 anos de experiência acadêmica e projetos pessoais)</small>

                </h2>

                <div className="space-y-6 text-green-700 dark:text-gray-400">
                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-cyan-600">Linguagens</h3>
                        <p> JavaScript, TypeScript, HTML, CSS, SQL, Python, C#</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-cyan-600">Frameworks & Tecnologias</h3>
                        <p>Node.js, Express, React, Next.js, React Native, Tailwind / Twind, Axios, Redux - (Estudando) / Zustand -(Estudando), Bootstrap, Angular</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-cyan-600">Conceitos</h3>
                        <p> Desenvolvimento Web Full Stack, SPA/SSR/SSG, APIs REST, CRUD, Mobile Development, Testes Unitários, POO</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-cyan-600">Ferramentas</h3>
                        <p> Git/GitHub, VS Code, Postman, npm/yarn, Docker (básico), MySQL / PostgreSQL, insomnia
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
