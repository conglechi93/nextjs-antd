import React from 'react';
import {Slider} from 'antd';
import PropTypes from 'prop-types';

const FormArea = ({dataObject, setDataObject}) => {
  const onChangeArea = (value) => {
    const area_from = value[0] ?? '';
    const area_to = value[1] ?? '';
    const newDataObject = {
      ...dataObject,
      areaFrom: area_from,
      areaTo: area_to,
    };
    setDataObject(newDataObject);
  };
  return (
    <>
      <div className='filter-box-area'>
        <h4>Diện tích</h4>
        <Slider
          range
          step={10}
          min={0}
          max={500}
          defaultValue={[0, 500]}
          onChange={onChangeArea}
        />
      </div>
    </>
  );
};

export default FormArea;
FormArea.propTypes = {
  dataObject: PropTypes.any,
  setDataObject: PropTypes.any,
};
