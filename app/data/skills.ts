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
      { label: "TypeScript", percent: 70 },
      { label: "JavaScript", percent: 80 },
      { label: "HTML / CSS", percent: 90 },
      { label: "Tailwind CSS", percent: 85 },
      { label: "Styled-components", percent: 85 },
      { label: "ANT Design", percent: 60 },
      { label: "Leaflet", percent: 30 },
    ],
  },
  {
    title: "Back-end / Banco de Dados",
    skills: [
      { label: "Node.js", percent: 80 },
      { label: "GraphQL", percent: 90 },
      { label: "Supabase", percent: 75 },
      { label: "Prisma", percent: 75 },
      { label: "Java", percent: 65 },
      { label: "C / C++", percent: 55 },
      { label: "Delphi", percent: 45 },
      { label: "Visual Basic 6", percent: 40 },
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
