import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home' // Certifique-se de usar { Home } se não for export default
import Login from './pages/Login/Login'

function App() {
  // Estado que guarda qual página está ativa: 'home' ou 'login'
  const [paginaAtual, setPaginaAtual] = useState<'home' | 'login'>('home');

  // Função para mudar de página
  const navegarPara = (pagina: 'home' | 'login') => {
    setPaginaAtual(pagina);
  };

  // Renderiza a página baseada no estado atual
  if (paginaAtual === 'login') {
    return <Login aoNavegar={navegarPara} />;
  }

  return <Home aoNavegar={navegarPara} />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)