import React from 'react';
import FormSearch from './FormSearch';

const Banner = () => {
  return (
    <>
      <section className='vars-banner overlayx position-relative mb-24'>
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
        <FormSearch />
      </section>
    </>
  );
};

export default Banner;
