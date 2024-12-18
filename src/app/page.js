import Link from "next/link"

import Images from "@/app/Components/Images"
import styles from "@/app/Index.module.css"

//Used for checking which view is active
// <p className="mobileOnly">Currently using mobile layout</p>
// <p className="desktopOnly">Currently using desktop layout</p>

export default function Index() {
    return (
        <>
            <div id={styles.container}>
                <div className="desktopOnly">
                    <Link href="/about/"><div className={styles.buttonShade + " thinBorder"}><p className={styles.buttonText}>About</p></div></Link>
                    <Link href="/find-us/"><div className={styles.buttonShade + " thinBorder"}><p className={styles.buttonText}>Find us</p></div></Link>
                    <Link href="/courses-computing/"><div className={styles.buttonShade + " thinBorder"}><p className={styles.buttonText}>Computing courses</p></div></Link>
                    <Link href="/courses-design/"><div className={styles.buttonShade + " thinBorder"}><p className={styles.buttonText}>Design courses</p></div></Link>
                    <Link href="/facilities/"><div className={styles.buttonShade + " thinBorder"}><p className={styles.buttonText}>Facilities</p></div></Link>
                </div>
                <div id="centralImage" className="thinBorder">
                    <Images />
                </div>
                <div className="desktopOnly">
                    <Link href="/learning-resources/"><div className={styles.buttonShade + " thinBorder"}><p className={styles.buttonText}>Learning resources</p></div></Link>
                    <Link href="/information-staff/"><div className={styles.buttonShade + " thinBorder"}><p className={styles.buttonText}>Staff information</p></div></Link>
                    <Link href="/information-students/"><div className={styles.buttonShade + " thinBorder"}><p className={styles.buttonText}>Student information</p></div></Link>
                    <Link href="/business/"><div className={styles.buttonShade + " thinBorder"}><p className={styles.buttonText}>Working with businesses</p></div></Link>
                    <Link href="/contact-us/"><div className={styles.buttonShade + " thinBorder"}><p className={styles.buttonText}>Contact us</p></div></Link>
                </div>
            </div>
        </>
    );
}
