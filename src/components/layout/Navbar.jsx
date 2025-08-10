import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.style.css';

export default function Navbar({ heroSectionRef }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  
  // Variables for smooth scroll detection
  const lastScrollTopRef = useRef(0);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      
      // Add scrolled class for background and request demo button
      if (currentScrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Hide navbar on scroll down, show on scroll up
      if (currentScrollTop > 100) { // Only apply after scrolling down 100px
        // Scrolling down
        if (currentScrollTop > lastScrollTopRef.current) {
          if (navbarRef.current) {
            navbarRef.current.style.transform = 'translateY(-100%)';
          }
        } 
        // Scrolling up
        else if (currentScrollTop < lastScrollTopRef.current) {
          if (navbarRef.current) {
            navbarRef.current.style.transform = 'translateY(0)';
          }
        }
      } else {
        // At the top of the page
        if (navbarRef.current) {
          navbarRef.current.style.transform = 'translateY(0)';
        }
      }
      
      // Update last scroll position
      lastScrollTopRef.current = currentScrollTop;
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.classList.remove('menu-open');
      }
    };
    
    // Throttle scroll events for better performance
    const handleScrollThrottled = () => {
      if (!scrollTimeoutRef.current) {
        scrollTimeoutRef.current = setTimeout(() => {
          handleScroll();
          scrollTimeoutRef.current = null;
        }, 10); // Small timeout for smoother appearance
      }
    };

    window.addEventListener('scroll', handleScrollThrottled);
    window.addEventListener('resize', handleResize);
    
    // Initial call to set correct state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScrollThrottled);
      window.removeEventListener('resize', handleResize);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      // Ensure menu-open class is removed when component unmounts
      if (isMobileMenuOpen) {
        document.body.classList.remove('menu-open');
      }
    };
  }, [isMobileMenuOpen, heroSectionRef]);

  const toggleMobileMenu = () => {
    const newMenuState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newMenuState);
    
    // Toggle body class to prevent background scrolling
    if (newMenuState) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  return (
    <nav 
      ref={navbarRef}
      id="navbar"
      className={`navbar py-2 sm:py-4 px-4 sm:px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-50 backdrop-blur ${isScrolled ? 'scrolled' : ''}`}>
      <div className="flex items-center">
        <Link to="/" className="text-xl sm:text-2xl font-bold navbar-logo">
          <img src="/img/logo.png" alt="logo" className="h-10 sm:h-12" />
        </Link>
      </div>

      <div className="hidden md:flex items-center justify-center space-x-4 lg:space-x-8 absolute left-1/2 transform -translate-x-1/2">
        <Link to="/blog" className="text-sm lg:text-base font-medium transition hover:text-blue-400">Blogs</Link>
        <Link to="/customers" className="text-sm lg:text-base font-medium transition hover:text-blue-400">Customers</Link>
        <Link to="/security" className="text-sm lg:text-base font-medium transition hover:text-blue-400">Security</Link>
        <Link to="/resources" className="text-sm lg:text-base font-medium transition hover:text-blue-400">Resources</Link>
        <Link to="/news" className="text-sm lg:text-base font-medium transition hover:text-blue-400">News</Link>
        <Link to="/company" className="text-sm lg:text-base font-medium transition hover:text-blue-400">Company</Link>

      </div>

      <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
        <Link to="/login" id="login-btn" className="login-btn text-sm lg:text-base font-medium hover:text-blue-400 transition">Login</Link>
        <Link to="/register" id="request-demo-btn" className="request-demo-btn bg-white text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded text-sm lg:text-base font-medium hover:bg-gray-200 transition duration-300 flex items-center">
          Request a Demo
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button
          id="mobile-menu-button"
          className="text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="close-button" id="close-menu-button" onClick={toggleMobileMenu}>
          <div className="close-line"></div>
          <div className="close-line"></div>
        </div>
        <div className="mobile-menu-links text-center">
          <Link to="/blog" className="text-base font-medium hover:text-gray-300 py-2">Blogs</Link>
          <Link to="/customers" className="text-base font-medium hover:text-gray-300 py-2">Customers</Link>
          <Link to="/security" className="text-base font-medium hover:text-gray-300 py-2">Security</Link>
          <Link to="/resources" className="text-base font-medium hover:text-gray-300 py-2">Resources</Link>
          <Link to="/news" className="text-base font-medium hover:text-gray-300 py-2">News</Link>
          <Link to="/company" className="text-base font-medium hover:text-gray-300 py-2">Company</Link>
        </div>
        <div className="mobile-buttons">
          <Link to="/login" className="login-btn-mobile text-base font-medium hover:text-gray-300 text-center w-full">Login</Link>
          <Link to="/register" className="request-demo-btn-mobile bg-white text-black px-5 py-2.5 rounded-md text-base font-medium hover:bg-gray-200 transition duration-300 flex items-center justify-center w-full">
            Request a Demo
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
