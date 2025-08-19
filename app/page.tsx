import Image from "next/image";
import Head from "next/head";
import styles from "./styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Raul - Sigoli</title>
      </Head>
      <main className="main-content">
        <section className="left-section">
          <div className="left-content">
            <div className="profile">
              <div className="image">
                <img
                  src="https://avatars.githubusercontent.com/u/57502280?v=4"
                  alt=""
                  draggable="false"
                />
              </div>
              <h2 className="name">Raul Henrique S. Sigoli</h2>
              <p className="career">Desenvolvedor Full-Stack / Front-end React</p>
            </div>

            <div className="contact-info">
              <h3 className="main-title">Contato</h3>
              <ul>
                <li>
                  <i className="fa fa-whatsapp" />
                  <a href="http://WA.me/5544991658351" target="_blank">
                    044 9 9165-8351
                  </a>
                </li>
                <li>
                  <i className="fa fa-envelope" />
                  <a href="mailto:raul_sigoli@hotmail.com" target="_blank">
                    raul_sigoli@hotmail.com
                  </a>
                </li>
                <li>
                  <i className="fa fa-github" />
                  <a
                    href="https://github.com/rauzola?tab=repositories"
                    target="_blank"
                  >
                    github.com/rauzola
                  </a>
                </li>
                {/* <li>
      <i className="fa fa-globe" />
      <a href="#" target="_blank">
        portfolio (EM-BREVE)
      </a>
    </li> */}
                <li>
                  <i className="fa fa-linkedin" />
                  <a
                    href="https://www.linkedin.com/in/raul-sigoli-137bb4173/"
                    target="_blank"
                  >
                    www.linkedin.com
                  </a>
                </li>
                <li>
                  <i className="fa fa-instagram" />
                  <a
                    href="https://www.instagram.com/raul_sigoli/"
                    target="_blank"
                  >
                    @raul_sigoli
                  </a>
                </li>
                <li>
                  <i className="fa fa-map-marker" />
                  <a
                    href="https://www.google.com.br/maps/place/Maring%C3%A1+-+PR/@-23.4055556,-52.1081267,11z/"
                    target="_blank"
                  >
                    Maringá - PR
                  </a>
                </li>
              </ul>
            </div>

            <div className="skills-section">
              <h3 className="main-title">Skills</h3>
              <ul>
                <li>
                  <p className="skill-title">React</p>
                  <div className="progress-bar">
                    <div className="progress react-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">Next.js</p>
                  <div className="progress-bar">
                    <div className="progress next-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">Typescript</p>
                  <div className="progress-bar">
                    <div className="progress typescript-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">Javascript</p>
                  <div className="progress-bar">
                    <div className="progress js-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">HTML / CSS</p>
                  <div className="progress-bar">
                    <div className="progress htmlcss-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">Tailwind CSS</p>
                  <div className="progress-bar">
                    <div className="progress tailwind-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">Styled-components</p>
                  <div className="progress-bar">
                    <div className="progress styled-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">ANT Design</p>
                  <div className="progress-bar">
                    <div className="progress ant-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">Leaflet</p>
                  <div className="progress-bar">
                    <div className="progress leaflet-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">GraphQL</p>
                  <div className="progress-bar">
                    <div className="progress graphql-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">Supabase</p>
                  <div className="progress-bar">
                    <div className="progress supabase-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">Prismic.io</p>
                  <div className="progress-bar">
                    <div className="progress prismic-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">Node.js</p>
                  <div className="progress-bar">
                    <div className="progress node-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">Java</p>
                  <div className="progress-bar">
                    <div className="progress java-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">C</p>
                  <div className="progress-bar">
                    <div className="progress c-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">C++</p>
                  <div className="progress-bar">
                    <div className="progress cpp-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">Delphi</p>
                  <div className="progress-bar">
                    <div className="progress delphi-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">Visual Basic 6</p>
                  <div className="progress-bar">
                    <div className="progress vb-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">Adobe Photoshop</p>
                  <div className="progress-bar">
                    <div className="progress photoshop-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">Adobe Illustrator</p>
                  <div className="progress-bar">
                    <div className="progress illustrator-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">Adobe Premiere</p>
                  <div className="progress-bar">
                    <div className="progress premiere-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">Edição de Vídeo</p>
                  <div className="progress-bar">
                    <div className="progress videoedit-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">Pacote Office 365</p>
                  <div className="progress-bar">
                    <div className="progress office-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">
                    Montagem e Manutenção de Computadores / Notebooks /
                    Celulares
                  </p>
                  <div className="progress-bar">
                    <div className="progress hardware-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">Redes</p>
                  <div className="progress-bar">
                    <div className="progress redes-progress" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="right-section">
          <div className="right-main-content">
            <section className="about sect">
              <h2 className="right-title">Sobre mim</h2>
              <p className="para">
                Olá! Sou <strong>Raul Henrique Silva Sigoli</strong>,
                Programador Web apaixonado por transformar ideias em websites
                modernos, funcionais e esteticamente atraentes.
                <br />
                <br />
                Tenho experiência em <strong>Front-end</strong> e{" "}
                <strong>Back-end</strong>, trabalhando com tecnologias como{" "}
                <strong>React, Next.js, Typescript, Node.js</strong> e muito
                mais.
                <br />
                <br />
                Este próprio site, que você está visitando, foi totalmente
                desenvolvido por mim para demonstrar minhas habilidades práticas
                com <strong>Front-end</strong>.<br />
                Você pode conferir o código e todos os detalhes do projeto no
                meu repositório: <br />
                <a
                  href="https://github.com/rauzola/curriculo"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#2D9CDB", textDecoration: "underline" }}
                >
                  https://github.com/rauzola/curriculo
                </a>
                <br />
                <br />
                Apesar de minha trajetória ainda estar em crescimento, já
                participei de projetos relevantes que fortaleceram minhas
                habilidades técnicas e criativas.
                <br />
                Estou sempre em busca de novos desafios que impulsionem meu
                aprendizado e contribuam para resultados de impacto.
              </p>
              <br />
              <p className="para">
                <strong>Atualizado em:</strong> 15/08/2025
              </p>
            </section>

            <section className="experince sect">
              <h2 className="right-title">Dados Profissionais</h2>

              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">
                    Freelancer – Desenvolvimento de Software
                  </h5>
                  <p className="para">2023/08 - Atual</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">
                      Desenvolvedor Full Stack – Sites e Sistemas Personalizados
                    </h5>
                    <p className="para">
                      Atuei como desenvolvedor freelancer criando sites
                      institucionais, landing pages, sistemas personalizados e
                      CMSs para gerenciamento de conteúdo. Sempre com foco em
                      interfaces modernas, responsivas, de alta performance e
                      com otimização de SEO para melhor ranqueamento.
                      <br />
                      <br />
                      Utilizei tecnologias como{" "}
                      <strong>
                        React, Next.js, Tailwind CSS, Styled-components,
                        Supabase
                      </strong>{" "}
                      (banco de dados e autenticação),{" "}
                      <strong>Prismic.io</strong> (CMS Headless), e integração
                      de <strong>APIs REST</strong>. Também desenvolvi o
                      back-end das aplicações, garantindo a integração perfeita
                      entre o front-end e os serviços de dados.
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Prefeitura Municipal de Maringá</h5>
                  <p className="para">2024/08 - 2024/12</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">
                      Professor de Informática – Projeto Social
                    </h5>
                    <p className="para">
                      Atuei como professor de informática no projeto social do
                      Centro da Juventude Antônio Paulo Pucca, voltado a
                      crianças e jovens de 12 a 29 anos em situação de
                      vulnerabilidade.
                      <br />
                      <br />
                      Ensinava noções básicas de informática, com foco em Word e
                      Excel. Muitos alunos não sabiam nem ligar o computador ou
                      escrever. A experiência foi extremamente enriquecedora,
                      tanto no aspecto profissional quanto humano.
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Datlo</h5>
                  <p className="para">2022/10 - 2023/07</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">
                      Estagiário de Programação Front-End (React)
                    </h5>
                    <p className="para">
                      Fui responsável pelo desenvolvimento do front-end da
                      plataforma inteligente de localização. A plataforma
                      fornecia soluções que auxiliavam empresas a encontrar
                      novos clientes, parceiros estratégicos, monitorar o
                      mercado e os concorrentes, e abrir novas lojas em pontos
                      estratégicos.
                      <br />
                      <br />
                      Durante o projeto, utilizei ferramentas como
                      React/Next.js, Typescript, ANT-Design, Leaflet,
                      Styled-components e GraphQL.
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Anpad</h5>
                  <p className="para">2020/08 - 2022/08</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Estagiário de T.I</h5>
                    <p className="para">
                      Atuava como Desenvolvedor Front-end, responsável pela
                      criação de sites e desenvolvimento de rotas para eventos
                      realizados.
                      <br />
                      <br />
                      Possuo experiência na edição de vídeos utilizando o Adobe
                      Premiere e habilidades de edição gráfica no Adobe
                      Photoshop.
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Pressure Compressores</h5>
                  <p className="para">2019/01 - 2019/11</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Estagiário de Infraestrutura</h5>
                    <p className="para">
                      Atuava na parte de Infraestrutura da fábrica, reparando e
                      arrumando computadores, impressoras e sistemas (quando
                      necessitava).
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Band Maringa</h5>
                  <p className="para">2017 - 2018</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Editor</h5>
                    <p className="para">
                      Editava vídeos e matérias do Programa da Mirna Lavecc, que
                      ia ao ar todos os sábados.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="education sect">
              <h2 className="right-title">Escolaridade</h2>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">UNICV</h5>
                  <p className="para">2023 - 2025</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">
                      ANÁLISE E DESENVOLVIMENTO DE SISTEMAS ( ADS ){" "}
                    </h5>
                    <p className="para"></p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Feitep</h5>
                  <p className="para">2018 - 2023</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Engenharia de Computação</h5>
                    <p className="para"></p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Sesi</h5>
                  <p className="para">2015 - 2017</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Ensino médio</h5>
                    <p className="para"></p>
                  </div>
                </div>
              </div>
            </section>
            <section className="awards sect">
              <h2 className="right-title">Crusos</h2>

              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Ignite</h5>
                  <p className="para">2023/01 - 2024/04</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Rocketseat</h5>
                    <p className="para"></p>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">DB1 Start</h5>
                  <p className="para">2019/11 - 2019/12</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">DB1 Group</h5>
                    <p className="para"></p>
                  </div>
                </div>
              </div>

              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Ignite</h5>
                  <p className="para">2021/03 - 2022/01</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Rocketseat</h5>
                    <p className="para"></p>
                  </div>
                </div>
              </div>

              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">GoStack</h5>
                  <p className="para">2020/03 - 2021/01</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Rocketseat</h5>
                    <p className="para"></p>
                  </div>
                </div>
              </div>

              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Analista de T I</h5>
                  <p className="para">2018/10 - 2019/06</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Prepara Cursos</h5>
                    <p className="para"></p>
                  </div>
                </div>
              </div>

              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Pacote Office365</h5>
                  <p className="para">2018/09 - 2018/09</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Microsoft</h5>
                    <p className="para"></p>
                  </div>
                </div>
              </div>

              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Java</h5>
                  <p className="para">2018/10 - 2019/01</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Prepara Cursos</h5>
                    <p className="para"></p>
                  </div>
                </div>
              </div>

              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Lógica de Programação</h5>
                  <p className="para">2017/10 - 2017/11</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Prepara Cursos</h5>
                    <p className="para"></p>
                  </div>
                </div>
              </div>

              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">
                    Montagem e Manutenção de Computadores, Notebook e Celulares
                  </h5>
                  <p className="para">2018/02 - 2018/05</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Prepara Cursos</h5>
                    <p className="para"></p>
                  </div>
                </div>
              </div>

              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Microsoft Acces</h5>
                  <p className="para">2018/08 - 2018/09</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Prepara Cursos</h5>
                    <p className="para"></p>
                  </div>
                </div>
              </div>

              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Redes</h5>
                  <p className="para">2018/05 - 2018/08</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Prepara Cursos</h5>
                    <p className="para"></p>
                  </div>
                </div>
              </div>

              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Visual Basic 6</h5>
                  <p className="para">2018/01 - 2018/02</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Prepara Cursos</h5>
                    <p className="para"></p>
                  </div>
                </div>
              </div>

              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Delphi</h5>
                  <p className="para">2017/11 - 2018/01</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Prepara Cursos</h5>
                    <p className="para"></p>
                  </div>
                </div>
              </div>

              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Edição de vídeo</h5>
                  <p className="para">2018/05 - 2018/08</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Sergio Yamada</h5>
                    <p className="para"></p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
