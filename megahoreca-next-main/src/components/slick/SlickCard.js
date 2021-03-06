import Image from "next/image";
import { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import ActionButton from "../product/ActionButton";
import BigBadge from "../product/BigBadge";
import Price from "../product/Price";
import Stars from "../product/Stars";
import Stock from "../product/Stock";
import CategoryBreadcrumb from "./CategoryBreadcrumb";
import SlickModal from "./SlickModal";
import { prodata } from '../../data/prodata';
import { prodataImage } from '../../data/prodata'
import Link from "next/link"


const SlickCard = ({ title, stars, price, stock, badge, discount, id, catname, subcatname, slug }) => {
    const [show, setShow] = useState(false);

    const closeModal = () => {
        setShow(false);
    };
    const openModal = () => {
        setShow(true);
    };

    return (
        <Card className="h-100">
            {discount === 0 ? null :
                <div className="position-relative" style={{ zIndex: "1" }}>
                    <div className="position-absolute end-0">
                        <BigBadge badge={badge} discount={discount} />
                    </div>
                </div>
            }
            <Image onClick={openModal} className="img-fluid rounded" src={prodataImage[id - 1].url} alt="" width={200} height={200} />

            <SlickModal show={show} handleClose={closeModal} title={title}>
                <Image className="img-fluid w-100 rounded" src={prodataImage[id - 1].url} alt="" width={800} height={800} />
            </SlickModal>

            <Link href="/product/[slug]" as={`/product/${slug}`}>
                <a className="link-dark mb-0">
                    <Card.Body>
                        <div style={{ minHeight: "130px" }}>
                            <CategoryBreadcrumb catname={catname} subcatname={subcatname} />
                            <Card.Title className="mb-1 fw-bold h6">{title}</Card.Title>

                            {stock === 0 ? null :
                                <Stock stock={stock} />
                            }

                            {stars === 0 ? null :
                                <Stars stars={stars} />
                            }
                        </div>
                    </Card.Body>
                    <Card.Footer className="border-0">
                        <Row className="d-flex align-items-center justify-content-between">
                            <Col lg={8}>
                                <Price style="h5 text-center" price={price} />
                            </Col>
                            <Col lg={4} className="text-end">
                                <ActionButton />
                            </Col>
                        </Row>
                    </Card.Footer>
                </a>
            </Link>
        </Card >
    )
}

export default SlickCard