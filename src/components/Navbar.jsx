import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { href } from "react-router-dom";


const navItems =[
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {

    const [isscrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <nav className={cn("fixed w-full z-40 transition-all duration-300", isscrolled ? 
        "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>  

        <div className="container flex items-center justify-between">
            {/* Logo or Brand Name */}
            <a className="text-xl font-bold text-primary flex items-center" href="#home">
                <span className="relative z-10">
                    <span className="text-glow text-foreground">HaidarTech</span> Protofolio
                </span>
            </a>


            {/* desktop navbar */}
            <div>
                <div className="hidden md:flex space-x-8">
                {navItems.map((item, key) => (
                    <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                         {item.name} </a>
                ))}
            </div>


            {/* mobile navbar */}
             <div className="hidden md:flex space-x-8">
                {navItems.map((item, key) => (
                    <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                         {item.name} </a>
                ))}
            </div>
            </div>

        </div>
    </nav>;
};