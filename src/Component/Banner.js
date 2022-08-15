import React from 'react';
//Style
import styles from "./Banner.module.css";
// IMAGE
import image from "../image/wave.svg";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <img src={image} alt="svg" />
            
        </div>
    );
};

export default Banner;