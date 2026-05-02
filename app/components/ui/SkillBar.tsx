import type { Skill } from "../../types";

/**
 * Barra de progresso para uma skill individual.
 * Recebe os atributos de acessibilidade ARIA para leitores de tela.
 *
 * @example
 * <SkillBar label="React" percent={85} />
 */
export function SkillBar({ label, percent }: Skill) {
  return (
    <li>
      <p className="skill-title">{label}</p>
      <div
        className="progress-bar"
        role="progressbar"
        aria-label={label}
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="progress" style={{ width: `${percent}%` }} />
      </div>
    </li>
  );
}
