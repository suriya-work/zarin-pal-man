import React from 'react';
//Style
import styles from "./Banner.module.css";
import { Container, Row, Col } from 'react-bootstrap';

// IMAGE
// import image from "../image/wave.svg";
import home from "../image/home .svg";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>

                        <h2>بیش از ۱۲ سال</h2>
                        <h2>انتخاب مطمئنِ کسب و کارهای آنلاین</h2>
                        <p>زرین‌پال، اولین پرداخت‌یار پیشگام کشور، با به‌کارگیری سبک و استانداردهای جدید در ارائه‌ی خدمات درگاه پرداخت اینترنتی، سرویس‌های متنوعی در حوزه‌ی پرداخت الکترونیک را برای کسب و کارها ارائه کرده است؛ با این هدف که در افزایش سهم تجارت الکترونیکی در تولید ناخالص ملی و کمک به رشد و توسعه‌ی کسب‌وکارها، نقش سازنده‌‌ای ایفا کند.د</p>
                        <Link to='/'>
                            <button>ثبت نام</button>
                        </Link>
                        <Link to='/Login'>
                            <button>ورود</button>
                        </Link>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <img className={styles.bannerimg} src={home} alt="svg" />
                    </Col>


                </Row>
            </Container>
            {/* <img src={image} alt="svg" /> */}
        </div>
    );
};

export default Banner;