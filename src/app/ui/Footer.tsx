"use client";
import {MdAlternateEmail} from "react-icons/md";

export default function Footer() {
    return (
        <footer className="flex my-24 text-center text-sm text-foreground justify-between">
            <p>&copy; 2025 Kilmer Li</p>
            <div className="flex space-x-2">
                <MdAlternateEmail size={18}/>
                <a href="mailto:Kilmerlee94@gmail.com" className="text-foreground hover:underline">
                    Kilmerlee94@gmail.com
                </a>
            </div>
        </footer>
    );
};