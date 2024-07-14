async function listarVideo() {
    try {
        const conexion = await fetch("http://localhost:3001/video");
        if (!conexion.ok) {
            throw new Error(`Error: ${conexion.statusText}`);
        }
        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.error("Error al listar los videos:", error);
        // Manejo de errores adicional, si es necesario
    }
}

async function enviarVideo(url, titulo, descripcion) {
    try {
        const conexion = await fetch("http://localhost:3001/video", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                url: url,
                titulo: titulo,
                descripcion: descripcion
            })
        });

        if (!conexion.ok) {
            throw new Error(`Error: ${conexion.statusText}`);
        }

        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.error("Error al enviar el video:", error);
        // Manejo de errores adicional, si es necesario
    }
}

export const conexionAPI = {
    listarVideo,
    enviarVideo
};


