import { RevealOnScroll } from "./RevealOnScroll"

export const About = () => {
    const programmingLanguages = [
        "Python",
        "C, C++",
        "JavaScript",
        "HTML & CSS",
        "Java (Basic)",
    ]

    const toolsTechnology = [
        "Git & Github",
        "VS Code",
        "FireBase",
        "Linux",
        "MySQL",
    ]
    
    const webDevelopment = [
        "React.js", 
        "TailwindCSS", 
        "Node.js",
    ]

    const currentlyLearning = [
        "Mern Stack",
        "DSA", 
        "AWS", 
    ]
    
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {""}
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 translate-all">
                        <p className="text-grey-300 mb-6">
                        Hello! I’m Sarthak Jain, a Computer Science student with a strong foundation in programming, web development, and software fundamentals.
                        Throughout my college years, I worked on many academic projects, and gained hands-on experience with tools like GitHub, Firebase, and front-end libraries. Now, I’m looking to kickstart my professional journey in the tech industry.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Programming Language
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {programmingLanguages.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-l px-3 rounded-full text-sm hover:bg-bkue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Tools & Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {toolsTechnology.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-l px-3 rounded-full text-sm hover:bg-bkue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Web Development
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {webDevelopment.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-l px-3 rounded-full text-sm hover:bg-bkue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Currently Learning
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {currentlyLearning.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-l px-3 rounded-full text-sm hover:bg-bkue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>  
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Education
                            </h3>
                            <ul className="list-disc list-inside text-grey-300 space-y-2">
                                <li>
                                    <strong>Btech in Computer Science</strong> - at S.B. Jain Institute,  Nagpur
                                </li>
                                <li>
                                    <strong>HSC in Science</strong> - at Samarth Jr. College, Ramtek
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Work Experience
                            </h3>
                            <div className="space-y-4 tetxt-grey-300">
                                    <div>
                                        <h4 className="font-bold">
                                            Internship on <strong>MERN Stack Development</strong> - at HotIT Institute
                                        </h4>
                                        <p>
                                            Developed a fully working Hospital Management System using React, node.js and MongoDB. 
                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>

        </section>
    )
}