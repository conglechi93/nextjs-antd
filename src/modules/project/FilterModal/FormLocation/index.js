import React, {useState, useEffect} from 'react';
import {Form, Select} from 'antd';
import {useSelector} from 'react-redux';
import {fetchDistricts} from 'pages/api/districts';
import {fetchWards} from 'pages/api/wards';
import PropTypes from 'prop-types';

const FormLocation = ({dataObject, setDataObject}) => {
  const [idCity, setIdCity] = useState();
  const [districts, setDistricts] = useState([]);
  const [awards, setWards] = useState([]);
  const [showWards, setShowWards] = useState([]);
  const [showDistricts, setShowDistricts] = useState([]);
  const provinces = useSelector((state) => state.provinces);
  const provincesFilter = provinces.provinces ?? [];
  let provincesOptions = [];
  let districtsOptions = [];
  let wardsOptions = [];
  // Handle Change City
  const handleChangeCity = (value, label) => {
    setIdCity(value);
    const fetchAPI = async () => {
      const resultData = await fetchDistricts(value);
      const data = resultData?.data ?? [];
      setDistricts(data);
    };
    fetchAPI();
    let provincesLabel = label[0]?.label ?? '';
    const newDataObject = {
      ...dataObject,
      provinces: provincesLabel,
    };
    setDataObject(newDataObject);
  };
  // Hanle Change District
  const handleChangeDistrict = (value, label) => {
    const fetchAPI = async () => {
      const resultData = await fetchWards(idCity, value);
      const data = resultData?.data ?? [];
      setWards(data);
    };
    fetchAPI();
    let districtsLabel = label[0]?.label ?? '';
    const newDataObject = {
      ...dataObject,
      districts: districtsLabel,
    };
    setDataObject(newDataObject);
  };

  useEffect(() => {
    setShowWards(awards);
  }, [awards]);

  useEffect(() => {
    setShowDistricts(districts);
  }, [districts]);

  // Show Provinces
  provincesFilter.forEach((ele) => {
    let eleProvincesOption = {
      label: ele.name,
      value: ele.code,
    };
    provincesOptions.push(eleProvincesOption);
  });
  //Show Districts
  showDistricts.forEach((ele) => {
    let eleOption = {
      label: ele.name,
      value: ele.code,
    };
    districtsOptions.push(eleOption);
  });
  // Show Wards
  showWards.forEach((ele) => {
    let eleOption = {
      label: ele.name,
      value: ele.code,
    };
    wardsOptions.push(eleOption);
  });

  const handleChangeWards = (value, label) => {
    let wardsLabel = label[0]?.label ?? '';
    const newDataObject = {
      ...dataObject,
      wards: wardsLabel,
    };
    setDataObject(newDataObject);
  };
  return (
    <>
      <div className='filter-box'>
        <h4>Khu vực</h4>
        <div className='filter-box-location form-check-group d-grid grid-template-2 gap-20'>
          <Form.Item name='provinces'>
            <Select
              mode='multiple'
              allowClear
              style={{
                width: '100%',
              }}
              placeholder='Chọn khu vực'
              onChange={handleChangeCity}
              options={provincesOptions}
            />
          </Form.Item>

          <Select
            mode='multiple'
            allowClear
            style={{
              width: '100%',
            }}
            placeholder='Chọn quận/huyện'
            onChange={handleChangeDistrict}
            options={districtsOptions}
          />
          <Select
            mode='multiple'
            allowClear
            style={{
              width: '100%',
            }}
            placeholder='Chọn quận/huyện'
            onChange={handleChangeWards}
            options={wardsOptions}
          />
        </div>
      </div>
    </>
  );
};

export default FormLocation;
FormLocation.propTypes = {
  dataObject: PropTypes.any,
  setDataObject: PropTypes.any,
};
