"use client";

import Navigation from "@/app/ui/Navigation";
import Footer from "@/app/ui/Footer";
import PhotosSection from "@/app/pages/photos/PhotosSection";

export default function PhotosPage() {
    return (
        <div className="mx-[10%] md:mx-[20%] lg:mx-[30%]">
            <Navigation />
            <div className="space-y-8">
                <h1 className="text-3xl font-bold text-foreground">Kilmer Photography</h1>
                <PhotosSection />
            </div>
            <Footer />
        </div>
    );
};