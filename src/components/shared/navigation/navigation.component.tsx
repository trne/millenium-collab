import { Link } from 'react-router-dom';
import { Car, Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/baseUi/button/button.component';
import { FC, useState } from 'react';

export interface NavigationProps {
  // Add props if needed in the future
}

export const Navigation: FC<NavigationProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-darkgreen border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold flex items-center gap-2 text-white">
              <Car className="h-7 w-7" />
              <span className="font-bold">GreenFlag</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-secondary font-medium">Home</Link>
            <Link to="/about" className="text-white hover:text-secondary font-medium">About Us</Link>
            <Link to="/blog" className="text-white hover:text-secondary font-medium">Blog</Link>
            <Button variant="outline" className="ml-2 text-white border-white hover:bg-white/20 hover:text-white">
              <Phone className="w-4 h-4 mr-2" /> Contact Us
            </Button>
            <Button variant="primary" className="ml-2">
              Get a Quote
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-secondary"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-800">
            <Link
              to="/"
              className="block px-3 py-2 text-white hover:text-secondary font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-white hover:text-secondary font-medium"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 text-white hover:text-secondary font-medium"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <div className="px-3 py-2">
              <Button variant="primary" rounded="none" className="w-full mb-2">
                Get a Quote
              </Button>
              <Button variant="outline" className="w-full text-white border-white hover:bg-white/20 hover:text-white">
                <Phone className="w-4 h-4 mr-2" /> Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};