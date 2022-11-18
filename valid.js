var nome = document.forms['cadastroForm']['nome'];
var sobrenome = document.forms['cadastroForm']['sobrenome'];
var email = document.forms['cadastroForm']['email'];
var senha = document.forms['cadastroForm']['senha'];

var emailLogin = document.forms['loginForm']['emailLogin'];
var senhaLogin = document.forms['loginForm']['senhaLogin'];

var cadastro_erro = document.querySelector('.cadastro_erro');
var login_erro = document.querySelector('.login_erro');

nome.addEventListener('textInput', nomeVerify);
sobrenome.addEventListener('textInput', sobrenomeVerify);
email.addEventListener('textInput', emailVerify);
senha.addEventListener('textInput', senhaVerify);
emailLogin.addEventListener('textInput', emailLogVerify);
senhaLogin.addEventListener('textInput', senhaLogVerify);

function cadastroValid(){
    if(nome.value.length <= 2){
        cadastro_erro.style.display = "block";
        nome.style.border = "1px solid red";
        cadastro_erro.innerText = "Por favor, insira seu nome";
        nome.focus();
        return false;
    }
    if(sobrenome.value.length <= 2){
        cadastro_erro.style.display = "block";
        sobrenome.style.border = "1px solid red";
        cadastro_erro.innerText = "Por favor, insira seu sobrenome";
        sobrenome.focus();
        return false;
    }
    if(email.value.length <= 8){
        cadastro_erro.style.display = "block";
        email.style.border = "1px solid red";
        cadastro_erro.innerText = "Por favor, insira seu email";
        email.focus();
        return false;
    }
    if(senha.value.length <= 5){
        cadastro_erro.style.display = "block";
        senha.style.border = "1px solid red";
        cadastro_erro.innerText = "Senha muito pequena";
        senha.focus();
        return false;
    }
}
function loginValid(){
    if(emailLogin.value.length <= 8){
        login_erro.style.display = "block";
        emailLogin.style.border = "1px solid red";
        login_erro.innerText = "Por favor, insira seu email";
        emailLogin.focus();
        return false;
    }
    if(senhaLogin.value.length <= 5){
        login_erro.style.display = "block";
        senhaLogin.style.border = "1px solid red";
        login_erro.innerText = "Por favor, insira sua senha";
        senhaLogin.focus();
        return false;
    }
}
function nomeVerify(){
    if(nome.value.length > 2){
        nome.style.border = "1px solid #3498db";
        cadastro_erro.style.display = "none";
        return true;
    }
}
function sobrenomeVerify(){
    if(sobrenome.value.length > 2){
        sobrenome.style.border = "1px solid #3498db";
        cadastro_erro.style.display = "none";
        return true;
    }
}
function emailVerify(){
    if(email.value.length > 8){
        email.style.border = "1px solid #3498db";
        cadastro_erro.style.display = "none";
        return true;
    }
}
function senhaVerify(){
    if(senha.value.length > 5){
        senha.style.border = "1px solid #3498db";
        cadastro_erro.style.display = "none";
        return true;
    }
}
function emailLogVerify(){
    if(emailLogin.value.length > 8){
        emailLogin.style.border = "1px solid #3498db";
        cadastro_erro.style.display = "none";
        return true;
    }
}
function senhaLogVerify(){
    if(senhaLogin.value.length > 5){
        senhaLogin.style.border = "1px solid #3498db";
        cadastro_erro.style.display = "none";
        return true;
    }
}
