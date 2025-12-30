import React from "react";
import { FaGithub } from "react-icons/fa";

export default function ReactNext() {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-6 text-orange-600">IA / Machine Learning, Python / TensorFlow / Jupyter Notebook</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
                Explorando modelos e aplicações de inteligência artificial.<br />
                <span className="text-orange-500 font-semibold">Algoritmos de aprendizado de máquina</span>,&nbsp;
                <span className="text-orange-500 font-semibold">redes neurais</span>,&nbsp;
                <span className="text-orange-500 font-semibold">NLP</span>, automação com Python,&nbsp;
                <span className="text-orange-500 font-semibold">visão computacional</span>,&nbsp;
                <span className="text-orange-500 font-semibold">RNA</span>, chatbots,&nbsp;
                <span className="text-orange-500 font-semibold">LLMs</span>,&nbsp;
                <span className="text-orange-500 font-semibold">ChatGPT</span>,&nbsp;
                <span className="text-orange-500 font-semibold">Machine Learning</span> e&nbsp;
                <span className="text-orange-500 font-semibold">Data Science</span>.
            </p>

            {/* Exemplo de lista de projetos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-100 dark:bg-yellow-500 rounded-xl shadow p-6 border-l-4 border-cyan-600">
                    <h2 className="text-xl font-semibold mb-2">Perceptron Simples</h2>
                    <p className="text-gray-600 mb-4">
                        Este projeto implementa um Perceptron Simples em Python utilizando NumPy para classificar pontos no plano cartesiano.
                        O algoritmo aprende a separar os pontos com base em uma reta predefinida, ajustando seus pesos conforme a regra de atualização do Perceptron.
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/Perceptron-Simples"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-500 rounded-xl shadow p-6 border-l-4 border-cyan-600">
                    <h2 className="text-xl font-semibold mb-2">nextjs-ai-chatbot</h2>
                    <p className="text-gray-600 mb-4">
                        <li>Full-Stack AI Chatbot, Node.js + TypeScript + Next.js + AI SDK.</li>
                        <h1>Chatbot Modelo Grok, Rodando lolalmente com Ollama e PostGres.</h1>
                        Chat SDK is a free, open-source template built with Next.js and the AI SDK that helps you quickly build powerful chatbot applications.
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/nextjs-ai-chatbot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-500 rounded-xl shadow p-6 border-l-4 border-blue-600">
                    <h2 className="text-xl font-semibold mb-2 ">Visualização, criação de redes neurais</h2>
                    <p className="text-gray-600 mb-4">Este projeto utiliza automação com Python para
                        Visualização criação de redes neurais, Problema das Rainhas no mesmo Tabuleiro efunções_formalisar
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/Conceitos-de-IA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-500 rounded-xl shadow p-6 border-l-4 border-cyan-600">
                    <h2 className="text-xl font-semibold mb-2">Classificação de Dígitos - MNIST</h2>
                    <p className="text-gray-600 mb-4">
                        Este projeto implementa uma Rede Neural Artificial (RNA) para classificação da base de dados MNIST
                        (dígitos escritos à mão, de 0 a 9).
                        O modelo foi construído utilizando TensorFlow/Keras e avalia sua acurácia no conjunto de teste.
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/Mnist"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-500 rounded-xl shadow p-6 border-l-4 border-cyan-600">
                    <h2 className="text-xl font-semibold mb-2">Chatbot Institucional da FPM – Sentinela Caveira</h2>
                    <p className="text-gray-600 mb-4 space-y-2">
                        <span className="block font-semibold text-cyan-700">Assistente Virtual Inteligente para a Faculdade de Princípios Militares (FPM)</span>
                        <ul className="list-disc list-inside text-gray-500 mt-2 space-y-1">
                            <li>Automatiza o atendimento às dúvidas frequentes de alunos e interessados.</li>
                            <li>Interface acessível e personalizada via <span className="font-semibold text-cyan-600">Gradio</span>.</li>
                            <li>Permite atualização dinâmica da base de conhecimento pela secretaria.</li>
                            <li>Integra modelos de linguagem avançados (<span className="font-semibold text-cyan-600">Claude/GPT via UnifyAI</span>) com fallback inteligente.</li>
                        </ul>
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/ChatbotFPM-Gradio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-500 rounded-xl shadow p-6 border-l-4 border-cyan-600">
                    <h2 className="text-xl font-semibold mb-2"> Analise-completa-de-Dados</h2>
                    <p className="text-gray-600 mb-4">
                        Importação e analise de dados, colocando em prática aprendizado de com Python(ciência de dados )Pandas, NumPy, SciPy, Matplotlib e Seaborn.
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/JoseTayllan-Analise-completa-de-Dados"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>

                <div className="bg-yellow-100 dark:bg-yellow-500 rounded-xl shadow p-6 border-l-4 border-cyan-600">
                    <h2 className="text-xl font-semibold mb-2">Aprendizado de Maquina</h2>
                    <p className="text-gray-600 mb-4">
                        Conceitos e estudos ciência de dados com Python, utilizando bibliotecas como Pandas, NumPy, Matplotlib e Seaborn.

                    </p>
                    <a
                        href="https://github.com/JoseTayllan/Aprendizado-de-maquina.py"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>



                <div className="bg-yellow-100 dark:bg-yellow-500 rounded-xl shadow p-6 border-l-4 border-cyan-600">
                    <h2 className="text-xl font-semibold mb-2">Lista Telefonica</h2>
                    <p className="text-gray-600 mb-4">
                        Nesse desafio desenvolveremos uma agenda para salvar, editar, deletar e marcar um contato como favorito. O resultado da aplicação deve ser apresentado no terminal, assim como foi visto nas aulas com o Google Colaboratory.
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/Lista-telefonica.py"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-500 rounded-xl shadow p-6 border-l-4 border-cyan-600">
                    <h2 className="text-xl font-semibold mb-2">Automação de Processos</h2>
                    <p className="text-gray-600 mb-4">
                        Automação de processos com Python, utilizando bibliotecas como OpenCV. Geração automática de documentos de consultoria em PDF para envio ao cliente.
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/Automa-o-de-Processos.py"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>

                <div className="bg-yellow-100 dark:bg-yellow-500 rounded-xl shadow p-6 border-l-4 border-cyan-600">
                    <h2 className="text-xl font-semibold mb-2">🧠 Missionários e Canibais — Inteligência Artificial</h2>
                    <p className="text-gray-600 mb-4">
                        Implementação em Python do problema dos Missionários e Canibais, utilizando busca em largura (BFS) e modelagem de estados para resolver um desafio clássico de Inteligência Artificial e lógica computacional.
                    </p>
                    <a
                        href="https://github.com/JoseTayllan/Missionarios-e-Canibais"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                    >
                        <FaGithub /> Ver no GitHub
                    </a>
                </div>

            </div>
            <br />
            <section className="py-10 bg-white dark:bg-orange-700 rounded-2xl shadow-lg text-left max-w-3xl mx-auto px-6">
                <h2 className="text-2xl font-bold mb-6 text-yellow-500 text-center">
                    Competências Técnicas <br /> <small className="text-sm">(3 anos de experiência acadêmica e projetos pessoais)</small>

                </h2>

                <div className="space-y-6 text-green-400 dark:text-gray-600">
                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-yellow-500">Linguagens</h3>
                        <p> Python, C#, SQL </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-yellow-500">Frameworks, Tecnologias & Bibliotecas</h3>
                        <p>Pandas, NumPy, Matplotlib, Scikit-learn, NLTK</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-yellow-500">Conceitos</h3>
                        <p> Desenvolvimento Web Full Stack, SPA/SSR/SSG, APIs REST, CRUD, Mobile Development, Testes Unitários, POO</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-yellow-500">Áreas</h3>
                        <p> Data Science, Machine Learning, NLP, Automação de Processos, Chatbots
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-yellow-500">Ferramentas</h3>
                        <p> Git/GitHub, VS Code, Jupyter Notebook,  Virtualenv, Postman, Insomnia, N8N, AWS (iniciante)</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
