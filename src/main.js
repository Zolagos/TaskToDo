import './style.css'
import loginView from './views/loginView';
import notFoundView from './views/notFoundView';
import homeView from './views/homeView';

const appContainer = document.getElementById('app');

const router = {
    login:{
        vista:loginView,
        controlador:loginController
    }
};

export async function hola (){
    const user = JSON.parse(localStorage.getItem('user'));

    const ubicacion = document.location.hash.replace('#', "")

    appcontainer.innerhtml = notFoundView()

}


