import React from "react"
import GallerySix from "./Six"
import GalleryFive from "./Five"
import GalleryFour from "./Four"

export default function Cabins() {
    return(
        <div class="main" id="cabins">
        <div class="six">
          <h2>Cabaña para 6 personas</h2>
          <GallerySix />
        </div>
        <div class="five">
          <h2>Cabaña para 5 personas</h2>
          <GalleryFive />
        </div>
        <div class="four">
          <h2>Cabaña para 4 personas</h2>
          <GalleryFour />
        </div>
      </div>        
    )
}

 