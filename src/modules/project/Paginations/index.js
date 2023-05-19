import React from 'react';
import {Pagination} from 'antd';
import PropTypes from 'prop-types';

const Paginations = ({
  total,
  currentPage,
  setCurrentPage,
  setIsReload,
  dataObject,
  setDataObject,
}) => {
  const handleOnChange = (e) => {
    const newDataObject = {
      ...dataObject,
      page: e,
    };
    setDataObject(newDataObject);
    setCurrentPage(e);
    setIsReload(true);
  };
  return (
    <>
      <div className='pagination text-center'>
        <div className='container'>
          <Pagination
            hideOnSinglePage={true}
            current={currentPage}
            defaultPageSize={12}
            total={total}
            onChange={handleOnChange}
          />
        </div>
      </div>
    </>
  );
};

export default Paginations;
Paginations.propTypes = {
  total: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  setIsReload: PropTypes.func,
  dataObject: PropTypes.any,
  setDataObject: PropTypes.func,
};
