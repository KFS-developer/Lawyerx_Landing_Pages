import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/FutureLegalTech.style.css';

const FutureLegalTechPage = () => {
  const heroSectionRef = useRef(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Handle navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial call to set correct state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="future-legal-tech-page">
      <Navbar heroSectionRef={heroSectionRef} />

      {/* Hero Section with Grid Background */}
      <section className="relative">
        <div className="grid-background">
          <div className="grid-floor"></div>
          <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">The Future of<br />Legal Technology</h1>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <div className="blog-card">
              <img src="/img/blog1.webp" alt="AI in Legal Practice" className="w-full" />
              <div className="content">
                <p className="date">March 15, 2023</p>
                <h3>How AI is Transforming Legal Practice</h3>
                <p>Explore how artificial intelligence is revolutionizing the legal industry, from document review to predictive analytics and beyond.</p>
                <div>
                  <Link to="/blog/ai-legal-practice" className="read-more">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="blog-card">
              <img src="/img/securitymain.webp" alt="Legal Data Security" className="w-full" />
              <div className="content">
                <p className="date">April 2, 2023</p>
                <h3>The Importance of Data Security in Legal Tech</h3>
                <p>Learn about the critical role of data security in legal technology and how firms can protect sensitive client information.</p>
                <div>
                  <Link to="/blog" className="read-more">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="blog-card">
              <img src="/img/lawyerimage.webp" alt="Future of Legal Profession" className="w-full" />
              <div className="content">
                <p className="date">May 10, 2023</p>
                <h3>The Future of the Legal Profession</h3>
                <p>Discover how technology is reshaping the legal profession and what skills lawyers will need to thrive in the digital age.</p>
                <div>
                  <Link to="/blog" className="read-more">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row px-4 sm:px-8 md:px-20 justify-between items-center py-10 sm:py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-0 text-center md:text-left">Unlock Professional Class AI for Your Firm</h2>
        <Link to="/register" className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-gray-200 transition duration-300 text-sm sm:text-base">Request a Demo</Link>
      </div>

      <Footer />
    </div>
  );
};

export default FutureLegalTechPage;