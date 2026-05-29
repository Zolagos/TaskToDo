import homeView from "../views/homeView.js";


export function loginController(appContainer) {
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');
    const formLogin = document.getElementById('form-login');
    const submitBtn = document.getElementById('submit-btn');


    formLogin.addEventListener("submit", (event)=> {
        event.preventDefault()
        if (!inputEmail.value || !inputPassword.value) {
            alert("Los campos no pueden estar vacíos")
        }

        alert("Has iniciado sesión correctamente")
        console.log("home view:", homeView())
        appContainer.innerHTML = homeView();

    })
}