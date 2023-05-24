import React from 'react';
import {Select} from 'antd';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

const FormProject = ({dataObject, setDataObject}) => {
  const categories = useSelector((state) => state.categories);
  const reProjectCat = categories?.categories?.reProjectCat ?? [];

  let reProjectCatOptions = [];
  reProjectCat.forEach((ele) => {
    let eleTypesOption = {
      label: ele.name,
      value: ele.code,
    };
    reProjectCatOptions.push(eleTypesOption);
  });
  const handleChangeProject = (value) => {
    const newDataObject = {
      ...dataObject,
      projects: value,
    };
    setDataObject(newDataObject);
  };
  return (
    <>
      <div className='filter-box'>
        <h4>Dự án</h4>
        <div className='form-check-group'>
          <Select
            mode='multiple'
            allowClear
            style={{
              width: '100%',
            }}
            placeholder='Chọn dự án'
            onChange={handleChangeProject}
            options={reProjectCatOptions}
          />
        </div>
      </div>
    </>
  );
};

export default FormProject;
FormProject.propTypes = {
  dataObject: PropTypes.any,
  setDataObject: PropTypes.any,
};
