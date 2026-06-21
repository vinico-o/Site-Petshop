import { useState } from 'react';
import './login.css';

interface Usuario {
    usuario: string;
    senha: string;
}

export function Login({ aoNavegar }: { aoNavegar: (pagina: 'home' | 'login') => void }) {
    
    const [usuarioDigitado, setUsuarioDigitado] = useState('');
    const [senhaDigitada, setSenhaDigitada] = useState('');


    const [isDarkMode, setIsDarkMode] = useState(false);


    const usuarios: Usuario[] = [
        { usuario: "dani", senha: "1234" },
        { usuario: "tasso", senha: "1234" },
        { usuario: "mardegan", senha: "1234" }
    ];


    const switchTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

  
    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();

        let autenticado = false;

        for (const usuario of usuarios) {
            if (usuario.usuario === usuarioDigitado && usuario.senha === senhaDigitada) {
                autenticado = true;
                break;
            }
        }

        if (autenticado) {
            alert("Login realizado!");
            aoNavegar('home');
        } else {
            alert("Usuário ou senha incorretos.");
        }
    };

    const classeDark = isDarkMode ? 'dark-mode' : '';

    return (
        <>
            <div className={`login-page-wrapper ${classeDark}`} style={{ minHeight: '100vh' }}>
                <div className="tema">
                    <label className="switch">
                        <input
                            type="checkbox"
                            id="theme-toggle"
                            checked={isDarkMode}
                            onChange={switchTheme}
                        />
                        <span className="slider"></span>
                    </label>
                </div>

                <div className={`caixa-login ${classeDark}`}>
          <h1 className={classeDark}>Entrar</h1>
          
          <form onSubmit={handleLogin}>
            <input 
              type="text" 
              placeholder="Nome de Usuário"
              id="usuario" 
              className={`login-input ${classeDark}`}
              value={usuarioDigitado}
              onChange={(e) => setUsuarioDigitado(e.target.value)}
            />
            
            <input 
              type="password" 
              placeholder="Senha"
              id="senha"
              className={`login-input ${classeDark}`}
              value={senhaDigitada}
              onChange={(e) => setSenhaDigitada(e.target.value)}
            />
            
            <button type="submit" className={`login-button ${classeDark}`}>
              Entrar
            </button>
          </form>
        </div>
            </div>
        </>
    );
}

export default Login;