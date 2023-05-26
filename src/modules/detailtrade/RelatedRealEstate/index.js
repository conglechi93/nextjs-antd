import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import { Divider, Skeleton, Row, Col } from 'antd';
import CartItem from 'modules/home/RecommendRealEstate/CartItem';

const RelatedRealEstate = (props) => {
    const { id } = props;
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = async (id) => {
        const url = 'http://10.79.60.2:8500/vland/posts/projects/related';
        const data = await axios.get(url, {
            params: {
                postId: id,
                isReOnly: false
            }
        });
        setData(data?.data?.data?.elements);
        setLoading(false);
    };

    useEffect(async () => {
        setLoading(true);
        await fetchData(id);
    }, [id]);
    return (
        <div className="related-realestate-wrapper">
            <Row gutter={{ xxl: 70, xl: 70, lg: 45, md: 0 }}>
                <Col xxl={21} xl={20} lg={21} md={21}>
                    <div className="related-realestate-wrapper-title">
                        <p>Bất động sản lân cận</p>
                    </div>
                </Col>
                <Col xxl={3} xl={4} lg={3} md={3} >
                    <a href="#" class="main-co">
                        <span>Xem thêm</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.93994 13.2797L10.2866 8.93306C10.7999 8.41973 10.7999 7.57973 10.2866 7.06639L5.93994 2.71973" stroke="#D1132A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                        </svg>
                    </a>
                </Col>
            </Row>
            <Divider />
            {loading ? (
                <div>
                    <Skeleton />
                </div>
            ) : (
                <Row gutter={{ lg: 16, md: 16 }}>
                    {data?.slice(0, 4).map(item => {
                        return (
                            <Col md={6}>
                                <CartItem item={item} />
                            </Col>
                        )
                    })}
                </Row>
            )}
        </div>
    );
}

export default React.memo(RelatedRealEstate);

RelatedRealEstate.propTypes = {
    id: PropTypes.any,
};