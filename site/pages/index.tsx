/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "../js/main";

const Home: NextPage = () => {
  return (
    <>
      <main className="main-content">
        <section className="left-section">
          <div className="left-content">
            <div className="profile">
              <div className="image">
                <img
                  src="https://avatars.githubusercontent.com/u/57502280?v=4"
                  alt=""
                />
              </div>
              <h2 className="name">Raul Henrique Silva Sigoli</h2>
              <p className="career">Engenheiro de Computação</p>
            </div>

            <div className="contact-info">
              <h3 className="main-title">Contato</h3>
              <ul>
                <li>
                  <i className="fa fa-whatsapp" />
                  <a href="http://WA.me/5544991658351" target="_blank">
                    044 99165-8351
                  </a>
                </li>
                <li>
                  <i className="fa fa-envelope" />
                  <a href="mailto:raul_sigoli@hotmail.com" target="_blank">
                    raul_sigoli@hotmail.com
                  </a>
                </li>
                <li>
                  <i className="fa fa-globe" />
                  <a href="https://raul-portfolio.vercel.app/" target="_blank">
                    raul-portfolio.vercel.app
                  </a>
                </li>
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
                  <p className="skill-title">html/css</p>
                  <div className="progress-bar">
                    <div className="progress ps-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">Javascript</p>
                  <div className="progress-bar">
                    <div className="progress js-progress" />
                  </div>
                </li>

                <li>
                  <p className="skill-title">Java</p>
                  <div className="progress-bar">
                    <div className="progress j-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">C++</p>
                  <div className="progress-bar">
                    <div className="progress c-progress" />
                  </div>
                </li>
              
                <li>
                  <p className="skill-title">Node js</p>
                  <div className="progress-bar">
                    <div className="progress n-progress" />
                  </div>
                </li>

                <li>
                  <p className="skill-title">illustrator</p>
                  <div className="progress-bar">
                    <div className="progress ps-progress" />
                  </div>
                </li>
                <li>
                  <p className="skill-title">React</p>
                  <div className="progress-bar">
                    <div className="progress ps-progress" />
                  </div>
                </li>
              </ul>
            </div>
{/* 
            <div className="references-section">
              <h3 className="main-title">References</h3>
              <div className="referee">
                <h6 className="sub-title">Michael Bowen</h6>
                <p className="sub-para">Product Manager</p>
                <ul>
                  <li>
                    <i className="fa fa-phone" />
                    07661892982
                  </li>
                  <li>
                    <i className="fa fa-fax" />
                    loremipsum@gmail.com
                  </li>
                </ul>
              </div>
              <div className="referee">
                <h6 className="sub-title">Joseph Kumar</h6>
                <p className="sub-para">Senior Developer</p>
                <ul>
                  <li>
                    <i className="fa fa-phone" />
                    07661892982
                  </li>
                  <li>
                    <i className="fa fa-fax" />
                    loremipsum@gmail.com
                  </li>
                </ul>
              </div>
              <div className="referee">
                <h6 className="sub-title">Rick Ross</h6>
                <p className="sub-para">Product Manager</p>
                <ul>
                  <li>
                    <i className="fa fa-phone" />
                    07661892982
                  </li>
                  <li>
                    <i className="fa fa-fax" />
                    loremipsum@gmail.com
                  </li>
                </ul>
              </div>
            </div> */}


          </div>
        </section>

        <section className="right-section">
          <div className="right-main-content">
            <section className="about sect">
              <h2 className="right-title">Sobre min</h2>
              <p className="para">
                Raul Henrique Silva Sigoli, Jovem Programador Web profissional,
                competente para criação e elaboração de projeto estético e
                funcional de website, com uma uma curta experiencia mais muito
                densa, sempre em busca de um novo desafio para estimulação de um
                crescimento profissional
                <br />
              </p>
            </section>

            <section className="experince sect">
              <h2 className="right-title">Dados Profissionais</h2>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Anpad</h5>
                  <p className="para">2020 - Atualmente</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Estagiário de T.I</h5>
                    <p className="para">
                      Atuo na área de desenvolvimento de novas telas e
                      funcionalidades.
                      <br />
                      <br />
                      Atuo também na área de edição de vídeo no Premiere e no Photoshop
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
                      Atuava na parte de Infraestrutura da fabrica, reparando e
                      arrumando computadores, impressoras e sistemas (quando
                      necessitava),
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
                      Editava videos e materias do Programa da Mirna Lavecc, que ia ao ar todos os sabados
                    </p>
                  </div>
                </div>
              </div>

            </section>
            <section className="education sect">
              <h2 className="right-title">Escolaridade</h2>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Feitep</h5>
                  <p className="para">2018 - 2023</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Engenharia de Computação</h5>
                    <p className="para">
                      
                    </p>
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
                    <p className="para">
                      
                    </p>
                  </div>
                </div>
              </div>


            </section>
            <section className="awards sect">
              <h2 className="right-title">Crusos</h2>
              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">DB1 Start</h5>
                  <p className="para">2019/11 - 2019/12</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">DB1 Group</h5>
                    <p className="para">
                      
                    </p>
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
                    <p className="para">
                      
                    </p>
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
                    <p className="para">
                      
                    </p>
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
                    <p className="para">
                      
                    </p>
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
                    <p className="para">
                      
                    </p>
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
                    <p className="para">
                      
                    </p>
                  </div>
                </div>
              </div>


              <div className="timeline">
                <div className="left-tl-content">
                  <h5 className="tl-title">Montagem e Manutenção de Computadores, Notebook e Celulares</h5>
                  <p className="para">2018/02 - 2018/05</p>
                </div>
                <div className="right-tl-content">
                  <div className="tl-content">
                    <h5 className="tl-title-2">Prepara Cursos</h5>
                    <p className="para">
                      
                    </p>
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
                    <p className="para">
                      
                    </p>
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
                    <p className="para">
                      
                    </p>
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
                    <p className="para">
                      
                    </p>
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
                    <p className="para">
                      
                    </p>
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
                    <p className="para">
                      
                    </p>
                  </div>
                </div>
              </div>






            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
