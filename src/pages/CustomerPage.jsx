import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/CustomerPage.style.css';

const CustomerPage = () => {
  const [isMarqueeHovered, setIsMarqueeHovered] = useState(false);
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

  // Customer logos for the marquee
  const customerLogos = [
    { name: 'Company 1', src: '/img/company1.svg' },
    { name: 'Company 2', src: '/img/company2.svg' },
    { name: 'Company 3', src: '/img/company3.svg' },
    { name: 'Company 4', src: '/img/company4.svg' },
    { name: 'Company 5', src: '/img/company5.svg' },
    { name: 'Company 6', src: '/img/company6.svg' },
  ];

  // Customer stories data
  const customerStories = [
    {
      id: 1,
      name: 'Macfarlanes',
      logo: '/img/customer1.svg',
      title: 'Macfarlanes: Pioneering the Future of Legal Practice and Client Service with AI',
      link: '/macfarlanes'
    },
    {
      id: 2,
      name: 'Bridgewater',
      logo: '/img/customer2.svg',
      title: 'How Bridgewater Accelerates Legal Workflows Using Harvey',
      link: '#'
    },
    {
      id: 3,
      name: 'Adecco Group',
      logo: '/img/customer3.svg',
      title: 'The Future of Legal Work: How Harvey is Driving The Adecco Group Forward',
      link: '#'
    },
    {
      id: 4,
      name: 'Allen & Overy',
      logo: '/img/customer4.svg',
      title: 'Allen & Overy: Transforming Legal Services with AI-Powered Solutions',
      link: '#'
    },
    {
      id: 5,
      name: 'PwC',
      logo: '/img/customer5.svg',
      title: 'PwC: Revolutionizing Legal Advisory with Harvey\'s AI Technology',
      link: '#'
    },
    {
      id: 6,
      name: 'Latham & Watkins',
      logo: '/img/customer6.svg',
      title: 'Latham & Watkins: Enhancing Legal Excellence Through AI Innovation',
      link: '#'
    },
  ];

  // Filter categories
  const filterCategories = {
    useCase: ['Corporate', 'Litigation', 'Arbitration', 'Tax', 'Privacy & IP', 'Compliance & Regulatory'],
    organizationType: ['In-House Legal Team', 'Large Law Firm', 'Mid-Sized / Boutique Law Firm', 'Consulting', 'Investment Management'],
    location: ['Global', 'Americas', 'EMEA', 'APAC']
  };

  // Building together logos
  const buildingTogetherLogos = [
    { name: 'Bridgewater', type: 'image', src: '/img/customer2.svg' },
    { name: 'KKR', type: 'text' },
    { name: 'T', type: 'text' },
    { name: 'Bayer', type: 'text' },
    { name: 'Orrick', type: 'text' },
    { name: 'Dentons', type: 'text' },
    { name: 'A&O Shearman', type: 'text' },
    { name: 'O\'Melveny', type: 'text' },
  ];

  // Stats data
  const stats = [
    { value: '517', label: 'Leading law firms and enterprises' },
    { value: '40', label: 'of AmLaw 100 Firms on Harvey' },
    { value: '54k+', label: 'Lawyers using Harvey' },
  ];

  return (
    <div className="customer-page bg-[#0f0e0d] text-white">
      <Navbar heroSectionRef={heroSectionRef} />

      <main>
        {/* Hero Section */}
        <section className="hero-section px-4 sm:px-6 md:px-12 pt-16 sm:pt-20 md:pt-24">
          <div className="hero-content max-w-4xl mx-auto text-center mb-6 sm:mb-8">
            <span className="text-base sm:text-lg md:text-xl text-gray-400 mb-2 sm:mb-4 block">Customers</span>
            <h1 className="text-3xl sm:text-5xl md:text-4xl lg:text-6xl font-medium mb-4 sm:mb-6">Built by and for the<br className="hidden sm:inline" />World's Best Firms</h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 mx-auto w-full sm:w-4/5 md:w-3/4">Discover how leading organizations work with Harvey to innovate and drive success.</p>
            <div className="flex justify-center mb-6 sm:mb-8">
              <Link to="/register" className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-gray-200 transition duration-300 text-center text-sm sm:text-base">Request a Demo</Link>
            </div>
          </div>

          {/* Customer Logos Marquee */}
          <div
            className="marquee-container overflow-hidden w-full py-4 sm:py-6 md:py-8"
            onMouseEnter={() => setIsMarqueeHovered(true)}
            onMouseLeave={() => setIsMarqueeHovered(false)}
          >
            <div className={`marquee-content flex ${isMarqueeHovered ? 'paused' : ''}`}>
              {/* First set of logos */}
              {customerLogos.map((logo, index) => (
                <img
                  key={`logo-1-${index}`}
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 sm:h-12 md:h-16 lg:h-20 customer-logo mx-4 sm:mx-8 md:mx-12"
                />
              ))}

              {/* Duplicate logos for seamless loop */}
              {customerLogos.map((logo, index) => (
                <img
                  key={`logo-2-${index}`}
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 sm:h-12 md:h-16 lg:h-20 customer-logo mx-4 sm:mx-8 md:mx-12"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Customer Stories Section */}
        <section className="py-6 sm:py-8 md:py-10 lg:py-24 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6">Customer Stories</h2>

            {/* Filter Options */}
            <div className="mb-4 sm:mb-6">
              {/* Use Case Filter */}
              <div className="mb-3 sm:mb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h3 className="text-base sm:text-lg font-medium mb-2 md:mb-0">Use Case</h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {filterCategories.useCase.map((category, index) => (
                      <button
                        key={`usecase-${index}`}
                        className="px-2 sm:px-3 py-1 rounded-full border border-gray-600 hover:bg-gray-800 transition text-xs"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Organization Type Filter */}
              <div className="mb-3 sm:mb-4 border-t border-gray-800 pt-3 sm:pt-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h3 className="text-base sm:text-lg font-medium mb-2 md:mb-0">Organization Type</h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {filterCategories.organizationType.map((category, index) => (
                      <button
                        key={`orgtype-${index}`}
                        className="px-2 sm:px-3 py-1 rounded-full border border-gray-600 hover:bg-gray-800 transition text-xs"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Location Filter */}
              <div className="border-t border-gray-800 pt-3 sm:pt-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h3 className="text-base sm:text-lg font-medium mb-2 md:mb-0">Location</h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {filterCategories.location.map((category, index) => (
                      <button
                        key={`location-${index}`}
                        className="px-2 sm:px-3 py-1 rounded-full border border-gray-600 hover:bg-gray-800 transition text-xs"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Story Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto my-8 sm:my-12 md:my-16 lg:my-20">
              {customerStories.map((story) => (
                <Link key={story.id} to={story.link} className="block cursor-pointer">
                  <div className="bg-[#111111] rounded-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                    <div className="h-40 sm:h-44 md:h-48 lg:h-52 overflow-hidden flex items-center justify-center bg-[#1a1a1a]">
                      <img src={story.logo} alt={story.name} className="w-3/4 h-1/2 object-contain" />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">{story.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quantifiable Impact Section */}
        <section className="py-10 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16">Quantifiable Impact</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div key={`stat-${index}`} className="text-center border-r border-gray-800 mb-6 md:mb-0">
                  <p className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2 sm:mb-4">{stat.value}</p>
                  <p className="text-base sm:text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Building Together Section */}
        <section className="py-10 sm:py-12 md:py-16 bg-[#0f0e0d]">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16">Building Together</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
              {buildingTogetherLogos.map((logo, index) => (
                <div key={`building-${index}`} className="bg-[#1a1a1a] p-4 sm:p-6 md:p-8 flex items-center justify-center h-36 sm:h-44 md:h-52">
                  {logo.type === 'image' ? (
                    <img src={logo.src} alt={logo.name} className="h-8 sm:h-10 md:h-12 opacity-70" />
                  ) : (
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-500">{logo.name}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <div className="flex flex-col md:flex-row px-4 sm:px-8 md:px-20 justify-between items-center py-10 sm:py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-0 text-center md:text-left">Unlock Professional Class AI for Your Firm</h2>
        <Link to="/register" className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-gray-200 transition duration-300 text-sm sm:text-base">Request a Demo</Link>
      </div>

      <Footer />
    </div>
  );
};

export default CustomerPage;