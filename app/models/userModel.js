const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const usersSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
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
        enum: ['hombre', 'mujer', 'otro', 'prefiero-no-decirlo'],
        required: true
    }
});

usersSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('contrasenia')) return next();

    const salt = await bcrypt.genSalt(10);
    user.contrasenia = await bcrypt.hash(user.contrasenia, salt);
    next();
});

usersSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.contrasenia);
};

module.exports = model('Users', usersSchema);
