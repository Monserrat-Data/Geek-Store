import { conexionAPI } from "./conexionAPI.js";

// Seleccionar el formulario
const formulario = document.querySelector("[data-formulario]");

// Función para crear un video
async function crearVideo(evento) {
    evento.preventDefault();

    // Obtener valores de los campos del formulario
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    try {
        // Enviar los datos del video a la API
        await conexionAPI.enviarVideo(url, titulo, descripcion);

        // Redirigir a la página de confirmación
        window.location.href = "./envio-concluido.html";
    } catch (error) {
        console.error("Error al enviar el video:", error);
        // Aquí podrías añadir un mensaje de error para el usuario
    }
}

// Añadir el event listener al formulario
formulario.addEventListener("submit", evento=> crearVideo(evento));

