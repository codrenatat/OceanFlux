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

    // Enviar datos al servidor utilizando fetch
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            usuario,
            contrasenia,
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log("Inicio de sesión exitoso:", data);
        })
        .catch(error => {
            console.error("Error al iniciar sesión:", error);
        })
        .finally(() => {
            document.getElementById("loadingSpinner").style.display = "none";
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

    // Enviar datos al servidor utilizando fetch
    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nombre,
            correo,
            contrasenia,
            edad,
            genero,
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log("Usuario registrado con éxito:", data);
        })
        .catch(error => {
            console.error("Error al registrar usuario:", error);
        })
        .finally(() => {
            document.getElementById("loadingS").style.display = "none";
        });
}

