$(document).ready(function() {
    $("#loginButton").click(function() {
        iniciarSesion();
    });

    $("#signupButton").click(function() {
        registrarUsuario();
    });
});

function iniciarSesion() {
    console.log("Iniciando sesión...");
    // Mostrar el spinner de carga
    document.getElementById("loadingSpinner").style.display = "inline-block";

    // Recolectar datos del formulario
    const usuario = document.getElementById("usuario").value;
    const contrasenia = document.getElementById("password").value;

    // Enviar datos al servidor
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/login",
        data: {
            usuario,
            contrasenia
        },
        success: function (response) {
            console.log("Inicio de sesión exitoso:", response);
        },
        error: function (error) {
            console.error("Error al iniciar sesión:", error);
        },
        complete: function () {
            document.getElementById("loadingSpinner").style.display = "none";
        }
    });
}

function registrarUsuario() {
    console.log("Registro...");
    document.getElementById("loadingS").style.display = "inline-block";
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const contrasenia = document.getElementById("newpassword").value;
    const edad = document.getElementById("edad").value;
    const genero = document.getElementById("genero").value;

    $.ajax({
        type: "POST",
        url: "http://localhost:3000/register",
        data: {
            nombre,
            correo,
            contrasenia,
            edad,
            genero
        },
        success: function (response) {
            console.log("Usuario registrado con éxito:", response);
        },
        error: function (error) {
            console.error("Error al registrar usuario:", error);
        },
        complete: function () {
            document.getElementById("loadingS").style.display = "none";
        }
    });
}

