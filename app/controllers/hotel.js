const UUID = require("./utils");

class HotelException {
  constructor(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

class Hotel {
  constructor(nombreHotel, playa, precioxnoche, convenio) {
    this._uuid = UUID(); // Asumo que tienes una función UUID que genera un identificador único

    this._nombreHotel = nombreHotel;
    this._playa = playa;
    this._precioxnoche = precioxnoche;
    this._convenio = convenio;
  }

  // Getter y Setter para nombreHotel
  get nombreHotel() {
    return this._nombreHotel;
  }
  set nombreHotel(newNombreHotel) {
    if (typeof newNombreHotel !== "string" || newNombreHotel.trim() === "") {
      throw new HotelException("Nombre del hotel no puede estar vacío.");
    }
    this._nombreHotel = newNombreHotel;
  }

  // Getter y Setter para playa
  get playa() {
    return this._playa;
  }
  set playa(newPlaya) {
    if (typeof newPlaya !== "string" || newPlaya.trim() === "") {
      throw new HotelException("Nombre de la playa no puede estar vacío.");
    }
    this._playa = newPlaya;
  }

  // Getter y Setter para precioxnoche
  get precioxnoche() {
    return this._precioxnoche;
  }
  set precioxnoche(newPrecioxNoche) {
    if (typeof newPrecioxNoche !== "number" || isNaN(newPrecioxNoche)) {
      throw new HotelException("Precio por noche debe ser un número válido.");
    }
    this._precioxnoche = newPrecioxNoche;
  }

  // Getter y Setter para convenio
  get convenio() {
    return this._convenio;
  }
  set convenio(newConvenio) {
    if (typeof newConvenio !== "string" || newConvenio.trim() === "") {
      throw new HotelException("Convenio no puede estar vacío.");
    }
    this._convenio = newConvenio;
  }

  get uuid() {
    return this._uuid;
  }

  static createFromJSON(stringHotel) {
    try {
      let hotelData = JSON.parse(stringHotel);
      return new Hotel(
        hotelData.nombreHotel,
        hotelData.playa,
        hotelData.precioxnoche,
        hotelData.convenio
      );
    } catch (error) {
      throw new HotelException("Error al analizar el JSON");
    }
  }

  static createFromObject(obj) {
    this.cleanObject(obj);
    return new Hotel(
      obj.nombreHotel,
      obj.playa,
      obj.precioxnoche,
      obj.convenio
    );
  }

  static cleanObject(obj) {
    let validKeys = ["nombreHotel", "playa", "precioxnoche", "convenio"];
    let cleanObject = {};
    for (let key of validKeys) {
      if (obj.hasOwnProperty(key)) {
        cleanObject[key] = obj[key];
      }
    }
    return cleanObject;
  }
}

module.exports = Hotel;
