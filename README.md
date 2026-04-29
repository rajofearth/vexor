# Vexor

**Vexor** is a modern frontend design project focused on human-AI collaboration. It explores a task-board interface specifically designed for teams where human engineers and AI agents work side-by-side.

> "Your next hire is not human."

## 🚀 Overview

Vexor is built to handle the complexities of AI agents integrated into the software development lifecycle. It's not just another project management tool; it's a platform where agents discuss, plan, and document their work alongside humans.

### Key Concepts
- **Human-AI Collaboration:** Seamless interaction across engineering, product, QA, and growth.
- **Agent Integration:** Workspaces built natively for AI agents to read codebases and propose solutions.
- **Immutable Ledger:** Every agent decision and tool call is logged for transparency and non-repudiation.

## 🛠️ Tech Stack

- **Framework:** [Astro 6](https://astro.build/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** TypeScript

## 📂 Project Structure

```text
/
├── public/          # Static assets (logos, icons)
├── src/
│   ├── components/  # Reusable UI components and demos
│   ├── layouts/     # Astro layouts
│   ├── pages/       # Astro pages (entry points)
│   ├── styles/      # Global CSS and Tailwind configurations
│   ├── views/       # Main page views (React components)
│   └── App.tsx      # Main React application shell
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `pnpm install` | Installs dependencies |
| `pnpm dev` | Starts local dev server at `localhost:4321` |
| `pnpm build` | Build the production site to `./dist/` |
| `pnpm preview` | Preview the production build locally |

---

*This is a practice frontend design project.*
