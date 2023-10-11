const btnSignIn = document.getElementById("sign-in"),
     btnSignUp = document.getElementById("sign-up"),
     formRegister = document.querySelector(".register"),
     formLogin = document.querySelector(".login");
 
btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide")
})


btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide")
})








const form = document.querySelector("form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const usuario = document.querySelector("input[name='usuario']").value;
    const correo = document.querySelector("input[name='correo']").value;
    const contraseña = document.querySelector("input[name='contraseña']").value;

    // Validación de usuario
    if (usuario.length < 3 || usuario.length > 15) {
      alert("El usuario debe tener entre 3 y 15 caracteres.");
      return;
    }

    // Validación de correo electrónico
    if (!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/.test(correo)) {
      alert("El correo electrónico no es válido.");
      return;
    }

    // Validación de contraseña
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=])[a-zA-Z0-9@#$%^&+=]{8,15}/.test(contraseña)) {
      alert("La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula, un número y un símbolo especial.");
      return;
    }

    // Mostrar la información ingresada en un alert
    alert("Usuario: " + usuario + "\nCorreo electrónico: " + correo + "\nContraseña: " + contraseña);
  });