import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import banner1 from "../../images/banner1.jpg"
import banner2 from "../../images/banner2.jpg"
import banner3 from "../../images/banner3.jpg"
import Seperate from "../stuff/Seperate";

export default function Advertisement() {
    return (
        <Container>
            <Row className="g-3">
                <Col md={5}>
                    <div className="shadow rounded d-flex overflow-hidden h-100">
                        <Image className="img-fluid" alt="" src={"https://uc4869e93f44a9f6f201535ea351.previews.dropboxusercontent.com/p/thumb/ABjcx3Z3JOKknY_B53oy7Qlk-w-wiL3eXYiZcFlbUn85iIB0zu_aAse2JluYGPOvq9QZTEUMnJb2m6BY0Xurs_CM1Mcwn9djqsd6EHli0ELb-dygvvrXdsNc2PlG8BA6f1TmnjTHsY-xevRlLggCPSTg8ig33G9aRbHcAjrme5OFWrpvlBVUxH8tzYVyHY16PQPiTfM3SRTDwakXlshzbTOLoJ5efipLUKB1s8O5Vc1plU4DZnD0j3buW3RB4eD99YecXFJ5EEGre-b3AUNMJ-wffAmjvs8kakf6WRRgBC0zrt1NyAJUst3r3b7XOFLSwa-TQQYton8ir9laqE4y8_frc1ayYrVekxqv0KbhqWHrmNHDSEtClAt1306tzaOFdq8/p.jpeg"} width={600} height={400} objectFit="cover" />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="shadow rounded d-flex overflow-hidden h-100">
                        <Image className="img-fluid h-100" alt="" src={"https://uc27b532ffa9f71cd76b2fecde22.previews.dropboxusercontent.com/p/thumb/ABjAGYaJCSbInRffenNk9eQegSDoi5jtyuJUc5SNNoYpUAzBjM4POtlYvotyrQ5_K2sEyj2R_VRcb_qufSVJ1QHLYSyUIOvDxUA90kXi9W0HgBKJ33cTSfnmH-aCPkOuEdZYF4T_lCbLxsSAVqOP-MvLm_VvKZe8gSOgvlzbe3vgzcR4cqvTfB-6cnK4yU4-yfc_idBNJOlN8pxVN8dgnsAykfwFFmSx5g96YT2E6aUI9mBrRG4mcQ_FALzOt51ad0KdBsjg2PKsqieyuYblCb7u9YLT_fQt1lBe4rLPPmtY6JtGfXil2vkBvZdPFcoBd0j6NjXjcUKHTvFPmkPnfkHc-gl555FYLQesv8_84oXxqZPDuMSbVLRkkYXub263EWw/p.jpeg"} width={600} height={400} objectFit="cover" />
                    </div>
                </Col>
                <Col md={3}>
                    <div className="shadow rounded d-flex overflow-hidden h-100">
                        <Image className="img-fluid d-none d-sm-none d-md-none d-lg-block" alt="" src={"https://ucfb3043425a03901d48fe221ac6.previews.dropboxusercontent.com/p/thumb/ABg2dHfgFo4InJEeKHvu9BjUIwlb_4f5r7jpF80o00E1uDnDQSwhu4Uah88GGIbBw2i6l26O6E7PKKDynw3nFWpUlede4MJj9tck_U9F8GvjE6wlvI8R5SIcO3IB_ntXpQAyRO_2cl1-keYSd1BUq4Snl4MvhxDtVjjehK2Po9QF9H2mtUX7tCFqvF0YN8uQJbj0blQ12fTGozZodDT6UI5kGcdNC5_XZ6YIYa2VzH7dh88wN2Jr-VWfTAaJs6AdEVcjFX6SdKhFT-Xra5lhSzMlf54Z8696K8FChUWnmDI6xWLGTaBqo6PsIDKY-CGyScaWYK62UKl-gB_b6H_rKcpdNtY2c3z9b0FYy-c_oj0g4yAYyOCAKixp68dSTLbKu9I/p.jpeg"} width={300} height={200} objectFit="cover" />
                    </div>
                </Col>
            </Row>
            <Seperate />
        </Container>
    )
}