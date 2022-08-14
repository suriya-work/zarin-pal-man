import React, { useState, useEffect } from 'react';
import image from "../image/app.png";


const Slider = ({ imgs }) => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        setIndex(0)
    }, [])

    const next = () => {
        if (index === imgs.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const prev = () => {
        if (index === 0) {
            setIndex(imgs.length - 1)
        } else {
            setIndex(index - 1)
        }

    }
    return (
        <div>
            <img src={image[index]} alt="image" />
            <div>
                <button onClick={prev}>,,</button>
                <button onClick={next}>,,</button>
            </div>

        </div>
    );
};

export default Slider;