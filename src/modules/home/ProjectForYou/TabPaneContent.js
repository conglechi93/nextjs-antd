import React, {useEffect, Fragment} from 'react';
import {Col, Row} from 'antd';
import PropTypes from 'prop-types';
import CartItem from '../RecommendRealEstate/CartItem';

const TabPaneContent = ({keyTabPane, currentTabPane, currentProject}) => {
  useEffect(() => {
    if (keyTabPane == currentTabPane) {
      console.log('currentProject', currentProject);
    }
  }, [currentTabPane]);

  return (
    <>
      <Row
        className='project-recomment-inner'
        gutter={{xs: 8, sm: 16, md: 16, lg: 16}}
      >
        {currentProject?.map((item, index) => {
          return (
            <Col key={index} className='gutter-row' span={6}>
              <CartItem item={item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default TabPaneContent;

TabPaneContent.propTypes = {
  keyTabPane: PropTypes.number,
  currentTabPane: PropTypes.number,
  currentProject: PropTypes.any,
};
