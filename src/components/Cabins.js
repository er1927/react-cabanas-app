import React from "react";
import { GalleryFour, GalleryFive, GallerySix } from "../galleries";

export default function Cabins() {
  return (
    <div className="main" id="cabins">
      <div className="six">
        <h2>Cabaña para 6 personas</h2>
        <GallerySix />
      </div>
      <div className="five">
        <h2>Cabaña para 5 personas</h2>
        <GalleryFive />
      </div>
      <div className="four">
        <h2>Cabaña para 4 personas</h2>
        <GalleryFour />
      </div>
    </div>
  );
}
