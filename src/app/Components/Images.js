"use client"
import React, { useState } from "react";
import Image from 'next/image'

import styles from "@/app/Components/Images.module.css"

export default function Images() {
    var images = [
        "/image-carousel/00.jpg",
        "/image-carousel/01.jpg",
        "/image-carousel/02.jpg",
        "/image-carousel/03.jpg",
        "/image-carousel/04.jpg"
    ];

    const [image, setImage] = useState(0);
    function changeImage(chg) {
        let oldVal = image;

        //console.log("Running changeImage");
        //console.log("Current value: " + String(oldVal));
        //console.log("Input received: " + String(chg));

        oldVal += chg;
        //console.log("New value: " + String(oldVal));

        // I could wrap in a more advanced way, but this will do
        if (oldVal < 0) oldVal = images.length - 1;
        if (oldVal >= images.length) oldVal = 0;
        //console.log("New value after processing wraps: " + String(oldVal));

        setImage(oldVal);

    };

    return (
        <div id={styles.container}>
            <div className={styles.arrow} onClick={() => {changeImage(-1)}}>
                <p>&larr;</p>
            </div>
            <div>
                {/* The values here prevent Next JS from complaining about no image proportions being set. Found here https://stackoverflow.com/questions/65169431/how-to-set-the-next-image-component-to-100-height */}
                <Image src={images[image]} alt="Picture of Cantor College" sizes="100vw" width={0} height={0} style={{ width: "100%", height: "auto" }}/>
            </div>
            <div className={styles.arrow} onClick={() => {changeImage(1)}}>
                <p>&rarr;</p>
            </div>
        </div>
    );
};
