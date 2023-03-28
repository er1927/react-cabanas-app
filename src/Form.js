import React from "react"

export default function Form() {
    return (
        <div class="form">
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Apellido" />
            <input type="text" placeholder="Email" />
            <input type="number" placeholder="Telefono" />
            <input type="text" placeholder="Ciudad/Pais" />
            <input type="number" placeholder="Cantidad de pasajeros" />
            <input type="text" placeholder="Fecha de entrada" />
            <input type="text" placeholder="Fecha de salida" />
            <input type="text" placeholder="Consulta" id="consulta" />
            <input type="submit" value="Enviar consulta" />
        </div>
    )
}