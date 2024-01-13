// ImageSlider.jsx
import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../index.css';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

const ImageSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 6,
    slidesToScroll: 4,
    arrows: false,
    draggable: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2500, // Set the autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const images = [
    '/slider/1.png',
    '/slider/2.png',
    '/slider/3.png',
    '/slider/4.png',
    '/slider/5.png',
    '/slider/6.png',
    '/slider/7.png',
  ];

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Pause autoplay when the user interacts with the slider
  useEffect(() => {
    const slider = sliderRef.current;
    const handleSliderInteraction = () => {
      if (slider) {
        slider.slickPause();
      }
    };

    if (slider) {
      slider.innerSlider.list.addEventListener('mouseenter', handleSliderInteraction);
      slider.innerSlider.list.addEventListener('touchstart', handleSliderInteraction);
    }

    return () => {
      if (slider) {
        slider.innerSlider.list.removeEventListener('mouseenter', handleSliderInteraction);
        slider.innerSlider.list.removeEventListener('touchstart', handleSliderInteraction);
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-[2000px] m-auto">
      <div className="hidden md:block absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 pl-4 ">
        <div className="prev-arrow text-[60px] max-laptop:text-lf text-headerText cursor-pointer " onClick={goToPrev}>
          <FaChevronLeft />
        </div>
      </div>
      <div className="px-[60px] max-md:p-0">
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img className="p-4  bg-transparent" src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="max-tab:hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 pr-4">
        <div className="next-arrow text-[60px] max-laptop:text-lf text-headerText cursor-pointer" onClick={goToNext}>
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
