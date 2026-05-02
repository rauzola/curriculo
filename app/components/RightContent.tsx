import { AboutSection } from "./sections/AboutSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { TimelineSection } from "./sections/TimelineSection";
import { education } from "../data/education";
import { courses } from "../data/courses";

/**
 * Coluna direita do layout (5/7 da largura no desktop).
 * Compõe as quatro seções do conteúdo principal.
 * Escolaridade e cursos são orientados a dados (TimelineSection).
 * Sobre e experiência têm conteúdo rico em suas próprias seções.
 */
export function RightContent() {
  return (
    <section className="right-section">
      <div className="right-main-content">
        <AboutSection />
        <ExperienceSection />
        <TimelineSection id="escolaridade" title="Escolaridade" entries={education} />
        <TimelineSection id="cursos" title="Cursos" entries={courses} />
      </div>
    </section>
  );
}
