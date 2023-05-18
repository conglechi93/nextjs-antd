import React from 'react';
import ImgAds from '../../../assets/img/banner_quang_cao_2.jpg';

const AdsBannerSecond = () => {
  return (
    <>
      <section className='vars-banner-ads m-24'>
        <div className='container'>
          <a href='' target='_blank'>
            <img
              src={ImgAds.src}
              className='w-100'
              alt='Banner quảng cáo'
            ></img>
          </a>
        </div>
      </section>
    </>
  );
};

export default AdsBannerSecond;
