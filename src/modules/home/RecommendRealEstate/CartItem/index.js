import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
const CartItem = (props) => {
  // const item = props.item;
  const {item} = props;
  let styleStatus = '';
  if (item.reStatus?.name == 'Sắp mở bán') {
    styleStatus = 'open-sale';
  } else if (item.reStatus?.name == 'Đang mở bán') {
    styleStatus = 'one-sale';
  } else {
    styleStatus = 'handed-over';
  }
  return (
    <>
      <div className='col-item' data-post={item.id} id={item.id}>
        <div className='col-item-inner overflow-hidden position-relative'>
          <div className='col-item-top position-relative'>
            <a href={item.detailUrl}>
              <img src={item.thumbnailUrl} alt='' />
            </a>
            <div
              className={`col-item-info col-item-bds position-absolute ${
                item.postType?.code == 'du-an' ? 'd-none  ' : ''
              }`}
            >
              <div className='btn btn-ins'>
                {item.postDate ? item.postDate : ''}
              </div>
            </div>
          </div>
          <div className='col-item-bottom'>
            <a href={item.detailUrl}>
              <h5 className='limit-text limit-text-1' title={item.title}>
                {item.title}
              </h5>
            </a>
            <a
              data-issingle='true'
              data-id={item.id}
              data-favorite='0'
              className='fav-btn fav-btn position-absolute add-favorite '
              title='Yêu thích'
            >
              <div className='icon-box d-inline-block'>
                <svg
                  width='24'
                  height='23'
                  viewBox='0 0 24 23'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M21.1346 3.66004C20.6068 3.09688 19.9802 2.65014 19.2905 2.34534C18.6008 2.04055 17.8615 1.88367 17.1149 1.88367C16.3684 1.88367 15.6291 2.04055 14.9394 2.34534C14.2497 2.65014 13.623 3.09688 13.0953 3.66004L11.9999 4.82825L10.9046 3.66004C9.83849 2.52302 8.39257 1.88426 6.88489 1.88426C5.37722 1.88426 3.93129 2.52302 2.8652 3.66004C1.79912 4.79705 1.2002 6.33917 1.2002 7.94715C1.2002 9.55512 1.79912 11.0972 2.8652 12.2343L3.96054 13.4025L11.9999 21.9767L20.0393 13.4025L21.1346 12.2343C21.6627 11.6714 22.0815 11.003 22.3673 10.2674C22.6531 9.53183 22.8002 8.74339 22.8002 7.94715C22.8002 7.1509 22.6531 6.36246 22.3673 5.62687C22.0815 4.89127 21.6627 4.22293 21.1346 3.66004Z'
                    fill='#585555'
                    fillOpacity='0.8'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                </svg>
              </div>
            </a>
            <div className='col-item-price d-flex justify-between align-center'>
              <div className='price main-co'>{item.priceText}</div>
              <div
                className={`info-tab ${
                  item.postType?.code == 'du-an'
                    ? styleStatus
                    : 'd-none handed-over'
                }`}
              >
                <div className='btn btn-ins'>{item.reStatus?.name}</div>
              </div>
            </div>
            <ul className='col-item-time d-flex align-center justify-between info-time-bds'>
              <li className='area area-bds'>
                <span>{item.squareText}</span>
              </li>
              <li
                className={`area ${
                  item.postType?.code == 'du-an' ? '' : 'd-none'
                }`}
              >
                <span>
                  {item.totalApartment ? item.totalApartment : '--'} căn
                </span>
              </li>
              <li
                className={`area ${
                  item.postType?.code == 'du-an' ? 'd-none' : ''
                }`}
              >
                <span>
                  Hướng {item.direction?.name ? item.direction?.name : '--'}
                </span>
              </li>
              <li
                className={`area ${
                  item.postType?.code == 'du-an' ? '' : 'd-none'
                }`}
              >
                <span>{item.postDate ? item.postDate : '--'}</span>
              </li>
              <li
                className={`area ${
                  item.postType?.code == 'du-an' ? 'd-none' : ''
                }`}
              >
                <span>{item.bedroom ? item.bedroom : '--'} PN</span>
              </li>
              <li
                className={`area ${
                  item.postType?.code == 'du-an' ? 'd-none' : ''
                }`}
              >
                <span>{item.bathroom ? item.bathroom : '--'} WC</span>
              </li>
            </ul>
            <ul className='col-item-location d-flex align-center justify-between'>
              <li className=''>
                <a
                  className='limit-text limit-text-1'
                  title={item.typeRealEstate?.name}
                >
                  {item.typeRealEstate?.name}
                </a>
              </li>

              <li>
                <a
                  className='limit-text limit-text-1 text-end'
                  title={item.district?.name + ', ' + item.province?.name}
                >
                  {item.district?.name + ', ' + item.province?.name}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.any,
};
