import type { TimelineEntry } from "../types";

/**
 * Formação acadêmica exibida na seção "Escolaridade".
 *
 * Para adicionar: inclua um objeto { period, institution, role } neste array.
 * Não é necessário alterar nenhum componente — a TimelineSection
 * renderiza automaticamente cada entrada.
 */
export const education: TimelineEntry[] = [
  {
    period: "2023 - 2025",
    institution: "UNICV",
    role: "Análise e Desenvolvimento de Sistemas (ADS)",
  },
  {
    period: "2018 - 2023",
    institution: "Feitep",
    role: "Engenharia de Computação",
  },
  {
    period: "2015 - 2017",
    institution: "Sesi",
    role: "Ensino Médio",
  },
];
