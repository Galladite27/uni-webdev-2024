import Link from "next/link"

import Burger from "@/app/Components/Burger"
import HomeButton from "@/app/Components/HomeButton"
import "@/css/desktop.css"

export const metadata = {
    title: "Cantor College",
    description: "Cantor College, Sheffield",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="section">
                    <h1 id="title" className="reduce-padding">Cantor College</h1>
                    <div className="mobileOnly"><Burger /><br /></div>
                    <div><HomeButton /></div>
                </div>
                <div className="section">
                    {children}
                </div>
                <div className="section reduce-padding">
                    <p id="footer-left">&copy; Laurence Layland 2024</p>
                    <p id="footer-right">info@cantorcollege.ac.uk</p>
                </div>
            </body>
        </html>
    );
}
