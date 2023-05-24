import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import HeaderSearch from 'modules/project/HeaderSearch';
import TitleMap from './TitleMap';
import {Col, Row} from 'antd';

const Map = () => {
  return (
    <>
      <div className='map-search'>
        <HeaderSearch />
        <div className='map-content'>
          <Row>
            <Col flex={2}>
              <div className='map-title'>
                <TitleMap />
              </div>
              <div className='map-info'></div>
            </Col>
            <Col flex={3}>
              <div className='map' id='maps'>
                maps
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Map;
