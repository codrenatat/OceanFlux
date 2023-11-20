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
        tbody.removeChild(row);
    }

    // Función para calcular el total y actualizar la columna correspondiente
    function calcularTotal(numNoches, numPersonas, precioNoche) {
        const total = numNoches * numPersonas * precioNoche;
        return total;
    }

    // Ejemplo de cómo llamar a la función addRow con valores
    addRow('ID123', 'Playa Ejemplo', 'Hotel Ejemplo', 3, 2, 100);
});
