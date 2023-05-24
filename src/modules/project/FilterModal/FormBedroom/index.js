import React from 'react';
import {Checkbox} from 'antd';
import PropTypes from 'prop-types';

const FormBedroom = ({dataObject, setDataObject}) => {
  const CheckboxGroup = Checkbox.Group;
  const optionsBedroom = [
    {value: '', label: 'Tất cả'},
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5+'},
  ];
  const onChangeBedroom = (value) => {
    const newDataObject = {
      ...dataObject,
      bedrooms: value,
    };
    setDataObject(newDataObject);
  };
  return (
    <>
      <div className='filter-box'>
        <h4>Số phòng ngủ</h4>
        <div className='form-check-group filter-box-bedroom'>
          <CheckboxGroup
            className='d-grid grid-template-6 grid gap-20'
            options={optionsBedroom}
            onChange={onChangeBedroom}
          />
        </div>
      </div>
    </>
  );
};

export default FormBedroom;
FormBedroom.propTypes = {
  dataObject: PropTypes.any,
  setDataObject: PropTypes.any,
};
