"use client";

import Image from "next/image";

export default function ProjectsSection() {
    return (
        <section id="projects" className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Web Development</h2>
            <div className="space-y-2 mb-4">
                <h3 className="text-lg font-bold text-foreground mb-2 ">Weather Map</h3>
                <p className="text-sm text-foreground opacity-80">Self Driven Projects, January, 2025 - Present</p>
                <p>A web application built with Vite that allows user to check current weather condition by intuitive interactions.</p>
                <div className="flex space-x-4 items-center">
                    <div className="flex items-center space-x-1 opacity-50">
                        <Image src="/projects/icons8-link-30.png" alt="Link icon" width={20} height={20} />
                        <a href="https://github.com/KMtouzhele/TempMap" target="_blank" className="text-sm text-foreground hover:underline">Github</a>
                    </div>
                </div>
            </div>
            <p className="text-sm font-bold text-foreground mb-2">Technologies</p>
            <div className="flex items-center mb-12">
                <Image className="mr-1" src="/icons8-react-96.png" alt="React Icon" width={20} height={20} />
                <span className="text-sm text-foreground mr-4">React.js</span>
            </div>

            <div className="space-y-2 mb-4">
                <h3 className="text-lg font-bold text-foreground mb-2">Secure Web Development</h3>
                <p className="text-sm text-foreground opacity-80">Coursework Assignment, July - August 2024</p>
                <p>This project is a university assignment that demonstrates functionalities including Secured Registration, Authentication, Role-Based Access Control, and Log Storage.</p>
                <ul>
                    <p>Secured Registration: Ensures that user registration is handled securely.</p>
                    <p>Authentication: Provides a secure login mechanism for users.</p>
                    <p>Role-Based Access Control: Manages user privileges and access levels based on their roles.</p>
                    <p>Log Storage: Keeps track of user activities and system events for security and auditing purposes.</p>
                </ul>
                <div className="flex space-x-4 items-center">
                    <div className="flex items-center space-x-1 opacity-50">
                        <Image src="/projects/icons8-link-30.png" alt="Link icon" width={20} height={20} />
                        <a href="https://github.com/KMtouzhele/kit514_assignment1" target="_blank" className="text-sm text-foreground hover:underline">Github</a>
                    </div>
                </div>
            </div>
            <p className="text-sm font-bold text-foreground mb-2">Technologies</p>
            <div className="flex items-center mb-12">
                <Image className="mr-1" src="/projects/icons8-php-30.png" alt="PHP Icon" width={20} height={20} />
                <span className="text-sm text-foreground mr-4">PHP</span>
                <Image className="mr-1" src="/projects/icons8-mysql-50.png" alt="MySQL Icon" width={24} height={24}/>
                <span className="text-sm text-foreground mr-4">MySQL</span>
            </div>

            <div className="space-y-2 mb-4">
                <h3 className="text-lg font-bold text-foreground mb-2">RESTful API Service</h3>
                <p className="text-sm text-foreground opacity-80">Coursework Assignment, September - October 2024</p>
                <p>A RESTful api service built with NodeJS, providing web scraping and Formula 1
                    matches creating, simulation and leaderboard computing.</p>
                <div className="flex space-x-4 items-center">
                    <div className="flex items-center space-x-1 opacity-50">
                        <Image src="/projects/icons8-link-30.png" alt="Link icon" width={20} height={20} />
                        <a href="https://github.com/KMtouzhele/teams_api" target="_blank" className="text-sm text-foreground hover:underline">F1 Team Service API</a>
                    </div>
                    <div className="flex items-center space-x-1 opacity-50">
                        <Image src="/projects/icons8-link-30.png" alt="Link icon" width={20} height={20} />
                        <a href="https://github.com/KMtouzhele/timing_api" target="_blank" className="text-sm text-foreground hover:underline">F1 Timing Service API</a>
                    </div>
                </div>
            </div>
            <p className="text-sm font-bold text-foreground mb-2">Technologies</p>
            <div className="flex items-center mb-12">
                <Image className="mr-1" src="/icons8-nodejs-32.png" alt="Node.js Icon" width={20} height={20} />
                <span className="text-sm text-foreground mr-4">Node.js</span>
                <Image className="mr-1" src="/projects/icons8-mysql-50.png" alt="MySQL Icon" width={24} height={24}/>
                <span className="text-sm text-foreground mr-4">MySQL</span>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6">Mobile Development</h2>
            <div className="space-y-2 mb-4">
                <h3 className="text-lg font-bold text-foreground mb-2">Cricket Scoring APP</h3>
                <p className="text-sm text-foreground opacity-80">Coursework Assignment, March - June 2024</p>
                <p>
                    A mobile application built with native Android, iOS and cross platform framework,
                    providing a tool to record score during cricket games.
                </p>
                <div className="flex space-x-4 items-center">
                    <div className="flex items-center space-x-1 opacity-50">
                        <Image src="/projects/icons8-link-30.png" alt="Link icon" width={20} height={20} />
                        <a href="https://github.com/KMtouzhele/CricketScore" target="_blank" className="text-sm text-foreground hover:underline">Kotlin version</a>
                    </div>
                    <div className="flex items-center space-x-1 opacity-50">
                        <Image src="/projects/icons8-link-30.png" alt="Link icon" width={20} height={20} />
                        <a href="https://github.com/KMtouzhele/CricketScore_iOS" target="_blank" className="text-sm text-foreground hover:underline">iOS version</a>
                    </div>
                    <div className="flex items-center space-x-1 opacity-50">
                        <Image src="/projects/icons8-link-30.png" alt="Link icon" width={20} height={20} />
                        <a href="https://github.com/KMtouzhele/CricketScoreFlutter" target="_blank" className="text-sm text-foreground hover:underline">Flutter version</a>
                    </div>
                </div>
            </div>
            <p className="text-sm font-bold text-foreground mb-2">Technologies</p>
            <div className="flex items-center mb-12">
                <Image className="mr-1" src="/projects/icons8-kotlin-50.png" alt="Kotlin Icon" width={20} height={20} />
                <span className="text-sm text-foreground mr-4">Kotlin</span>
                <Image className="mr-1" src="/projects/icons8-swift-30.png" alt="Swift Icon" width={24} height={24}/>
                <span className="text-sm text-foreground mr-4">Swift</span>
                <Image className="mr-1" src="/projects/icons8-flutter-50.png" alt="Flutter Icon" width={20} height={20} />
                <span className="text-sm text-foreground mr-4">Flutter</span>
            </div>
        </section>
    );
};