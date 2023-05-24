import {Form, Select} from 'antd';
import React from 'react';

const SearchPrice = () => {
  const pricesOption = [
    {value: '0-0', label: 'Thỏa thuận'},
    {value: '0-500000000', label: '< 500 triệu'},
    {value: '500000000-1000000000', label: '500 - 1 tỷ'},
    {value: '1000000000-2000000000', label: '1 - 2 tỷ'},
    {value: '2000000000-3000000000', label: '2 - 3 tỷ'},
    {value: '3000000000-5000000000', label: '3 - 5 tỷ'},
    {value: '5000000000-7000000000', label: '5 - 7 tỷ'},
    {value: '7000000000-10000000000', label: '7 - 10 tỷ'},
    {value: '10000000000-20000000000', label: '10 - 20 tỷ'},
    {value: '20000000000-50000000000', label: '20 - 50 tỷ'},
    {value: '50000000000-100000000000', label: '50 - 100 tỷ'},
    {value: '100000000000-200000000000', label: '100 - 200 tỷ'},
    {value: '200000000000-500000000000', label: '200 - 500 tỷ'},
  ];
  return (
    <>
      <Form.Item>
        <Select
          placeholder='Giá'
          onChange={(e) => console.log(e)}
          options={pricesOption}
        />
      </Form.Item>
    </>
  );
};

export default SearchPrice;
