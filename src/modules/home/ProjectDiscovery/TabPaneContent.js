import React, {useEffect} from 'react';
import {Col, Row} from 'antd';
import PropTypes from 'prop-types';

const TabPaneContent = ({currentProject}) => {
  // useEffect(() => {
  //   if (keyTabPane == currentTabPane) {
  //     console.log('currentProject', currentProject);
  //   }
  // }, [currentTabPane]);

  return (
    <>
      <Row className='project-recomment-inner' gutter={24}>
        {currentProject?.map((item, index) => {
          return (
            <Col key={index} className='gutter-row mb-24' span={6}>
              <div className='vars-location-item'>
                <div className='vars-location-item__top overflow-hidden mb-0'>
                  <a href={`/du-an/?districts=${item.name}`}>
                    <img
                      className=''
                      src={item.thumbnailUrl}
                      alt={item.name}
                      loading='lazy'
                    ></img>
                  </a>
                </div>
                <div className='vars-location-item__bottom'>
                  <a href={`/du-an/?districts=${item.name}`}>
                    <h5
                      className='fw-bold mb-2 limit-text limit-text-1'
                      title={item.name}
                    >
                      {item.name}
                    </h5>
                  </a>
                  <p className='mb-2 limit-text limit-text-1' title=''>
                    <span>{item.totalPost}</span> tin đăng
                  </p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default TabPaneContent;

TabPaneContent.propTypes = {
  // keyTabPane: PropTypes.number,
  // currentTabPane: PropTypes.number,
  currentProject: PropTypes.any,
};
