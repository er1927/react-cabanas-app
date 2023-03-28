import React from "react"

export default function Location() {
    return(
        <div class="map-container" id="location">
            <div class="map">
                <h2>Ubicacion</h2>
                <h3>A solo 2 minutos en auto al centro de El Bolson</h3>
                <p>A tan sólo 1,5 Km. de El Bolsón, tomando la Ruta 40, luego doblando a la izquierda por la Subida Los Maitenes y a 500 metros de la Ruta, estará en el mejor lugar para descansar.</p>
            </div>
            <div class="map-embeded">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14108.321933323688!2d-71.51168822871365!3d-41.98075633929141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961b959b3d4c6395%3A0xc1ed56785dce5b7b!2sCaba%C3%B1as%20Iris!5e0!3m2!1sen!2sar!4v1680034035203!5m2!1sen!2sar" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"/>
            </div>
        </div>
    )
}