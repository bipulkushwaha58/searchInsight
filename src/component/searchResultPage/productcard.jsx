import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductCard({ image = [], name }) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div class="p-4 bg-white rounded shadow-lg w-[150px] md:w-[200px]">
      <Slider {...settings}>
        {image.map((url, i) => (
          <div key={i}>
            <img
              src={url}
              alt=""
              class="object-contain w-[150px] md:w-[200px]"
            />
          </div>
        ))}
      </Slider>

      <span class="text-[#874439]">{name}</span>
    </div>
  );
}
