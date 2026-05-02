import { LeftSidebar } from "./components/LeftSidebar";
import { RightContent } from "./components/RightContent";

/**
 * Página principal do currículo.
 * Composição de alto nível: monta o grid de duas colunas com
 * LeftSidebar (perfil + contato + skills) e RightContent (sobre + experiência + formação).
 */
export default function Home() {
  return (
    <main id="main-content" className="main-content">
      <LeftSidebar />
      <RightContent />
    </main>
  );
}
