import { ReactNode } from "react";
import type { TimelineEntry } from "../../types";

interface TimelineItemProps extends TimelineEntry {
  /** Conteúdo descritivo opcional (parágrafos, listas, etc.) */
  children?: ReactNode;
}

/**
 * Item de timeline com duas colunas: data/instituição à esquerda,
 * cargo e descrição à direita com marcador e linha vertical.
 * Usa <article> pois cada entrada é conteúdo autônomo e indexável.
 *
 * Sem children → usado para escolaridade e cursos (só período + cargo).
 * Com children → usado para experiências com descrição rica.
 *
 * @example
 * // Simples (escolaridade/curso)
 * <TimelineItem period="2023 - 2025" institution="UNICV" role="ADS" />
 *
 * // Com descrição (experiência profissional)
 * <TimelineItem period="2022 - 2023" institution="Datlo" role="Estagiário Front-end">
 *   <p className="para">Descrição da experiência...</p>
 * </TimelineItem>
 */
export function TimelineItem({ period, institution, role, children }: TimelineItemProps) {
  return (
    <article className="timeline-item">
      <div className="left-tl-content">
        <h3 className="tl-title">{institution}</h3>
        <p className="para">{period}</p>
      </div>
      <div className="right-tl-content">
        <div className="tl-content">
          <h4 className="tl-title-2">{role}</h4>
          {children}
        </div>
      </div>
    </article>
  );
}
