import { skillCategories } from "../../data/skills";
import { SkillBar } from "../ui";

/**
 * Seção de skills da sidebar.
 * Itera sobre skillCategories de data/skills.ts e renderiza
 * um grupo de SkillBars para cada categoria.
 * Para adicionar skills ou categorias, edite apenas o arquivo de dados.
 */
export function SkillsSection() {
  return (
    <div className="skills-section">
      <h2 className="main-title">Skills</h2>
      {skillCategories.map((category) => (
        <div key={category.title}>
          <br />
          <h3 className="career">{category.title}</h3>
          <ul>
            {category.skills.map((skill) => (
              <SkillBar key={skill.label} {...skill} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
