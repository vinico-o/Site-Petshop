interface Usuario { //colocando usuario e senhas como strings
    usuario: string;
    senha: string;
}

const body = document.body;

const caixaLogin = document.querySelector(".caixa-login") as HTMLElement;
const h1 = document.getElementsByTagName("h1")[0];
const inputs = document.querySelectorAll("input");
const loginButton = document.querySelector(".login-button") as HTMLButtonElement;

const usuarios: Usuario[] = [
    {
        usuario: "dani",
        senha: "1234"
    },
    {
        usuario: "tasso",
        senha: "1234"
    },
    {
        usuario: "mardegan",
        senha: "1234"
    }
];

function switchTheme(): void { //void porque a função não retorna valor
    caixaLogin.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");

    inputs.forEach((input) => {
        input.classList.toggle("dark-mode");
    });

    loginButton.classList.toggle("dark-mode");
}

loginButton.addEventListener("click", function(event: MouseEvent): void { //evento de clique de mouse

    event.preventDefault();

    const usuarioDigitado =
        (document.getElementById("usuario") as HTMLInputElement).value; //elemento é campo de entrada

    const senhaDigitada =
        (document.getElementById("senha") as HTMLInputElement).value;

    let autenticado = false;

    for (let i = 0; i < usuarios.length; i++) {

        if (
            usuarios[i].usuario === usuarioDigitado &&
            usuarios[i].senha === senhaDigitada
        ) {
            autenticado = true;
            break;
        }
    }

    if (autenticado) {
        alert("Login realizado!");

        window.location.href = "../index.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }

});