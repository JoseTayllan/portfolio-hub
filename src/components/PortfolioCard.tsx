import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  link: string;     // rota interna do site
  github?: string;  // link externo para o GitHub
}

export default function PortfolioCard({ title, description, link, github }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:scale-105 transform transition duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2 text-indigo-600">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      </div>
      <div className="flex gap-3 mt-4 justify-center">
        {/* Botão para rota interna */}
        <Link
          to={link}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Ver Portfólio
        </Link>

        {/* Botão para GitHub */}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </a>
        )}
      </div>
    </div>
  );
}
