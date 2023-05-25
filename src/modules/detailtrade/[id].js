import { Row, Col, Image } from 'antd';
import { useRouter } from "next/router"
import { useEffect } from 'react';
import RelatedProject from './RelatedProject';

const DetailTrade = ({ }) => {
    const router = useRouter();
    const {
        query: { id },
    } = router;

    useEffect(() => {
        console.log('id', id);
    }, [])

    return (
        <div style={{ padding: '0 10px' }}>
            {id}
            <Row gutter={[27, 32]}>
                <Col md={16}>
                    <Row gutter={[16, 16]}>
                        <Col md={24}>
                            <div style={{ border: '1px solid red' }}>
                                <Image width={'100%'} src='https://syncrox.com/assets/img-temp/900x400/img1.jpg' preview={false} />
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col md={12}>
                            <div style={{ border: '1px solid red' }}>
                                List hình ảnh
                            </div>
                        </Col>
                        <Col md={12}>
                            <div style={{ border: '1px solid red' }}>
                                3 button
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={24}>
                            <div style={{ border: '1px solid red' }}>
                                FIATO Premier
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={24}>
                            <div style={{ border: '1px solid red' }}>
                                Thông tin mô tả
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={24}>
                            <div style={{ border: '1px solid red' }}>
                                Đặc điểm chi tiết
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={24}>
                            <div style={{ border: '1px solid red' }}>
                                Vị trí bất động sản
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={24}>
                            <div style={{ border: '1px solid red' }}>
                                Dự toán khoản vay
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={8}>
                    <div style={{ border: '1px solid red' }}>
                        Profile
                    </div>
                    <RelatedProject id={id} />
                    <div style={{ border: '1px solid red' }}>
                        Hình ảnh
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={24}>
                    <div style={{ border: '1px solid red' }}>
                        Bất động sản lân cận
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default DetailTrade;        