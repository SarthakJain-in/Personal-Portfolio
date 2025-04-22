import { RevealOnScroll } from "./RevealOnScroll"

export const About = () => {
    const frontendSkills = [
        "React",
        "Vue", 
        "JavaScript", 
        "TilwindCSS", 
        "Svelte",
    ]

    const backendSkills = [
        "Python",
        "NodeJs", 
        "MongoDB", 
        "AWS", 
        "Django",
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
                            I'm currently learning full-stack development and building real-world projects to sharpen my skills. I love turning ideas into interactive and user-friendly experiences. Always curious, always learning!
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Frontend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-l px-3 rounded-full text-sm hover:bg-bkue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Backend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-l px-3 rounded-full text-sm hover:bg-bkue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
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
                                    <strong>BTech in Computer Science</strong> - S.B. Jain Institute
                                </li>
                                <li>
                                    <strong>HSC in Science</strong> - Samarth Jr. College
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Work Experience
                            </h3>
                            <div className="space-y-4 tetxt-grey-300">
                                    <div>
                                        <h4 className="font-semibold">
                                            Internship on <strong>MERN Stack Development</strong> - at HotIT Institute
                                        </h4>
                                        <p>
                                            Developed a fully working Hospital Management System. 
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