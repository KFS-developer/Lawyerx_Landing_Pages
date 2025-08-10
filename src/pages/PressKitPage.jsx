import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/PressKitPage.style.css';

const PressKitPage = () => {
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
    <div className="press-kit-page">
      <Navbar heroSectionRef={heroSectionRef} />

      {/* Press Kit Header */}
      <header className="press-kit-header pt-32 pb-8 px-6 md:px-16 lg:px-24 text-center">
        <p className="text-sm text-gray-400 mb-2">Press Kit</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4 w-full lg:max-w-2xl mx-auto">LawyerX Brand Guidelines</h1>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto mb-8 text-justify">Resources for maintaining a uniform and professional presentation of the LawyerX<br />brand. For inquiries, contact press@lawyerx.ai.</p>
        <Link to="/press-kit/assets" className="inline-block bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors">Download Brand Assets</Link>
      </header>

      {/* About LawyerX Section */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">About LawyerX</h2>
          <p className="text-gray-400 text-sm leading-relaxed text-justify">
            LawyerX is a cutting-edge AI platform for legal professionals that produces accurate and reliable outputs in areas including contract analysis, due diligence, compliance, and litigation to drive efficiency and value. Global law firms and Fortune 500 enterprises around the world use LawyerX to enable their legal teams to work more efficiently and effectively. Founded by former OpenAI, Meta, and Google engineers and lawyers, LawyerX serves over 15,000 legal professionals in 54+ countries.
          </p>
        </div>
      </section>

      {/* What LawyerX Does Section */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">What LawyerX Does</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-3 text-justify">
            LawyerX's AI platform for legal includes the following tools:
          </p>
          <ul className="text-gray-400 text-sm leading-relaxed space-y-2 text-justify">
            <li><span className="font-semibold">Assistant</span> — Draft, strategize, and synthesize across user datasets.</li>
            <li><span className="font-semibold">Vault</span> — Collaborate on large-scale projects with secure document storage, retrieval, and analysis across multiple documents and business knowledge.</li>
            <li><span className="font-semibold">Workflow</span> — Work with AI systems specifically designed to solve complex, recurring legal tasks.</li>
          </ul>
        </div>
      </section>

      {/* How LawyerX Works Section */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">How LawyerX Works</h2>
          <ul className="text-gray-400 text-sm leading-relaxed space-y-4 text-justify">
            <li>LawyerX uses domain expertise to connect professional processes into high-quality outputs that are ready to use with each request.</li>
            <li>Each user request is routed to a cascading series of LLMs tuned for legal synthesis, RAG systems that incorporate public or user-provided data, and powerful reasoning models like of that help orchestrate the work end to end.</li>
            <li>LawyerX partners with the leading foundational model and cloud providers to serve secure and reliable infrastructure for all users and their data.</li>
          </ul>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Logotype */}
            <div className="bg-[#111111] p-8 rounded-lg">
              <div className="logo-box mb-8 bg-white flex items-center justify-center p-32">
                <h2 className="text-5xl text-black font-bold">LawyerX</h2>
              </div>
              <h3 className="text-xl font-bold mb-4">Logotype</h3>
              <p className="text-gray-400 mb-6 text-justify">The LawyerX logotype is the preferred visual identifier for all partnership announcements, press materials, and media references.</p>
              <Link to="/press-kit/logotype" className="download-btn inline-block px-4 py-2 rounded-md text-sm font-medium">Download Logotype</Link>
            </div>

            {/* Logomark */}
            <div className="bg-[#111111] p-8 rounded-lg">
              <div className="logo-box mb-8 bg-white flex justify-center items-center p-32">
                <div className="text-black text-5xl font-bold h-16 w-16 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="64" height="64" fill="currentColor">
                    <rect width="24" height="24" fill="black" />
                    <text x="6" y="17" fontSize="14" fontWeight="bold" fill="white">L</text>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Logomark</h3>
              <p className="text-gray-400 mb-6 text-justify">The LawyerX logomark is reserved for instances where space constraints necessitate a more compact visual identifier. It should only be used as an alternative to the full logotype.</p>
              <Link to="/press-kit/logomark" className="download-btn inline-block px-4 py-2 rounded-md text-sm font-medium">Download Logomark</Link>
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

export default PressKitPage;