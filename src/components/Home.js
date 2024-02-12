// React
import { useEffect, useState } from "react"

// CSS
import "./Home.css"
import "./HomeResponsivo.css"

// Imagens
import perfil from "../assets/IMG_0910.JPG"
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import insta from "../assets/instagram.png"
import logo from "../assets/logo.png"

const Home = () => {

    const [projetos, setProjetos] = useState([]);
    const [idade, setIdade] = useState(0);
      
    useEffect(() => {
      const fetchProjetos = async () => {
        try {
          const response = await fetch('https://api.github.com/users/tiagoolima/repos');
          const data = await response.json();
          setProjetos(data);
        } catch (error) {
          console.error('Erro ao obter os projetos do GitHub:', error);
        }
      };
  
      fetchProjetos();

      const dataNascimento = new Date("1997-12-17")
      const hoje = newDate()
      const diferencaAnos = hoje.getFullYear() - dataNascimento.getFullYear();

      const aniversarioAconteceu = 
        hoje.getMonth() > dataNascimento.getMonth() || 
        (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate() >= dataNascimento.getDate());
        
      const idadeAtual = aniversarioAconteceu ? diferencaAnos : diferencaAnos - 1;

      setIdade(idadeAtual);
    }, []);

  return (
    <>
      <header>
        <div className="icone">
          <img src={logo} alt="logo" />
        </div>
        <div class="menu">
          <nav>
            <ul>
              <li><a href="#projetos">meus projetos</a></li>
              <li><a href="#sobre">sobre mim</a></li>
              <li><a href="#minhasHabilidades">minhas habilidades</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="portfolio">
        <section className="infoPessoais">
          <div className="imagemPerfil">
            <img src={perfil} alt="Imagem do Tiago" />
          </div>

          <div className="saudacao">
            <h1>Olá! Eu sou o <br/><span>Tiago Tomé</span></h1>
            <p>Sou um desenvolvedor <span>Front-End</span>.</p>

            <div className="redesSociais">
              <a href="https://github.com/tiagoolima" target="_blank" rel="noopener noreferrer"><img className="logoRedesSociais" src={github} alt="GitHub"/></a>
              <a href="https://www.instagram.com/tiagootome/" target="_blank" rel="noopener noreferrer"><img className="logoRedesSociais" src={insta} alt="Instagram"/></a>
              <a href="https://www.linkedin.com/in/tiagootome/" target="_blank" rel="noopener noreferrer"><img className="logoRedesSociais" src={linkedin} alt="Linkedin"/></a>
            </div>
          </div>
        </section>

        <section className="projetos" id="projetos">
          <h1 className="titulosSecoes">Meus projetos</h1>
          <ul>
            {projetos.map((projeto) => (
              <li key={projeto.id}>
                <a href={projeto.html_url} target="_blank" rel="noopener noreferrer">{projeto.name}</a>
              </li>
            ))}
            </ul>
        </section>

        <section className="sobreMim" id="sobre">
          <h1 className="titulosSecoes">Sobre mim</h1>
          <p>Meu nome é <span>Tiago Tomé</span>, tenho {idade} anos e moro em Iguatu / Ceará. Apaixonado por ciências exatas e tecnologia, sou graduado em <span>Matemática</span> pelo Instituto Federal de Educação, Ciência e Tecnologia do Ceará - <i>Campus Cedro</i>, onde desenvolvi habilidades analíticas e de resolução de problemas. Também sou <span>Técnico de Informática</span> pelo Instituto Federal de Educação, Ciência e Tecnologia do Ceará - <i>Campus</i> Iguatu, onde adquiri conhecimentos práticos em sistemas computacionais. <br/> Atualmente estou cursando <span>Análise e Desenvolvimento de Sistemas</span>, com foco em <span>Desenvolvimento Web Front-End</span>. Minha paixão pela tecnologia me faz buscar sempre aprender novas linguagens de programação e ferramentas para criar experiências digitais de alta qualidade.</p>
        </section>

        <section className="habilidades" id="minhasHabilidades">
          <h1 className="titulosSecoes">Minhas habilidades</h1>
          <img className="logoTecnologias" src={html} alt="" />
          <img className="logoTecnologias" src={css} alt="" />
          <img className="logoTecnologias" src={js} alt="" />
          <img className="logoTecnologias" src={react} alt="" />
        </section>
        </main>

        <footer>
          <p>&copy; 2023 Tiago Tomé.</p>
        </footer>
    </>
  )
}

export default Home