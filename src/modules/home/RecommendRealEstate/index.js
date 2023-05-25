import {fetchRecommendRealEstate} from 'pages/api/recommendRealEstate';
import React, {useState, useEffect} from 'react';
import CartItem from './CartItem';
import {Col, Row} from 'antd';

const RecommendRealEstate = () => {
  const [recommenEstate, setRecommenEstate] = useState([]);
  const [recommenSplice, setRecommenSplice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isReload, setIsReload] = useState(true);
  const [className, setClassName] = useState('');

  const handleOnClick = () => {
    setCurrentPage((pre) => pre + 1);
    setIsReload(true);
    setClassName(currentPage == 6 ? ' hide' : '');
  };
  useEffect(() => {
    const fetchAPI = async () => {
      const page = currentPage;
      const resultData = await fetchRecommendRealEstate({page});
      const resultElement = resultData?.data?.elements ?? [];
      const newRecommenEstate = [...recommenEstate, ...resultElement];
      setRecommenEstate(newRecommenEstate);
    };
    if (isReload) {
      fetchAPI();
      setIsReload(false);
    }
  }, [isReload]);

  return (
    <>
      <section className='recommend-estate mb-24'>
        <div className='container'>
          <div className='section-vars-title d-flex justify-between align-center flex-wrap'>
            <h3 className='mb-0'>BẤT ĐỘNG SẢN DÀNH CHO BẠN</h3>
          </div>
          <div className='recommend-estate-list'>
            <Row className='recommend-estate-inner' gutter={[16, 16]}>
              {recommenEstate.map((item, index) => {
                return (
                  <Col
                    key={index}
                    className='gutter-row'
                    xs={{span: 24}}
                    md={{span: 12}}
                  >
                    <CartItem item={item} />
                  </Col>
                );
              })}
            </Row>
            <div
              className={'d-flex flex-column align-center' + className}
              id='scroll-to'
            >
              <div
                className='main-co text-center d-flex align-center btn-readmore'
                onClick={handleOnClick}
              >
                Xem nhiều hơn
                <svg
                  width='21'
                  height='20'
                  viewBox='0 0 21 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M16.3332 9.16602L10.4998 14.166L4.6665 9.16602'
                    stroke='#D1132A'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M16.3332 5.83398L10.4998 10.834L4.6665 5.83398'
                    stroke='#D1132A'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <a
                href='/bds-ban'
                className={'main-co btn-hide btn-readmore' + className}
              >
                Xem tất cả
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecommendRealEstate;
