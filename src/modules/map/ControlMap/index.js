import React from 'react';
import LayerIcon from '../../../assets/icon/icon-layer.png';
import LocationIcon from '../../../assets/icon/icon-location.png';
import MinusIcon from '../../../assets/icon/icon-minus.png';
import PlusIcon from '../../../assets/icon/icon-plus.png';
import {Button} from 'antd';
import PropTypes from 'prop-types';

const ControlMap = ({setLayerMap, setZoomIn, setZoomOut}) => {
  const onClickLayer = (e) => {
    setLayerMap(e);
  };
  const onClickZoomIn = (e) => {
    setZoomIn(e);
  };
  const onClickZoomOut = (e) => {
    setZoomOut(e);
  };
  return (
    <>
      <div className='map-control'>
        <div className='map-control-remove'>
          <Button id='deleteButton' className='map-btn map-btn-remove'>
            Xoá vùng chọn
          </Button>
        </div>
        <div className='map-control-switch'>
          <Button
            id='locationControl'
            className='map-control-location btn map-btn'
          >
            <img src={LocationIcon.src} />
          </Button>
          <div id='drawControl' className='btn map-btn'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.3466 16.4593C12.3316 16.4008 12.3121 16.3434 12.2891 16.2869C12.2854 16.277 12.2827 16.2697 12.2812 16.266C12.2803 16.2636 12.2791 16.2614 12.2781 16.2591C12.2767 16.2558 12.2756 16.2524 12.2741 16.2491L8.28021 7.20876C8.18655 6.99679 7.93873 6.90088 7.72685 6.99449C7.51488 7.08815 7.41898 7.33588 7.51259 7.54785L11.5019 16.5777C11.5066 16.5903 11.5187 16.6244 11.536 16.6797C11.5832 16.8996 11.4902 17.1856 11.2715 17.4821C10.9714 17.889 10.465 18.2701 9.88235 18.5275C9.29965 18.7849 8.6771 18.9027 8.17409 18.8504C7.8087 18.8126 7.53527 18.6893 7.40402 18.5071C7.37445 18.4568 7.35682 18.424 7.3503 18.4116L6.99185 17.6002C6.8982 17.3882 6.65051 17.2923 6.43849 17.3859C6.22652 17.4796 6.13062 17.7273 6.22423 17.9393L6.58741 18.7614C6.58896 18.7649 6.59093 18.7683 6.59252 18.7718C6.59346 18.7738 6.59421 18.776 6.5952 18.778C6.59693 18.7814 6.60012 18.7879 6.60466 18.7966C6.6312 18.8521 6.66073 18.9058 6.69424 18.9567C7.04655 19.5509 8.36674 21.4542 11.303 22.4438C11.3473 22.4588 11.3925 22.4659 11.437 22.4659C11.5994 22.4659 11.7527 22.371 11.8212 22.2149C13.067 19.3775 12.5486 17.1196 12.3466 16.4593ZM11.2027 21.5158C10.9535 21.4198 10.7195 21.3164 10.4989 21.2086C10.5517 21.1468 10.6135 21.0825 10.6842 21.021C10.9274 20.8097 11.1882 20.7057 11.4737 20.7071C11.3998 20.9689 11.3107 21.2387 11.2027 21.5158ZM11.6634 19.878C10.7723 19.7933 10.1175 20.3084 9.75026 20.7951C9.1504 20.423 8.69018 20.0326 8.35587 19.7004C8.37752 19.7009 8.39885 19.7021 8.4207 19.7021C8.9914 19.7021 9.61868 19.5615 10.2215 19.2951C10.8471 19.0188 11.39 18.6316 11.7776 18.1897C11.7986 18.6701 11.7753 19.2408 11.6634 19.878Z'
                fill='#6C6868'
              />
              <path
                d='M4.41746 2.78618C4.34542 2.6231 4.17784 2.52331 4.00056 2.53746C3.66353 2.56414 3.29753 2.66121 2.94217 2.81825C2.58671 2.97528 2.26853 3.1805 2.02182 3.41168C1.89175 3.5336 1.85293 3.72439 1.92498 3.88742C1.99253 4.04028 2.14361 4.1375 2.30861 4.1375C2.31962 4.1375 2.33078 4.13703 2.34189 4.13614C2.67892 4.10946 3.04487 4.01239 3.40028 3.85535C3.75573 3.69837 4.07392 3.49315 4.32062 3.26192C4.4507 3.14 4.48951 2.94921 4.41746 2.78618Z'
                fill='#6C6868'
              />
              <path
                d='M7.65706 5.79809L6.01475 2.08067C5.57131 1.07708 3.97507 0.842658 2.38057 1.5471C1.65781 1.86631 1.04506 2.33333 0.655152 2.86194C0.214714 3.45913 0.0985109 4.07394 0.327823 4.59308C0.327823 4.59313 0.32787 4.59313 0.32787 4.59317L5.61457 16.5597C5.6839 16.7165 5.83751 16.8098 5.99857 16.8098C6.0552 16.8098 6.11281 16.7983 6.16793 16.7739C6.3799 16.6803 6.47581 16.4325 6.3822 16.2206L1.64056 5.48769C1.80771 5.51684 1.98434 5.5325 2.16921 5.5325C2.72182 5.5325 3.34207 5.4005 3.962 5.12666C4.7891 4.76127 5.42909 4.22525 5.79232 3.65399L6.88943 6.13724C6.95876 6.29408 7.11237 6.38736 7.27343 6.38736C7.33006 6.38736 7.38767 6.37583 7.44279 6.35145C7.65476 6.2578 7.75067 6.01006 7.65706 5.79809ZM3.62285 4.35899C2.39951 4.89945 1.3091 4.73741 1.0955 4.25394C0.994527 4.02538 1.08017 3.69959 1.33053 3.36013C1.63067 2.95316 2.13701 2.57216 2.71967 2.31467C3.25339 2.07889 3.76179 1.9768 4.18315 1.9768C4.72756 1.9768 5.12665 2.14724 5.24703 2.41972C5.46059 2.90324 4.8461 3.81852 3.62285 4.35899Z'
                fill='#6C6868'
              />
              <path
                d='M23.7831 4.12677C23.5803 4.01465 23.325 4.08829 23.213 4.29107C22.2368 6.05779 17.4946 5.5394 12.9087 5.03821C11.5468 4.88934 10.1385 4.73545 8.8055 4.63738C8.57422 4.62027 8.37322 4.79399 8.35625 5.02504C8.33924 5.25613 8.51286 5.45727 8.74396 5.47429C10.0622 5.57123 11.4629 5.72432 12.8175 5.8724C15.0893 6.1207 17.2467 6.35652 19.0886 6.35652C19.2793 6.35652 19.4669 6.35399 19.6506 6.3487C21.9969 6.28087 23.3623 5.75605 23.9475 4.69691C24.0595 4.49413 23.986 4.23885 23.7831 4.12677Z'
                fill='#6C6868'
              />
              <path
                d='M20.214 13.7071C18.1468 13.1483 15.4627 13.0204 12.6209 12.885L12.1817 12.864C11.9488 12.8521 11.7536 13.0314 11.7424 13.2629C11.7313 13.4944 11.9099 13.6911 12.1414 13.7022L12.5809 13.7233C17.9595 13.9796 23.0397 14.2217 23.0397 17.4251C23.0397 18.6889 22.6327 19.6649 21.7952 20.4089C21.0524 21.0689 18.6999 22.53 12.9197 21.8444C12.689 21.817 12.4809 21.9815 12.4536 22.2116C12.4263 22.4417 12.5907 22.6504 12.8209 22.6777C13.6341 22.7742 14.6607 22.8588 15.7599 22.8588C18.0825 22.8587 20.7268 22.4805 22.3525 21.0362C23.3654 20.1364 23.8789 18.9214 23.8789 17.425C23.8791 15.5898 22.6802 14.3737 20.214 13.7071Z'
                fill='#6C6868'
              />
              <path
                d='M2.77653 11.2909C1.58989 10.6403 0.961432 9.74881 0.855307 8.56559C0.82287 8.20245 0.839135 7.86973 0.903823 7.57671C0.953745 7.3504 0.810729 7.12653 0.584416 7.0766C0.35787 7.02664 0.134229 7.1697 0.0843071 7.39601C0.00124456 7.77293 -0.0205992 8.19157 0.0194789 8.64045C0.150682 10.1031 0.942541 11.2425 2.37307 12.0269C2.43715 12.0619 2.50624 12.0786 2.57445 12.0786C2.72271 12.0786 2.86643 11.9998 2.94274 11.8607C3.05412 11.6574 2.97973 11.4024 2.77653 11.2909Z'
                fill='#6C6868'
              />
            </svg>
          </div>
          <Button
            id='layerControl'
            className='btn map-btn'
            onClick={onClickLayer}
          >
            <img src={LayerIcon.src} alt='Layer Map' />
          </Button>
          <div className='zoomControl' style={{marginTop: '10px'}}>
            <Button id='zoomin' className='btn map-btn' onClick={onClickZoomIn}>
              <img src={MinusIcon.src} />
            </Button>
            <Button
              id='zoomout'
              className='btn map-btn'
              onClick={onClickZoomOut}
            >
              <img src={PlusIcon.src} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlMap;
ControlMap.propTypes = {
  setLayerMap: PropTypes.func,
  setZoomIn: PropTypes.func,
  setZoomOut: PropTypes.func,
};