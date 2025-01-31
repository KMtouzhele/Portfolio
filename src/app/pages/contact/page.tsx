import Navigation from "@/app/ui/Navigation";
import Footer from "@/app/ui/Footer";
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="mx-[10%] md:mx-[20%] lg:mx-[30%]">
            <Navigation />
            <div className="space-y-8">
                <h1 className="text-3xl font-bold text-foreground">Contact Kilmer</h1>
                <div className="flex space-x-1 items-center">
                    <Image src="/icons8-linkedin-50.png" alt="lindedin icon" width={24} height={24}></Image>
                    <a href="https://www.linkedin.com/in/kaimo-li-8651b391/" target="_blank" className="text-foreground hover:underline">Kilmer LinkedIn</a>
                </div>

                <div className="flex space-x-1 items-center">
                    <Image src="/projects/icons8-github-30.png" alt="github icon" width={24} height={24}></Image>
                    <a href="https://github.com/KMtouzhele" target="_blank" className="text-foreground hover:underline">KMtouzhele</a>
                </div>

                <div className="flex space-x-1 items-center">
                    <Image src="/icons8-envelope-24.png" alt="email icon" width={24} height={24}></Image>
                    <a href="https://github.com/KMtouzhele" target="_blank" className="text-foreground hover:underline">Kilmerlee94@gmail.com</a>
                </div>

            </div>
            <Footer />
        </div>
    );
};