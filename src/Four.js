import React from "react"
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://scontent.fmdz10-1.fna.fbcdn.net/v/t39.30808-6/332330223_1915962682070382_5095783915585776153_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=5u8xVW419N8AX9LsCw7&_nc_ht=scontent.fmdz10-1.fna&oh=00_AfCDMTrTVQrfgxjNa6b65Snw-oNJhb7kq8HT9jUZlq653A&oe=6429DB4B'
  }, 
  {
    original: 'https://scontent.fmdz10-1.fna.fbcdn.net/v/t39.30808-6/332211052_879432573348317_299299345296374269_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=n-S9wSqk-JkAX-7N8v-&_nc_oc=AQnpDDrSfAeAToluy1Q0bVONu1UgG5wvldLH997XUnVjZDSWZsVjTvEALbWom6QmIBE&_nc_ht=scontent.fmdz10-1.fna&oh=00_AfBKbJVGWeAnr_Q2r7sgMwU3ShGPu9Vwq8gy_LH6yt2xFA&oe=6429E7D6'
  },
  {
    original: 'https://scontent.fmdz10-1.fna.fbcdn.net/v/t39.30808-6/332496534_565500685605631_6821233450411312875_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=psINvQLAci0AX_xXgS5&_nc_ht=scontent.fmdz10-1.fna&oh=00_AfDZolroydzuHRmHhE-frZt1f6yQhSmsntEGfk73Yq9s9Q&oe=642A39B1'
  }, 
  {
    original: 'https://scontent.fmdz10-1.fna.fbcdn.net/v/t39.30808-6/332509480_1528072347603676_6630357955567160796_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=vXaSCRpJ2TgAX8Renbn&_nc_ht=scontent.fmdz10-1.fna&oh=00_AfCnnI2zzlG3nMpXuGnKK5s5_rhIxhbecm2tiTax2IPbQw&oe=64287A4B'
  },
  {
    original: 'https://scontent.fmdz10-1.fna.fbcdn.net/v/t39.30808-6/332366075_579559067526685_8112062920383424557_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=-mF3zz8MqLMAX9MhRjU&_nc_ht=scontent.fmdz10-1.fna&oh=00_AfDUsWYwM2k1ReVgGC3As2e5K2SQrKfj1J9YW6nnRu-WvA&oe=6429E2E2'
  }, 
  {
    original: 'https://scontent.fmdz10-1.fna.fbcdn.net/v/t39.30808-6/332576009_2417888598378939_9211170319627053922_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=hTGE3HAG0g4AX_hN0EP&_nc_ht=scontent.fmdz10-1.fna&oh=00_AfDPnRZq6ELqg3ShwBY1uOp5vJ2LlNXWQHpj4WI-kYz4Eg&oe=6429B88D'
  }
];

class GalleryFour extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default GalleryFour
