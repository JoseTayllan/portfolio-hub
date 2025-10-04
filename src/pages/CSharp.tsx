import React from "react";
import { FaGithub } from "react-icons/fa";

export default function CSharp() {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-6">Portfólio - C# / .NET</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
                Projetos desenvolvidos em <strong>C#</strong> e <strong>.NET</strong>, incluindo APIs, sistemas desktop e integrações.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
                    <h2 className="text-xl font-semibold mb-2">TaskFlow – Gerenciador de Tarefas</h2>
                    <p className="text-gray-500 mb-4">
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
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
                    <h2 className="text-xl font-semibold mb-2">HPM Software - Guias Hospitalares</h2>
                    <p className="text-gray-500 mb-4">
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
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}
