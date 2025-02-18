import Navigation from "@/app/ui/Navigation";
import Footer from "@/app/ui/Footer";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { Analytics } from "@vercel/analytics/react"

export default function ContactPage() {
    return (
        <div className="mx-[10%] md:mx-[20%] lg:mx-[30%]">
            <Navigation />
            <div className="space-y-8">
                <h1 className="text-3xl font-bold text-foreground">Contact Kilmer</h1>
                <div className="flex space-x-1 items-center">
                    <IoLogoLinkedin size={24}/>
                    <a href="https://www.linkedin.com/in/kaimo-li-8651b391/" target="_blank" className="text-foreground hover:underline">Kilmer LinkedIn</a>
                </div>

                <div className="flex space-x-1 items-center">
                    <IoLogoGithub size={24}/>
                    <a href="https://github.com/KMtouzhele" target="_blank" className="text-foreground hover:underline">KMtouzhele</a>
                </div>

                <div className="flex space-x-1 items-center">
                    <MdAlternateEmail size={24}/>
                    <a href="https://github.com/KMtouzhele" target="_blank" className="text-foreground hover:underline">Kilmerlee94@gmail.com</a>
                </div>
            </div>
            <Footer />
            <Analytics />
        </div>
    );
};