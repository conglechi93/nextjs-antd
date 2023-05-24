import React, {useEffect} from 'react';
import {Radio} from 'antd';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

const FormHeader = ({setPostType, dataObject, setDataObject}) => {
  const categories = useSelector((state) => state.categories);
  const postTypeFilterCat = categories?.categories?.postTypeFilterCat ?? [];

  const onChangePostType = ({target: {value}}) => {
    const newDataObject = {
      ...dataObject,
      types: value,
    };
    setPostType(value);
    setDataObject(newDataObject);
  };
  return (
    <>
      <div className='filter-form-label'>
        <Radio.Group
          className='filter-form-type d-flex align-center justify-center text-center'
          defaultValue='bds-ban'
          buttonStyle='solid'
        >
          {postTypeFilterCat.map((item) => {
            return (
              <Radio.Button
                key={item.code}
                onChange={onChangePostType}
                value={item.code}
              >
                {item.name}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </div>
    </>
  );
};

export default FormHeader;
FormHeader.propTypes = {
  setPostType: PropTypes.func,
  dataObject: PropTypes.any,
  setDataObject: PropTypes.any,
  onChangeSearchParam: PropTypes.any,
};
