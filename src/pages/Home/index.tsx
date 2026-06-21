import { useState } from 'react'
import './style.css'



function Home({ aoNavegar }: { aoNavegar: (pagina: 'home' | 'login') => void }) {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isPesquisaActive, setIsPesquisaActive] = useState(false);


  const toggleNavbar = () => {
    setIsNavActive(prev => !prev);
  };

  const togglePesquisa = () => {
    setIsPesquisaActive(prev => !prev);
  };

  return (
        <>
        <header className="header">
          <nav className={`navbar ${isNavActive ? 'active' : ''}`}>
  <div className="logo">PETSHOP</div>
  

  <button className="hamburger" onClick={toggleNavbar}></button>

            <ul className="nav-links">
              <li className="link-escrito"><a href="#">Home</a></li>
              <li className="link-escrito"><a href="#Servicos">Serviços</a></li>
              <li className="link-escrito"><a href="#produtos">Categorias</a></li>
              
              <li>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    aoNavegar('login');
                  }}
                >
                  <span className="material-symbols-outlined">person</span>
                </a>
              </li>

              <li>
                <button id="abrirCarrinho" className="botaoIcone">
                  <span className="material-symbols-outlined">shopping_bag</span>
                </button>
              </li>

              <li>
              
                <div className={`pesquisa ${isPesquisaActive ? 'active' : ''}`}>
                  
                  <button className="botaopesquisa" onClick={togglePesquisa}>
                    <span className="material-symbols-outlined">search</span>
                  </button>
                  <input type="text" placeholder="Pesquisar..."/>
                </div>
              </li>
            </ul>
          </nav>
        </header>
        
        <main>
          <section className="hero">
            <div className="hero-content">
              <h1>O melhor cuidado para seu pet</h1>
              <p>
                Banho, tosa, acessórios e carinho para o seu companheiro.
              </p>
            </div>
          </section>
        </main>    
        
        <footer>
          <div id="conteudo_footer">
            <div id="contatos_footer">
              <h2>Petshop</h2>
              <p>O melhor cuidado para o seu pet</p>
              <div id="redes_sociais">
                <a href="#" className="footer-link" id="instagram"> 
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="footer-link" id="facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="footer-link" id="whatsapp">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>
            <ul className="footer-list"> 
              <li><h3>Políticas</h3></li>
              <li><a href="#" className="footer-link">Política de Cookies</a></li>
              <li><a href="#" className="footer-link">Política de Privacidade</a></li>
              <li><a href="#" className="footer-link">Entregas</a></li>
              <li><a href="#" className="footer-link">Pagamentos e Reembolsos</a></li>
              <li><a href="#" className="footer-link">Frete grátis</a></li>
            </ul>
            <ul className="footer-list"> 
              <li><h3>Dúvidas</h3></li>
              <li><a href="#" className="footer-link">Trocas e Devoluções</a></li>
              <li><a href="#" className="footer-link">Ouvidoria</a></li>
              <li><a href="#" className="footer-link">Fale conosco</a></li>
              <li><a href="#" className="footer-link">Como comprar</a></li>
            </ul>
            <ul className="footer-list">
              <li><h3>Sobre</h3></li>
              <li><a href="#" className="footer-link">Quem somos</a></li>
            </ul>
          </div>
          <div id="footer_copyright">
            Copyright &#169; 2026 Todos os direitos reservados
          </div>
        </footer>
    </>
  )
}

export default Home