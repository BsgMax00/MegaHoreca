import { useRouter } from 'next/router'
import {Container, Row, Col, Alert, ListGroup, ListGroupItem, Tabs, Tab, Image} from 'react-bootstrap';
import BigActionButton from '../../../components/product/BigActionButton';
import BigBadge from '../../../components/product/BigBadge';
import Price from '../../../components/product/Price';
import Stars from '../../../components/product/Stars';
import Stock from '../../../components/product/Stock';
import CategoryBreadcrumb from '../../../components/slick/CategoryBreadcrumb';
import SlickGallery from '../../../components/slick/SlickGallery';
import Counter from '../../../components/cart/Counter';
import Seperate from '../../../components/stuff/Seperate';
import SlickCarouselSection from "../../../components/slick/SlickCarouselSection"
import ReviewCarouselSection from "../../../components/slick/ReviewCarouselSection"
import { prodata, prodataImage } from "../../../data/prodata"
import { useDispatch, useSelector } from "react-redux"
import products, { getProductDetail } from '../../../store/products';
import { useEffect } from 'react';

const data = [
    {
        id: 1,
        title: "Elektrisch fornuis 4 platen",
        image: "https://uca6267e7646f032061ea0316468.previews.dropboxusercontent.com/p/thumb/ABgXl11ONdIlIdUfuxyAf4-17bBIpwXclxpBzoKXtCrsrmWbp8QQ3u460ey6oterQiOKkv4nHseVcxHyOleNLvpba3l3Snm5Ar0Rk7-RDR0vJCiXtp_DwIE41NFTdZlru8epAOQIWpC6do45P59k95Eu4SNbwrfLQtaiBaGY81m_cLL5QBRRsYSMoa7pA4TGO4do5inmrIr-lKyoqGAoj_mh1GvSA1KCish9GgdOORqN3pMIIfZcnyOazZNB_ne6YwRHnKAzHG_EeYYRhpN9gjX4TixreBJu5RMAGAfpdfFKkLIzrW9fNH9Za6-0xL9bN5xbSSWoTcQeQuT_BEiOybo3KGjaCfwJPxSgbGoCDvULSSPtuvwVN6vXr-pEMe6kD9g/p.jpeg"
    },
    {
        id: 2,
        title: "Elektrisch fornuis 4 platen",
        image: "https://uca6267e7646f032061ea0316468.previews.dropboxusercontent.com/p/thumb/ABgXl11ONdIlIdUfuxyAf4-17bBIpwXclxpBzoKXtCrsrmWbp8QQ3u460ey6oterQiOKkv4nHseVcxHyOleNLvpba3l3Snm5Ar0Rk7-RDR0vJCiXtp_DwIE41NFTdZlru8epAOQIWpC6do45P59k95Eu4SNbwrfLQtaiBaGY81m_cLL5QBRRsYSMoa7pA4TGO4do5inmrIr-lKyoqGAoj_mh1GvSA1KCish9GgdOORqN3pMIIfZcnyOazZNB_ne6YwRHnKAzHG_EeYYRhpN9gjX4TixreBJu5RMAGAfpdfFKkLIzrW9fNH9Za6-0xL9bN5xbSSWoTcQeQuT_BEiOybo3KGjaCfwJPxSgbGoCDvULSSPtuvwVN6vXr-pEMe6kD9g/p.jpeg"
    },
    {
        id: 3,
        title: "Elektrisch fornuis 4 platen",
        image: "https://uca6267e7646f032061ea0316468.previews.dropboxusercontent.com/p/thumb/ABgXl11ONdIlIdUfuxyAf4-17bBIpwXclxpBzoKXtCrsrmWbp8QQ3u460ey6oterQiOKkv4nHseVcxHyOleNLvpba3l3Snm5Ar0Rk7-RDR0vJCiXtp_DwIE41NFTdZlru8epAOQIWpC6do45P59k95Eu4SNbwrfLQtaiBaGY81m_cLL5QBRRsYSMoa7pA4TGO4do5inmrIr-lKyoqGAoj_mh1GvSA1KCish9GgdOORqN3pMIIfZcnyOazZNB_ne6YwRHnKAzHG_EeYYRhpN9gjX4TixreBJu5RMAGAfpdfFKkLIzrW9fNH9Za6-0xL9bN5xbSSWoTcQeQuT_BEiOybo3KGjaCfwJPxSgbGoCDvULSSPtuvwVN6vXr-pEMe6kD9g/p.jpeg"
    },

    {
        id: 4,
        title: "Elektrisch fornuis 4 platen",
        image: "https://uca6267e7646f032061ea0316468.previews.dropboxusercontent.com/p/thumb/ABgXl11ONdIlIdUfuxyAf4-17bBIpwXclxpBzoKXtCrsrmWbp8QQ3u460ey6oterQiOKkv4nHseVcxHyOleNLvpba3l3Snm5Ar0Rk7-RDR0vJCiXtp_DwIE41NFTdZlru8epAOQIWpC6do45P59k95Eu4SNbwrfLQtaiBaGY81m_cLL5QBRRsYSMoa7pA4TGO4do5inmrIr-lKyoqGAoj_mh1GvSA1KCish9GgdOORqN3pMIIfZcnyOazZNB_ne6YwRHnKAzHG_EeYYRhpN9gjX4TixreBJu5RMAGAfpdfFKkLIzrW9fNH9Za6-0xL9bN5xbSSWoTcQeQuT_BEiOybo3KGjaCfwJPxSgbGoCDvULSSPtuvwVN6vXr-pEMe6kD9g/p.jpeg"
    },
    {
        id: 5,
        title: "Elektrisch fornuis 4 platen",
        image: "https://uca6267e7646f032061ea0316468.previews.dropboxusercontent.com/p/thumb/ABgXl11ONdIlIdUfuxyAf4-17bBIpwXclxpBzoKXtCrsrmWbp8QQ3u460ey6oterQiOKkv4nHseVcxHyOleNLvpba3l3Snm5Ar0Rk7-RDR0vJCiXtp_DwIE41NFTdZlru8epAOQIWpC6do45P59k95Eu4SNbwrfLQtaiBaGY81m_cLL5QBRRsYSMoa7pA4TGO4do5inmrIr-lKyoqGAoj_mh1GvSA1KCish9GgdOORqN3pMIIfZcnyOazZNB_ne6YwRHnKAzHG_EeYYRhpN9gjX4TixreBJu5RMAGAfpdfFKkLIzrW9fNH9Za6-0xL9bN5xbSSWoTcQeQuT_BEiOybo3KGjaCfwJPxSgbGoCDvULSSPtuvwVN6vXr-pEMe6kD9g/p.jpeg"
    },
    {
        id: 6,
        title: "Elektrisch fornuis 4 platen",
        image: "https://uca6267e7646f032061ea0316468.previews.dropboxusercontent.com/p/thumb/ABgXl11ONdIlIdUfuxyAf4-17bBIpwXclxpBzoKXtCrsrmWbp8QQ3u460ey6oterQiOKkv4nHseVcxHyOleNLvpba3l3Snm5Ar0Rk7-RDR0vJCiXtp_DwIE41NFTdZlru8epAOQIWpC6do45P59k95Eu4SNbwrfLQtaiBaGY81m_cLL5QBRRsYSMoa7pA4TGO4do5inmrIr-lKyoqGAoj_mh1GvSA1KCish9GgdOORqN3pMIIfZcnyOazZNB_ne6YwRHnKAzHG_EeYYRhpN9gjX4TixreBJu5RMAGAfpdfFKkLIzrW9fNH9Za6-0xL9bN5xbSSWoTcQeQuT_BEiOybo3KGjaCfwJPxSgbGoCDvULSSPtuvwVN6vXr-pEMe6kD9g/p.jpeg"
    }
];

