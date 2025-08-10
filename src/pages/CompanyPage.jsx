import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/CompanyPage.style.css';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const CompanyPage = () => {
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

  const investors = [
    { name: 'SEQUOIA', logo: '/img/sequoia.webp', type: 'text' },
    { name: 'KKR', logo: '/img/kkr.webp', type: 'text' },
    { name: 'T', logo: '/img/t.webp', type: 'text' },
    { name: 'BAYER', logo: '/img/bayer.webp', type: 'image' },
    { name: 'ORRICK', logo: '/img/orrick.webp', type: 'text' },
    { name: 'DENTONS', logo: '/img/dentons.webp', type: 'image' }
  ];

  return (
    <div className="company-page">
      <Navbar heroSectionRef={heroSectionRef} />

      <main className="company-main">
        {/* Hero Section */}
        <section className="hero-section pt-24 sm:pt-28 lg:pt-48 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <p className="text-center text-xs sm:text-base tracking-wide mb-3 sm:mb-4">Company</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium text-center mb-4 sm:mb-6">Accelerating<br className="hidden sm:inline" />Professional Mastery</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-2">Blending deep industry knowledge with<br className="hidden sm:inline" />cutting-edge innovation, LawyerX is built to<br className="hidden sm:inline" />help professionals develop expertise, faster.</p>
              <Link to="/register" className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-gray-200 transition duration-300 inline-flex items-center mt-6 sm:mt-8">Request a Demo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section className="mb-8 sm:mb-10 md:mb-12 px-4 sm:px-8 md:px-16 lg:px-28">
          <img src="/img/company1.webp" alt="Banner Image" className="w-full h-auto" />
          {/* Team Members Info Bar */}
          <div className="my-2 sm:my-3">
            <div className="flex flex-wrap text-xs sm:text-sm text-gray-400">
              <div className="mr-4 sm:mr-6 mb-3 sm:mb-4">Nikhil Patel <span className="text-white">Product</span></div>
              <div className="mr-4 sm:mr-6 mb-3 sm:mb-4">Beth Lebens <span className="text-white">Legal Research</span></div>
              <div className="mr-4 sm:mr-6 mb-3 sm:mb-4">Lauren Oh <span className="text-white">Product</span></div>
            </div>
          </div>
        </section>

        {/* Team Section with Featured Members */}
        <section className="py-8 sm:py-12 md:py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Combining Legal<br className="hidden sm:inline" />and AI Expertise</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-6xl mx-auto">
              {/* First Featured Team Member */}
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 mx-auto md:mx-0" style={{ maxWidth: "200px" }}>
                  <img src="/img/profile1.webp" alt="Winston Weinberg" className="w-full h-auto rounded-md" />
                </div>
                <div className="w-full md:w-3/5 pl-0 md:pl-6 mt-4 md:mt-0 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-medium mb-1 sm:mb-2">Winston Weinberg</h3>
                  <p className="text-base sm:text-lg mb-1 sm:mb-2">CEO & Co-Founder</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Past: Litigation at O'Melveny</p>
                  <div className="flex mt-3 sm:mt-4 space-x-3 justify-center md:justify-start">
                    <Link to="/team/winston/linkedin" className="text-gray-400 hover:text-white">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Link>
                    <Link to="/team/winston/twitter" className="text-gray-400 hover:text-white">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Second Featured Team Member */}
              <div className="flex flex-col md:flex-row mt-8 md:mt-0">
                <div className="w-full md:w-2/5 mx-auto md:mx-0" style={{ maxWidth: "200px" }}>
                  <img src="/img/profile2.webp" alt="Gabe Pereyra" className="w-full h-auto rounded-md" />
                </div>
                <div className="w-full md:w-3/5 pl-0 md:pl-6 mt-4 md:mt-0 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-medium mb-1 sm:mb-2">Gabe Pereyra</h3>
                  <p className="text-base sm:text-lg mb-1 sm:mb-2">President & Co-Founder</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Past: Research Scientist at DeepMind</p>
                  <div className="flex mt-3 sm:mt-4 space-x-3 justify-center md:justify-start">
                    <Link to="/team/winston/linkedin" className="text-gray-400 hover:text-white">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Link>
                    <Link to="/team/winston/twitter" className="text-gray-400 hover:text-white">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="py-6 sm:py-8 md:py-10 text-white px-4 sm:px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="mb-4 sm:mb-0">
              <img src="/img/member1.webp" className="w-full h-auto rounded-lg object-contain" alt="Team member" />
            </div>
            <div className="mb-4 sm:mb-0">
              <img src="/img/member2.webp" className="w-full h-auto rounded-lg" alt="Team member" />
            </div>
            <div className="mb-4 sm:mb-0">
              <img src="/img/member3.webp" className="w-full h-auto rounded-lg" alt="Team member" />
            </div>
            <div>
              <img src="/img/member4.webp" className="w-full h-auto sm:h-[350px] md:h-[400px] lg:h-[420px] rounded-lg object-cover" alt="" />
            </div>
          </div>
        </section>

        {/* Investors Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-[#111111]">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 lg:mb-16">Supported by
              <span className="block mt-1 sm:mt-2">World-Class Investors</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto text-center mb-8 sm:mb-10">
              We're backed by leading venture capital firms and angel investors who share our vision for the future of legal technology.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-7xl mx-auto">
              {investors.map((investor, index) => (
                <div key={index} className="bg-[#1a1a1a] p-4 sm:p-6 md:p-8 flex items-center justify-center h-28 sm:h-36 md:h-44 lg:h-52 rounded-lg">
                  {investor.type === 'text' ? (
                    <p className={`${investor.name.length <= 1 ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl' : 'text-lg sm:text-xl md:text-2xl lg:text-3xl'} font-bold text-gray-500`}>
                      {investor.name}
                    </p>
                  ) : (
                    <img
                      src={investor.logo}
                      alt={investor.name}
                      className="h-6 sm:h-8 md:h-10 lg:h-12 opacity-70 hover:opacity-100 transition-all duration-300"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="py-6 sm:py-8 md:py-10 text-white px-4 sm:px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="mb-4 sm:mb-0">
              <img src="/img/member1.webp" className="w-full h-auto rounded-lg object-contain" alt="Team member" />
            </div>
            <div className="mb-4 sm:mb-0">
              <img src="/img/member2.webp" className="w-full h-auto rounded-lg" alt="Team member" />
            </div>
            <div className="mb-4 sm:mb-0">
              <img src="/img/member3.webp" className="w-full h-auto rounded-lg" alt="Team member" />
            </div>
            <div>
              <img src="/img/member4.webp" className="w-full h-auto sm:h-[350px] md:h-[400px] lg:h-[420px] rounded-lg object-cover" alt="" />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16 lg:px-28">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">What We Offer</h2>
                <p className="text-base sm:text-lg text-gray-300 mb-10">
                  Join our team and help shape the future of legal technology.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start text-justify">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-gray-800 bg-opacity-20 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Meaningful Work</h3>
                      <p className="text-gray-300">Build technology that makes a real difference in the legal industry and improves access to justice.</p>
                    </div>
                  </div>

                  <div className="flex items-start text-justify">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-gray-800 bg-opacity-20 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Growth & Development</h3>
                      <p className="text-gray-300">Continuous learning opportunities and career advancement in a rapidly evolving field.</p>
                    </div>
                  </div>

                  <div className="flex items-start text-justify">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-gray-800 bg-opacity-20 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
                      <p className="text-gray-300">Work with a diverse team of experts from both legal and technology backgrounds.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <Link to="/"
                    className='inline-flex bg-white text-black hover:bg-gray-700 px-6 py-3 rounded-md font-medium transition duration-300 items-center'
                  >
                    View Open Positions
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/img/lawyerimage.webp"
                  alt="LawyerX Office"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-800 rounded-lg opacity-50 -z-10"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CompanyPage;