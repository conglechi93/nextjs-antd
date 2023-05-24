import React, {useState, useEffect} from 'react';
import {Checkbox} from 'antd';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

const FormDirection = ({dataObject, setDataObject}) => {
  const CheckboxGroup = Checkbox.Group;
  const categories = useSelector((state) => state.categories);
  const realDirectionCat = categories?.categories?.realEstateDirectionCat ?? [];

  let realDirectionOptions = [];
  realDirectionCat.forEach((ele) => {
    let eleTypesOption = {
      label: ele.name,
      value: ele.code,
    };
    realDirectionOptions.push(eleTypesOption);
  });

  const onChangeDirection = (value) => {
    const newDataObject = {
      ...dataObject,
      directions: value,
    };
    setDataObject(newDataObject);
  };
  return (
    <>
      <div className='filter-box'>
        <h4>Hướng</h4>
        <div className='form-check-group filter-box-direction'>
          <CheckboxGroup
            className='d-grid grid-template-4 grid-template-2 gap-20'
            options={realDirectionOptions}
            onChange={onChangeDirection}
          />
        </div>
      </div>
    </>
  );
};

export default FormDirection;
FormDirection.propTypes = {
  dataObject: PropTypes.any,
  setDataObject: PropTypes.any,
};
