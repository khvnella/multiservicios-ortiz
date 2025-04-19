const claveCorrecta = "Multiserviciosortiz202518Abril";

// Recuperar el valor guardado (si existe)
let cambio = localStorage.getItem("cambioValor");
if (!cambio) {
  cambio = 0.0125; // valor inicial si no hay guardado
} else {
  cambio = parseFloat(cambio);
}
mostrarCambioActual();

function convertirCLPaBOB() {
  const clp = parseFloat(document.getElementById("clp").value);
  if (isNaN(clp)) return alert("Ingresa un monto válido en CLP.");
  const bob = clp * cambio;
  document.getElementById("resultado-clp").innerText = `Recibirías: ${bob.toFixed(2)} BOB`;
}

function convertirBOPaCLP() {
  const bob = parseFloat(document.getElementById("bob").value);
  if (isNaN(bob)) return alert("Ingresa un monto válido en BOB.");
  const clp = bob / cambio;
  document.getElementById("resultado-bob").innerText = `Debes enviar: ${clp.toFixed(2)} CLP`;
}

function verificarClave() {
  const clave = document.getElementById("clave").value;
  if (clave === claveCorrecta) {
    document.getElementById("acceso").classList.add("oculto");
    document.getElementById("panel").classList.remove("oculto");
  } else {
    alert("Clave incorrecta.");
  }
}

function guardarNuevoCambio() {
  const nuevoCambio = parseFloat(document.getElementById("nuevoCambio").value);
  if (isNaN(nuevoCambio) || nuevoCambio <= 0) {
    alert("Ingresa un valor válido para el cambio.");
    return;
  }
  cambio = nuevoCambio;
  localStorage.setItem("cambioValor", cambio.toString());
  mostrarCambioActual();
  alert("¡Nuevo valor guardado con éxito!");
}

function mostrarCambioActual() {
  const p = document.getElementById("cambioActual");
  if (p) {
    p.innerText = `Valor actual: ${cambio.toFixed(4)} CLP → 1 BOB`;
  }
}

// Atajo secreto: Ctrl + M
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key.toLowerCase() === "m") {
    const acceso = document.getElementById("acceso");
    acceso.classList.toggle("oculto");

    // Limpiar clave cada vez que se abre
    document.getElementById("clave").value = "";
  }
});
