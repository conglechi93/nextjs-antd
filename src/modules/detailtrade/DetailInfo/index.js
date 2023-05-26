import React, { useEffect, useState } from "react";
import { Row, Col, Collapse, Skeleton, Divider, Tabs } from 'antd';
import PropTypes from 'prop-types';
import axios from "axios";

const DetailInfo = (props) => {
    const { id } = props;
    const [loading, setLoading] = useState(true);
    const [positonLoading, setPositionLoading] = useState(true);
    const [dataPost, setDataPost] = useState({});
    const [dataMap, setDataMap] = useState([]);
    const { Panel } = Collapse;
    const { TabPane } = Tabs;

    const fetchDataMap = async (activeKey) => {
        const urlMap = 'http://10.79.60.2:8500/vmap/places/getNearBy';
        const dataMap = await axios.get(urlMap, {
            params: {
                lat: dataPost?.lat,
                lng: dataPost?.lng,
                categories: activeKey
            }
        });
        setDataMap(dataMap?.data?.data?.nearbylist);
        setPositionLoading(false);
    }

    const changeTab = async (activeKey) => {
        setPositionLoading(true);
        await fetchDataMap(activeKey);
    }

    const fetchData = (id) => {
        const url = 'http://10.79.60.2:8500/vland/posts';
        const urlMap = 'http://10.79.60.2:8500/vmap/places/getNearBy';
        axios.get(url + `/${id}`).then(async (result) => {
            const dataMap = await axios.get(urlMap, {
                params: {
                    lat: result?.data?.data?.lat,
                    lng: result?.data?.data?.lng,
                    categories: 'school'
                }
            });
            setDataPost(result?.data?.data);
            setDataMap(dataMap?.data?.data?.nearbylist);
            setLoading(false);
            setPositionLoading(false);
        });
    };

    useEffect(() => {
        setLoading(true);
        fetchData(id);
    }, [id]);

    return (
        <>
            {loading ? (
                <Skeleton loading={loading} active avatar />
            ) : (
                <div className="detail-trade-child">
                    <Row>
                        <Col md={24}>
                            <div className="detail-trade-child-info">
                                <div className="title">
                                    <p dangerouslySetInnerHTML={{ __html: dataPost?.title }}></p>
                                </div>
                                <div className="address">
                                    <p>{dataPost?.address}</p>
                                </div>
                                <div className="postdate">
                                    <p>Ngày đăng: {dataPost?.postDateDuration}</p>
                                </div>
                                <Row gutter={[16, 16]}>
                                    <Col md={5}>
                                        <div className="info-wrapper">
                                            <p className="detail-trade-child__key">Mức giá</p>
                                            <p className="detail-trade-child__value">{dataPost?.priceText}</p>
                                        </div>
                                    </Col>
                                    <Col md={5}>
                                        <div className="info-wrapper">
                                            <p className="detail-trade-child__key">Diện tích</p>
                                            <p className="detail-trade-child__value">{dataPost?.areaText}</p>
                                        </div>
                                    </Col>
                                    <Col md={5}>
                                        <div className="info-wrapper">
                                            <p className="detail-trade-child__key">Hướng</p>
                                            <p className="detail-trade-child__value">{dataPost?.direction?.name}</p>
                                        </div>
                                    </Col>
                                    <Col md={9}>
                                        <div></div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={24}>
                            <div className="description-info">
                                <div className="title">
                                    <p>Thông tin mô tả</p>
                                </div>
                                <div className="description" dangerouslySetInnerHTML={{ __html: dataPost?.description }}>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={24}>
                            <Collapse collapsible="header" defaultActiveKey={['1']} expandIconPosition={'end'}>
                                <Panel header="Đặc điểm chi tiết" key="1" className="description-panel">
                                    {/* <Divider /> */}
                                    <Row>
                                        <Col md={12}>
                                            <p className="panel-info">Dự án: {dataPost?.typeRealEstate?.name}</p>
                                        </Col>
                                        <Col md={12}>
                                            <p className="panel-info">Loại hình: {dataPost?.postType?.name}</p>
                                        </Col>
                                    </Row>
                                    <Divider />
                                    <Row>
                                        <Col md={12}>
                                            <p className="panel-info">Pháp lý: {dataPost?.legalDoc?.name}</p>
                                        </Col>
                                        <Col md={12}>
                                            <p className="panel-info">Năm xây dựng:</p>
                                        </Col>
                                    </Row>
                                    <Divider />
                                    <Row>
                                        <Col md={12}>
                                            <p className="panel-info">Diện tích: {dataPost?.areaText}</p>
                                        </Col>
                                        <Col md={12}>
                                            <p className="panel-info">Hướng nhà: {dataPost?.direction?.name}</p>
                                        </Col>
                                    </Row>
                                    <Divider />
                                    <Row>
                                        <Col md={12}>
                                            <p className="panel-info">Số phòng ngủ: {dataPost?.bedroom}</p>
                                        </Col>
                                        <Col md={12}>
                                            <p className="panel-info">Số phòng tắm: {dataPost?.bathroom ? dataPost?.bathroom : 0}</p>
                                        </Col>
                                    </Row>
                                    <Divider />
                                    <Row>
                                        <Col md={12}>
                                            <p className="panel-info">Số tầng: {dataPost?.floor} tầng</p>
                                        </Col>
                                        <Col md={12}>
                                            <p className="panel-info">Nội thất:</p>
                                        </Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={24}>
                            <Collapse collapsible="header" defaultActiveKey={['1']} expandIconPosition={'end'}>
                                <Panel header="Vị trí bất động sản" key="1" className="position-realestate-panel">
                                    <div></div>
                                    <div>
                                        <Tabs defaultActiveKey="1" className='invite-friends-tabs' onChange={changeTab}>
                                            {
                                                dataPost?.nearMeKey.map(item => {
                                                    return (
                                                        <TabPane
                                                            tab={
                                                                <span>
                                                                    {item?.value}
                                                                </span>
                                                            }
                                                            key={item?.key}
                                                        >
                                                            {
                                                                positonLoading ? (
                                                                    <Skeleton loading={positonLoading} active />
                                                                ) : (
                                                                    <div>
                                                                        {dataMap?.map(item => {
                                                                            return (
                                                                                <Row gutter={[24, 0]}>
                                                                                    <Col md={22}>
                                                                                        <p className="position-realestate-text">{item.item.name}</p>
                                                                                    </Col>
                                                                                    <Col md={2}>
                                                                                        <p className="position-realestate-text">{item.item.distance}</p>
                                                                                    </Col>
                                                                                    <Divider />
                                                                                </Row>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                )
                                                            }
                                                        </TabPane>
                                                    );
                                                })
                                            }
                                        </Tabs>
                                    </div>
                                </Panel>
                            </Collapse>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={24}>
                            <Collapse collapsible="header" defaultActiveKey={['1']} expandIconPosition={'end'}>
                                <Panel header="Dự toán khoản vay" key="1" className="money-panel">

                                </Panel>
                            </Collapse>
                        </Col>
                    </Row>
                </div>
            )}
        </>
    );
}

export default React.memo(DetailInfo);

DetailInfo.propTypes = {
    id: PropTypes.any,
};