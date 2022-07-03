"use strict";
function validarPessoa() {
    let usuarioExiste = false;
    let usuarioLogado;
    const usuarioNome = document.getElementById("name");
    const usuarioSenha = document.getElementById("pass");
    var usuarios = JSON.parse(localStorage.getItem("users") || "[]");
    usuarios.forEach((usuario) => {
        const nome = usuarioNome.value;
        const senha = usuarioSenha.value;
        if (nome == usuario.name && senha == usuario.pass) {
            usuarioLogado = usuario;
            usuarioExiste = true;
        }
    });
    if (usuarioExiste) {
        window.location.href = "home.html";
    }
    else {
        alert("Usuario Inexistente ou login incorreto");
    }
}