export default function index({ match }) {
    const router = useRouter();
    const { slug } = router.query;

    // const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetail(match.params.id))
    }, [match, dispatch])
    const { product, cart } = useSelector(state => state.products)
    const { id, image, name, price, quantity } = product

    return (
        <>
            <Container>
                {product.filter(x => x.slug == slug).map(pro =>
                    <Row>
                        <Col md={6}>
                            <Image src={prodataImage[pro.id - 1].url} alt="this image is not available"/>
                        </Col>
                        <Col md={6} className="shadow-lg">
                            <CategoryBreadcrumb catname={pro.categoryname} subcatname={pro.subcategoryname} />
                            <p className='h2'>{slug}</p>
                            <Stars />
                            <Row>
                                <Col>
                                    <div className='mb-3'>
                                        <Price style={"h1"} price={pro.price} />
                                    </div>

                                    {pro.stock === 0 ? null :
                                        <Stock stock={pro.stock} />
                                    }

                                    {pro.stars === 0 ? null :
                                        <Stars stars={pro.stars} />
                                    }

                                    <Counter />
                                </Col>
                                <Col>
                                    {pro.discount === 0 ? null :
                                        <div className="position-relative" style={{ zIndex: "1" }}>
                                            <div className="position-absolute end-0">
                                                <BigBadge badge={pro.price} discount={pro.discount} />
                                            </div>
                                        </div>
                                    }
                                </Col>
                            </Row>

                            <BigActionButton />

                            <div className='rounded shadow p-3 my-4'>
                                <ListGroup className="list-group-flush small bg-transparent">
                                    <ListGroupItem className="d-flex justify-content-between px-0">
                                        <span>product variant 1 :</span> <span>info</span>
                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex justify-content-between px-0">
                                        <span>product variant 2 :</span> <span>info</span>
                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex justify-content-between px-0">
                                        <span>product variant 3 :</span> <span>info</span>
                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex justify-content-between px-0">
                                        <a href="#." className=''>more</a>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                )}
                <Seperate />
                <Row>
                    <Col md={6}>
                        <Tabs
                            defaultActiveKey="0"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3"
                            variant='pills'
                        >
                            <Tab eventKey="0" title="Productinformatie">
                                Editörden eklenecek? Tab 1
                            </Tab>
                            <Tab eventKey="1" title="Accessoires">
                                Editörden eklenecek? Tab 2
                            </Tab>
                            <Tab eventKey="2" title="Revies">
                                Editörden eklenecek? Tab 3
                            </Tab>
                            <Tab eventKey="3" title="Specificaties">
                                Editörden eklenecek? Tab 4
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col md={6}>
                        <Alert variant="secondary shadow" className='mb-4'>
                            <Row className='g-0 d-flex align-items-center'>
                                <Col md={2} className='text-center'>
                                    <i style={{ fontSize: "26px" }} className="icon-surface1-23"></i>
                                </Col>
                                <Col md={10} className='small'>
                                    Als je dit product koopt, kan je gratis een bestelwagen reserveren voor het transport
                                </Col>
                            </Row>
                            <hr></hr>
                            <Row className='g-0 d-flex align-items-center'>
                                <Col md={2} className='text-center'>
                                    <i style={{ fontSize: "40px" }} className="icon-surface1-21"></i>
                                </Col>
                                <Col md={10} className='small'>
                                    Voor 23.59 uur besteld, morgen gratis bezorgd
                                </Col>
                            </Row>
                        </Alert>
                    </Col>
                </Row>
            </Container>

            <Seperate />

            <SlickCarouselSection title="Alternative products" prodata={prodata} />
            <ReviewCarouselSection title="Uw winkelwagen gerelateerde producten" prodata={prodata} />
        </>
    );
}
