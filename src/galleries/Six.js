import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://res.cloudinary.com/dtjithnco/image/upload/v1680885029/6-pax02_gpvrij.jpg"
  },
  {
    original:
      "https://res.cloudinary.com/dtjithnco/image/upload/v1680885030/6-pax01_pc18sj.jpg"
  },
  {
    original:
      "https://res.cloudinary.com/dtjithnco/image/upload/v1680885034/6-pax00_kmmssb.jpg"
  },
  {
    original:
      "https://res.cloudinary.com/dtjithnco/image/upload/v1680885041/6-pax03_f2y18b.jpg"
  }
];

class GallerySix extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default GallerySix;
