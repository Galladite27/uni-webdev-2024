import Image from "next/image"
import IMG_atrium from "@/../public/images/facilities/atrium.jpg"
import IMG_theatre from "@/../public/images/facilities/lecture-theatre.jpg"

export default function Page() {
    return (
        <>
            <h1>Facilities</h1>
                <p>The College is located in the attractive and pleasantly refurbished Building. The building houses computing laboratories, and lecture/tutorial rooms. It has its own catering facilities and student work areas. There is also a car park to the back of the building.</p>

                <Image src={IMG_atrium} alt="College atrium" />

                <p>Our building has space of 9500m², houses over 240 staff and provides teaching space for more than 1600 students.</p>

                <Image src={IMG_theatre} alt="Lecture theatre" />

                <p>Facilities include:</p>
                <ul>
                    <li>Wi-fi technology</li>
                    <li>Pool teaching rooms, including classrooms to teach from 25 - 80 students</li>
                    <li>Specialist faculty facilities</li>
                    <li>A double height lecture theatre at first and second floor level</li>
                    <li>Dramatic three-storey glass open atrium</li>
                    <li>Meeting rooms</li>
                    <li>Office accommodation</li>
                    <li>Specialist IT facilities</li>
                    <li>Reception desk area</li>
                    <li>Catering outlet</li>
                    <li>Parking for disabled badge holders</li>
                    <li>Cycle racks</li>
                    <li>Gallery</li>
                </ul>
        </>
    );
}
