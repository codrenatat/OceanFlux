const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt')

const usersSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    correo:{
        type:String,
        required: true
    },
    contrasenia: {
        type: String,
        required: true
      },
      edad: {
        type: Number,
        min: 0,
        max: 120,
        required: true
      },
      genero: {
        type: String,
        enum: ['F', 'M'],
        required: true
      }
  });

usersSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

usersSchema.methods.matchPassword = function(password){
    return bcrypt.compare(password, this.contrasenia)
}
  
  module.exports = model('Users', usersSchema);