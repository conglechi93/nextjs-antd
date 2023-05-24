import {Form, Select} from 'antd';
import React from 'react';

const SearchArea = () => {
  const AreaOptions = [
    {
      value: '30-50',
      label: '30²-50m²',
    },
    {
      value: '50-80',
      label: '50m²-80m²',
    },
    {
      value: '80-100',
      label: '80m²-100m²',
    },
    {
      value: '100-150',
      label: '100²-150m²',
    },
    {
      value: '150-200',
      label: '150²-200m²',
    },
    {
      value: '200-500',
      label: '200²-500m²',
    },
    {
      value: '500-1000',
      label: '500m²-1000m²',
    },
  ];
  return (
    <>
      <Form.Item>
        <Select
          placeholder='Diện tích'
          onChange={(e) => console.log(e)}
          options={AreaOptions}
        />
      </Form.Item>
    </>
  );
};

export default SearchArea;
