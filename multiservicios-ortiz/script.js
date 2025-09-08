// Recuperar tarifa guardada o usar la predeterminada
let rate = localStorage.getItem("exchangeRate")
  ? parseFloat(localStorage.getItem("exchangeRate"))
  : 0.016;

const clpInput = document.getElementById("clp");
const bobInput = document.getElementById("bob");

// Conversión automática CLP → BOB
clpInput.addEventListener("input", () => {
  const clp = parseFloat(clpInput.value);
  if (!isNaN(clp)) {
    bobInput.value = (clp * rate).toFixed(2);
  } else {
    bobInput.value = "";
  }
});

// Conversión automática BOB → CLP
bobInput.addEventListener("input", () => {
  const bob = parseFloat(bobInput.value);
  if (!isNaN(bob)) {
    clpInput.value = (bob / rate).toFixed(2);
  } else {
    clpInput.value = "";
  }
});

// Atajo oculto Ctrl+M para cambiar tarifa (con contraseña)
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key.toLowerCase() === "m") {
    const password = prompt("🔒 Ingresa la contraseña para modificar la tarifa:");
    if (password === "Multiserviciosortiz2025sep") {
      const newRate = prompt("Ingresa la nueva tarifa (1 CLP = ? BOB):", rate);
      if (newRate && !isNaN(parseFloat(newRate))) {
        rate = parseFloat(newRate);
        localStorage.setItem("exchangeRate", rate);
        alert("✅ Tarifa actualizada a: 1 CLP = " + rate + " BOB");
        // recalcular si ya hay valores
        if (clpInput.value) {
          clpInput.dispatchEvent(new Event("input"));
        }
        if (bobInput.value) {
          bobInput.dispatchEvent(new Event("input"));
        }
      }
    } else if (password !== null) {
      alert("❌ Contraseña incorrecta. No se puede modificar la tarifa.");
    }
  }
});
