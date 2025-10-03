import React from "react";

interface Props {
  title: string;
  description: string;
  link: string;
}

export default function PortfolioCard({ title, description, link }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:scale-105 transform transition duration-300">
      <h3 className="text-xl font-semibold mb-2 text-indigo-600">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <a
        href={link}
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Ver Portfólio
      </a>
    </div>
  );
}
