import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = () => {
  const CarouselData = [
    {
      discription: "Showcase sponsors at the event and give more value to them",
      button: "Exploar JioEvents",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {CarouselData.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
