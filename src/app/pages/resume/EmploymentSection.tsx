"use client";
import Image from "next/image";
import { IoLogoReact, IoLogoNodejs } from "react-icons/io5";

export default function EmploymentSection() {
    return (
        <section id="employment" className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Employment</h2>
            <div className="space-y-2 mb-2">
                <h3 className="text-lg font-bold text-foreground mb-2">Backend Developer</h3>
                <p className="text-sm text-foreground">Active Work Lab, University of Tasmania, Hobart, Australia</p>
                <p className="text-sm text-foreground">November 2023 - Present</p>
                <p className="text-sm text-foreground">Active Work Lab is a research laboratory run by UTAS that focuses on exploring light physical
                    activities in the workplace to improve employees&apos; physical well-being. I work as a backend
                    developer for the web application Exertime, which uses Vue.js for the client-side interface and
                    React.js with AdminJS for the server-side management panel.
                </p>
                <p className="text-sm text-foreground">
                    My tasks include developing features such as AdminJS resource creation, video uploading
                    and thumbnail generation, role-based access control, as well as conducting solution research
                    and analysis.</p>
                <p className="text-sm text-foreground">
                    I utilize Docker to mock an environment for development and testing, and Github to version
                    control and collaborate with teammates.</p>
            </div>
            <p className="text-sm font-bold text-foreground mb-2">Technologies</p>
            <div className="flex items-center mb-12">
                <IoLogoReact className="mr-2" size={24} />
                <span className="text-sm text-foreground mr-4">React</span>
                <IoLogoNodejs className="mr-2" size={24} />
                <span className="text-sm text-foreground mr-4">Node.js</span>
                <Image className="mr-2" src="/adminjs.png" alt="AdminJS Icon" width={24} height={24} />
                <span className="text-sm text-foreground mr-4">AdminJS</span>
            </div>

            <div className="space-y-2 mb-12">
                <h3 className="text-lg font-bold text-foreground mb-2">Experience Expert</h3>
                <p className="text-sm text-foreground">Human Horizons, Shanghai, China</p>
                <p className="text-sm text-foreground">May 2021 - June 2023</p>
                <p className="text-sm text-foreground">
                    These have been the two most transformative years of my growth. I transitioned from an
                    agency to the Department of User Operations in an electric car company, where I was
                    responsible for building and managing Loyalty Program and Referral Program. During this
                    period, I enhanced the points system, created a badge system from scratch, and designed
                    monthly user referral campaigns. I made significant contributions to increasing customer
                    retention and encouraging existing customers to refer new ones.
                </p>
                <p className="text-sm text-foreground">
                    I had close collaboration with the software development team during this time, which
                    provided me with a basic understanding of user information systems&apos; functionalities and
                    development. This experience sparked a strong interest in me and led me to decide to resign
                    from my position to return to campus for further studies.
                </p>
            </div>

            <div className="space-y-2 mb-12">
                <h3 className="text-lg font-bold text-foreground mb-2">Experience Strategist</h3>
                <p className="text-sm text-foreground">AKQA, Shanghai, China</p>
                <p className="text-sm text-foreground">August 2019 - May 2021</p>
                <p className="text-sm text-foreground">
                    I am immensely grateful for the opportunity to work at AKQA. Because of this job, I was
                    immersed in an international working environment. I&apos;ve had the privilege to collaborate with
                    people from various nationalities, diverse cultural backgrounds, and different ethnicities,
                    while serving innovative companies such as Officeworks, Colgate, Ford, Lincoln, Louis Vuitton,
                    Amway, and more. During this time, I learned my ability to learn quickly, developed strong
                    teamwork skills, and expanded my understanding of innovation.
                </p>
            </div>

            <div className="space-y-2 mb-12">
                <h3 className="text-lg font-bold text-foreground mb-2">Market Researcher</h3>
                <p className="text-sm text-foreground">MassThinker, Shanghai, China</p>
                <p className="text-sm text-foreground">June 2018 - August 2019</p>
                <p className="text-sm text-foreground">
                    This is a significant transformation. I transitioned from being a designer for household
                    appliances and electronic products to entering the research field. As a result, I began to gain
                    insights into various decision-making processes throughout the product development
                    journey and how consumer preferences impact product design. More importantly, this
                    position introduced me to a broader range of fields, enabling me to explore digital products,
                    real estate, and the automotive industry.
                </p>
            </div>

            <div className="space-y-2 mb-12">
                <h3 className="text-lg font-bold text-foreground mb-2">Industrial Designer</h3>
                <p className="text-sm text-foreground">LOE Design, Shanghai, China</p>
                <p className="text-sm text-foreground">
                    Designing an easy-to-use and user-friendly approach for the product while also considering
                    product aesthetics and low manufacturing costs.
                </p>
            </div>
        </section>
    );
};