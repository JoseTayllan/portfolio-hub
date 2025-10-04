import React from "react";
import { FaGithub } from "react-icons/fa";

export default function PhpMvc() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">Portfólio - PHP MVC</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Sistemas web construídos em arquitetura MVC usando PHP e MySQL.
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 inline-block">
        <h2 className="text-xl font-semibold mb-2">Sistema de Paróquia</h2>
        <p className="text-gray-500 mb-4">
          Projeto de gestão comunitária com PHP puro e MySQL.
        </p>
        <a
          href="https://github.com/seuusuario/parish-mvc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
        >
          <FaGithub /> Ver no GitHub
        </a>
      </div>
    </div>
  );
}
