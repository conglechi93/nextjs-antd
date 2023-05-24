import React, {useState, useEffect} from 'react';
import {Checkbox, Select} from 'antd';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

const FormPoster = ({dataObject, setDataObject}) => {
  const CheckboxGroup = Checkbox.Group;
  const categories = useSelector((state) => state.categories);
  const jobTypeCat = categories?.categories?.jobTypeCat ?? [];

  let jobTypeCatOptions = [];
  jobTypeCat.forEach((ele) => {
    let eleTypesOption = {
      label: ele.name,
      value: ele.code,
    };
    jobTypeCatOptions.push(eleTypesOption);
  });

  const onChangePoster = (value) => {
    const newDataObject = {
      ...dataObject,
      postBy: value,
    };
    setDataObject(newDataObject);
  };
  return (
    <>
      <div className='filter-box'>
        <h4>Người đăng</h4>
        <div className='form-check-group '>
          <CheckboxGroup
            className='d-grid grid-template-3 grid-template-2 gap-20'
            options={jobTypeCatOptions}
            onChange={onChangePoster}
          />
        </div>
      </div>
    </>
  );
};

export default FormPoster;
FormPoster.propTypes = {
  dataObject: PropTypes.any,
  setDataObject: PropTypes.any,
};
