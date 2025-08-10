import { Link } from "react-router-dom";
// import '../../styles/Footer.style.css';
import { useState, useEffect } from "react";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };
  return (
    <footer className="bg-black text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Footer Navigation */}
        <div className="flex flex-col lg:flex-row flex-wrap items-start justify-between gap-6 mb-8">
          {/* Logo and Description - Takes less space */}
          <div className="mb-6 lg:mb-0 lg:max-w-[180px]">
            <Link to="/" className="inline-block">
              <img 
                src="/img/logo.png" 
                alt="LawyerX Logo" 
                className="h-8 w-auto" 
              />
            </Link>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              Streamline your legal workflow with professional-class AI.
            </p>
          </div>

          {/* Platform Column */}
          <div className="mb-6 lg:mb-0 w-full md:w-auto">
            <div 
              className="flex justify-between items-center border-b border-gray-700 pb-2 cursor-pointer lg:cursor-default"
              onClick={() => toggleSection('platform')}
            >
              <h3 className="text-base font-medium">Platform</h3>
              <span className="lg:hidden">{openSection === 'platform' ? '−' : '+'}</span>
            </div>
            <ul className={`mt-3 space-y-2 ${openSection === 'platform' || isDesktop ? 'block' : 'hidden'}`}>
              <li><Link to="/assistant" className="text-gray-400 hover:text-white text-sm md:text-base">Assistant</Link></li>
              <li><Link to="/vault" className="text-gray-400 hover:text-white text-sm md:text-base">Vault</Link></li>
              <li><Link to="/knowledge" className="text-gray-400 hover:text-white text-sm md:text-base">Knowledge</Link></li>
              <li><Link to="/workflows" className="text-gray-400 hover:text-white text-sm md:text-base">Workflows</Link></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="mb-6 lg:mb-0 w-full md:w-auto">
            <div 
              className="flex justify-between items-center border-b border-gray-700 pb-2 cursor-pointer lg:cursor-default"
              onClick={() => toggleSection('solutions')}
            >
              <h3 className="text-base font-medium">Solutions</h3>
              <span className="lg:hidden">{openSection === 'solutions' ? '−' : '+'}</span>
            </div>
            <ul className={`mt-3 space-y-2 ${openSection === 'solutions' || isDesktop ? 'block' : 'hidden'}`}>
              <li><Link to="/innovation" className="text-gray-400 hover:text-white text-sm md:text-base">Innovation</Link></li>
              <li><Link to="/in-house" className="text-gray-400 hover:text-white text-sm md:text-base">In-House</Link></li>
              <li><Link to="/transactional" className="text-gray-400 hover:text-white text-sm md:text-base">Transactional</Link></li>
              <li><Link to="/litigation" className="text-gray-400 hover:text-white text-sm md:text-base">Litigation</Link></li>
            </ul>
          </div>

          {/* About Column */}
          <div className="mb-6 lg:mb-0 w-full md:w-auto">
            <div 
              className="flex justify-between items-center border-b border-gray-700 pb-2 cursor-pointer lg:cursor-default"
              onClick={() => toggleSection('about')}
            >
              <h3 className="text-base font-medium">About</h3>
              <span className="lg:hidden">{openSection === 'about' ? '−' : '+'}</span>
            </div>
            <ul className={`mt-3 space-y-2 ${openSection === 'about' || isDesktop ? 'block' : 'hidden'}`}>
              <li><Link to="/customers" className="text-gray-400 hover:text-white text-sm md:text-base">Customers</Link></li>
              <li><Link to="/security" className="text-gray-400 hover:text-white text-sm md:text-base">Security</Link></li>
              <li><Link to="/company" className="text-gray-400 hover:text-white text-sm md:text-base">Company</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white text-sm md:text-base">Blog</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white text-sm md:text-base">Newsroom</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white text-sm md:text-base">Careers</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="mb-6 lg:mb-0 w-full md:w-auto">
            <div 
              className="flex justify-between items-center border-b border-gray-700 pb-2 cursor-pointer lg:cursor-default"
              onClick={() => toggleSection('resources')}
            >
              <h3 className="text-base font-medium">Resources</h3>
              <span className="lg:hidden">{openSection === 'resources' ? '−' : '+'}</span>
            </div>
            <ul className={`mt-3 space-y-2 ${openSection === 'resources' || isDesktop ? 'block' : 'hidden'}`}>
              <li><Link to="/legal" className="text-gray-400 hover:text-white text-sm md:text-base">Legal</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm md:text-base">Privacy Policy</Link></li>
              <li><Link to="/press-kit" className="text-gray-400 hover:text-white text-sm md:text-base">Press Kit</Link></li>
              <li><Link to="/blog/future-legal-tech" className="text-gray-400 hover:text-white text-sm md:text-base">Future Legal Tech</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="mb-6 lg:mb-0 lg:max-w-[220px] w-full md:w-auto">
            <div 
              className="flex justify-between items-center border-b border-gray-700 pb-2 cursor-pointer lg:cursor-default"
              onClick={() => toggleSection('contact')}
            >
              <h3 className="text-base font-medium">Contact</h3>
              <span className="lg:hidden">{openSection === 'contact' ? '−' : '+'}</span>
            </div>
            <ul className={`mt-3 space-y-3 ${openSection === 'contact' || isDesktop ? 'block' : 'hidden'}`}>
              <li className="flex items-start">
                <span className="text-gray-400 font-medium text-sm md:text-base min-w-[70px]">Sales:</span>
                <div className="ml-1">
                  <a href="mailto:sales@lawsuites.com" className="text-gray-400 hover:text-white block text-sm md:text-base">
                    sales@lawsuites.com
                  </a>
                  <span className="text-gray-400 text-sm md:text-base">+91 98765 43210</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 font-medium text-sm md:text-base min-w-[70px]">Support:</span>
                <div className="ml-1">
                  <a href="mailto:support@lawsuites.com" className="text-gray-400 hover:text-white block text-sm md:text-base">
                    support@lawsuites.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-gray-800">
          <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-0">
            Copyright © {new Date().getFullYear()} Counsel AI Corporation. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/social/x" className="text-gray-400 hover:text-white text-sm md:text-base">
              <span className="ml-1">X</span>
            </Link>
            <Link to="/social/linkedin" className="text-gray-400 hover:text-white text-sm md:text-base">
              <span className="ml-1">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;