import React from 'react';
import ImgAds from '../../../assets/img/Advertise.png';
import VarsIcon from '../../../assets/img/vars-icon.png';
import NewsIcon from '../../../assets/img/new-icon.png';
import EduIcon from '../../../assets/img/edu-icon.png';
import UserIcon from '../../../assets/img/users-icon.png';
import MapIcon from '../../../assets/img/map-icon.png';
import {Col, Row} from 'antd';

const AdsBannerFirst = () => {
  return (
    <>
      <section
        className='about-vars m-42 bg-image p-100'
        style={{backgroundImage: `url(${ImgAds.src})`}}
      >
        <div className='container'>
          <div className='content'>
            <div className='title-banner'>
              <h3>Hệ sinh thái của vars</h3>
              <p>
                Hệ sinh thái VARs phát triển các ứng dụng công nghệ phục vụ cho
                ngành Bất động sản, hỗ trợ các nhà môi giới, chủ đầu tư tốt hơn
                cũng như nắm bắt thông tin 1 các chính xác nhất, nhanh chóng
                nhất
              </p>
            </div>
            <div className='col-row'>
              <Row gutter={24}>
                <Col flex={2}>
                  <div className='item'>
                    <img src={VarsIcon.src} alt='Về VARs' />
                    <h4>Về VARs</h4>
                    <a href=''>
                      <svg
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M4.7998 12H20.7998M20.7998 12L14.7998 6M20.7998 12L14.7998 18'
                          stroke='#6C6868'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </a>
                  </div>
                </Col>
                <Col flex={2}>
                  <div className='item'>
                    <img src={NewsIcon.src} alt='Tin tức' />
                    <h4>Tin tức</h4>
                    <a href=''>
                      <svg
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M4.7998 12H20.7998M20.7998 12L14.7998 6M20.7998 12L14.7998 18'
                          stroke='#6C6868'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </a>
                  </div>
                </Col>
                <Col flex={2}>
                  <div className='item'>
                    <img src={EduIcon.src} alt='Giáo dục' />
                    <h4>Giáo dục</h4>
                    <a href=''>
                      <svg
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M4.7998 12H20.7998M20.7998 12L14.7998 6M20.7998 12L14.7998 18'
                          stroke='#6C6868'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </a>
                  </div>
                </Col>
                <Col flex={2}>
                  <div className='item'>
                    <img src={UserIcon.src} alt='Cộng đồng' />
                    <h4>Cộng đồng</h4>
                    <a href=''>
                      <svg
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M4.7998 12H20.7998M20.7998 12L14.7998 6M20.7998 12L14.7998 18'
                          stroke='#6C6868'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </a>
                  </div>
                </Col>
                <Col flex={2}>
                  <div className='item'>
                    <img src={MapIcon.src} alt='Quy hoạch' />
                    <h4>Quy hoạch</h4>
                    <a href=''>
                      <svg
                        width='25'
                        height='24'
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M4.7998 12H20.7998M20.7998 12L14.7998 6M20.7998 12L14.7998 18'
                          stroke='#6C6868'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdsBannerFirst;
