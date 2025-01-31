"use client";
import Navigation from "@/app/ui/Navigation";
import Footer from "@/app/ui/Footer";
import ProjectsSection from "@/app/pages/projects/ProjectsSection";

export default function ProjectsPage() {
    return (
        <div className="mx-12 md:mx-[30%]">
            <Navigation />
            <div className="space-y-8">
                <h1 className="text-3xl font-bold text-foreground">Kilmer Projects</h1>
                <ProjectsSection />
            </div>
            <Footer />
        </div>
    );
}