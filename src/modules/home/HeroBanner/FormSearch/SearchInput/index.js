import {Form, Input} from 'antd';
import React from 'react';

const {Search} = Input;

const SearchInput = () => {
  return (
    <>
      <Form.Item>
        <Search placeholder='Tìm kiếm...' />
      </Form.Item>
    </>
  );
};

export default SearchInput;
