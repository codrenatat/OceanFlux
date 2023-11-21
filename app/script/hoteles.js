async function MostarHoteles() {
  try {
      const response = await fetch('http://localhost:3000/hotels');
      const hoteles = await response.json();

      const contenedorHoteles = document.getElementById('contenedor-hoteles');

      contenedorHoteles.innerHTML = '';

      hoteles.forEach((hotel) => {
          const cardHotel = document.createElement('div');
          cardHotel.classList.add('card2');

          cardHotel.innerHTML = `
              <div class="card2-content">
                  <h41 class="card2-title">HOTEL:</h41><h14>${hotel.nombreHotel}<br></h14>
                  <h41 class="card2-title">PLAYA:</h41><h14>${hotel.playa}<br></h14>
                  <h41 class="card2-title">PRECIO x NOCHE:</h41><h14>${hotel.precioxnoche} MXN<br></h14>
                  <h41 class="card2-title">CONVENIO:</h41><h14>${hotel.convenio}<br></h14>

                  <button type="button" class="btn btn-primary" onclick="addHotel('${hotel._id}', '${hotel.nombreHotel}', '${hotel.playa}', ${hotel.precioxnoche})">
                      Agregar a mi viaje!
                  </button>
              </div>
          `;

          contenedorHoteles.appendChild(cardHotel);
      });
  } catch (error) {
      console.error('Error al obtener hoteles desde el servidor:', error);
  }
}
MostarHoteles();

