import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/ResourcesPage.style.css';

const ResourcesPage = () => {
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
    <div className="resources-page">
      <Navbar heroSectionRef={heroSectionRef} />

      {/* Hero Section */}
      <section ref={heroSectionRef} className="hero-section px-6 md:px-12 pt-24 pb-8 md:pb-16">
        <div className="hero-content max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-medium mb-6">Resources <span className="block">& Knowledge</span></h1>
          <p className="text-lg mb-8 mx-auto w-3/4">Everything you need to get the most out of LawyerX, from expert articles to step-by-step guides and success stories.</p>
          <div className="flex justify-center mb-8">
            <Link to="/register" className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition duration-300 text-center">Explore All</Link>
          </div>
        </div>

        <div className="hero-image-container">
          <img src="/img/lawyerimage.webp" alt="Resources and Knowledge" className="hero-image mx-auto" id="hero-image" />
        </div>
      </section>

      {/* Resources Grid */}
      <section className="px-6 md:px-16 lg:px-24 pb-24 pt-16 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Blog Card */}
          <div className="resource-card overflow-hidden rounded-lg bg-[#111111] flex flex-col h-full">
            <div className="p-6 flex flex-col h-full">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-5a2 2 0 00-2 2v12a2 2 0 002 2h5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Blog</h3>
              <p className="text-gray-400 mb-6 flex-grow">Expert articles on legal technology, productivity tips, and best practices.</p>
              <Link to="/blog" className="inline-flex items-center text-white hover:text-gray-300 transition-colors">
                View Articles
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Help Center Card */}
          <div className="resource-card overflow-hidden rounded-lg bg-[#111111] flex flex-col h-full">
            <div className="p-6 flex flex-col h-full">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Help Center</h3>
              <p className="text-gray-400 mb-6 flex-grow">Step-by-step guides, video tutorials, and troubleshooting FAQs.</p>
              <Link to="#" className="inline-flex items-center text-white hover:text-gray-300 transition-colors">
                Get Help
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Case Studies Card */}
          <div className="resource-card overflow-hidden rounded-lg bg-[#111111] flex flex-col h-full">
            <div className="p-6 flex flex-col h-full">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Case Studies</h3>
              <p className="text-gray-400 mb-6 flex-grow">In-depth success stories showcasing ROI and efficiency gains.</p>
              <Link to="#" className="inline-flex items-center text-white hover:text-gray-300 transition-colors">
                Read Success Stories
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Webinars Card */}
          <div className="resource-card overflow-hidden rounded-lg bg-[#111111] flex flex-col h-full">
            <div className="p-6 flex flex-col h-full">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Webinars</h3>
              <p className="text-gray-400 mb-6 flex-grow">Live demos and Q&A sessions with product experts.</p>
              <Link to="#" className="inline-flex items-center text-white hover:text-gray-300 transition-colors">
                Join Upcoming Webinars
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="px-6 md:px-16 lg:px-24 py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Resource 1 */}
            <div className="bg-[#0f0e0d] border border-gray-800 rounded-lg overflow-hidden hover:border-white transition-colors">
              <div className="relative">
                <img src="/img/img1.png" alt="Getting Started with LawyerX" className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 text-xs font-medium px-2 py-1 rounded">
                  Guide
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Getting Started with LawyerX</h3>
                <p className="text-gray-400 mb-4">A comprehensive guide to setting up your LawyerX workspace for maximum productivity.</p>
                <Link to="#" className="inline-flex items-center text-white hover:text-gray-300 transition-colors">
                  Read Guide
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Featured Resource 2 */}
            <div className="bg-[#0f0e0d] border border-gray-800 rounded-lg overflow-hidden hover:border-white transition-colors">
              <div className="relative">
                <img src="/img/img2.png" alt="AI for Legal Research" className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-white text-black text-xs font-medium px-2 py-1 rounded">
                  Webinar
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">AI for Legal Research</h3>
                <p className="text-gray-400 mb-4">Learn how to leverage LawyerX's AI capabilities to streamline your legal research process.</p>
                <Link to="#" className="inline-flex items-center text-white hover:text-gray-300 transition-colors">
                  Watch Webinar
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Featured Resource 3 */}
            <div className="bg-[#0f0e0d] border border-gray-800 rounded-lg overflow-hidden hover:border-white transition-colors">
              <div className="relative">
                <img src="/img/img3.png" alt="Case Study: Smith & Associates" className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-white text-black text-xs font-medium px-2 py-1 rounded">
                  Case Study
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Case Study: Smith & Associates</h3>
                <p className="text-gray-400 mb-4">How a mid-sized law firm increased billable hours by 30% with LawyerX automation.</p>
                <Link to="#" className="inline-flex items-center text-white hover:text-gray-300 transition-colors">
                  Read Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-gray-400 mb-8">Subscribe to our newsletter to receive the latest resources, product updates, and industry insights.</p>

          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input type="email" placeholder="Your email address" className="px-4 py-3 bg-[#111111] border border-gray-700 rounded-md focus:outline-none focus:border-white text-white w-full md:w-auto md:flex-grow max-w-md" />
            <button type="submit" className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors w-full md:w-auto">Subscribe</button>
          </form>

          <p className="text-xs text-gray-500 mt-4">By subscribing, you agree to our Privacy Policy and consent to receive updates from LawyerX.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourcesPage;