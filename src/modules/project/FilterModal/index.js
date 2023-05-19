import React, {useState} from 'react';
import {Button, Checkbox, Form, Input, Radio} from 'antd';
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = [];

const FilterModal = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [form] = Form.useForm();

  const onChange = (list) => {
    setCheckedList(list);
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <>
      <div className='all-filter'>
        <div className='all-filter--inner'>
          <Form id='form-filter'>
            <div className='filter-form-input'>
              <Radio.Group defaultValue='bds-ban' buttonStyle='solid'>
                <Radio.Button value='bds-ban'>Mua bán</Radio.Button>
                <Radio.Button value='bds-cho-thue'>Cho thuê</Radio.Button>
                <Radio.Button value='m-a'>M&A</Radio.Button>
                <Radio.Button value='du-an'>Dự án</Radio.Button>
              </Radio.Group>
            </div>
            <div className='filter-content'>
              <div className='filter-box'>
                <h4>Loại bất động sản</h4>
                <div className='type_bds_tab form-check-group d-grid g-template-3 g-template-2 gap-10'>
                  <CheckboxGroup
                    options={plainOptions}
                    value={checkedList}
                    onChange={onChange}
                  />
                </div>
              </div>
              {/* Location */}
              <div className='filter-box'>
                <h4>Khu vực</h4>
                <div className='type_bds_tab form-check-group d-grid g-template-3 g-template-2 gap-10'>
                  <CheckboxGroup
                    options={plainOptions}
                    value={checkedList}
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
            <Form.Item>
              <Button htmlType='button' onClick={onReset}>
                Reset
              </Button>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default FilterModal;
