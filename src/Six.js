import React from "react"
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://scontent.fmdz10-1.fna.fbcdn.net/v/t39.30808-6/337522543_155708780747087_6139746978162292202_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=tJhUd4G2XiQAX-OsA0N&_nc_ht=scontent.fmdz10-1.fna&oh=00_AfAie9GscShhAZPkN55sLVoJmDHv0XVADQHroUfYs3PKZg&oe=64289B10',
  },
  {
    original: 'https://scontent.fmdz10-1.fna.fbcdn.net/v/t39.30808-6/337817555_157081223936925_8068359242080445306_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=bpcMMN1KDSoAX9FsDmU&_nc_ht=scontent.fmdz10-1.fna&oh=00_AfAalePNs7UQ2WUtmw8_MJEClnobz9A_fQe7G9iLOQVJRA&oe=64287879',
  },
  {
    original: 'https://scontent.fmdz10-1.fna.fbcdn.net/v/t39.30808-6/336901663_241286665009448_4895853677100486317_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=gXebtToYgMYAX-fvd2Q&_nc_ht=scontent.fmdz10-1.fna&oh=00_AfCRdFddh7u4c25XhRKP1DcBvgMwFe65XErCjOml3R4QUg&oe=64295224',
  },
  {
    original: 'https://scontent.fmdz10-1.fna.fbcdn.net/v/t39.30808-6/337547063_2923480064455972_8904615369826054156_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=mnN8Jxwt6FsAX8m6YbC&_nc_ht=scontent.fmdz10-1.fna&oh=00_AfD4aZ9ZKFPT5m1kdhHiBWhV5gB7jJ8XMjyU_hw_NF073A&oe=6429F2F6',
  },
  {
    original: 'https://scontent.fmdz10-1.fna.fbcdn.net/v/t39.30808-6/333811641_231165079343870_6512619029835896120_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=dVUxcpM0gf8AX9PzATD&_nc_ht=scontent.fmdz10-1.fna&oh=00_AfArfec7Q1fG-p-HlT1wCIXXmhRXMZK3JT9ypY0O4e9pcQ&oe=64299A70',
  },
  {
    original: 'https://scontent.fmdz10-1.fna.fbcdn.net/v/t39.30808-6/333816329_939885057013098_7674023543505824913_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=ELX5Ft4ba0EAX-rbGSI&_nc_ht=scontent.fmdz10-1.fna&oh=00_AfDE5NXrbMEszzg3hGRVZymDVg1OM_JqL8B_UIbQ_cwizQ&oe=6429A1C5',
  },
  {
    original: 'https://scontent.fmdz10-1.fna.fbcdn.net/v/t39.30808-6/333043202_727911222117196_7773497613356511709_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=p9OftDp6o_sAX93XK6K&_nc_ht=scontent.fmdz10-1.fna&oh=00_AfAhqqQaJSC3Hu7nyTI9HxloR7Qs8wbD1K1a-5HrsEPxZA&oe=642A146D'
  }
];

class GallerySix extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default GallerySix
