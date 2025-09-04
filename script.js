let tarifa = localStorage.getItem("tarifa") || 0.0125;

const clpInput = document.getElementById("clpInput");
const bobInput = document.getElementById("bobInput");
const resultadoCLP = document.getElementById("resultadoCLP");
const resultadoBOB = document.getElementById("resultadoBOB");

function actualizarDesdeCLP() {
  const clp = parseFloat(clpInput.value);
  if (!isNaN(clp)) {
    const bob = clp * tarifa;
    bobInput.value = bob.toFixed(2);
    resultadoCLP.textContent = `Recibirá: Bs ${bob.toFixed(2)}`;
    resultadoBOB.textContent = "";
  }
}

function actualizarDesdeBOB() {
  const bob = parseFloat(bobInput.value);
  if (!isNaN(bob)) {
    const clp = bob / tarifa;
    clpInput.value = clp.toFixed(0);
    resultadoBOB.textContent = `Debe enviar: $${clp.toFixed(0)}`;
    resultadoCLP.textContent = "";
  }
}

clpInput.addEventListener("input", actualizarDesdeCLP);
bobInput.addEventListener("input", actualizarDesdeBOB);

// Panel oculto con Ctrl + M
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "m") {
    const pass = prompt("Ingrese contraseña:");
    if (pass === "Multiserviciosortiz202518Abril") {
      document.getElementById("adminPanel").style.display = "block";
      document.getElementById("tarifaInput").value = tarifa;
    }
  }
});

function guardarTarifa() {
  const nuevaTarifa = parseFloat(document.getElementById("tarifaInput").value);
  if (!isNaN(nuevaTarifa)) {
    tarifa = nuevaTarifa;
    localStorage.setItem("tarifa", tarifa);
    alert("Tarifa actualizada correctamente.");
    document.getElementById("adminPanel").style.display = "none";
    actualizarDesdeCLP();
  }
}
