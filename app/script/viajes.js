// Importa el módulo data_handler que contiene las funciones relacionadas con hoteles y viajes
const dataHandler = require('../controllers/data_handler');

document.addEventListener('DOMContentLoaded', function () {
  // Obtén la tabla y el cuerpo de la tabla
  const table = document.getElementById('viajesTable');
  const tbody = table.querySelector('tbody');

  // Función para agregar una nueva fila a la tabla
  function addRow(idViaje, playa, hotel, numNoches, numPersonas, precioNoche) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${idViaje}</td>
        <td>${playa}</td>
        <td>${hotel}</td>
        <td>${numNoches}</td>
        <td>${numPersonas}</td>
        <td class="total">${calcularTotal(numNoches, numPersonas, precioNoche)}</td>
        <td><button onclick="eliminarViaje(this)">Eliminar</button></td>
        `;
    tbody.appendChild(newRow);
  }

  // Función para eliminar una fila de la tabla
  window.eliminarViaje = function (button) {
    const row = button.closest('tr');
    const idViaje = row.querySelector('td').textContent;

    // Llama a la función para eliminar el viaje del sistema de manejo de datos
    dataHandler.deleteViaje(idViaje);

    tbody.removeChild(row);
  }

  // Función para calcular el total y actualizar la columna correspondiente
  function calcularTotal(numNoches, numPersonas, precioNoche) {
    const total = numNoches * numPersonas * precioNoche;
    return total;
  }

  // Llama a la función para obtener la lista de viajes y mostrarlos en la tabla
  function cargarViajesEnTabla() {
    const viajes = dataHandler.getViajes();

    // Recorre la lista de viajes y agrega cada uno a la tabla
    for (const viaje of viajes.viajes) {
      addRow(
        viaje._uuid,
        viaje.playa,
        viaje.hotel,
        viaje.numNoches,
        viaje.numPersonas,
        viaje.precioNoche
      );
    }
  }

  // Llama a la función para cargar y mostrar los viajes en la tabla cuando se carga la página
  cargarViajesEnTabla();
});
