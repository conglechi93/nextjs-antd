import Head from 'next/head';
import React, {useState, useEffect} from 'react';
import HeaderSearch from './HeaderSearch';
import Breadcrumbs from './Breadcrumbs';
import TitleSearch from './TitleSearch';
import BoxItem from './BoxItem';
import {fetchSearchPost} from 'pages/api/searchPost';
import Paginations from './Paginations';
import {fetchAllCategories} from 'redux/actions/AllCategories';
import {fetchProvinces} from 'redux/actions/Provinces';
import {useDispatch} from 'react-redux';

const Project = () => {
  const [classNameActive, setClassNameActive] = useState(true);
  const [itemPost, setItemPost] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postType, setPostType] = useState('');
  const [subTypes, setSubTypes] = useState('');
  const [provinces, setProvinces] = useState('');
  const [isReload, setIsReload] = useState(true);
  const [dataObject, setDataObject] = useState({
    page: 1,
    types: 'bds-ban',
    subTypes: '',
    provinces: '',
    districts: '',
    wards: '',
    priceFrom: '',
    priceTo: '',
    areaFrom: '',
    areaTo: '',
    directions: '',
    bedrooms: '',
    investors: '',
    postBy: '',
    projects: '',
    searchText: '',
    sortBy: 'newest',
    pageSize: 12,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategories());
    dispatch(fetchProvinces());
  }, []);

  useEffect(() => {
    const fetchAPI = async () => {
      const resultData = await fetchSearchPost(dataObject);
      const itemPost = resultData?.data?.elements ?? [];
      setItemPost(itemPost);
      const total = resultData?.data?.total ?? 0;
      setTotal(total);
    };
    if (isReload) {
      fetchAPI();
      setIsReload(false);
    }
  }, [isReload]);

  // Handle On Change Params
  const onChangeSearchParam = (objectParams) => {
    const newDataObject = {
      ...dataObject,
      ...objectParams,
    };
    setDataObject(newDataObject);
  };

  return (
    <>
      <div className={`search ${classNameActive ? 'active' : ''}`}>
        <Head>
          <title>Vars - Bất động sản</title>
        </Head>
        <HeaderSearch
          onChangeSearchParam={onChangeSearchParam}
          dataObject={dataObject}
          setDataObject={setDataObject}
          setIsReload={setIsReload}
          setPostType={setPostType}
          setProvinces={setProvinces}
          setSubTypes={setSubTypes}
          setCurrentPage={setCurrentPage}
        />
        <Breadcrumbs />
        <div
          className={`title-view-control ${
            classNameActive ? 'layout-grid' : 'layout-list'
          }`}
        >
          <TitleSearch
            postType={postType}
            provinces={provinces}
            subTypes={subTypes}
            dataObject={dataObject}
            setDataObject={setDataObject}
            total={total}
            classNameActive={setClassNameActive}
            setIsReload={setIsReload}
          />
        </div>
        <div
          className={`load-item-taxonomy ${
            classNameActive ? 'layout-grid' : 'layout-list'
          }`}
        >
          <BoxItem itemPost={itemPost} />
        </div>
        <Paginations
          dataObject={dataObject}
          setDataObject={setDataObject}
          total={total}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setIsReload={setIsReload}
        />
      </div>
    </>
  );
};

export default Project;
