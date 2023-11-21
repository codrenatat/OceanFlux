function showMisViajes(viajes = []) {
  const tablaViajes = document.getElementById("tablaViajes");

  tablaViajes.innerHTML = "";

  viajes.forEach((viaje) => {
    let total = Number(viaje.numNoches || 1) * Number(viaje.total) * Number(viaje.numPersonas || 1);
    console.log(viaje);
    const fila = document.createElement("tr");

    const idViaje = document.createElement("td");
    idViaje.textContent = viaje._id;
    fila.appendChild(idViaje);

    const playa = document.createElement("td");
    playa.textContent = viaje.playa;
    fila.appendChild(playa);

    const hotel = document.createElement("td");
    hotel.textContent = viaje.hotel;
    fila.appendChild(hotel);

    const precioxnoche = document.createElement("td");
    precioxnoche.className = "precioxnoche";
    precioxnoche.textContent = viaje.total;
    fila.appendChild(precioxnoche);

    const numNoches = document.createElement("td");
    const numNochesInput = document.createElement("input");
    numNochesInput.type = "number";
    numNochesInput.min = "1";
    numNochesInput.className = "form-control numNoches";
    numNochesInput.value = viaje.numNoches || 1;
    numNochesInput.addEventListener("input", recalculateTotal);
    numNoches.appendChild(numNochesInput);
    fila.appendChild(numNoches);

    const numPersonas = document.createElement("td");
    const numPersonasInput = document.createElement("input");
    numPersonasInput.type = "number";
    numPersonasInput.min = "1";
    numPersonasInput.className = "form-control numPersonas";
    numPersonasInput.value = viaje.numPersonas || 1;
    numPersonasInput.addEventListener("input", recalculateTotal);
    numPersonas.appendChild(numPersonasInput);
    fila.appendChild(numPersonas);

    const totalEl = document.createElement("td");
    totalEl.textContent = total;
    fila.appendChild(totalEl);

    tablaViajes.appendChild(fila);
  });
}

function recalculateTotal(event) {
  const row = event.target.closest("tr");
  const numNoches = Number(row.querySelector(".numNoches").value);
  const numPersonas = Number(row.querySelector(".numPersonas").value);
  const precioxnoche = Number(row.querySelector(".precioxnoche").innerText);
  const total = numNoches * precioxnoche * numPersonas;
  row.querySelector("td:last-child").textContent = total;
}

document.addEventListener("DOMContentLoaded", () => {
  obtenerYMostrarMisViajes();
});

async function obtenerYMostrarMisViajes() {
  try {
    const usuarioId = "usuario123";

    const response = await fetch(
      `http://localhost:3000/viajes?usuario=${usuarioId}`
    );
    const viajes = await response.json();
    showMisViajes(viajes);
  } catch (error) {
    console.error("Error al obtener mis viajes:", error);
  }
}
