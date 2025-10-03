# 🌐 Portfólio Hub - José Tayllan Pinto Almeida

Este é o **hub central dos meus portfólios**.  
Aqui apresento minhas principais stacks, projetos e áreas de interesse como **Backend, Frontend, Automação (n8n) e Inteligência Artificial**.

---

## 🚀 Estrutura do Projeto

```
portfolio-hub/
 ├── public/                # Arquivos públicos (ex: jose.png - foto de perfil)
 ├── src/
 │   ├── components/        # Componentes reutilizáveis
 │   │   ├── Header.tsx     # Cabeçalho com foto e barra de stacks
 │   │   ├── PortfolioCard.tsx
 │   │   └── Footer.tsx
 │   ├── App.tsx            # Página principal com portfólios + skills
 │   ├── main.tsx           # Ponto de entrada React
 │   └── index.css          # Import do Tailwind
 ├── package.json
 ├── tailwind.config.cjs
 └── postcss.config.cjs
```

---

## 🛠 Tecnologias Utilizadas

- **React + Vite** → base do projeto
- **TailwindCSS** → estilização responsiva e moderna
- **React Icons** → ícones das stacks
- **Dark Mode** → suportado automaticamente pelo Tailwind

---

## 📦 Como rodar localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seuusuario/portfolio-hub.git
   cd portfolio-hub
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra no navegador:
   👉 [http://localhost:5173](http://localhost:5173)

---

## 🎨 Como trocar a foto

- Coloque sua imagem em `public/jose.png`
- Se quiser usar outro nome/arquivo, altere o caminho em `Header.tsx`:
  ```tsx
  <img src="/seufoto.jpg" alt="Minha Foto" />
  ```

---

## 💡 Como usar os ícones

Este projeto utiliza a biblioteca [React Icons](https://react-icons.github.io/react-icons/).

- Importando ícones no componente:
  ```tsx
  import { SiNodedotjs, SiReact } from "react-icons/si";

  <SiNodedotjs className="text-4xl text-green-600" />
  <SiReact className="text-4xl text-cyan-400" />
  ```

- Ícones utilizados:
  - Node.js  
  - PHP  
  - MySQL  
  - React  
  - Next.js  
  - n8n  
  - Python  
  - Tensorflow (Machine Learning)

---

## 📌 Próximos Passos

- Criar páginas individuais para cada portfólio (Node, PHP, React, Automação)  
- Adicionar seção “Sobre mim” mais detalhada  
- Deploy gratuito no **Vercel**  

---

👨‍💻 **Autor:** José Tayllan Pinto Almeida  
🔗 LinkedIn | GitHub | Portfólio Online
