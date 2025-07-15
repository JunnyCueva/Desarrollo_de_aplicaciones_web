function mostrarAlerta() {
  alert("¡Gracias por visitar nuestra web!");
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Limpiar errores
  document.getElementById("errorNombre").textContent = "";
  document.getElementById("errorEmail").textContent = "";
  document.getElementById("errorMensaje").textContent = "";

  let nombre = document.getElementById("nombre").value.trim();
  let email = document.getElementById("email").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();
  let valid = true;

  if (nombre === "") {
    document.getElementById("errorNombre").textContent = "El nombre es obligatorio.";
    valid = false;
  }

  if (email === "" || !email.includes("@")) {
    document.getElementById("errorEmail").textContent = "Correo válido requerido.";
    valid = false;
  }

  if (mensaje === "") {
    document.getElementById("errorMensaje").textContent = "Escribe un mensaje.";
    valid = false;
  }

  if (valid) {
    alert("Formulario enviado correctamente.");
    document.getElementById("contactForm").reset();
  }
});
