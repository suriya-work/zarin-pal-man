import React from 'react';
import Logo from "../image/logo-white.svg";
//Styles
import styles from "./Loading.module.css";

const Loading = (props) => {
    return (
        <div className={styles.loading}>
            <img src={Logo} alt="Logo" />
            <h3>Loading</h3>
        </div>
    );
};

export default Loading;