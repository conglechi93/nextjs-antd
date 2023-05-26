import {Form, Button, Row, Col} from 'antd';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import SearchHeader from './SearchHeader';
import SearchInput from './SearchInput';
import SearchSubType from './SearchSubType';
import SearchProvince from './SearchProvince';
import SearchDistrict from './SearchDistrict';
import SearchWard from './SearchWard';
import SearchDirection from './SearchDirection';
import SearchArea from './SearchArea';
import SearchPrice from './SearchPrice';
import {fetchDistricts} from 'pages/api/districts';
import {fetchWards} from 'pages/api/wards';

const FormSearch = () => {
  const [idCity, setIdCity] = useState();
  const [idDistrict, setIdDistrict] = useState();
  const [postType, setPostType] = useState([]);
  const [currentPostType, setcurrentPostType] = useState('bds-ban');
  const [subTypes, setSubTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [directions, setDirections] = useState([]);

  const provinces = useSelector((state) => state.provinces);
  const provincesFilter = provinces.provinces ?? [];

  const categories = useSelector((state) => state.categories);
  const realDirectionCat = categories?.categories?.realEstateDirectionCat ?? [];
  const postTypeFilterCat = categories?.categories?.postTypeFilterCat ?? [];
  const realEstateTypeCat = categories?.categories?.realEstateTypeCat ?? [];

  useEffect(() => {
    setSubTypes(realEstateTypeCat);
  }, [realEstateTypeCat]);

  useEffect(() => {
    setPostType(postTypeFilterCat);
  }, [postTypeFilterCat]);

  useEffect(() => {
    setDirections(realDirectionCat);
  }, [realDirectionCat]);

  useEffect(() => {
    setCities(provincesFilter);
  }, [provincesFilter]);

  // Call Api District
  useEffect(() => {
    const fetchAPI = async () => {
      const resultData = await fetchDistricts(idCity);
      const data = resultData?.data ?? [];
      setDistricts(data);
    };
    fetchAPI();
  }, [idCity]);

  // Call Api Wards
  useEffect(() => {
    const fetchAPI = async () => {
      const resultData = await fetchWards(idCity, idDistrict);
      const data = resultData?.data ?? [];
      setWards(data);
    };
    fetchAPI();
  }, [idDistrict, idCity]);
  return (
    <>
      <div className='banner-wrap' id='form-search'>
        <div className='container'>
          <div className='vars-search'>
            <div className='vars-search-place'>
              <Form>
                <SearchHeader
                  postType={postType}
                  setcurrentPostType={setcurrentPostType}
                />
                <SearchInput />
                <Row gutter={8}>
                  <Col span={12}>
                    <SearchSubType
                      currentPostType={currentPostType}
                      subTypes={subTypes}
                    />
                  </Col>
                  <Col span={12}>
                    <SearchProvince cities={cities} setIdCity={setIdCity} />
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col span={12}>
                    <SearchDistrict
                      districts={districts}
                      setIdDistrict={setIdDistrict}
                    />
                  </Col>
                  <Col span={12}>
                    <SearchWard wards={wards} />
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col span={12}>
                    <SearchDirection directions={directions} />
                  </Col>
                  <Col span={12}>
                    <SearchArea />
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col span={12}>
                    <SearchPrice />
                  </Col>
                  <Col span={12}>
                    <Form.Item>
                      <Button className='btn-apply' htmlType='submit'>
                        Tìm kiếm
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSearch;
