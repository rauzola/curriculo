import type { SkillCategory } from "../types";

/**
 * Categorias de skills exibidas na sidebar.
 *
 * Para adicionar uma skill: inclua um objeto { label, percent } no array
 * da categoria correspondente. O percent (0–100) define o tamanho da barra.
 *
 * Para adicionar uma categoria: inclua um novo objeto { title, skills[] }
 * ao final deste array — ela será renderizada automaticamente pela SkillsSection.
 */
export const skillCategories: SkillCategory[] = [
  {
    title: "Front-end",
    skills: [
      { label: "React", percent: 85 },
      { label: "Next.js", percent: 80 },
      { label: "TypeScript", percent: 80 },
      { label: "JavaScript", percent: 80 },
      { label: "HTML / CSS", percent: 90 },
      { label: "Tailwind CSS", percent: 85 },
      { label: "Styled-components", percent: 85 },
      { label: "Ant Design v5", percent: 80 },
      { label: "Redux Toolkit", percent: 75 },
      { label: "React Query (TanStack)", percent: 75 },
      { label: "Vite", percent: 75 },
      { label: "Leaflet", percent: 30 },
    ],
  },
  {
    title: "Back-end / Banco de Dados",
    skills: [
      { label: "Node.js", percent: 80 },
      { label: "API REST", percent: 85 },
      { label: "GraphQL", percent: 70 },
      { label: "Prisma", percent: 75 },
      { label: "PostgreSQL", percent: 75 },
      { label: "Supabase", percent: 75 },
      { label: "MySQL", percent: 70 },
      { label: "MongoDB", percent: 60 },
      { label: "Java", percent: 60 },
      { label: "C / C++", percent: 50 },
    ],
  },
  {
    title: "IA & Integrações",
    skills: [
      { label: "Dev assistido por IA (Cursor, Claude Code, Codex)", percent: 90 },
      { label: "Engenharia de prompt", percent: 85 },
      { label: "OpenAI / LLMs (function-calling)", percent: 70 },
      { label: "WhatsApp Business API (Meta)", percent: 75 },
      { label: "Integração de APIs / Webhooks", percent: 85 },
      { label: "Git & SVN", percent: 85 },
      { label: "Vercel", percent: 80 },
    ],
  },
  {
    title: "Design / Edição",
    skills: [
      { label: "Adobe Photoshop", percent: 90 },
      { label: "Adobe Illustrator", percent: 80 },
      { label: "Adobe Premiere", percent: 85 },
      { label: "Edição de Vídeo", percent: 85 },
    ],
  },
  {
    title: "Ferramentas / Hardware / Redes",
    skills: [
      { label: "Pacote Office 365", percent: 95 },
      { label: "Montagem e Manutenção de Computadores / Notebooks / Celulares", percent: 95 },
      { label: "Redes", percent: 75 },
    ],
  },
];
