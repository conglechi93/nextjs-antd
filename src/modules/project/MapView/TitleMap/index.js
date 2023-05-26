import {Col, Row, Select} from 'antd';
import {AppstoreOutlined, UnorderedListOutlined} from '@ant-design/icons';
import React from 'react';
import PropTypes from 'prop-types';

const TitleMap = ({total}) => {
  return (
    <>
      <Row className='view-control-title align-center'>
        <Col span={18}>
          <h1 className='title-archive title-breadcrum-search limit-text limit-text-1 mr-8'>
            {' '}
            Mua bán bất động sản
          </h1>
        </Col>
        <Col span={6} className='text-right'>
          <div className={`total-result ${!total ? 'd-none' : ''}`}>
            ({total} kết quả)
          </div>
        </Col>
      </Row>
      <Row className='view-list-grid'>
        <Col span={8}>
          <div className='select view-order'>
            <Select
              //   onChange={handleOnChangeSort}
              defaultValue='Mới nhất'
              style={{
                width: 120,
              }}
              bordered={false}
              options={[
                {
                  value: 'newest',
                  label: 'Mới nhất',
                },
                {
                  value: 'price-asc',
                  label: 'Giá tăng dần',
                },
                {
                  value: 'price-desc',
                  label: 'Giá giảm dần',
                },
                {
                  value: 'area-asc',
                  label: 'Diện tích tăng dần',
                },
                {
                  value: 'area-desc',
                  label: 'Diện tích giảm dần',
                },
              ]}
            />
          </div>
        </Col>
        <Col span={16}>
          <div className='view-main d-flex align-center'>
            <div
              onClick={() => classNameActive(true)}
              className='product-view view-grid'
              data-view='grid'
              title='Grid'
            >
              <AppstoreOutlined />
            </div>
            <div
              onClick={() => classNameActive(false)}
              className='product-view view-list'
              data-view='list'
              title='List'
            >
              <UnorderedListOutlined />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TitleMap;
TitleMap.propTypes = {
  total: PropTypes.number,
};
