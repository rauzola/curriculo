import { profile } from "../../data/profile";

/**
 * Seção "Sobre mim" do conteúdo principal.
 * Contém texto rico com formatação inline (strong, em, a).
 * Por ser conteúdo editorial com marcação semântica específica,
 * o texto é mantido diretamente no JSX em vez de em data/.
 * A data de atualização vem de data/profile.ts — atualize lá ao editar conteúdo.
 */
export function AboutSection() {
  return (
    <section className="about sect">
      <h2 className="right-title">Sobre mim</h2>

      <p className="para">
        <strong>Objetivo Profissional:</strong> Busco uma posição como{" "}
        <strong>Desenvolvedor Full-Stack Pleno</strong> (React, Next.js e
        Node.js), entregando produtos completos — do front-end à integração com
        banco de dados, APIs e serviços de IA — com foco em performance,
        qualidade de código e impacto real no negócio.
      </p>

      <p className="para">
        Olá! Sou <strong>Raul Henrique Silva Sigoli</strong>, Programador Web
        apaixonado por transformar ideias em websites modernos, funcionais e
        esteticamente atraentes.
      </p>

      <p className="para">
        Tenho experiência em <strong>Front-end</strong> e{" "}
        <strong>Back-end</strong>, trabalhando com tecnologias como{" "}
        <strong>React, Next.js, TypeScript, Node.js</strong> e muito mais.
      </p>

      <p className="para">
        Atualmente atuo na <strong>ID Brasil Sistemas</strong>, onde desenvolvo o{" "}
        <strong>Wincrm</strong> — um CRM multi-tenant SaaS de fidelidade — com{" "}
        <strong>
          React, TypeScript, Vite, Ant Design, Redux Toolkit e React Query
        </strong>
        , incluindo a integração com a{" "}
        <strong>WhatsApp Business API (Meta)</strong>. Também criei o{" "}
        <strong>ChatIA RFV</strong>, uma funcionalidade de{" "}
        <strong>Inteligência Artificial</strong> que usa a{" "}
        <strong>OpenAI com function-calling</strong> para analisar a base de
        clientes e executar ações dentro do próprio sistema.
      </p>

      <p className="para">
        No dia a dia, pratico{" "}
        <strong>desenvolvimento assistido por IA</strong> — com{" "}
        <strong>Cursor, Claude Code, Codex e OpenCode</strong> — para entregar
        mais rápido sem abrir mão de qualidade, testes e boas práticas de
        código.
      </p>

      <p className="para">
        Este próprio site, que você está visitando, foi totalmente desenvolvido
        por mim para demonstrar minhas habilidades práticas com{" "}
        <strong>Front-end</strong>. Você pode conferir o código e todos os
        detalhes no meu repositório:{" "}
        <a
          href="https://github.com/rauzola/curriculo"
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent"
        >
          github.com/rauzola/curriculo
        </a>
      </p>

      <p className="para">
        Ao longo da minha trajetória, participei de projetos significativos —
        de sistemas corporativos a produtos próprios — que fortaleceram minhas
        habilidades técnicas e criativas.
      </p>

      <p className="para">
        Um dos mais relevantes foi o <strong>Projeto Mais Vida</strong>, da
        Igreja Católica (Paróquia Catedral Nossa Senhora da Glória – Maringá),
        onde desenvolvi um{" "}
        <strong>sistema completo de autenticação e autorização</strong>,
        garantindo que apenas pessoas autorizadas pudessem acessar dados
        sensíveis e relatórios dos eventos. O sistema conta com{" "}
        <em>controle de acesso por papéis</em>, interface moderna e foco em
        segurança robusta.
      </p>

      <p className="para">
        Além disso, implementei um{" "}
        <strong>sistema de gerenciamento de eventos</strong>, em funcionamento
        desde <strong>janeiro de 2025</strong>, com recursos como{" "}
        <em>inscrição de participantes</em>,{" "}
        <em>geração automática de relatórios</em> e{" "}
        <em>estatísticas detalhadas</em>. Esta solução tem sido fundamental para
        a organização dos acampamentos e demais atividades do Projeto Mais Vida.
      </p>

      <p className="para">
        Estou sempre em busca de novos desafios que ampliem meu aprendizado e
        contribuam para gerar resultados de impacto positivo.
      </p>

      <p className="para updated-at">
        <strong>Atualizado em:</strong> {profile.updatedAt}
      </p>
    </section>
  );
}
