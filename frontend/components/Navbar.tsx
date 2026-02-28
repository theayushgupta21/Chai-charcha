import { SiSmugmug } from "react-icons/si";
import { Moon, Sun } from "lucide-react";

import HeroSection from "../components/Hero-section";

type NavbarProps = {
    toggleTheme: () => void;
    darkMode: boolean;
};

const Navbar = ({ toggleTheme, darkMode }: NavbarProps) => {
    return (
        <>
            <nav className="border-b border-gray-200 dark:border-gray-700">
                <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">

                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <SiSmugmug className="text-3xl text-amber-600" />
                        <h1 className="text-2xl font-semibold">
                            Chai<span className="text-amber-600">&</span>Charcha
                        </h1>
                    </div>

                    {/* Links */}
                    <ul className="hidden md:flex gap-8 text-sm">
                        <li className="hover:text-amber-600 cursor-pointer">Services</li>
                        <li className="hover:text-amber-600 cursor-pointer">Story</li>
                        <li className="hover:text-amber-600 cursor-pointer">About</li>
                        <li className="hover:text-amber-600 cursor-pointer">Contact</li>
                    </ul>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        >
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        <button className="hidden md:block rounded-md bg-amber-600 px-4 py-2 text-sm text-white hover:bg-amber-700">
                            Sign Up
                        </button>
                    </div>

                </div>
            </nav>
            <HeroSection
            />
        </>
    );
};

export default Navbar;