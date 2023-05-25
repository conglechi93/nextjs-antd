import {fetchDiscoveryRealEstate} from 'pages/api/discoveryRealEstate';
import React, {useState, useEffect} from 'react';
import background from '../../../assets/img/banner-rent.png';

const DiscoveryRealEstate = () => {
  const [realEstate, setRealEstate] = useState([]);
  const [realSplice, setRealSplice] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const resultData = await fetchDiscoveryRealEstate();
      setRealEstate(resultData.data);
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    const realSplice = realEstate.splice(1, 5);
    setRealSplice(realSplice);
  }, [realEstate]);

  console.log('realSplice', realSplice);
  return (
    <>
      <section
        className='discovery mb-42 bg-image p-42'
        style={{backgroundImage: `url(${background.src})`}}
      >
        <div className='container'>
          <div className='section-vars-title d-flex justify-between align-center flex-wrap'>
            <h3>NHÀ BÁN TẠI CÁC TỈNH/ THÀNH PHỐ LỚN</h3>
            <a
              href='/du-an'
              className='main-co btn-readmore d-flex align-center'
            >
              <span>Xem thêm</span>
            </a>
          </div>
          <div className='discovery-list d-grid'>
            {realSplice?.map((item, index) => {
              return (
                <div key={index} className={`item item-${index}`}>
                  <a href='#'>
                    <div className='img'>
                      <img
                        className='w-100'
                        src={item.thumbnailUrl}
                        alt={item.name}
                        loading='lazy'
                      ></img>
                      <div className='text'>
                        {item.name}
                        <p className='text-white'>
                          Xem ngay <span className=''>{item.totalPost}</span>{' '}
                          tin
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default DiscoveryRealEstate;
