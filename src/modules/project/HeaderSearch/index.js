import React, {useState} from 'react';
import {Select, Input, Modal, Button} from 'antd';
import FilterModal from '../FilterModal';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

const {Search} = Input;
const HeaderSearch = ({
  dataObject,
  setDataObject,
  setIsReload,
  setPostType,
  setProvinces,
  setSubTypes,
  setCurrentPage,
  onChangeSearchParam,
  switchMap,
}) => {
  const [modal2Open, setModal2Open] = useState(false);
  const categories = useSelector((state) => state.categories);
  const provinces = useSelector((state) => state.provinces);
  const postTypeFilterCats = categories.categories.postTypeFilterCat ?? [];
  const subTypeFilterCats = categories.categories.realEstateTypeCat ?? [];
  const provincesFilter = provinces.provinces ?? [];
  let postTypeFilterOptions = [];
  let subTypeFilterOptions = [];
  let provincesFilterOptions = [];

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

  // Get Value Option Post Type
  postTypeFilterCats.forEach((ele) => {
    let eleTypesOption = {
      label: ele.name,
      value: ele.code,
    };
    postTypeFilterOptions.push(eleTypesOption);
  });

  //Get Value Option SubTypes
  const postType = dataObject?.types ?? '';
  subTypeFilterCats.forEach((ele) => {
    if (postType === ele.parent) {
      let eleSubTypesOption = {
        label: ele.name,
        value: ele.code,
      };
      subTypeFilterOptions.push(eleSubTypesOption);
    }
  });

  // Get Value Option Provinces
  provincesFilter.forEach((ele) => {
    let eleProvincesOption = {
      label: ele.name,
      value: ele.name,
    };
    provincesFilterOptions.push(eleProvincesOption);
  });

  // Get Value Prices
  const handleOnChangePrice = (e) => {
    const price_from = e.split('-')[0];
    const price_to = e.split('-')[1];
    onChangeSearchParam({priceFrom: price_from, priceTo: price_to});
    setIsReload(true);
  };

  // Xử lý thay đổi Loại tin
  const handleOnChangeType = (e) => {
    onChangeSearchParam({types: e});
    setPostType(e);
    setCurrentPage(1);
    setIsReload(true);
  };

  // Xử lý thay đổi Sub Type
  const handleOnchangeSubType = (e) => {
    onChangeSearchParam({subTypes: e});
    setSubTypes(e);
    setCurrentPage(1);
    setIsReload(true);
  };

  // Xử lý thay đổi Loại Thành phố
  const handleOnChangeProvinces = (e) => {
    onChangeSearchParam({provinces: e});
    setProvinces(e);
    setCurrentPage(1);
    setIsReload(true);
  };

  return (
    <>
      <div className='action-search'>
        <div className='container'>
          <div className='search-header d-flex '>
            <div className='filter-mb'>
              <div title='Filter'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M13.5674 4.89588H2M11.6395 19.355H2M21.2788 19.355H18.8691M11.6393 12.1254H21.2788M2 12.1254H4.40969M15.4953 4.70267C15.4953 4.18791 15.6495 3.68471 15.9384 3.25671C16.2272 2.8287 16.6378 2.49511 17.1182 2.29812C17.5986 2.10113 18.1272 2.04959 18.6371 2.15001C19.1471 2.25044 19.6155 2.49832 19.9832 2.86231C20.3509 3.2263 20.6012 3.69005 20.7027 4.19491C20.8041 4.69978 20.7521 5.22309 20.5531 5.69866C20.3541 6.17424 20.0171 6.58072 19.5848 6.8667C19.1525 7.15269 18.6442 7.30533 18.1242 7.30533C17.427 7.30533 16.7583 7.03112 16.2653 6.54303C15.7723 6.05493 15.4953 5.39294 15.4953 4.70267ZM13.5674 19.4974C13.5674 18.9827 13.7216 18.4795 14.0105 18.0515C14.2993 17.6235 14.7099 17.2899 15.1903 17.0929C15.6707 16.8959 16.1993 16.8444 16.7092 16.9448C17.2192 17.0452 17.6876 17.2931 18.0553 17.6571C18.423 18.0211 18.6733 18.4848 18.7748 18.9897C18.8762 19.4945 18.8242 20.0179 18.6252 20.4934C18.4262 20.969 18.0892 21.3755 17.6569 21.6615C17.2246 21.9475 16.7163 22.1001 16.1963 22.1001C15.4991 22.1001 14.8304 21.8259 14.3374 21.3378C13.8444 20.8497 13.5674 20.1877 13.5674 19.4974ZM9.71141 12.2678C9.71141 11.7531 9.55723 11.2499 9.26835 10.8218C8.97948 10.3938 8.5689 10.0603 8.08852 9.86326C7.60814 9.66627 7.07954 9.61473 6.56958 9.71516C6.05961 9.81558 5.59117 10.0635 5.22351 10.4274C4.85584 10.7914 4.60546 11.2552 4.50402 11.7601C4.40258 12.2649 4.45465 12.7882 4.65362 13.2638C4.8526 13.7394 5.18956 14.1459 5.62189 14.4318C6.05422 14.7178 6.5625 14.8705 7.08246 14.8705C7.7797 14.8705 8.44839 14.5963 8.94141 14.1082C9.43443 13.6201 9.71141 12.9581 9.71141 12.2678Z'
                    stroke='#6C6868'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                  ></path>
                </svg>
              </div>
            </div>
            <div className='select box-post-type'>
              <Select
                onChange={handleOnChangeType}
                defaultValue='Bán'
                style={{width: 240}}
                options={postTypeFilterOptions}
              />
            </div>
            <div className='select box-search'>
              <Search
                placeholder='Tìm kiếm...'
                style={{
                  width: 200,
                }}
              />
            </div>
            <div className='select box-subtype'>
              <Select
                onChange={handleOnchangeSubType}
                defaultValue='Loại hình'
                style={{width: 240}}
                options={subTypeFilterOptions}
              />
            </div>
            <div className='select box-location'>
              <Select
                onChange={handleOnChangeProvinces}
                defaultValue='Khu vực'
                style={{width: 240}}
                options={provincesFilterOptions}
              />
            </div>
            <div className='select box-prices'>
              <Select
                onChange={handleOnChangePrice}
                defaultValue='Khoảng giá'
                style={{width: 240}}
                options={pricesOption}
              />
            </div>
            <div
              className='box-all ant-select-selector'
              onClick={() => setModal2Open(true)}
            >
              <div className='box-text'>Bộ lọc</div>
            </div>
            <div className='box-views'>
              <div className='box-view-control d-flex align-center'>
                <div
                  className={`product-view list-product`}
                  onClick={() => switchMap(false)}
                >
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 20 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M19.0022 14.7889H5.62833C5.07712 14.7889 4.63037 14.3421 4.63037 13.7909C4.63037 13.2397 5.07712 12.793 5.62833 12.793H19.0019C19.5531 12.793 19.9999 13.2397 19.9999 13.7909C19.9999 14.3421 19.5534 14.7889 19.0022 14.7889Z'
                      fill='#787878'
                    ></path>
                    <path
                      d='M19.0022 8.52582H5.62833C5.07712 8.52582 4.63037 8.07906 4.63037 7.52786C4.63037 6.97666 5.07712 6.52991 5.62833 6.52991H19.0019C19.5531 6.52991 19.9999 6.97666 19.9999 7.52786C20.0002 8.07906 19.5534 8.52582 19.0022 8.52582Z'
                      fill='#787878'
                    ></path>
                    <path
                      d='M19.0022 2.26117H5.62833C5.07712 2.26117 4.63037 1.81442 4.63037 1.26321C4.63037 0.71201 5.07712 0.265259 5.62833 0.265259H19.0019C19.5531 0.265259 19.9999 0.71201 19.9999 1.26321C19.9999 1.81442 19.5534 2.26117 19.0022 2.26117Z'
                      fill='#787878'
                    ></path>
                    <path
                      d='M1.34025 2.6805C2.08045 2.6805 2.6805 2.08045 2.6805 1.34025C2.6805 0.600052 2.08045 0 1.34025 0C0.600051 0 0 0.600052 0 1.34025C0 2.08045 0.600051 2.6805 1.34025 2.6805Z'
                      fill='#787878'
                    ></path>
                    <path
                      d='M1.34025 8.86703C2.08045 8.86703 2.6805 8.26698 2.6805 7.52678C2.6805 6.78657 2.08045 6.18652 1.34025 6.18652C0.600051 6.18652 0 6.78657 0 7.52678C0 8.26698 0.600051 8.86703 1.34025 8.86703Z'
                      fill='#787878'
                    ></path>
                    <path
                      d='M1.34025 15.0551C2.08045 15.0551 2.6805 14.4551 2.6805 13.7149C2.6805 12.9747 2.08045 12.3746 1.34025 12.3746C0.600051 12.3746 0 12.9747 0 13.7149C0 14.4551 0.600051 15.0551 1.34025 15.0551Z'
                      fill='#787878'
                    ></path>
                  </svg>
                </div>
                <div
                  onClick={() => switchMap(true)}
                  className='product-view map-product'
                  data-view='map'
                  title='Map'
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1.22665 20H18.7732C19.5654 20 20.1502 19.2539 19.9658 18.4754C19.598 16.9259 18.8242 13.6656 18.4973 12.2885C18.3652 11.7298 17.8747 11.3396 17.3047 11.3396H11.7573C13.2753 9.17655 14.8763 6.51629 14.8763 4.9134C14.8763 2.20411 12.687 0 9.99591 0C7.30965 0 5.12392 2.20411 5.12392 4.9134C5.12392 6.51388 6.72128 9.17512 8.23565 11.3396H2.69511C2.12592 11.3396 1.63537 11.7296 1.50246 12.2883L0.0343934 18.4752C-0.150425 19.2515 0.432867 20 1.22665 20ZM0.829495 18.6674L0.949887 18.16H4.54116V19.1756H1.22665C0.961308 19.1756 0.767796 18.9255 0.829495 18.6674ZM18.7732 19.1756H8.01534V18.16H19.0503L19.1707 18.6672C19.2326 18.9263 19.0373 19.1756 18.7732 19.1756ZM17.7022 12.4804L18.0694 14.0271H13.9566V12.164H17.3047C17.4947 12.164 17.6583 12.294 17.7022 12.4804ZM4.49327 15.4658L5.0386 12.164H8.82401C9.13286 12.5871 9.37279 12.904 9.67619 13.2949C9.75363 13.3927 9.87098 13.4497 9.99511 13.4501C10.1188 13.4501 10.2366 13.3935 10.3144 13.2963C10.5344 13.0234 10.9628 12.4473 11.1686 12.164H13.1392V15.4658H4.49327ZM9.99591 0.824402C12.2363 0.824402 14.0588 2.65878 14.0588 4.9134C14.0588 6.78795 11.1212 10.8854 9.99671 12.3668C8.86618 10.8747 5.94137 6.79289 5.94137 4.9134C5.94137 2.65878 7.76029 0.824402 9.99591 0.824402ZM2.29756 12.4806C2.34186 12.2942 2.50511 12.164 2.69511 12.164H4.2099L3.60756 15.8102C3.5876 15.9297 3.62113 16.0521 3.69896 16.1445C3.7764 16.2369 3.89055 16.2902 4.0107 16.2902H13.5479C13.7738 16.2902 13.9566 16.1056 13.9566 15.878V14.8515H18.265L18.8547 17.3356H7.60662C7.38069 17.3356 7.19789 17.5202 7.19789 17.7478V19.1756H5.35862V17.7478C5.35862 17.5202 5.17581 17.3356 4.94989 17.3356H1.14552L2.29756 12.4806Z'
                      fill='#787878'
                    />
                    <circle
                      cx='10.0791'
                      cy='3.98584'
                      r='1.5'
                      stroke='#787878'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Modal
            title='Toàn bộ lọc'
            centered
            open={modal2Open}
            onOk={() => setModal2Open(false)}
            onCancel={() => setModal2Open(false)}
            width={600}
          >
            <FilterModal
              setModal2Open={setModal2Open}
              dataObject={dataObject}
              setDataObject={setDataObject}
              setIsReload={setIsReload}
            />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default HeaderSearch;
HeaderSearch.propTypes = {
  setIsReload: PropTypes.func,
  dataObject: PropTypes.any,
  setDataObject: PropTypes.func,
  setPostType: PropTypes.func,
  setProvinces: PropTypes.func,
  setSubTypes: PropTypes.func,
  setCurrentPage: PropTypes.func,
  onChangeSearchParam: PropTypes.func,
  switchMap: PropTypes.func,
};
