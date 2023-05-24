import {Form, Select} from 'antd';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const SearchProvince = ({cities, setIdCity}) => {
  // Show Provinces
  let provincesOptions = [];
  cities.forEach((ele) => {
    let eleProvincesOption = {
      label: ele.name,
      value: ele.code,
    };
    provincesOptions.push(eleProvincesOption);
  });

  // Change City
  const handleChangeCity = (value) => {
    setIdCity(value);
  };
  return (
    <>
      <Form.Item>
        <Select
          placeholder='Tỉnh/thành phố'
          onChange={handleChangeCity}
          options={provincesOptions}
        />
      </Form.Item>
    </>
  );
};

export default SearchProvince;
SearchProvince.propTypes = {
  cities: PropTypes.func,
  setIdCity: PropTypes.number,
};
