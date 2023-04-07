import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://res.cloudinary.com/dtjithnco/image/upload/v1680885042/5-pax02_wsjk71.jpg"
  },
  {
    original:
      "https://res.cloudinary.com/dtjithnco/image/upload/v1680885022/5-pax01_fm7etf.jpg"
  },
  {
    original:
      "https://res.cloudinary.com/dtjithnco/image/upload/v1680885021/5-pax03_uihfpn.jpg"
  },
  {
    original:
      "https://res.cloudinary.com/dtjithnco/image/upload/v1680885021/5-pax00_kmp7wl.jpg"
  }
];

class GalleryFive extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default GalleryFive;
