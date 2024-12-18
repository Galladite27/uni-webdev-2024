import Image from "next/image"
import IMG_map from "@/../public/images/find-us/map.jpg"

export default function Page() {
    return (
        <>
            <h1>How to find us</h1>
            <p>Cantor College<br />
               Main Street<br />
               Sheffield<br />
               SC4 2BB</p>

            <Image src={IMG_map} alt="College map" />
        </>
    );
}
