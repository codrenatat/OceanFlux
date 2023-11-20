class TravelCart {
    constructor() {
      this.viajes = [];
    }
  
    agregarViaje(hotelId, noches, numPersonas) {
      let viajeExistente = this.viajes.find((viaje) => viaje.hotelId === hotelId);
  
      if (viajeExistente) {
        // Si ya existe el viaje, actualiza la información
        viajeExistente.noches = noches;
        viajeExistente.numPersonas = numPersonas;
      } else {
        // Si no existe, agrega un nuevo viaje
        this.viajes.push({ hotelId, noches, numPersonas });
      }
    }
  
    actualizarViaje(hotelId, noches, numPersonas) {
      let viajeExistente = this.viajes.find((viaje) => viaje.hotelId === hotelId);
  
      if (viajeExistente) {
        viajeExistente.noches = noches;
        viajeExistente.numPersonas = numPersonas;
      } else {
        // Manejar el caso si el viaje no existe
        throw new TravelCartException("Viaje no encontrado.");
      }
    }
  
    eliminarViaje(hotelId) {
      let index = this.viajes.findIndex((viaje) => viaje.hotelId === hotelId);
  
      if (index !== -1) {
        this.viajes.splice(index, 1);
      } else {
        // Manejar el caso si el viaje no existe
        throw new TravelCartException("Viaje no encontrado.");
      }
    }
  
    calcularTotal(hoteles) {
      let total = 0;
  
      for (let viaje of this.viajes) {
        let hotel = hoteles.find((h) => h._uuid === viaje.hotelId);
        if (hotel) {
          total += hotel.precioxnoche * viaje.noches * viaje.numPersonas;
        }
      }
  
      return total;
    }
  }
  
  class TravelCartException {
    constructor(errorMessage) {
      this.errorMessage = errorMessage;
    }
  }
  
  module.exports = TravelCart;
  