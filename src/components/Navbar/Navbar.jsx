import { Link } from "react-router-dom";

import { useState } from "react";
import { Menu, X, BookOpen, Gamepad2, HelpCircle, Calendar } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-orange-400 to-pink-500 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center h-16 px-6 md:px-12">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-10 w-10 object-contain"
          /> */}
        <Link to="/"><h1 className="text-2xl font-extrabold text-white tracking-wide">TACN CEU</h1></Link>  
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-6 text-white font-semibold">
  <li className="hover:bg-white hover:text-orange-500 px-4 py-2 rounded-full transition duration-300 cursor-pointer flex items-center gap-2">
    <BookOpen size={18} />
    <Link to="/bible-stories">Bible Stories</Link>
  </li>
  <li className="hover:bg-white hover:text-orange-500 px-4 py-2 rounded-full transition duration-300 cursor-pointer flex items-center gap-2">
    <Gamepad2 size={18} />
    <Link to="/games">Games</Link>
  </li>
  <li className="hover:bg-white hover:text-orange-500 px-4 py-2 rounded-full transition duration-300 cursor-pointer flex items-center gap-2">
    <HelpCircle size={18} />
    <Link to="/quiz">Quiz</Link>
  </li>
  <li className="hover:bg-white hover:text-orange-500 px-4 py-2 rounded-full transition duration-300 cursor-pointer flex items-center gap-2">
    <Calendar size={18} />
    <Link to="/schedule">Schedule</Link>
  </li>
</ul>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
  <ul className="md:hidden flex flex-col items-center space-y-4 py-6 bg-orange-100 text-gray-700 font-semibold px-4">
    <li className="hover:text-orange-500 flex items-center gap-2">
      <BookOpen size={18} />
      <Link to="/bible-stories">Bible Stories</Link>
    </li>
    <li className="hover:text-orange-500 flex items-center gap-2">
      <Gamepad2 size={18} />
      <Link to="/games">Games</Link>
    </li>
    <li className="hover:text-orange-500 flex items-center gap-2">
      <HelpCircle size={18} />
      <Link to="/quiz">Quiz</Link>
    </li>
    <li className="hover:text-orange-500 flex items-center gap-2">
      <Calendar size={18} />
      <Link to="/schedule">Schedule</Link>
    </li>
  </ul>
)}

    </nav>
  );
}
