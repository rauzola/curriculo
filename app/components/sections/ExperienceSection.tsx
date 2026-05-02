import { TimelineItem } from "../ui";

/**
 * Seção "Dados Profissionais" — histórico de experiências.
 * As descrições contêm texto rico com marcação semântica (strong, em),
 * por isso são mantidas diretamente no JSX em vez de em data/.
 * A estrutura visual (período, instituição, cargo) usa o componente TimelineItem.
 *
 * Para adicionar uma experiência: insira um novo <TimelineItem> nesta seção.
 */
export function ExperienceSection() {
  return (
    <section className="experience sect">
      <h2 className="right-title">Dados Profissionais</h2>

      <TimelineItem
        period="2023/08 - Atual"
        institution="Freelancer – Desenvolvimento de Software"
        role="Desenvolvedor Full Stack – Sites e Sistemas Personalizados"
      >
        <p className="para">
          Atuei como desenvolvedor freelancer criando sites institucionais,
          landing pages, sistemas personalizados e CMSs para gerenciamento de
          conteúdo. Sempre com foco em interfaces modernas, responsivas, de alta
          performance e com otimização de SEO para melhor ranqueamento.
        </p>
        <p className="para">
          Utilizei tecnologias como{" "}
          <strong>
            React, Next.js, Tailwind CSS, Styled-components, Supabase
          </strong>{" "}
          (banco de dados e autenticação), <strong>Prismic.io</strong> (CMS
          Headless), e integração de <strong>APIs REST</strong>. Também
          desenvolvi o back-end das aplicações, garantindo a integração perfeita
          entre o front-end e os serviços de dados.
        </p>
      </TimelineItem>

      <TimelineItem
        period="2024/08 - 2024/12"
        institution="Prefeitura Municipal de Maringá"
        role="Professor de Informática – Projeto Social"
      >
        <p className="para">
          Atuei como professor de informática no projeto social do Centro da
          Juventude Antônio Paulo Pucca, voltado a crianças e jovens de 12 a 29
          anos em situação de vulnerabilidade.
        </p>
        <p className="para">
          Ensinava noções básicas de informática, com foco em Word e Excel.
          Muitos alunos não sabiam nem ligar o computador ou escrever. A
          experiência foi extremamente enriquecedora, tanto no aspecto
          profissional quanto humano.
        </p>
      </TimelineItem>

      <TimelineItem
        period="2022/10 - 2023/07"
        institution="Datlo"
        role="Estagiário de Programação Front-End (React)"
      >
        <p className="para">
          Fui responsável pelo desenvolvimento do front-end da plataforma
          inteligente de localização. A plataforma fornecia soluções que
          auxiliavam empresas a encontrar novos clientes, parceiros estratégicos,
          monitorar o mercado e os concorrentes, e abrir novas lojas em pontos
          estratégicos.
        </p>
        <p className="para">
          Durante o projeto, utilizei ferramentas como React/Next.js, Typescript,
          ANT-Design, Leaflet, Styled-components e GraphQL.
        </p>
      </TimelineItem>

      <TimelineItem
        period="2020/08 - 2022/08"
        institution="Anpad"
        role="Estagiário de T.I"
      >
        <p className="para">
          Atuava como Desenvolvedor Front-end, responsável pela criação de sites
          e desenvolvimento de rotas para eventos realizados.
        </p>
        <p className="para">
          Possuo experiência na edição de vídeos utilizando o Adobe Premiere e
          habilidades de edição gráfica no Adobe Photoshop.
        </p>
      </TimelineItem>

      <TimelineItem
        period="2019/01 - 2019/11"
        institution="Pressure Compressores"
        role="Estagiário de Infraestrutura"
      >
        <p className="para">
          Atuava na parte de Infraestrutura da fábrica, reparando e arrumando
          computadores, impressoras e sistemas (quando necessitava).
        </p>
      </TimelineItem>

      <TimelineItem period="2017 - 2018" institution="Band Maringá" role="Editor">
        <p className="para">
          Editava vídeos e matérias do Programa da Mirna Lavecc, que ia ao ar
          todos os sábados.
        </p>
      </TimelineItem>
    </section>
  );
}
