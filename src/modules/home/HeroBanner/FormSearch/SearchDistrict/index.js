import {Form, Select} from 'antd';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const SearchDistrict = ({districts, setIdDistrict}) => {
  // Show Provinces
  let districtsOptions = [];
  districts.forEach((ele) => {
    let eleOption = {
      label: ele.name,
      value: ele.code,
    };
    districtsOptions.push(eleOption);
  });

  const handleChangeDistrict = (value) => {
    setIdDistrict(value);
  };
  return (
    <>
      <Form.Item>
        <Select
          placeholder='Quận/Huyện'
          onChange={handleChangeDistrict}
          options={districtsOptions}
        />
      </Form.Item>
    </>
  );
};

export default SearchDistrict;
SearchDistrict.propTypes = {
  districts: PropTypes.any,
  setIdDistrict: PropTypes.number,
};
