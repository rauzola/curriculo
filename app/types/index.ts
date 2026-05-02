/**
 * Skill — item individual de habilidade.
 * Usado por SkillBar e pelos arrays em data/skills.ts.
 */
export interface Skill {
  /** Nome exibido na sidebar (ex: "React", "Node.js") */
  label: string;
  /** Proficiência de 0 a 100, renderizada como barra de progresso */
  percent: number;
}

/**
 * SkillCategory — grupo de skills com título de categoria.
 * Cada categoria gera um bloco separado na SkillsSection.
 */
export interface SkillCategory {
  /** Título do grupo (ex: "Front-end", "Back-end / Banco de Dados") */
  title: string;
  skills: Skill[];
}

/**
 * TimelineEntry — entrada genérica de timeline.
 * Usada por educação, cursos e como base para experiência profissional.
 */
export interface TimelineEntry {
  /** Período no formato "YYYY/MM - YYYY/MM" ou "YYYY - YYYY" */
  period: string;
  /** Nome da instituição, empresa ou curso */
  institution: string;
  /** Cargo, título ou nome do curso */
  role: string;
}

/**
 * ContactItem — link de contato exibido na sidebar.
 * O ícone usa classes do Font Awesome 4.7 (ex: "fa-github").
 */
export interface ContactItem {
  /** Classe do ícone Font Awesome sem o prefixo "fa " (ex: "fa-github") */
  icon: string;
  /** URL completa ou "mailto:" — links externos recebem rel="noopener noreferrer" automaticamente */
  href: string;
  /** Texto visível do link */
  label: string;
}
