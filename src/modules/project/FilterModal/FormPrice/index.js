import React, {useState, useEffect} from 'react';
import {Slider} from 'antd';
import PropTypes from 'prop-types';

const FormPrice = ({dataObject, setDataObject}) => {
  const onChangePrice = (value) => {
    const price_from = value[0] ?? '';
    const price_to = value[1] ?? '';
    const newDataObject = {
      ...dataObject,
      priceFrom: price_from,
      priceTo: price_to,
    };
    setDataObject(newDataObject);
  };
  return (
    <>
      <div className='filter-box-price'>
        <h4>Mức giá</h4>
        <Slider
          range
          step={100}
          min={0}
          max={500000000000}
          defaultValue={[0, 500000000000]}
          onChange={onChangePrice}
        />
      </div>
    </>
  );
};

export default FormPrice;
FormPrice.propTypes = {
  dataObject: PropTypes.any,
  setDataObject: PropTypes.any,
};
