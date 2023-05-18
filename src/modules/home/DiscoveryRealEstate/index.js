import {fetchDiscoveryRealEstate} from 'pages/api/discoveryRealEstate';
import React, {useState, useEffect} from 'react';

const DiscoveryRealEstate = () => {
  const [realEstate, setRealEstate] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const resultData = await fetchDiscoveryRealEstate();
      setRealEstate(resultData.data);
    };
    fetchAPI();
  }, []);

  return (
    <>
      <section className='discovery mb-24'>
        <div className='container'>
          <div className='section-vars-title d-flex justify-between align-center flex-wrap'>
            <h2 className='vars-title mb-0'>
              NHÀ BÁN TẠI CÁC TỈNH/ THÀNH PHỐ LỚN
            </h2>
          </div>
          <div className='discovery-list d-grid'>
            {realEstate.map((item, index) => {
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
