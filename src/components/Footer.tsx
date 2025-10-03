import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto text-center space-y-2">
        <p>© 2025 José Tayllan Pinto Almeida</p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/" target="_blank" className="hover:text-white">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" className="hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:seuemail@email.com" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
