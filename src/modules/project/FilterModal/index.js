import React, {useState, useEffect} from 'react';
import {Button, Form} from 'antd';
import FormHeader from './FormHeader';
import FormPostType from './FormPostType';
import FormLocation from './FormLocation';
import FormPrice from './FormPrice';
import FormArea from './FormArea';
import FormDirection from './FormDirection';
import FormBedroom from './FormBedroom';
import FormProject from './FormProject';
import FormPoster from './FormPoster';
import PropTypes from 'prop-types';

const FilterModal = ({
  dataObject,
  setDataObject,
  setIsReload,
  setModal2Open,
}) => {
  const [postType, setPostType] = useState('bds-ban');
  const [className, setClassName] = useState(false);

  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  const onChangeForm = () => {
    setClassName(true);
  };
  const onSubmit = () => {
    setIsReload(true);
    setModal2Open(false);
  };

  return (
    <>
      <div className='all-filter'>
        <div className='all-filter--inner'>
          <Form className='filter-form' onChange={onChangeForm}>
            <FormHeader
              setPostType={setPostType}
              dataObject={dataObject}
              setDataObject={setDataObject}
            />
            <div className='filter-form-content'>
              <FormPostType
                postType={postType}
                dataObject={dataObject}
                setDataObject={setDataObject}
              />
              {/* Location */}
              <FormLocation
                dataObject={dataObject}
                setDataObject={setDataObject}
              />
              {/* Price and area*/}
              <div className='filter-box d-grid grid-template-2 gap-20'>
                <FormPrice
                  dataObject={dataObject}
                  setDataObject={setDataObject}
                />
                <FormArea
                  dataObject={dataObject}
                  setDataObject={setDataObject}
                />
              </div>
              {/* Direction */}
              <FormDirection
                dataObject={dataObject}
                setDataObject={setDataObject}
              />
              {/* Bedroom */}
              <FormBedroom
                dataObject={dataObject}
                setDataObject={setDataObject}
              />
              {/* Poster */}
              <FormPoster
                dataObject={dataObject}
                setDataObject={setDataObject}
              />
              {/* Project */}
              <FormProject
                dataObject={dataObject}
                setDataObject={setDataObject}
              />
            </div>
            <Form.Item className='filter-box-footer'>
              <Button className='btn-reset' htmlType='button' onClick={onReset}>
                Đặt lại
              </Button>
              <Button
                className={`btn-apply ${className ? 'active' : ''}`}
                type='primary'
                htmlType='submit'
                onClick={onSubmit}
              >
                Áp dụng
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default FilterModal;
FilterModal.propTypes = {
  setIsReload: PropTypes.func,
  dataObject: PropTypes.any,
  setDataObject: PropTypes.func,
  setModal2Open: PropTypes.any,
};
