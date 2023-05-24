import {Form, Select} from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

const SearchDirection = ({directions}) => {
  // Show directions
  let directionsOptions = [];
  directions.forEach((ele) => {
    let eleOption = {
      label: ele.name,
      value: ele.code,
    };
    directionsOptions.push(eleOption);
  });
  return (
    <>
      <Form.Item>
        <Select
          placeholder='Huớng nhà'
          onChange={(e) => console.log(e)}
          options={directionsOptions}
        />
      </Form.Item>
    </>
  );
};

export default SearchDirection;
SearchDirection.propTypes = {
  directions: PropTypes.func,
};
