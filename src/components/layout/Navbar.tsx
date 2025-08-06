import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id") || "";
        const sectionHeight = current.clientHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 100;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Skills", path: "#skills" },
    { name: "Accomplishments", path: "#accomplishments" },
    { name: "Contact", path: "#contact" },
  ];

  const scrollToSection = (path: string, event?: React.MouseEvent) => {
    if (event) event.preventDefault();

    const element = document.querySelector(path);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-lg shadow-xl py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-3xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-portfolio-blue to-portfolio-orange bg-clip-text text-transparent">
              KVR
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`text-lg font-medium transition duration-300 ease-in-out hover:text-portfolio-orange ${activeSection === link.path.substring(1) ? 'text-portfolio-orange underline underline-offset-4' : 'text-gray-300'}`}
                onClick={(e) => scrollToSection(link.path, e)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg absolute top-full left-0 w-full py-6 px-6 shadow-lg border-t border-gray-800 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`block py-4 text-lg font-semibold transition-colors duration-300 ${activeSection === link.path.substring(1) ? 'text-portfolio-orange' : 'text-gray-300 hover:text-white'}`}
                onClick={(e) => scrollToSection(link.path, e)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
