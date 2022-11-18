var cadastro_link = document.querySelector('.a1');
var login_link = document.querySelector('.a2');

var cadastro_form = document.querySelector('.cadastro-form');
var login_form = document.querySelector('.login-form');

login_link.addEventListener('click', cadastro_hide);
cadastro_link.addEventListener('click', login_hide);

function cadastro_hide(){
    cadastro_form.style.display = "none";
    login_form.style.display = "block";
    cadastro_link.style.background = "#34495e";
    login_link.style.background = "#2981bc";
}
function login_hide(){
    login_form.style.display = "none";
    cadastro_form.style.display = "block";
    login_link.style.background = "#34495e";
    cadastro_link.style.background = "#2981bc";
}