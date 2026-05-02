import { Profile } from "./sections/Profile";
import { ContactSection } from "./sections/ContactSection";
import { SkillsSection } from "./sections/SkillsSection";

/**
 * Coluna esquerda do layout (2/7 da largura no desktop).
 * Compõe as três seções da sidebar: perfil, contato e skills.
 * Não contém dados nem lógica — apenas composição de seções.
 */
export function LeftSidebar() {
  return (
    <section
      className="left-section"
      aria-label="Informações de contato e habilidades"
    >
      <div className="left-content">
        <Profile />
        <ContactSection />
        <SkillsSection />
      </div>
    </section>
  );
}
