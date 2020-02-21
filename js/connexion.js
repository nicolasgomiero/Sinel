var n1 = document.querySelector('#oubli');
var login = document.querySelector('#login');
    n1.addEventListener('click', motDePasseOublie);

function motDePasseOublie() {
    alert(login.value + ", récupération du mot de passe envoyé sur votre email.")
}