import { Link, useLocation } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
    const FileLocation = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const pageTitle = {
        '/': 'About Me',
        '/resume': 'Resume',
        '/project': 'Project',
        '/contact': "Contact",
        '/education': 'Career',
    };

    const currentPage = pageTitle[FileLocation.pathname] || "Portfolio";

    return (
        <div className="">
            <div className="flex justify-between">
                 <div className="mx-10 my-5">
                    <h2 className="text-3xl font-bold font-serif">
                        {currentPage}
                        <hr className="w-16 h-1 my-1 rounded-bl-full rounded-tr-full bg-yellow-500" />
                    </h2>
                </div>

                 <div>
                    <div>
                     <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden relative py-5 p-2 rounded-md focus:outline-none mx-8"
                        
                    >
                        {menuOpen ? <X size={28} /> : <MenuIcon size={28} />}
                    </button>
                    </div>

                     <div className={`lg:flex ${menuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
                        <ul className="nav-list 
                        flex 
                        flex-col 
                        lg:flex-row 
                        lg:justify-end 
                        items-center 
                        lg:space-x-6 
                        p-4 
                        lg:p-5
                        nav-li 
                        text-lg 
                        font-bold 
                        bg-gray-800  
                        text-white 
                        py-5 
                        lg:h-20 
                        xl:h-20 
                        xl:px-10 
                        rounded-bl-3xl 
                        rounded-tr-3xl">
                            <li className="mx-2">
                                <Link to='/' onClick={() => setMenuOpen(false)}>
                                    About
                                </Link>
                            </li>
                            <li className="mx-5">
                                <Link to='/education' onClick={() => setMenuOpen(false)}>
                                    Career
                                </Link>
                            </li>
                            <li className="mx-5">
                                <Link to='/resume' onClick={() => setMenuOpen(false)}>
                                    Resume
                                </Link>
                            </li>
                            <li className="mx-5">
                                <Link to='/project' onClick={() => setMenuOpen(false)}>
                                    Portfolio
                                </Link>
                            </li>
                            <li className="mx-5">
                                <Link to='/contact' onClick={() => setMenuOpen(false)}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;