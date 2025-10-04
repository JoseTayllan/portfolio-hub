import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Python() {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-blue-600">Portfólio - Python</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
                Projetos em <span className="text-blue-600 font-semibold">Python</span> aplicados em automação, análise de dados e inteligência artificial.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-xl shadow p-6 border-l-4 border-blue-600">
                    <h2 className="text-xl font-semibold mb-2 text-blue-600">Certificados Automáticos</h2>
                    <p className="text-gray-500 mb-4">Este projeto tem como objetivo automatizar a geração de certificados personalizados para os participantes de eventos ou cursos. Ele foi desenvolvido em
                        Python e pode ser facilmente adaptado para diferentes tipos de certificados.
                        <li>Pillow (para manipulação de imagens)</li>
                        <li>ReportLab (para geração de PDFs)</li>
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/Certificados-Aut-ma-o"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900 rounded-xl shadow p-6 border-l-4 border-blue-600">
                    <h2 className="text-xl font-semibold mb-2 text-blue-600">Aplicativo de Cadastro de Clientes - PYSQL</h2>
                    <p className="text-gray-500 mb-4">Sistema simples de cadastro de clientes com interface gráfica, desenvolvido em Python com tkinter e persistência em banco de dados SQLite

                    </p>
                    <a
                        href="https://github.com/JoseTayllan/Cadastro-de-Clientes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900 rounded-xl shadow p-6 border-l-4 border-blue-600">
                    <h2 className="text-xl font-semibold mb-2 text-blue-600">Automação de Cadastro de Alunos com PyAutoGUI</h2>
                    <p className="text-gray-500 mb-4">Este projeto utiliza automação com Python e a biblioteca
                        PyAutoGUI para preencher automaticamente formulários web a partir de uma base de dados em CSV. A automação simula ações humanas como clique, escrita e rolagem, acessando uma página da web para cadastrar alunos.
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/automacao-cadastro-alunos-pyautogui"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>

                   <div className="bg-blue-100 dark:bg-blue-900 rounded-xl shadow p-6 border-l-4 border-blue-600">
                    <h2 className="text-xl font-semibold mb-2 text-blue-600">Visualização, criação de redes neurais</h2>
                    <p className="text-gray-500 mb-4">Este projeto utiliza automação com Python para
                        Visualização criação de redes neurais, Problema das Rainhas no mesmo Tabuleiro efunções_formalisar
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/Conceitos-de-IA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>

            </div>
        </div>
    );
}
