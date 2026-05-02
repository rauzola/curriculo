import type { TimelineEntry } from "../types";

/**
 * Cursos realizados exibidos na seção "Cursos".
 *
 * Para adicionar: inclua um objeto { period, institution, role } neste array.
 * O campo `institution` recebe o nome do curso e `role` recebe a instituição,
 * seguindo a convenção visual do layout de timeline invertida.
 */
export const courses: TimelineEntry[] = [
  { period: "2023/01 - 2024/04", institution: "Ignite", role: "Rocketseat" },
  { period: "2019/11 - 2019/12", institution: "DB1 Start", role: "DB1 Group" },
  { period: "2021/03 - 2022/01", institution: "Ignite", role: "Rocketseat" },
  { period: "2020/03 - 2021/01", institution: "GoStack", role: "Rocketseat" },
  { period: "2018/10 - 2019/06", institution: "Analista de T.I", role: "Prepara Cursos" },
  { period: "2018/09 - 2018/09", institution: "Pacote Office 365", role: "Microsoft" },
  { period: "2018/10 - 2019/01", institution: "Java", role: "Prepara Cursos" },
  { period: "2017/10 - 2017/11", institution: "Lógica de Programação", role: "Prepara Cursos" },
  {
    period: "2018/02 - 2018/05",
    institution: "Montagem e Manutenção de Computadores, Notebook e Celulares",
    role: "Prepara Cursos",
  },
  { period: "2018/08 - 2018/09", institution: "Microsoft Access", role: "Prepara Cursos" },
  { period: "2018/05 - 2018/08", institution: "Redes", role: "Prepara Cursos" },
  { period: "2018/01 - 2018/02", institution: "Visual Basic 6", role: "Prepara Cursos" },
  { period: "2017/11 - 2018/01", institution: "Delphi", role: "Prepara Cursos" },
  { period: "2018/05 - 2018/08", institution: "Edição de Vídeo", role: "Sergio Yamada" },
];
