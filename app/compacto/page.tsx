import type { Metadata } from "next";
import { Profile } from "../components/sections/Profile";
import { ContactSection } from "../components/sections/ContactSection";
import { TimelineSection } from "../components/sections/TimelineSection";
import { TimelineItem, SkillBar } from "../components/ui";
import { skillCategories } from "../data/skills";
import { education } from "../data/education";
import type { TimelineEntry } from "../types";

/**
 * Versão COMPACTA do currículo (alvo: 2 páginas no PDF).
 * Mesmo design do currículo principal, com conteúdo enxuto:
 * - Sobre resumido
 * - Experiências antigas sem descrição (só cargo + período)
 * - Skills apenas das categorias de desenvolvimento
 * - Lista curta de cursos (mais relevantes)
 *
 * Rota separada para NÃO alterar o currículo online completo (/).
 * Imprimir via: .cv-build/gerar-pdf.ps1 apontando para /compacto.
 */
export const metadata: Metadata = {
  title: "Raul Sigoli — Currículo (compacto)",
  robots: { index: false, follow: false },
};

// Skills compactas: só categorias relevantes para dev full-stack
const skillsCompactas = skillCategories.filter((c) =>
  ["Front-end", "Back-end / Banco de Dados", "IA & Integrações"].includes(c.title)
);

const cursosCompactos: TimelineEntry[] = [
  { period: "2023/01 - 2024/04", institution: "Ignite (React/Node)", role: "Rocketseat" },
  { period: "2020/03 - 2021/01", institution: "GoStack", role: "Rocketseat" },
  { period: "2019/11 - 2019/12", institution: "DB1 Start", role: "DB1 Group" },
  { period: "2018/10 - 2019/06", institution: "Analista de T.I", role: "Prepara Cursos" },
];

export default function Compacto() {
  return (
    <main id="main-content" className="main-content">
      <section
        className="left-section"
        aria-label="Informações de contato e habilidades"
      >
        <div className="left-content">
          <Profile />
          <ContactSection />
          <div className="skills-section">
            <h2 className="main-title">Skills</h2>
            {skillsCompactas.map((category) => (
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
        </div>
      </section>

      <section className="right-section">
        <div className="right-main-content">
          <section className="about sect">
            <h2 className="right-title">Sobre mim</h2>
            <p className="para">
              <strong>Desenvolvedor Full-Stack Pleno</strong> (React, Next.js,
              Node.js e TypeScript) com ownership de ponta a ponta — do front-end
              à integração com banco de dados, APIs e IA.
            </p>
            <p className="para">
              Na <strong>ID Brasil Sistemas</strong> desenvolvo o{" "}
              <strong>Wincrm</strong>, um CRM SaaS multi-tenant, e criei o{" "}
              <strong>ChatIA RFV</strong> — feature de IA com{" "}
              <strong>OpenAI (function-calling)</strong> que executa ações reais
              no sistema. Em paralelo, entrego sites e sistemas como freelancer
              (marca SIGOLI), com resultados concretos de SEO — site{" "}
              <strong>#1 no Google e 100% de SEO Score</strong>.
            </p>
            <p className="para">
              Pratico <strong>desenvolvimento assistido por IA</strong> (Cursor,
              Claude Code, Codex) para entregar mais rápido com qualidade.
            </p>
          </section>

          <section className="experience sect">
            <h2 className="right-title">Dados Profissionais</h2>

            <TimelineItem
              period="2025/09 - Atual"
              institution="ID Brasil Sistemas"
              role="Desenvolvedor Front-end / Full-Stack"
            >
              <p className="para">
                Desenvolvo o <strong>Wincrm</strong> (CRM SaaS multi-tenant) com{" "}
                <strong>
                  React, TypeScript, Vite, Ant Design v5, Redux Toolkit e React
                  Query
                </strong>
                : cashback, campanhas, disparo em massa, Matriz RFV, RBAC e
                integração com a <strong>WhatsApp Business API (Meta)</strong>.
                Criei o <strong>ChatIA RFV</strong> (IA com
                OpenAI/function-calling) e contribuo no <strong>Codex</strong>{" "}
                (Next.js, Prisma, MySQL, MongoDB).
              </p>
            </TimelineItem>

            <TimelineItem
              period="2023/08 - Atual"
              institution="Freelancer (SIGOLI)"
              role="Desenvolvedor Full-Stack"
            >
              <p className="para">
                Sites, landing pages e sistemas sob medida em{" "}
                <strong>
                  Next.js, React, TypeScript, Tailwind, Supabase e Prisma
                </strong>
                . Destaques: <strong>Projeto Mais Vida</strong> (#1 no Google,
                100% SEO, + sistema de eventos), Habilidades Humanas RH,
                Borracharia Ceasa e a ONG MAREV.
              </p>
            </TimelineItem>

            <TimelineItem
              period="2024/08 - 2024/12"
              institution="Pref. de Maringá"
              role="Professor de Informática (Projeto Social)"
            />

            <TimelineItem
              period="2022/10 - 2023/07"
              institution="Datlo (YC S21)"
              role="Estagiário Front-end (React)"
            >
              <p className="para">
                Front-end de plataforma de location intelligence com{" "}
                <strong>
                  React, Next.js, TypeScript, Ant Design, Leaflet e GraphQL
                </strong>
                .
              </p>
            </TimelineItem>

            <TimelineItem
              period="2020/08 - 2022/08"
              institution="ANPAD"
              role="Estagiário de T.I (Front-end)"
            />
            <TimelineItem
              period="2019/01 - 2019/11"
              institution="Pressure Compressores"
              role="Estágio de T.I / Infraestrutura"
            />
            <TimelineItem
              period="2017 - 2018"
              institution="Band Maringá"
              role="Editor de Vídeo"
            />
          </section>

          <TimelineSection
            id="escolaridade"
            title="Escolaridade"
            entries={education}
          />
          <TimelineSection id="cursos" title="Cursos" entries={cursosCompactos} />
        </div>
      </section>
    </main>
  );
}
