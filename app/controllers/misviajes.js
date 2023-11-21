document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("viajesTable");
  const tbody = table.querySelector("tbody");

  async function addRow(idViaje, playa, hotel, numNoches, numPersonas, precioNoche) {
    const newRow = document.createElement("tr");
    const total = calcularTotal(numNoches, numPersonas, precioNoche);

    newRow.innerHTML = `
      <td>${idViaje}</td>
      <td>${playa}</td>
      <td>${hotel}</td>
      <td>${numNoches}</td>
      <td>${numPersonas}</td>
      <td class="total">${total}</td>
      <td><button onclick="eliminarViaje(this)">Eliminar</button></td>
    `;

    tbody.appendChild(newRow);

    await actualizarTotalViajes();
  }


  async function actualizarTotalViajes() {
    try {
      const response = await fetch("http://localhost:3000/viajes");
      const viajes = await response.json();

      let totalViajes = 0;
      const resumenViajes = document.getElementById("resumenViajes");
      resumenViajes.innerHTML = "";

      viajes.forEach((viaje) => {
        const subtotal = viaje.precioxNoche * viaje.numPersonas * viaje.numNoches;
        totalViajes += subtotal;

        const detalleViaje = `${viaje.numPersonas} personas, ${viaje.numNoches} noches en ${viaje.hotel}: $${subtotal} MXN<br>`;
        resumenViajes.innerHTML += detalleViaje;
      });

      document.getElementById("totalViajes").textContent = `$${totalViajes}`;
    } catch (error) {
      console.error("Error al obtener viajes:", error);
    }
  }

  window.eliminarViaje = function (button) {
    const row = button.closest("tr");
    tbody.removeChild(row);

    actualizarTotalViajes();
  }

  function calcularTotal(numNoches, numPersonas, precioNoche) {
    const total = numNoches * numPersonas * precioNoche;
    return total;
  }
});
