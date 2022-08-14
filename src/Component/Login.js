import React from 'react';
// Image
import Logo from "../image/logo-white.svg";
// import image from "../image/app.png";
// Styles
import styles from "./Login.module.css";
import { Container, Row, Col } from 'react-bootstrap';


const Login = () => {
    return (
        <Container>
            <div className={styles.list}>
                <Row>
                    <Col  lg="12" md="6">
                        <div className={styles.listText}>
                            <div className={styles.listlogin}>
                                <img src={Logo} alt="logo" />
                                <button>ورودبارمزینه</button>
                            </div>


                            <h1>ورود به زرین‌پال</h1>
                            <p>
                                برای استفاده از خدمات زرین‌پال، وارد حساب کاربری خود شوید.در صورت نداشتن حساب کاربری ثبت‌‌نام کنید.
                            </p>
                            <input type="text" placeholder='شماره همراه یا ایمیل' />
                            <div>
                                <button>تایید و ادامه</button>
                            </div>

                        </div>
                    </Col>
                </Row>
                <Row>

                    <Col lg="12" md="6">
                        <div className={styles.slider}>
                            {/* <img src={image} alt="img" /> */}
                        </div>
                    </Col>
                </Row>
            </div>

        </Container>

    );
};

export default Login;