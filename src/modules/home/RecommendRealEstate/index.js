import {fetchRecommendRealEstate} from 'pages/api/recommendRealEstate';
import React, {useState, useEffect} from 'react';
import CartItem from './CartItem';
import {Col, Row} from 'antd';

const RecommendRealEstate = () => {
  const [recommenEstate, setRecommenEstate] = useState([]);
  const [currentPage, setCurrentPage] = useState(4);
  const [isReload, setIsReload] = useState(true);

  let numberShow = 0;
  let pageKey = 1;
  const handleOnClick = (e) => {
    const scrollBtn = document.querySelector('#scroll-to');
    numberShow = ++numberShow;
    let pageNum = ++pageKey;
    if (numberShow == 5) {
      scrollBtn.classList.add('hide');
    } else {
      scrollBtn.classList.remove('hide');
    }
  };
  useEffect(() => {
    const fetchAPI = async () => {
      const page = currentPage;
      const resultData = await fetchRecommendRealEstate({page});
      setRecommenEstate(resultData.data.elements);
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
            <h2 className='vars-title mb-0'>BẤT ĐỘNG SẢN DÀNH CHO BẠN</h2>
          </div>
          <div className='recommend-estate-list'>
            <Row
              className='recommend-estate-inner'
              gutter={{xs: 8, sm: 16, md: 16, lg: 16}}
            >
              {recommenEstate.map((item, index) => {
                return (
                  <Col key={index} className='gutter-row' span={12}>
                    <CartItem item={item} />
                  </Col>
                );
              })}
            </Row>
            <div className='d-flex flex-column align-center' id='scroll-to'>
              <div className='main-co text-center' onClick={handleOnClick}>
                Xem nhiều hơn
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecommendRealEstate;
