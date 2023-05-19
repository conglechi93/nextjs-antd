import {Form, Radio, Input, Select} from 'antd';
const {Search} = Input;
import React from 'react';

const FormSearch = () => {
  return (
    <>
      <div className='banner-wrap' id='form-search'>
        <div className='container'>
          <div className='var-search'>
            <div className='vars-search-place'>
              <Form>
                <Form.Item name='box-post-type'>
                  <Radio.Group>
                    <Radio.Button value='bds-ban'>Nhà đất bán</Radio.Button>
                    <Radio.Button value='bds-cho-thue'>
                      Nhà đất cho thuê
                    </Radio.Button>
                    <Radio.Button value='m-a'>M&A</Radio.Button>
                    <Radio.Button value='du-an'>Dự án</Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item>
                  <Search placeholder='input search text' />
                </Form.Item>
                <Form.Item>
                  <Select
                    defaultValue='lucy'
                    onChange={(e) => console.log(e)}
                    options={[
                      {
                        value: 'jack',
                        label: 'Jack',
                      },
                      {
                        value: 'lucy',
                        label: 'Lucy',
                      },
                      {
                        value: 'Yiminghe',
                        label: 'yiminghe',
                      },
                      {
                        value: 'disabled',
                        label: 'Disabled',
                        disabled: true,
                      },
                    ]}
                  />
                </Form.Item>
                <Form.Item>
                  <Select
                    defaultValue='lucy'
                    onChange={(e) => console.log(e)}
                    options={[
                      {
                        value: 'jack',
                        label: 'Jack',
                      },
                      {
                        value: 'lucy',
                        label: 'Lucy',
                      },
                      {
                        value: 'Yiminghe',
                        label: 'yiminghe',
                      },
                      {
                        value: 'disabled',
                        label: 'Disabled',
                        disabled: true,
                      },
                    ]}
                  />
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSearch;
