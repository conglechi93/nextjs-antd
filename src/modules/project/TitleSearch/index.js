import React, {useState, useEffect} from 'react';
import {Col, Row, Select} from 'antd';
import {AppstoreOutlined, UnorderedListOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';

const TitleSearch = ({
  classNameActive,
  total,
  dataObject,
  setDataObject,
  setIsReload,
  postType,
  provinces,
  subTypes,
}) => {
  const [typesText, setTypesText] = useState('');

  const textResult = (postType) => {
    switch (postType) {
      case 'du-an':
        return 'Dự án';
      case 'bds-ban':
        return 'Mua bán';
      case 'bds-cho-thue':
        return 'Cho thuê';
      default:
        return 'M&A';
    }
  };

  console.log('ss', postType);

  useEffect(() => {
    let textTitle = textResult(postType);
    setTypesText(textTitle);
  }, [postType]);

  const handleOnChangeSort = (e) => {
    const newDataObject = {
      ...dataObject,
      sortBy: e,
    };
    setDataObject(newDataObject);
    setIsReload(true);
  };
  return (
    <>
      <div className='container'>
        <Row className='view-control-archive align-center'>
          <Col span={16} className='col-left'>
            <h1 className='title-archive'>
              {typesText ? typesText + ' bất động sản' : ''}{' '}
              {provinces ? 'khu vực ' + provinces : ''}
              {/* {typesText && ' bất động sản'} */}
            </h1>
          </Col>
          <Col span={8} className='col-right'>
            <div className='title-search-right d-flex align-center justify-end'>
              <div className={`total-result ${!total ? 'd-none' : ''}`}>
                ({total} kết quả)
              </div>
              <div className='select view-order'>
                <Select
                  onChange={handleOnChangeSort}
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
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TitleSearch;
TitleSearch.propTypes = {
  classNameActive: PropTypes.func,
  total: PropTypes.number,
  setIsReload: PropTypes.func,
  dataObject: PropTypes.any,
  setDataObject: PropTypes.func,
  postType: PropTypes.string,
  provinces: PropTypes.string,
  subTypes: PropTypes.string,
};
