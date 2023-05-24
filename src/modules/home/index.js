import React, {useEffect} from 'react';
import {fetchAllCategories} from 'redux/actions/AllCategories';
import {fetchProvinces} from 'redux/actions/Provinces';
import {useDispatch} from 'react-redux';
import Banner from './HeroBanner/Banner';
import ProjectHighlight from './ProjectHighlight';
import AdsBannerFirst from './AdsBannerFirst';
import ProjectDiscovery from './ProjectDiscovery';
import DiscoveryRealEstate from './DiscoveryRealEstate';
import AdsBannerSecond from './AdsBannerSecond';
import RecommendRealEstate from './RecommendRealEstate';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategories());
    dispatch(fetchProvinces());
  }, []);
  return (
    <>
      <Banner />
      <ProjectHighlight />
      <AdsBannerFirst />
      <ProjectDiscovery />
      <AdsBannerSecond />
      <DiscoveryRealEstate />
      <RecommendRealEstate />
    </>
  );
};

export default Home;
