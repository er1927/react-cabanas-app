import React from "react"

export default function Footer() {
    return(
        <div>
            <footer>
                <h2>Cabañas Iris</h2>
                    <address>
                        <div class="social-media">
                        <i class="fa-solid fa-location-dot"></i>
                        <p>Alfredo Farid Sales 1185, CP (8430) <br/>
                        El Bolsón, Río Negro. Patagonia, Argentina</p>
                        </div>
                        <div class="social-media">
                        <i class="fa-solid fa-phone"></i>
                        <p>+ 54 0294 449-2171</p>
                        </div>
                        <div class="social-media">
                        <i class="fa-solid fa-envelope"></i>
                        <p><a href="mailto:fjr_89@hotmail.com">fjr_89@hotmail.com</a></p>
                        </div>
                    </address>
            </footer>
        </div>
    )
}