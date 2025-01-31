"use client";

import Link from "next/link";
export default function Navigation() {
    return (
        <nav className="mt-10 mb-10">
            <ul className="flex justify-between">
                <li>
                    <Link href="/pages/resume">
                        Resume
                    </Link>
                </li>
                <li>
                    <Link href="/pages/projects">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href="/pages/photos">
                        Photos
                    </Link>
                </li>
                <li>
                    <Link href="/pages/contact">
                        Contact Me
                    </Link>
                </li>
            </ul>
        </nav>
    );
};