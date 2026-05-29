import './style.css'
import loginView from './views/loginView.js';
import notFoundView from './views/notFoundView.js';
import homeView from './views/homeView.js';
import { loginController } from './controllers/login.controller.js';


const appContainer = document.getElementById('app');

const router = {
    login:{
        vista:loginView,
        //controlador:loginController
    }
};

export function hola (){
    const user = JSON.parse(localStorage.getItem('user'));

    const ubicacion = document.location.hash.replace('#', "")

    appContainer.innerHTML = loginView()
    console.log("llamando al login controller")
    loginController(appContainer)


}

document.addEventListener("DOMContentLoaded", ()=> {
    hola()
})
