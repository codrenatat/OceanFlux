const UUID = require("./utils");

class HotelException {
  constructor(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

class Hotel {
  constructor(nombreHotel, playa, precioxnoche, convenio) {
    this._uuid = uuid;
    this._nombreHotel = nombreHotel;
    this._playa = playa;
    this._precioxnoche = precioxnoche;
    this._convenio = convenio;
  }

}

module.exports = Hotel;
