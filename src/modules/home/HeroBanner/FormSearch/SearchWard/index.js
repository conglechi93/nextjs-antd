import {Form, Select} from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

const SearchWard = ({wards}) => {
  // Show Provinces
  let wardsOptions = [];
  wards.forEach((ele) => {
    let eleOption = {
      label: ele.name,
      value: ele.code,
    };
    wardsOptions.push(eleOption);
  });
  return (
    <>
      <Form.Item>
        <Select
          placeholder='Loại hình'
          onChange={(e) => console.log(e)}
          options={wardsOptions}
        />
      </Form.Item>
    </>
  );
};

export default SearchWard;
SearchWard.propTypes = {
  wards: PropTypes.any,
};
