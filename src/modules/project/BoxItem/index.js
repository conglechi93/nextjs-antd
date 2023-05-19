import React from 'react';
import NoResult from '../NoResult';
import {Row, Col} from 'antd';
import CartItem from 'modules/home/RecommendRealEstate/CartItem';
import PropTypes from 'prop-types';

const BoxItem = ({itemPost}) => {
  return (
    <>
      <div className='container'>
        <Row gutter={[16, 16]}>
          {itemPost?.length === 0 ? (
            <NoResult />
          ) : (
            itemPost?.map((item) => (
              <Col span={6} key={item.id}>
                <CartItem item={item} />
              </Col>
            ))
          )}
        </Row>
      </div>
    </>
  );
};

export default BoxItem;
BoxItem.propTypes = {
  itemPost: PropTypes.any,
};
