import {Form, Radio} from 'antd';
import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

const SearchHeader = ({postType, setcurrentPostType}) => {
  const onChangePostType = ({target: {value}}) => {
    setcurrentPostType(value);
  };
  return (
    <>
      <Form.Item name='box-post-type'>
        <Radio.Group className='box-post-type' defaultValue='bds-ban'>
          {postType.map((item) => {
            return (
              <Radio.Button
                key={item.code}
                onChange={onChangePostType}
                value={item.code}
              >
                {item.name}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default SearchHeader;
SearchHeader.propTypes = {
  postType: PropTypes.any,
  setcurrentPostType: PropTypes.any,
};
