"use client";
import EmploymentSection from "@/app/pages/resume/EmploymentSection";
import Navigation from "@/app/ui/Navigation";
import Footer from "@/app/ui/Footer";
import { Analytics } from "@vercel/analytics/react"
export default function ResumePage() {
    return (
        <div className="mx-12 md:mx-[30%]">
            <Navigation />
            <div className="space-y-8">
                <h1 className="text-3xl font-bold text-foreground">Kilmer Li</h1>
                <EmploymentSection />
            </div>
            <Footer />
            <Analytics />
        </div>
    );
}