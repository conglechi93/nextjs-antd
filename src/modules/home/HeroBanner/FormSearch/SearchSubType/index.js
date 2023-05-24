import {Form, Select} from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

const SearchSubType = ({currentPostType, subTypes}) => {
  const realTypeOptions = [];
  subTypes.forEach((ele) => {
    if (ele.parent === currentPostType) {
      let eleOption = {
        parent: ele.parent,
        label: ele.name,
        value: ele.code,
      };
      realTypeOptions.push(eleOption);
    }
  });
  return (
    <>
      <Form.Item>
        <Select
          placeholder='Loại hình'
          onChange={(e) => console.log(e)}
          options={realTypeOptions}
        />
      </Form.Item>
    </>
  );
};

export default SearchSubType;
SearchSubType.propTypes = {
  currentPostType: PropTypes.any,
  subTypes: PropTypes.func,
};
