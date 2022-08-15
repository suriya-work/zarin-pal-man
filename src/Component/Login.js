import React, { useState, useEffect } from 'react';
//Components
import Loading from './Loading';
// Image
import Logo from "../image/logo-white.svg";
import image from "../image/app.png";
// Styles
import styles from "./Login.module.css";
import { Container, Row, Col } from 'react-bootstrap';


const Login = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
    })
    return (

        <>

            {
                isLoading === true ? (

                    < Container >

                        <div className={styles.list}>
                            <Row>
                                <Col lg="12" md="6">
                                    <div>
                                        <div className={styles.listlogin}>
                                            <img src={Logo} alt="logo" />
                                            <button>ورود با رمزینه</button>
                                        </div>
                                        <div className={styles.listText}>

                                            <h4>ورود به زرین‌پال</h4>
                                            <p>
                                                برای استفاده از خدمات زرین‌پال، وارد حساب کاربری خود شوید.در صورت نداشتن حساب کاربری ثبت‌‌نام کنید.
                                            </p>
                                            <input type="text" placeholder='شماره همراه یا ایمیل' />
                                        </div>

                                        <div className={styles.button}>
                                            <button>تایید و ادامه</button>
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                            <Row>

                                <Col lg="12" md="6">
                                    <div className={styles.slider}>
                                        <img src={image} alt="img" />
                                    </div>
                                </Col>
                            </Row>


                        </div>





                    </Container >

                ) : (<Loading />)
            }

        </>


    );
};

export default Login;