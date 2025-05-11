
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 shadow backdrop-blur-sm py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <span className="text-2xl font-bold bg-gradient-to-r from-vyuapp-600 to-vyuapp-800 bg-clip-text text-transparent">
            VyuApp
          </span>
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/portfolio" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            Portfolio
          </NavLink>
          <NavLink 
            to="/services" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            About
          </NavLink>
          <Button asChild>
            <NavLink to="/contact">Contact Us</NavLink>
          </Button>
        </nav>

        {/* Mobile Menu */}
        <nav 
          className={`fixed inset-0 bg-background flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <NavLink 
            to="/" 
            className="text-2xl font-medium"
            onClick={closeMenu}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/portfolio" 
            className="text-2xl font-medium"
            onClick={closeMenu}
          >
            Portfolio
          </NavLink>
          <NavLink 
            to="/services" 
            className="text-2xl font-medium"
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink 
            to="/about" 
            className="text-2xl font-medium"
            onClick={closeMenu}
          >
            About
          </NavLink>
          <Button asChild size="lg">
            <NavLink to="/contact" onClick={closeMenu}>
              Contact Us
            </NavLink>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
