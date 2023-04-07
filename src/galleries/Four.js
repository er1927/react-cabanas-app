import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://res.cloudinary.com/dtjithnco/image/upload/v1680884219/4-pax00_txqbvu.jpg"
  },
  {
    original:
      "https://res.cloudinary.com/dtjithnco/image/upload/v1680884219/4-pax01_mes5k1.jpg"
  },
  {
    original:
      "https://res.cloudinary.com/dtjithnco/image/upload/v1680884218/4-pax02_j1wblm.jpg"
  },
  {
    original:
      "https://res.cloudinary.com/dtjithnco/image/upload/v1680884220/4-pax03_jmzifu.jpg"
  }
];

class GalleryFour extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default GalleryFour;
