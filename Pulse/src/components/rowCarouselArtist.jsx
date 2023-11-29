import ArtistCard from "./artistCard";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const RowCarouselArtist = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: false, // Hide default arrows
  };

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item.id} className="px-4">
          <ArtistCard key={item.id} {...item} onClick={() => console.log(`Play ${item.title}`)} />
        </div>
      ))}
    </Slider>
  );
};

export default RowCarouselArtist;

  

