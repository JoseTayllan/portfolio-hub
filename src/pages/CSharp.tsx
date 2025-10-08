import React from "react";
import { FaGithub } from "react-icons/fa";

export default function CSharp() {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-purple-600">Portfólio - C# / .NET</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
                Projetos desenvolvidos em <span className="text-purple-600 font-semibold"> <strong>C#</strong> e <strong>.NET</strong></span>, incluindo APIs, sistemas desktop e integrações.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-purple-800 rounded-xl shadow p-6">
                    <h2 className="text-xl font-semibold mb-2">TaskFlow – Gerenciador de Tarefas</h2>
                    <p className="text-gray-400 mb-4">
                        TaskFlow é um sistema completo para gerenciamento de tarefas, com duas formas de uso:

                        API RESTful desenvolvida em ASP.NET Core
                        Aplicação Console interativa usando o mesmo banco e lógica
                        Biblioteca compartilhada (Core) com todas as entidades, banco e regras de negócio
                        Projeto ideal para portfólio profissional, focado em boas práticas, estrutura limpa e separação de responsabilidades.
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/TaskFlow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>

                <div className="bg-white dark:bg-purple-800 rounded-xl shadow p-6">
                    <h2 className="text-xl font-semibold mb-2">HPM Software - Guias Hospitalares</h2>
                    <p className="text-gray-400 mb-4">
                        HPM Software - Preenchimento de Planilha do Google Sheets a partir de PDFs de Guias Hospitalares,
                        Tecnologias Utilizadas C# (.NET Windows Forms) - Desenvolvimento da aplicação desktop.
                        iTextSharp - Biblioteca para leitura e extração de texto dos arquivos PDF.
                        Google Sheets API - Para interação com planilhas no Google Sheets.
                        Google APIs Client Library - Para autenticação e comunicação com os serviços do Google.
                        <li>API RESTful - Integração e comunicação entre os serviços</li>
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/HPM-Software"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>

                <div className="bg-white dark:bg-purple-800 rounded-xl shadow p-6">
                    <h2 className="text-xl font-semibold mb-2">Biblioteca Online API</h2>
                    <p className="text-gray-400 mb-4">
                        API REST para gerenciamento de livros, autores e empréstimos
                        Desenvolvida com ASP.NET Core 8 e Entity Framework Core, com documentação interativa via Swagger.
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/BibliotecaAPI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>


            </div>
            <br />
            <section className="py-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-left max-w-3xl mx-auto px-6">
                <h2 className="text-2xl font-bold mb-6 text-purple-600 text-center">
                    Competências Técnicas <br /> <small className="text-sm">(3 anos de experiência acadêmica e projetos pessoais)</small>

                </h2>

                <div className="space-y-6 text-purple-700 dark:text-gray-300">
                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-purple-600">Linguagens</h3>
                        <p> C#, JavaScript, PHP, SQL, Python</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-purple-600">Frameworks & Tecnologias</h3>
                        <p>.NET, ASP.NET Core, Windos Forms, N8N, AWS - (iniciante)
                            Blade, Bootstrap, Angular, React, Next.js</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-purple-600">Conceitos</h3>
                        <p>POO, MVC, CRUD, APIs REST, Testes Unitários, Machine Learning - Intermediário/Avançado, Automação de Processos.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-purple-600">Ferramentas</h3>
                        <p>Git/GitHub, MySQL, VScode, Insomnia, Docker - (Iniciante) </p>
                    </div>
                </div>
            </section>

        </div>
    );
}


