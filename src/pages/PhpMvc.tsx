import React from "react";
import { FaGithub } from "react-icons/fa";

export default function PhpMvc() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Portfólio - PHP MVC</h1>
      <p className="text-indigo-600 dark:text-gray-300 mb-8">
        Sistemas web construídos em arquitetura <span className="text-indigo-600 font-semibold"> MVC usando PHP </span>e MySQL.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-indigo-100 dark:bg-indigo-800 rounded-xl shadow p-6 inline-block">
          <h2 className="text-xl font-semibold mb-2">Sistema de Gestão - Paróquia</h2>
          <p className="text-indigo-300 mb-4">
            Este é um sistema web desenvolvido em PHP puro (sem Laravel) com MySQL e Bootstrap, voltado para a gestão de informações da Paróquia Santa Rita.
            O projeto segue o padrão MVC (Model-View-Controller), com foco em organização, segurança e facilidade de manutenção.
            <li>PHP 8+ / MySQL 8+</li>
            <li>Bootstrap 5 + FontAwesome</li>
          </p>
          <a
            href="https://github.com/JoseTayllan/santa-rita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
          >
            <FaGithub /> Ver no GitHub
          </a>
        </div>
        <div className="bg-indigo-100 dark:bg-indigo-800 rounded-xl shadow p-6 inline-block">
          <h2 className="text-xl font-semibold mb-2">ChampCore - Gestão Esportiva Profissional</h2>
          <p className="text-indigo-300 mb-4">
            Sistema de gestão de campeonatos esportivos para múltiplas modalidades, desenvolvido em PHP nativo com arquitetura MVC simplificada.
          </p>
          <a
            href="https://github.com/JoseTayllan/campeonato_esportivo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
          >
            <FaGithub /> Ver no GitHub
          </a>
        </div>
        <div className="bg-indigo-100 dark:bg-indigo-800 rounded-xl shadow p-6 inline-block">
          <h2 className="text-xl font-semibold mb-2">Módulo Ping-Pong</h2>
          <p className="text-indigo-300 mb-4">
            Este repositório contém o módulo de Ping-Pong que faz parte de um sistema maior:
            Campeonato Esportivo.
            Ele foi criado para permitir a gestão de campeonatos de tênis de mesa (ping-pong) de forma integrada ao painel principal.
          </p>
          <a
            href="https://github.com/JoseTayllan/modulo-ping-pong"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
          >
            <FaGithub /> Ver no GitHub
          </a>
        </div>
        <div className="bg-indigo-100 dark:bg-indigo-800 rounded-xl shadow p-6 inline-block">
          <h2 className="text-xl font-semibold mb-2">Sistema de Reservas - Laravel</h2>
            <p className="text-indigo-300 mb-4">
            Este projeto é um sistema completo de gestão de reservas de espaços desenvolvido em <span className="font-semibold text-indigo-600">Laravel 10</span>, com autenticação, painel administrativo, exportação de dados e controle de permissões de acesso.
            </p>
            <ul className="list-disc list-inside text-indigo-300 mb-4 space-y-1">
            <li>Laravel 10.x</li>
            <li>Tailwind CSS</li>
            <li>Chart.js</li>
            <li>Laravel Excel (maatwebsite)</li>
            <li>DomPDF (barryvdh)</li>
            <li>MySQL / MariaDB</li>
            <li>Blade Components e Layouts</li>
            <li>Vite (build de assets frontend)</li>
            </ul>
          <a
            href="https://github.com/JoseTayllan/Sistema-de-Reservas---Laravel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
          >
            <FaGithub /> Ver no GitHub
          </a>
        </div>
        <div className="bg-indigo-100 dark:bg-indigo-800 rounded-xl shadow p-6 inline-block">
          <h2 className="text-xl font-semibold mb-2">Sistema de gestão de eventos faculdade</h2>
          <p className="text-indigo-300 mb-4">
            Sistema de gestão de eventos acadêmicos desenvolvido para FPM em materia de projeto integrador - (Faculdade de principios Militares) em PHP puro com MySQL, seguindo o padrão MVC.
            Permite o cadastro, edição, exclusão e visualização de eventos, além de gerenciar participantes e inscrições.
            Utiliza Bootstrap para o design responsivo e jQuery para interatividade.
          </p>
          <a
            href="https://github.com/JoseTayllan/Eventosfaculdade"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
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
            <p>PHP, SQL, Python, C#, JavaScript</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-indigo-600">Frameworks & Tecnologias</h3>
            <p>Laravel, Lumen, Composer, Blade, Bootstrap, jQuery, Ajax, Angular, React, Next.js</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-indigo-600">Conceitos</h3>
            <p>POO, MVC, CRUD, APIs REST, Testes Unitários, Desenvolvimento Web</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-indigo-600">Ferramentas</h3>
            <p>Git/GitHub, PHPStorm, XAMPP, Insomnia, MySQL, WampServer</p>
          </div>
        </div>
      </section>
    </div>
  );
}
