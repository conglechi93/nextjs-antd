import React, {useState, useEffect} from 'react';
import {Checkbox} from 'antd';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

const FormPostType = ({postType, dataObject, setDataObject}) => {
  const [typeCate, setTypeCate] = useState([]);
  const CheckboxGroup = Checkbox.Group;
  const categories = useSelector((state) => state.categories);
  const realEstateTypeCat = categories?.categories?.realEstateTypeCat ?? [];
  let realTypeOptions = [];

  useEffect(() => {
    setTypeCate(realEstateTypeCat);
  }, []);

  typeCate.forEach((ele) => {
    if (ele.parent === postType) {
      let eleTypesOption = {
        parent: ele.parent,
        label: ele.name,
        value: ele.code,
      };
      realTypeOptions.push(eleTypesOption);
    }
  });

  const onChange = (e) => {
    const newDataObject = {
      ...dataObject,
      subTypes: e,
    };
    setDataObject(newDataObject);
  };
  return (
    <>
      <div className='filter-box'>
        <h4>Loại bất động sản</h4>
        <div className='filter-box-types form-check-group '>
          <CheckboxGroup
            className='d-grid grid-template-2 gap-10'
            options={realTypeOptions}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

export default FormPostType;
FormPostType.propTypes = {
  postType: PropTypes.string,
  dataObject: PropTypes.any,
  setDataObject: PropTypes.any,
};
