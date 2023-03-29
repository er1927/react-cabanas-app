import React from "react"
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://scontent.fmdz10-1.fna.fbcdn.net/v/t39.30808-6/336900352_1931514523867143_2030649644087742501_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=cUebedn1U9QAX9-28Lx&_nc_ht=scontent.fmdz10-1.fna&oh=00_AfDfeTA6hxHwLTFCUJJkHlf5YF6DL_NXduSgcrl7c_7Buw&oe=642A3826'
  },
  {
    original: 'https://scontent.fmdz10-1.fna.fbcdn.net/v/t39.30808-6/337286306_750353716537418_8346631963726892948_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=3Y-gml8amjgAX-veima&_nc_ht=scontent.fmdz10-1.fna&oh=00_AfBmxHXooyWW2U2PAyZlMQI85CQDHdE4RYJYSZPZ3h6RYQ&oe=64299229'
  },
  {
    original: 'https://scontent.fmdz10-1.fna.fbcdn.net/v/t39.30808-6/334979925_544958551095206_283707215555877169_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=jEGNvusKeOoAX9ejzU_&_nc_ht=scontent.fmdz10-1.fna&oh=00_AfB9gQcwpd7UAKTelb1oH_ZDYnsSWX3cXp_utoU4Od7n5w&oe=6428BDE1'
  },
  {
    original: 'https://scontent.fmdz10-1.fna.fbcdn.net/v/t39.30808-6/334994828_162164033312864_2891377504372373546_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=0_zzfCTxQUYAX-HwnXv&_nc_ht=scontent.fmdz10-1.fna&oh=00_AfADgT1vALsBryal1WOuHkqRey4zKYyOfV_3eShKCJsjGA&oe=6429E770'
  },
    {
    original: 'https://scontent.fmdz10-1.fna.fbcdn.net/v/t39.30808-6/335664845_3480028495567784_6477154431032427584_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=w6gME_RpvK0AX83hsm4&_nc_ht=scontent.fmdz10-1.fna&oh=00_AfCLkCbA8LcuR82-FCKQ2oZDuPWYsrIXHK5ATy9G9CH5wQ&oe=64297FD8'
  },
  {
    original:'https://scontent.fmdz10-1.fna.fbcdn.net/v/t39.30808-6/333875234_1550850502107950_7935751128916359664_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=nrE_5XaAa9wAX_2SNLR&_nc_ht=scontent.fmdz10-1.fna&oh=00_AfAo9eg877QBhBmvHbiwj7Z5Eh3vFCisMHpkwDgKw6q2AA&oe=642909DD'
  }
];

class GalleryFive extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default GalleryFive
