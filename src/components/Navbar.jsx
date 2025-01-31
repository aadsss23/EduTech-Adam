import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            EduTech
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">HOME</Link>
            <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">ABOUT</Link>
            <Link to="/courses" className="text-gray-600 hover:text-primary transition-colors">COURSES</Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">CONTACT</Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">HOME</Link>
            <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">ABOUT</Link>
            <Link to="/courses" className="text-gray-600 hover:text-primary transition-colors">COURSES</Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">CONTACT</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;