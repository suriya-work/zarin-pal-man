import React, { useState } from 'react';
import { Link } from "react-router-dom";
//Bootstrap
import { Container , Row , Col } from 'react-bootstrap';
//Image
import Logo from "../image/logo-white.svg";
import ArrowDown from "../image/drop-down.png";
//Style
import styles from "./Header.module.css";

const Header = () => {


    const DrowpDown = [
        { label: "درگاه پرداخت" , value: "pay"} ,
        { label: "مهندسی شده برای فروش بیشت", value: "sale" } ,
        { label: "زرین لینک" , value: "link"},
        { label: "لینک پرداخت در شبکه‌های اجتماعی" , value: "link" } , 
        { label : "زرین‌پلاس" , value: "zarin" }, 
        { label: "ابزار هوشمند سوددهی" , value: "sod" } ,
        { label: "زرین‌کارت" , value: "cart" }, 
        { label: "طلایی‌ترین کارتِ بانکی" , value: "bank" }, 
        { label: "تسهیم" , value: "ts" },
        { label: "درگاه پرداخت اشتراکی" , value: "esh" }

]

    const [drowp , setDrowp] = useState("");

    const handelrDrwop = (e) => {
        setDrowp(e.target.value)
    }

    return (


       
        <Container className={styles.container}>
            <Row>
                <Col lg="2" md="2" sm ="2" xs="6">
                  <img   src={Logo} alt="Logo svg" />
                </Col>

         <Col lg="10" md="10" sm ="10" xs="6">
            <ul>
                {drowp}
               <li className={styles.item}>
                <select className={styles.selectitem} onChange={handelrDrwop}>
                    <option className={styles.optionitem} value="select a drowp">محصولات</option>
                    {DrowpDown.map((drowp) => <option key={drowp.label} value={drowp.value}>{drowp.label}</option>)}
                    {/* <Link to="/">محصولات</Link> */}
                    {/* <img src={ArrowDown} alt="Down"/> */}
                </select>
                </li>

                <li>
                    <Link to="/">تعرفه‌ها</Link>
                </li>

                <li>
                    <Link to="/">توسعه‌دهندگان</Link>
                </li>

                <li>
                    <Link to="/">تماس با ما</Link>
                </li>

                <li>
                <Link to="/">بیش‌ تر</Link>

                <img src={ArrowDown} alt="Down"/>

                </li>
                
                <button className={styles.btn}>زرین پال من</button>

            </ul>
         </Col>
            </Row>
        </Container>
    );
};

export default Header;