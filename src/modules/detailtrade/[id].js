import { Row, Col, Image } from 'antd';
import { useRouter } from "next/router"
import RelatedProject from './RelatedProject';
import RelatedRealEstate from './RelatedRealEstate';
import DetailInfo from './DetailInfo';
import Image1 from 'assets/img/Rectangle-86.png';

const DetailTrade = ({ }) => {
    const router = useRouter();
    const {
        query: { id },
    } = router;

    return (
        <div className='detail-trade'>
            {id}
            <Row gutter={[32, 32]}>
                <Col md={18}>
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
                    <DetailInfo id={id} />
                </Col>
                <Col md={6}>
                    <div style={{ border: '1px solid red' }}>
                        Profile
                    </div>
                    <Row>
                        <Col md={24}>
                            <RelatedProject id={id} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={24}>
                            <div style={{ paddingTop: '20px', margin: 0, paddingBottom: 0 }}>
                                <Image width={'100%'} src={Image1.src} preview={false} />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md={24}>
                    <RelatedRealEstate id={id} />
                </Col>
            </Row>
        </div>
    )
};

export default DetailTrade;        