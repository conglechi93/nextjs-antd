import React from 'react';
import Banner from './HeroBanner/Banner';
import ProjectHighlight from './ProjectHighlight';
import AdsBannerFirst from './AdsBannerFirst';
import ProjectForYou from './ProjectForYou';
import ProjectArea from './ProjectArea';
import DiscoveryRealEstate from './DiscoveryRealEstate';
import AdsBannerSecond from './AdsBannerSecond';
import RecommendRealEstate from './RecommendRealEstate';

const Home = () => {
  return (
    <>
      <Banner />
      <ProjectHighlight />
      <AdsBannerFirst />
      <ProjectForYou />
      <ProjectArea />
      <DiscoveryRealEstate />
      <AdsBannerSecond />
      <RecommendRealEstate />
    </>
  );
};

export default Home;
