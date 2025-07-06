const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const edad = document.getElementById("edad");
const btnSubmit = document.getElementById("btn-submit");

const errorNombre = document.getElementById("error-nombre");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");
const errorConfirm = document.getElementById("error-confirm");
const errorEdad = document.getElementById("error-edad");

function validarNombre() {
  if (nombre.value.length < 3) {
    errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
    return false;
  }
  errorNombre.textContent = "";
  return true;
}

function validarEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value)) {
    errorEmail.textContent = "Correo electrónico no válido.";
    return false;
  }
  errorEmail.textContent = "";
  return true;
}

function validarPassword() {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
  if (password.value.length < 8 || !regex.test(password.value)) {
    errorPassword.textContent = "Debe tener al menos 8 caracteres, un número y un carácter especial.";
    return false;
  }
  errorPassword.textContent = "";
  return true;
}

function validarConfirmPassword() {
  if (confirmPassword.value !== password.value) {
    errorConfirm.textContent = "Las contraseñas no coinciden.";
    return false;
  }
  errorConfirm.textContent = "";
  return true;
}

function validarEdad() {
  if (parseInt(edad.value) < 18) {
    errorEdad.textContent = "Debes tener al menos 18 años.";
    return false;
  }
  errorEdad.textContent = "";
  return true;
}

function validarFormulario() {
  const validaciones = [
    validarNombre(),
    validarEmail(),
    validarPassword(),
    validarConfirmPassword(),
    validarEdad()
  ];

  btnSubmit.disabled = !validaciones.every(v => v);
}

nombre.addEventListener("input", validarFormulario);
email.addEventListener("input", validarFormulario);
password.addEventListener("input", validarFormulario);
confirmPassword.addEventListener("input", validarFormulario);
edad.addEventListener("input", validarFormulario);

document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Formulario enviado con éxito 🎉");
});
