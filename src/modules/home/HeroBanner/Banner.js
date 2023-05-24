import React from 'react';
import Slider from 'react-slick';
import FormSearch from './FormSearch';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className='vars-banner overlayx position-relative mb-24'>
        <Slider {...settings}>
          <div>
            <video
              playsinline='playsinline'
              autoPlay='autoplay'
              muted='muted'
              loop='loop'
            >
              <source
                src='https://static.vars.vn/land/s1/media/banner-web_final.webm'
                type='video/mp4'
              ></source>
            </video>
          </div>
          <video
            playsinline='playsinline'
            autoPlay='autoplay'
            muted='muted'
            loop='loop'
          >
            <source
              src='https://static.vars.vn/land/s1/media/banner-web_final.webm'
              type='video/mp4'
            ></source>
          </video>
        </Slider>
        <FormSearch />
      </section>
    </>
  );
};

export default Banner;
