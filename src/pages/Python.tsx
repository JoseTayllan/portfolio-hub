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
                    <h2 className="text-xl font-semibold mb-2 ">Certificados Automáticos</h2>
                    <p className="text-gray-400 mb-4">Este projeto tem como objetivo automatizar a geração de certificados personalizados para os participantes de eventos ou cursos. Ele foi desenvolvido em
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
                    <h2 className="text-xl font-semibold mb-2 ">Aplicativo de Cadastro de Clientes - PYSQL</h2>
                    <p className="text-gray-400 mb-4">Sistema simples de cadastro de clientes com interface gráfica, desenvolvido em Python com tkinter e persistência em banco de dados SQLite

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
                    <h2 className="text-xl font-semibold mb-2 ">Automação de Cadastro de Alunos com PyAutoGUI</h2>
                    <p className="text-gray-400 mb-4">Este projeto utiliza automação com Python e a biblioteca
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
                    <h2 className="text-xl font-semibold mb-2 ">Visualização, criação de redes neurais</h2>
                    <p className="text-gray-400 mb-4">Este projeto utiliza automação com Python para
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
                <div className="bg-blue-100 dark:bg-blue-900 rounded-xl shadow p-6 border-l-4 border-blue-600">
                    <h2 className="text-xl font-semibold mb-2 ">Sistema Bancário em Python (CLI)</h2>
                    <p className="text-gray-400 mb-4">
                        Projeto desenvolvido como parte do Desafio do Módulo 2 – Bootcamp Luizalabs | Back-end com Python (DIO). O objetivo é aplicar conceitos fundamentais de Python,
                        lógica de programação e regras de negócio, simulando um sistema bancário simples executado via terminal (CLI).
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/Sistema-Bancario-CLI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>

                <div className="bg-blue-100 dark:bg-blue-900 rounded-xl shadow p-6 border-l-4 border-blue-600">
                    <h2 className="text-xl font-semibold mb-2 ">Sistema Bancário em Python (CLI) - V2</h2>
                    <p className="text-gray-400 mb-4">
                        O sistema simula operações básicas de um banco por meio de uma interface de linha de comando (CLI), permitindo cadastro de usuários, criação de contas, depósitos, saques, emissão de extrato e registro de logs das operações.
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/Sistema-Bancario-melhorado-CLI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>

                <div className="bg-blue-100 dark:bg-blue-900 rounded-xl shadow p-6 border-l-4 border-blue-600">
                    <h2 className="text-xl font-semibold mb-2 ">Sistema_Bancario-POO - V3</h2>
                    <p className="text-gray-400 mb-4">
                        Projeto desenvolvido com foco educacional para aplicar conceitos de Programação Orientada a Objetos a partir de um Diagrama UML.

                        O sistema simula operações bancárias como: Criação de usuários, Criação de contas correntes, Depósitos, Saques, Extrato e Histórico de transações.

                    </p>
                    <a
                        href="https://github.com/JoseTayllan/Sistema_Bancario-POO"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>

            </div>
            <br />
            <section className="py-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-left max-w-3xl mx-auto px-6">
                <h2 className="text-2xl font-bold mb-6 text-indigo-600 text-center">
                    Competências Técnicas <br /> <small className="text-sm">(3 anos de experiência acadêmica e projetos pessoais)</small>

                </h2>

                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-indigo-600">Linguagens</h3>
                        <p>Python, SQL, C#, PHP, JavaScript</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-indigo-600">Frameworks, Tecnologias  & Bibliotecas</h3>
                        <p>Flask, FastAPI, Tkinter, PyQt, Requests, SQLAlchemy, OpenCV, Pillow, PyAutoGUI</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-indigo-600">Conceitos</h3>
                        <p>POO, MVC, CRUD, APIs REST, Testes Unitários, Desenvolvimento Web, Automação de Processos</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-indigo-600">Ferramentas</h3>
                        <p>Git/GitHub, Insomnia, MySQL, VS Code, PyCharm, Virtualenv</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
