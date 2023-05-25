import axios from "axios";
import { useEffect } from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import { Row, Col, Image, Divider, Skeleton } from 'antd';

const RelatedProject = (props) => {
    const { id } = props;
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = async (id) => {
        const url = 'http://10.79.60.2:8500/vland/posts/projects/related';
        const data = await axios.get(url, {
            params: {
                postId: id,
                isReOnly: true
            }
        });
        setData(data?.data?.data?.elements);
    };

    useEffect(async () => {
        setLoading(true);
        await fetchData(id);
        setLoading(false);
    }, []);
    return (
        <div className="related-project-wrapper">
            <div className="related-project-wrapper-title">
                <p>Dự án lân cận</p>
            </div>
            <Divider />
            {loading ? (
                <div>
                    <Skeleton />
                </div>
            ) : (
                data?.map(item => {
                    return (
                        <div className="related-project-card">
                            <Row gutter={[40, 16]}>
                                <Col md={5}>
                                    <Image className="related-project-image" width={52} height={40} src={item?.thumbnailUrl} preview={false} />
                                </Col>
                                <Col md={13}>
                                    <Row>
                                        <Col md={24}>
                                            <p className="title-custom">{item?.title}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={24}>
                                            <p className="typeRealEstate-text">{item?.typeRealEstate?.name}</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={6}>Icon</Col>
                            </Row>
                            <Row gutter={[32, 16]}>
                                <Col md={13}>
                                    <p className="related-project-price"> {item?.priceText}</p>
                                </Col>
                                <Col md={11}>{item?.status?.name}</Col>
                            </Row>
                            <Row>
                                <Col md={24}>
                                    <p className="address-custom">{item?.address}</p>
                                </Col>
                            </Row>
                            <Divider />
                        </div>
                    )
                })
            )}
        </div>
    );
}

export default RelatedProject;

RelatedProject.propTypes = {
    id: PropTypes.any,
};