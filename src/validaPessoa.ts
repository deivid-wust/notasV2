function validarPessoa() {
  let usuarioExiste = false;
  let usuarioLogado: Usuario;

  const usuarioNome = document.getElementById("name") as HTMLInputElement;
  const usuarioSenha = document.getElementById("pass") as HTMLInputElement;

  var usuarios = JSON.parse(localStorage.getItem("users") || "[]");

  usuarios.forEach((usuario: Usuario) => {
    const nome = usuarioNome.value;
    const senha = usuarioSenha.value;

    if (nome == usuario.name && senha == usuario.pass) {
      usuarioLogado = usuario;
      usuarioExiste = true;
    }
  });

  if (usuarioExiste) {
    window.location.href = "home.html";
  } else {
    alert("Usuario Inexistente ou login incorreto");
  }
}
interface Usuario {
  name: string;
  pass: string;
}
