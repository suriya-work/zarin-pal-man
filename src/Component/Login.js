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
    const [email, setEmail] = useState("");
    const [masage, setMasage] = useState("");

    const emailInvalidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
        if (regEx.test(email)) {
            setMasage("")
        } else if (!regEx.test(email) && email === "") {
            setMasage("شماره همراه یا ایمیل الزامی است");
        } else {
            setMasage("");
        }

    }

    const handelrOnchange = (e) => {
        setEmail(e.target.value)

    }

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
                                            <input id='email' type="email" placeholder='شماره همراه یا ایمیل' value={email} onChange={handelrOnchange} />
                                            <p className={styles.masage}>{masage}</p>
                                        </div>

                                        <div className={styles.button}>
                                            <button onClick={emailInvalidation}>تایید و ادامه</button>
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