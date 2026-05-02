import type { TimelineEntry } from "../../types";
import { TimelineItem } from "../ui";

interface TimelineSectionProps {
  /** Título da seção (ex: "Escolaridade", "Cursos") */
  title: string;
  /** ID único para aria-labelledby — deve ser kebab-case sem espaços */
  id: string;
  /** Array de entradas tipadas — vem de data/education.ts ou data/courses.ts */
  entries: TimelineEntry[];
}

/**
 * Seção de timeline genérica e orientada a dados.
 * Usada para escolaridade e cursos, onde as entradas não têm descrição rica.
 * Para seções com texto formatado (ex: experiência), use ExperienceSection.
 *
 * @example
 * <TimelineSection id="escolaridade" title="Escolaridade" entries={education} />
 */
export function TimelineSection({ title, id, entries }: TimelineSectionProps) {
  const headingId = `${id}-title`;
  return (
    <section className="sect" aria-labelledby={headingId}>
      <h2 className="right-title" id={headingId}>
        {title}
      </h2>
      {entries.map((entry, idx) => (
        <TimelineItem
          key={`${id}-${entry.institution}-${idx}`}
          {...entry}
        />
      ))}
    </section>
  );
}
