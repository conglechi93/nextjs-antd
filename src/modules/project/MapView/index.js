import {Col, Row} from 'antd';
import React, {useState, useEffect} from 'react';
import NoResult from '../NoResult';
import CartItem from 'modules/home/RecommendRealEstate/CartItem';
import ControlMap from './ControlMap';
import {Loader} from '@googlemaps/js-api-loader';
import PropTypes from 'prop-types';
import {fetchSearchPolygon} from 'pages/api/searchPolygon';
import TitleMap from './TitleMap';

const MapView = ({dataObject, setDataObject}) => {
  const [itemPost, setItemPost] = useState([]);
  const [total, setTotal] = useState(0);
  const [map, setMap] = useState(null);
  const [layerMap, setLayerMap] = useState('satellite');
  const [zoomIn, setZoomIn] = useState(null);
  const [zoomOut, setZoomOut] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);
  const loader = new Loader({
    apiKey: 'AIzaSyCZbkt0uy-5llZmpZJUTUDcknoqgBz7a50',
    version: 'weekly',
    libraries: ['places'],
  });
  const mapOptions = {
    zoom: 12,
    center: {lat: 16.047079, lng: 108.20623},
    scaleControl: true,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    draggable: true,
    panControl: false,
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'satellite',
  };
  useEffect(() => {
    loader
      .load()
      .then((google) => {
        const mapInstance = new google.maps.Map(
          document.getElementById('maps'),
          mapOptions,
        );
        setMap(mapInstance);
        window.myMap = mapInstance;
        const infoWindowInstance = new window.google.maps.InfoWindow();
        setInfoWindow(infoWindowInstance);
        google.maps.event.addListenerOnce(
          mapInstance,
          'tilesloaded',
          function () {
            const latlngbounds = window.myMap.getBounds();
            initFitAllBounds(latlngbounds);
          },
        );
      })
      .catch((e) => {
        // do something
      });
  }, []);
  function initFitAllBounds(bounds) {
    let NE = bounds.getNorthEast();
    let SW = bounds.getSouthWest();
    let NW = new google.maps.LatLng(NE.lat(), SW.lng());
    let SE = new google.maps.LatLng(SW.lat(), NE.lng());
    let polygons = [
      {lat: NE.lat(), lng: NE.lng()},
      {lat: NW.lat(), lng: NW.lng()},
      {lat: SW.lat(), lng: SW.lng()},
      {lat: SE.lat(), lng: SE.lng()},
      {lat: NE.lat(), lng: NE.lng()},
    ];
    setDataObject(polygons);
  }
  useEffect(() => {
    const fetchAPI = async () => {
      const resultData = await fetchSearchPolygon(dataObject);
      const item = resultData?.data?.elements ?? [];
      setItemPost(item);
      const total = resultData?.data?.total ?? 0;
      setTotal(total);
    };
    fetchAPI();
  }, [dataObject]);

  useEffect(() => {
    const markers = [];
    for (let i = 0; i < itemPost.length; i++) {
      let data = itemPost[i];
      let myLatlng = new google.maps.LatLng(data.lat, data.lng);
      let marker = new google.maps.Marker({
        position: myLatlng,
        map: window.myMap,
        title: data.title,
        price: data.price,
        id: data.id,
        // icon: iconUrl,
        open: true,
        disableAutoPan: true,
        url: data.permalink,
        draggable: false,
      });
      (function (marker, data) {
        let infoWindow = new google.maps.InfoWindow({
          content:
            "<div id='marker-" +
            data.id +
            "' class='infoWindow_map'><a href='#" +
            data.id +
            "' data-id='" +
            data.id +
            "'>" +
            data.priceText +
            '</a></div>',
          disableAutoPan: true,
        });
        infoWindow.open(window.myMap, marker);
      })(marker, data);
      markers.push(marker);
    }
  }, [itemPost]);
  return (
    <>
      <div className='map-search'>
        <div className='map-content'>
          <Row gutter={26} className='map-content-row'>
            <Col span={8} className='map-content-left'>
              <div className='map-title view-control-archive'>
                <TitleMap total={total} />
              </div>
              <div className='map-info'>
                <div className='load-item-taxonomy'>
                  <Row gutter={[16, 16]}>
                    {itemPost?.length === 0 ? (
                      <NoResult />
                    ) : (
                      itemPost?.map((item) => (
                        <Col span={12} key={item.id}>
                          <CartItem item={item} />
                        </Col>
                      ))
                    )}
                  </Row>
                </div>
              </div>
            </Col>
            <Col span={16} className='map-content-right'>
              <div
                className='map'
                id='maps'
                style={{width: '100%', height: '100%'}}
              ></div>
              <ControlMap
                layerMap={layerMap}
                setZoomOut={setZoomOut}
                setZoomIn={setZoomIn}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default MapView;
MapView.propTypes = {
  dataObject: PropTypes.any,
  setDataObject: PropTypes.func,
};
