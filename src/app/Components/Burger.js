"use client"
import React, { useState } from "react";
import Link from "next/link"

import styles from "@/app/Components/Burger.module.css"

export default function Burger() {
    const [hidden, setHidden] = useState(true);

    function toggleHidden() {
        setHidden(!hidden);
    };

    return (
        <nav>
            <button onClick={toggleHidden}>MENU</button>
            <div id={hidden ? styles.hidden : styles.block}>
                <Link onClick={toggleHidden} href="/about/"><div className={styles.buttonShade + " thinBorder"}><p>About</p></div></Link>
                <Link onClick={toggleHidden} href="/find-us/"><div className={styles.buttonShade + " thinBorder"}><p>Find us</p></div></Link>
                <Link onClick={toggleHidden} href="/courses-computing/"><div className={styles.buttonShade + " thinBorder"}><p>Computing courses</p></div></Link>
                <Link onClick={toggleHidden} href="/courses-design/"><div className={styles.buttonShade + " thinBorder"}><p>Design courses</p></div></Link>
                <Link onClick={toggleHidden} href="/facilities/"><div className={styles.buttonShade + " thinBorder"}><p>Facilities</p></div></Link>
                <Link onClick={toggleHidden} href="/learning-resources/"><div className={styles.buttonShade + " thinBorder"}><p>Learning resources</p></div></Link>
                <Link onClick={toggleHidden} href="/information-staff/"><div className={styles.buttonShade + " thinBorder"}><p>Staff information</p></div></Link>
                <Link onClick={toggleHidden} href="/information-students/"><div className={styles.buttonShade + " thinBorder"}><p>Student information</p></div></Link>
                <Link onClick={toggleHidden} href="/business/"><div className={styles.buttonShade + " thinBorder"}><p>Working with businesses</p></div></Link>
                <Link onClick={toggleHidden} href="/contact-us/"><div className={styles.buttonShade + " thinBorder"}><p>Contact us</p></div></Link>
            </div>
        </nav>
    );
};
