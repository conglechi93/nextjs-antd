import React, {useState, useEffect} from 'react';
import {Card} from 'antd';
import Link from 'next/link';
import {fetchTopProject} from 'pages/api/topProject';
const ProjectHighlight = () => {
  const [topProject, setTopProject] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const resultData = await fetchTopProject();
      setTopProject(resultData.data);
    };
    fetchAPI();
  }, []);
  return (
    <>
      <section className='project-highlight'>
        <div className='container'>
          <div className='section-vars-title d-flex justify-between align-center flex-wrap'>
            <h2 className='vars-title mb-0'>DỰ ÁN NỔI BẬT </h2>
            <a href='#' className='main-co d-flex align-center'>
              <span>Xem thêm</span>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.93994 13.2797L10.2866 8.93306C10.7999 8.41973 10.7999 7.57973 10.2866 7.06639L5.93994 2.71973'
                  stroke='#D1132A'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
              </svg>
            </a>
          </div>
          <div className='project-highlight-list'>
            {topProject.map((item) => (
              <Card
                key={item.id}
                className='cart-item overflow-hidden position-relative'
              >
                <Link href='#'>
                  <img src={item.thumbnailUrl} alt={item.title} />
                </Link>
                <div className='fav-btn position-absolute add-favorite end-0 top-0 '>
                  <div className='icon-box d-inline-block'>
                    <svg
                      width='24'
                      height='23'
                      viewBox='0 0 24 23'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M21.1346 3.66004C20.6068 3.09688 19.9802 2.65014 19.2905 2.34534C18.6008 2.04055 17.8615 1.88367 17.1149 1.88367C16.3684 1.88367 15.6291 2.04055 14.9394 2.34534C14.2497 2.65014 13.623 3.09688 13.0953 3.66004L11.9999 4.82825L10.9046 3.66004C9.83849 2.52302 8.39257 1.88426 6.88489 1.88426C5.37722 1.88426 3.93129 2.52302 2.8652 3.66004C1.79912 4.79705 1.2002 6.33917 1.2002 7.94715C1.2002 9.55512 1.79912 11.0972 2.8652 12.2343L3.96054 13.4025L11.9999 21.9767L20.0393 13.4025L21.1346 12.2343C21.6627 11.6714 22.0815 11.003 22.3673 10.2674C22.6531 9.53183 22.8002 8.74339 22.8002 7.94715C22.8002 7.1509 22.6531 6.36246 22.3673 5.62687C22.0815 4.89127 21.6627 4.22293 21.1346 3.66004Z'
                        fill='#585555'
                        fillOpacity='0.8'
                        stroke='white'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className='btn-highlight d-flex position-absolute'>
                  <div className='btn btn-ins-item text-white main-bg me-3'>
                    Nổi bật
                  </div>
                  <div className='btn btn-ins-item text-white dark-bg '>
                    {item.reStatus?.name}
                  </div>
                </div>
                <div className='cart-item-bottom position-absolute bottom-0 start-0 end-0'>
                  <Link href='#'>
                    <h5 className='limit-text limit-text-1' title={item.title}>
                      {item.title}
                    </h5>
                  </Link>
                  <div className='cart-item-price d-flex justify-between '>
                    <p className='mb-0'>Giá từ</p>
                    <p className='mb-0 price main-co'>{item.priceText}</p>
                  </div>
                  <div className='cart-item-location d-flex justify-between align-center'>
                    <p
                      className='location limit-text limit-text-1 mb-0'
                      title=''
                    >
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M17.5 8.33337C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33337C2.5 6.34425 3.29018 4.4366 4.6967 3.03007C6.10322 1.62355 8.01088 0.833374 10 0.833374C11.9891 0.833374 13.8968 1.62355 15.3033 3.03007C16.7098 4.4366 17.5 6.34425 17.5 8.33337Z'
                          stroke='white'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                        <path
                          d='M10 10.8334C11.3807 10.8334 12.5 9.71409 12.5 8.33337C12.5 6.95266 11.3807 5.83337 10 5.83337C8.61929 5.83337 7.5 6.95266 7.5 8.33337C7.5 9.71409 8.61929 10.8334 10 10.8334Z'
                          stroke='white'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                      </svg>
                    </p>
                    <div className='location-text '>
                      <div
                        title={item.typeRealEstate?.name}
                        className='btn-ins-item text-white dark-bg limit-text limit-text-1'
                      >
                        {item.typeRealEstate?.name}
                      </div>
                    </div>
                  </div>
                  <ul className='cart-item-info d-flex justify-between'>
                    <li className='area'>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          x='1.66667'
                          y='1.66663'
                          width='16.6667'
                          height='16.6667'
                          rx='4'
                          stroke='#ffffff'
                        ></rect>
                        <path
                          d='M15 5L11.6667 8.33333M15 5H11.6667M15 5V8.33333'
                          stroke='#ffffff'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                        <path
                          d='M5.00001 15L8.33334 11.6667M5.00001 15L8.33334 15M5.00001 15L5.00001 11.6667'
                          stroke='#ffffff'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                      </svg>
                      <span>{item.areaText ? item.areaText : '--'}</span>
                    </li>
                    <li className=''>
                      <svg
                        width='21'
                        height='20'
                        viewBox='0 0 21 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M10.9166 18.333H3.89993C2.93327 18.333 2.1416 17.558 2.1416 16.608V4.24131C2.1416 2.05797 3.7666 1.06631 5.75827 2.04131L9.45827 3.85797C10.2583 4.24964 10.9166 5.29131 10.9166 6.17464V18.333Z'
                          stroke='white'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                        <path
                          d='M18.8082 12.5503V15.7003C18.8082 17.5003 17.9748 18.3336 16.1748 18.3336H10.9165V8.68359L11.3082 8.76693L15.0582 9.60859L16.7498 9.98359C17.8498 10.2253 18.7498 10.7919 18.7998 12.3919C18.8082 12.4419 18.8082 12.4919 18.8082 12.5503Z'
                          stroke='white'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                        <path
                          d='M5.0835 7.5H7.97516'
                          stroke='white'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                        <path
                          d='M5.0835 10.834H7.97516'
                          stroke='white'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                        <path
                          d='M15.0581 9.60924V12.2926C15.0581 13.3259 14.2164 14.1676 13.1831 14.1676C12.1498 14.1676 11.3081 13.3259 11.3081 12.2926V8.76758L15.0581 9.60924Z'
                          stroke='white'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                        <path
                          d='M18.7998 12.3927C18.7498 13.376 17.9331 14.1677 16.9331 14.1677C15.8998 14.1677 15.0581 13.326 15.0581 12.2927V9.60938L16.7498 9.98437C17.8498 10.226 18.7498 10.7927 18.7998 12.3927Z'
                          stroke='white'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                      </svg>

                      <span>
                        {item.totalApartment ? item.totalApartment : '--'}
                      </span>
                    </li>
                    <li>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M10 2.08333C5.62775 2.08333 2.08333 5.62775 2.08333 10C2.08333 14.3723 5.62775 17.9167 10 17.9167C14.3723 17.9167 17.9167 14.3723 17.9167 10C17.9167 5.62775 14.3723 2.08333 10 2.08333ZM1.25 10C1.25 5.16751 5.16751 1.25 10 1.25C14.8325 1.25 18.75 5.16751 18.75 10C18.75 14.8325 14.8325 18.75 10 18.75C5.16751 18.75 1.25 14.8325 1.25 10Z'
                          fill='white'
                        ></path>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M9.99967 4.58331C10.2298 4.58331 10.4163 4.76986 10.4163 4.99998V9.74247L13.5193 11.294C13.7252 11.3969 13.8086 11.6472 13.7057 11.853C13.6028 12.0588 13.3525 12.1422 13.1467 12.0393L9.81334 10.3727C9.67218 10.3021 9.58301 10.1578 9.58301 9.99998V4.99998C9.58301 4.76986 9.76956 4.58331 9.99967 4.58331Z'
                          fill='white'
                        ></path>
                      </svg>
                      <span>
                        {item.deliveryTime ? item.deliveryTime : '--'}
                      </span>
                    </li>
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectHighlight;
