import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/NewsPage.style.css';

const NewsPage = () => {
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
    <div className="bg-[#0f0e0d] text-white news-page">
      <Navbar heroSectionRef={heroSectionRef} />

      {/* Newsroom Header */}
      <header className="pt-32 pb-16 px-6 md:px-16 lg:px-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Newsroom</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Press releases and partnership announcements.</p>
      </header>

      {/* Featured News */}
      <section className="px-6 md:px-16 lg:px-24 pb-16">
        <div className="rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Left Side - Featured Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <img src="/img/img1.png" alt="LexisNexis and Harvey Announce Strategic Alliance" className="w-full rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold">Harvey</span>
                    <span className="text-2xl">/</span>
                    <img src="/img/customer1.svg" alt="LexisNexis" className="h-8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">LexisNexis and Harvey Announce Strategic Alliance</h2>
              <p className="text-gray-400 mb-8">
                LexisNexis Legal & Professional, a leading provider of information and analytics, and Harvey, the generative AI platform for the legal industry, today announced a strategic alliance to deliver innovative AI solutions to legal professionals.
              </p>
              <Link to="/news/lexisnexis-harvey-alliance" className="inline-block bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors w-fit">
                Read the full announcement
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <main className="px-6 md:px-16 lg:px-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* News Card 1 */}
          <div className="news-card overflow-hidden rounded-lg bg-[#1a1a1a] transition-colors duration-300">
            <Link to="/news/bredin-prat-renewal" className="block p-6">
              <div className="mb-6">
                <img src="/img/company1.svg" alt="Bredin Prat" className="h-8" />
              </div>
              <h3 className="text-lg font-bold mb-3">Bredin Prat Renews Firm-Wide with Harvey</h3>
              <p className="text-gray-400 mb-4">Bredin Prat, a leading French law firm, has renewed its firm-wide agreement with Harvey to provide AI-powered legal solutions to its attorneys.</p>
            </Link>
          </div>

          {/* News Card 2 */}
          <div className="news-card overflow-hidden rounded-lg bg-[#1a1a1a] transition-colors duration-300">
            <Link to="/news/davies-ward-partnership" className="block p-6">
              <div className="mb-6">
                <img src="/img/company2.svg" alt="Davies Ward Phillips & Vineberg LLP" className="h-8" />
              </div>
              <h3 className="text-lg font-bold mb-3">Davies Ward Phillips & Vineberg LLP Goes Firm-Wide with Harvey</h3>
              <p className="text-gray-400 mb-4">Davies Ward Phillips & Vineberg LLP, a leading Canadian law firm, has implemented Harvey's AI platform across all practice areas.</p>
            </Link>
          </div>

          {/* News Card 3 */}
          <div className="news-card overflow-hidden rounded-lg bg-[#1a1a1a] transition-colors duration-300">
            <Link to="/news/paul-weiss-partnership" className="block p-6">
              <div className="mb-6">
                <img src="/img/company3.svg" alt="Paul Weiss" className="h-8" />
              </div>
              <h3 className="text-lg font-bold mb-3">Paul Weiss Partners with Harvey on New AI Workflows Innovation</h3>
              <p className="text-gray-400 mb-4">Paul, Weiss, Rifkind, Wharton & Garrison LLP partners with Harvey to develop innovative AI workflows for legal practice.</p>
            </Link>
          </div>

          {/* News Card 4 */}
          <div className="news-card overflow-hidden rounded-lg bg-[#1a1a1a] transition-colors duration-300">
            <Link to="/news/lexisnexis-harvey-alliance" className="block p-6">
              <div className="mb-6">
                <img src="/img/company4.svg" alt="iManage" className="h-8" />
              </div>
              <h3 className="text-lg font-bold mb-3">Harvey Announces Technology Partnership with iManage</h3>
              <p className="text-gray-400 mb-4">Harvey and iManage announce a technology partnership to integrate Harvey's AI capabilities with iManage's document management system.</p>
            </Link>
          </div>

          {/* News Card 5 */}
          <div className="news-card overflow-hidden rounded-lg bg-[#1a1a1a] transition-colors duration-300">
            <Link to="/news/allen-overy-partnership" className="block p-6">
              <div className="mb-6">
                <img src="/img/company5.svg" alt="Comcast" className="h-8" />
              </div>
              <h3 className="text-lg font-bold mb-3">Comcast Adopts Harvey for Global Legal Teams</h3>
              <p className="text-gray-400 mb-4">Comcast Corporation has selected Harvey's AI platform to enhance productivity and efficiency across its global legal departments.</p>
            </Link>
          </div>

          {/* News Card 6 */}
          <div className="news-card overflow-hidden rounded-lg bg-[#1a1a1a] transition-colors duration-300">
            <Link to="/news/verizon-adoption" className="block p-6">
              <div className="mb-6">
                <img src="/img/company6.svg" alt="Verizon" className="h-8" />
              </div>
              <h3 className="text-lg font-bold mb-3">Verizon adopts Harvey for in-house legal</h3>
              <p className="text-gray-400 mb-4">Verizon has implemented Harvey's AI platform to streamline legal operations and enhance productivity for its in-house legal team.</p>
            </Link>
          </div>

          {/* News Card 7 */}
          <div className="news-card overflow-hidden rounded-lg bg-[#1a1a1a] transition-colors duration-300">
            <Link to="/news/series-d-funding" className="block p-6">
              <div className="mb-6">
                <img src="/img/customer1.svg" alt="Sequoia" className="h-8" />
              </div>
              <h3 className="text-lg font-bold mb-3">Harvey Raises $300M Series D Led by Sequoia</h3>
              <p className="text-gray-400 mb-4">Harvey announces the completion of its Series D funding round, raising $300 million led by Sequoia Capital to accelerate AI innovation in legal tech.</p>
            </Link>
          </div>

          {/* News Card 8 */}
          <div className="news-card overflow-hidden rounded-lg bg-[#1a1a1a] transition-colors duration-300">
            <Link to="/news/microsoft-integration" className="block p-6">
              <div className="mb-6">
                <img src="/img/customer2.svg" alt="Microsoft" className="h-8" />
              </div>
              <h3 className="text-lg font-bold mb-3">Harvey expands collaboration with Microsoft with new integrations</h3>
              <p className="text-gray-400 mb-4">Harvey and Microsoft announce expanded collaboration with new integrations between Harvey's AI platform and Microsoft 365 applications.</p>
            </Link>
          </div>

          {/* News Card 9 */}
          <div className="news-card overflow-hidden rounded-lg bg-[#1a1a1a] transition-colors duration-300">
            <Link to="/news/cuatrecasas-integration" className="block p-6">
              <div className="mb-6">
                <img src="/img/customer3.svg" alt="Cuatrecasas" className="h-8" />
              </div>
              <h3 className="text-lg font-bold mb-3">Connecting Cuatrecasas' knowledge base to Harvey</h3>
              <p className="text-gray-400 mb-4">Cuatrecasas, a leading international law firm, integrates its knowledge management system with Harvey's AI platform to enhance legal services.</p>
            </Link>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-12">
          <Link to="/news?page=1" className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black font-medium">1</Link>
          <Link to="/news?page=2" className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-white">2</Link>
          <Link to="/news?page=3" className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-white">3</Link>
          <Link to="/news?page=4" className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-white">4</Link>
          <Link to="/news?page=5" className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-white">5</Link>
          <Link to="/news?page=2" className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </main>

      <div className="flex flex-col md:flex-row px-4 sm:px-8 md:px-20 justify-between items-center py-10 sm:py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-0 text-center md:text-left">Unlock Professional Class AI for Your Firm</h2>
        <Link to="/register" className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-gray-200 transition duration-300 text-sm sm:text-base">Request a Demo</Link>
      </div>

      <Footer />
    </div>
  );
};

export default NewsPage;