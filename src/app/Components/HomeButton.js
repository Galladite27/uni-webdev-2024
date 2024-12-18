"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function HomeButton() {
    console.log("Current page: \"" + usePathname() + "\"")

    if (usePathname() !== "/")
        return (
            <nav>
                <Link href="/"><button>&larr; HOME</button></Link>
            </nav>
        );
    else
        return;
}
