
import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import { Row, Col, Image, Divider, Skeleton } from 'antd';

const RelatedProject = (props) => {
    const { id } = props;
    const [loading, setLoading] = useState(true);
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
        setLoading(false);
    };

    useEffect(async () => {
        setLoading(true);
        await fetchData(id);
    }, [id]);
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
                data?.slice(0, 5).map(item => {
                    return (
                        <div className="related-project-card">
                            <Row gutter={[40, 16]}>
                                <Col md={5}>
                                    <a
                                    // href={`/detailtrade/${item?.id}`}
                                    >
                                        <Image className="related-project-image" width={52} height={40} src={item?.thumbnailUrl} preview={false} />
                                    </a>
                                </Col>
                                <Col md={13}>
                                    <Row>
                                        <Col md={24}>
                                            <a
                                            // href={`/detailtrade/${item?.id}`}
                                            >
                                                <p className="title-custom" dangerouslySetInnerHTML={{ __html: item?.title }}></p>
                                            </a>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={24}>
                                            <p className="typeRealEstate-text">{item?.typeRealEstate?.name}</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={6}>
                                    <a
                                        data-issingle='true'
                                        data-id='30368'
                                        data-favorite='0'
                                        className='fav-btn fav-btn position-absolute add-favorite '
                                        title='Yêu thích'
                                    >
                                        <div className='icon-box d-inline-block'>
                                            <svg
                                                width='24'
                                                height='23'
                                                viewBox='0 0 24 23'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <path
                                                    d='M21.1346 3.66004C20.6068 3.09688 19.9802 2.65014 19.2905 2.34534C18.6008 2.04055 17.8615 1.88367 17.1149 1.88367C16.3684 1.88367 15.6291 2.04055 14.9394 2.34534C14.2497 2.65014 13.623 3.09688 13.0953 3.66004L11.9999 4.82825L10.9046 3.66004C9.83849 2.52302 8.39257 1.88426 6.88489 1.88426C5.37722 1.88426 3.93129 2.52302 2.8652 3.66004C1.79912 4.79705 1.2002 6.33917 1.2002 7.94715C1.2002 9.55512 1.79912 11.0972 2.8652 12.2343L3.96054 13.4025L11.9999 21.9767L20.0393 13.4025L21.1346 12.2343C21.6627 11.6714 22.0815 11.003 22.3673 10.2674C22.6531 9.53183 22.8002 8.74339 22.8002 7.94715C22.8002 7.1509 22.6531 6.36246 22.3673 5.62687C22.0815 4.89127 21.6627 4.22293 21.1346 3.66004Z'
                                                    fill='#585555'
                                                    fillOpacity='0.8'
                                                    stroke='white'
                                                    strokeWidth='2'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                ></path>
                                            </svg>
                                        </div>
                                    </a>
                                </Col>
                            </Row>
                            <Row gutter={[32, 16]}>
                                <Col md={15}>
                                    <p className="related-project-price"> {item?.priceText}</p>
                                </Col>
                                <Col md={9}>{item?.status?.name}</Col>
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
            <div className="load-more">
                <a href="#">
                    <span>Xem thêm</span>
                </a>
            </div>
        </div>
    );
}

export default React.memo(RelatedProject);

RelatedProject.propTypes = {
    id: PropTypes.any,
};