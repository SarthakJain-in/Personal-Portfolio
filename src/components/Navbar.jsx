import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 sahdow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                {""}
                <a href="" className="font-mono text-xl font-bold text-blur-500 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">&lt;SJ/&gt;</a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    ☰
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-grey-300 hov:text_white transition-colors">
                        {""}
                        Home{""}
                    </a>
                    <a href="#about" className="text-grey-300 hov:text_white transition-colors">
                        {""}
                        About{""}
                    </a>
                    <a href="#projects" className="text-grey-300 hov:text_white transition-colors">
                        {""}
                        Projects{""}
                    </a>
                    <a href="#contact" className="text-grey-300 hov:text_white transition-colors">
                        {""}
                        Contact{""}
                    </a>
                </div>
            </div>
        </div>
    </nav>
}