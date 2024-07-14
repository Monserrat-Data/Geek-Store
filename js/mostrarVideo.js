import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

// Función para crear una tarjeta de video
function crearCard(url,titulo,descripcion) {
    const video = document.createElement("li");
    video.className = "card";
    video.innerHTML = `
        <img src="${url}" class="img__producto">
        <div class="nombre__producto">
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
        </div>`;

    return video;
}

async function listarVideo() {
    const listAPI = await conexionAPI.listarVideo()

    listAPI.forEach(video=>lista.appendChild(crearCard(video.url,video.titulo,video.descripcion)))

    lista.appendChild(fragment);


}

