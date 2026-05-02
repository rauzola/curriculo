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
        <strong>Objetivo Profissional:</strong> Busco oportunidades como
        Desenvolvedor Full Stack, onde possa aplicar minhas habilidades em
        React, Next.js e Node.js para criar soluções inovadoras e impactantes.
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
        Apesar de minha trajetória ainda estar em crescimento, já tive a
        oportunidade de participar de projetos significativos que fortaleceram
        minhas habilidades técnicas e criativas.
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
