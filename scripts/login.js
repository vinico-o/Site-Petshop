const body = document.body;
const caixaLogin = document.querySelector(".caixa-login");
const h1 = document.getElementsByTagName( "h1")[0];
const inputs = document.querySelectorAll( "input");
const loginButton = document.querySelector(".login-button");

const usuarios = [
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

function switchTheme(){
    caixaLogin.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");
    inputs.forEach(input => {
        input.classList.toggle("dark-mode");
    });
    loginButton.classList.toggle("dark-mode");
}

loginButton.addEventListener("click", function(event){

    event.preventDefault();

    const usuarioDigitado =
        document.getElementById("usuario").value;

    const senhaDigitada =
        document.getElementById("senha").value;

    let autenticado = false;

    for(let i = 0; i < usuarios.length; i++){

        if(
            usuarios[i].usuario === usuarioDigitado &&
            usuarios[i].senha === senhaDigitada
        ){
            autenticado = true;
            break;
        }
    }

    if(autenticado){
        alert("Login realizado!");

        window.location.href = "index.html";
    }
    else{
        alert("Usuário ou senha incorretos.");
    }

});