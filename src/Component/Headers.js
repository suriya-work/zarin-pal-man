import React, { useState } from 'react';
import styles from "./Header.module.css"
// import { withRouter } from 'react-router-dom';
//Image
import Logo from "../image/logo-white.svg";
import ArrowDown from "../image/down-arrow-svg.svg";
import { Link } from "react-router-dom";


const Headers = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openShow, setOpenShow] = useState(false);



  return (
    <header>
      <div>
        <img className={styles.logoimg} src={Logo} alt="Logo" />
      </div>
      <nav>
        <ul className={styles.headerUl}>
          <li className={styles.moremenu} onClick={(e) => setOpenMenu(!openMenu)} onMouseEnter={() => setOpenMenu(true)}  >
            <Link to="/">محصولات</Link>
            <img src={ArrowDown} alt="Down" />

            {openMenu && (
              <div className={styles.productMore} onMouseLeave={() => setOpenMenu(false)}>
                <div className={styles.showmoremenu}>
                  <Link to="/">
                    <p>درگاه پرداخت</p>
                    <p>مهندسی شده برای فروش بیشت</p>
                  </Link>
                  <Link to="/">
                    <p>زرین لینک</p>
                    <p>لینک پرداخت در شبکه‌های اجتماعی</p>
                  </Link>
                  <Link to="/">
                    <p>زرین‌پلاس</p>
                    <p>ابزار هوشمند سوددهی</p>
                  </Link>
                </div>

                <div className={styles.showmoremenu}>
                  <Link to="/">
                    <p>زرین‌کارت</p>
                    <p>طلایی‌ترین کارتِ بانکی</p>
                  </Link>
                  <Link to="/">
                    <p>تسهیم</p>
                    <p>درگاه پرداخت اشتراکی</p>
                  </Link>
                </div>
              </div>
            )}
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

          <li className={styles.moremenu} onClick={() => setOpenShow(!openShow)} onMouseEnter={() => setOpenShow(true)}>
            <Link to="/">بیش‌ تر</Link>
            <img src={ArrowDown} alt="Down" />
            {openShow && (
              <div className={styles.showmoremenu} onMouseLeave={() => setOpenShow(false)}>
                <ul className={styles.showUl}>
                  <li>
                    <Link to="/">وبلاگ</Link>
                  </li>
                  <li>
                    <Link to="/">دریافت شماره شبا</Link>
                  </li>
                  <li>
                    <Link to="/">سوالات متداول</Link>
                  </li>
                  <li>
                    <Link to="/">اپلیکیشن</Link>
                  </li>
                  <li>
                    <Link to="/">زرین‌بین</Link>
                  </li>
                </ul>
              </div>
            )}


          </li>

          <li>
            <Link to="/">زرین پال من</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Headers;