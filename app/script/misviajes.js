function showMisViajes(viajes) {
    const tablaViajes = document.getElementById('tablaViajes');
  
    tablaViajes.innerHTML = '';
  
    viajes.forEach((viaje) => {
      const fila = document.createElement('tr');
  
      const idViaje = document.createElement('td');
      idViaje.textContent = viaje._uuid; 
      fila.appendChild(idViaje);
  
      const playa = document.createElement('td');
      playa.textContent = viaje.playa;
      fila.appendChild(playa);
  
      const hotel = document.createElement('td');
      hotel.textContent = viaje.hotel;
      fila.appendChild(hotel);
  
      const numNoches = document.createElement('td');
      numNoches.innerHTML = `
        <div class="input-group">
          <input type="number" class="form-control numNoches" value="${viaje.numNoches}">
        </div>`;
      fila.appendChild(numNoches);
  
      const numPersonas = document.createElement('td');
      numPersonas.innerHTML = `
        <div class="input-group">
          <input type="number" class="form-control numPersonas" value="${viaje.numPersonas}">
        </div>`;
      fila.appendChild(numPersonas);
  
      const total = document.createElement('td');
      total.textContent = viaje.total;
      fila.appendChild(total);
  
  
      tablaViajes.appendChild(fila);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    obtenerYMostrarMisViajes();
  });
  
  function obtenerYMostrarMisViajes() {
    try {
      const usuarioId = 'usuario123';
  
      const response = await fetch(`http://localhost:3000/viajes?usuario=${usuarioId}`);
      const viajes = await response.json();
      showMisViajes(viajes);
    } catch (error) {
      console.error('Error al obtener mis viajes:', error);
    }
  }

document.getElementById("tablaViajes").innerHTML = item;
  //mostramos el resumen
total();
showMisViajes();


function total(){

}

total();