import React from 'react';
import adsImg from '../../../assets/img/banner_quang_cao_1.jpg';

const AdsBannerSecond = () => {
  return (
    <>
      <section className='vars-banner-ads mt-24 mb-42'>
        <div className='container'>
          <a href='' target='_blank'>
            <img
              src={adsImg.src}
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
