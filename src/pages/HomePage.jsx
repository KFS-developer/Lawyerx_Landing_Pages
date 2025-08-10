import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/HomePage.style.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// Import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

const HomePage = () => {
  const heroSectionRef = useRef(null);
  const sectionsRef = useRef([]);
  const [currentTab, setCurrentTab] = useState(0);
  
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      quote: "Law Suites has transformed how we manage our caseload. The document automation alone saves us hours every week.",
      name: "Sarah Johnson",
      position: "Partner, Johnson & Associates",
      image: "/img/testimonial3.webp"
    },
    {
      id: 2,
      quote: "The platform's intuitive design made adoption across our firm seamless. Our attorneys were up and running in days, not weeks.",
      name: "Michael Chen",
      position: "Managing Partner, Chen Legal Group",
      image: "/img/testimonial1.webp"
    },
    {
      id: 3,
      quote: "Client communication has never been easier. The portal gives our clients the transparency they've been asking for.",
      name: "Jennifer Williams",
      position: "Senior Counsel, Williams Law",
      image: "/img/testimonial2.webp"
    },
    {
      id: 4,
      quote: "The AI-powered legal research tool has dramatically reduced our research time and improved our case outcomes.",
      name: "Robert Davis",
      position: "Litigation Director, Davis & Partners",
      image: "/img/testimonial1.webp"
    },
    {
      id: 5,
      quote: "The case management system has streamlined our workflow and helped us stay organized even with our most complex cases.",
      name: "Elizabeth Taylor",
      position: "Managing Attorney, Taylor Legal",
      image: "/img/testimonial2.webp"
    },
    {
      id: 6,
      quote: "Since implementing this platform, our client satisfaction ratings have increased by 35%. The client portal is a game-changer.",
      name: "James Wilson",
      position: "Founding Partner, Wilson Law Group",
      image: "/img/testimonial3.webp"
    }
  ];

  // Function to check if element is in viewport
  const isInViewport = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  };

  // Handle scroll effects
  useEffect(() => {
    let scrollTimeout;
    const heroImage = document.getElementById('hero-image');

    const handleScroll = () => {
      // Apply zoom effect on hero image based on scroll position
      if (heroImage && heroSectionRef.current) {
        const currentScrollTop = window.scrollY;
        const heroBottom = heroSectionRef.current.offsetTop + heroSectionRef.current.offsetHeight;

        // Calculate how far we've scrolled into the hero section
        const scrollPercentage = Math.min(1, currentScrollTop / (heroBottom - heroSectionRef.current.offsetTop));

        // Apply zoom effect - start at 1 (normal size) and zoom in to 1.1 as we scroll
        const scale = 1 + (scrollPercentage * 0.1);
        heroImage.style.transform = `scale(${scale})`;
      }

      // Animate sections when they come into view
      sectionsRef.current.forEach(section => {
        if (section && isInViewport(section)) {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        }
      });
    };

    // Throttle scroll events for better performance
    const throttledScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          handleScroll();
          scrollTimeout = null;
        }, 10);
      }
    };

    // Initialize sections for animation
    const initSections = () => {
      sectionsRef.current = document.querySelectorAll('.section-transition');
      sectionsRef.current.forEach(section => {
        if (section) {
          section.style.opacity = '0';
          section.style.transform = 'translateY(20px)';
          section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }
      });

      // Initial call to set correct state
      handleScroll();
    };

    window.addEventListener('scroll', throttledScroll);

    // Initialize on component mount
    initSections();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (
    <div className="home-page">
      <Navbar heroSectionRef={heroSectionRef} />

      {/* Hero Section */}
      <section className="hero-section px-4 sm:px-6 md:px-12 pt-16 sm:pt-20 md:pt-24 lg:pt-40" ref={heroSectionRef}>
        <div className="hero-content max-w-4xl mx-auto text-center mb-6 sm:mb-8">
          <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 sm:mb-6">Empower Your Legal <span className="block">Practice with Law Suites</span></h1>
          <p className="hero-subheading text-base sm:text-lg mb-6 sm:mb-8 mx-auto w-full sm:w-4/5 md:w-3/4">Streamline your entire workflow—from client intake to case closure—with a single, secure cloud platform built by litigators for litigators.</p>
          <div className="flex justify-center mb-6 sm:mb-8">
            <Link to="/register" className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-gray-200 transition duration-300 text-center text-sm sm:text-base">Request a Demo</Link>
          </div>
        </div>

        <div className="hero-image-container">
          <img src="/img/lawyerimage.webp" alt="Professional Legal AI" className="hero-image mx-auto" id="hero-image" />
        </div>
      </section>

      {/* Industry Leaders Section with Marquee Effect */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 text-center my-12 sm:my-16 md:my-20 section-transition">
        <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Built for Industry Leaders</h2>
        {/* Single marquee row with dark background like reference image */}
        <div className="marquee-container overflow-hidden w-full py-6 sm:py-8">
          <div className="marquee-content flex">
            {/* First set of logos */}
            <img src="/img/company1.svg" alt="Company 1" className="h-8 sm:h-12 md:h-16 lg:h-20 opacity-80 mx-4 sm:mx-6 md:mx-10" />
            <img src="/img/company2.svg" alt="Company 2" className="h-8 sm:h-12 md:h-16 lg:h-20 opacity-80 mx-4 sm:mx-6 md:mx-10" />
            <img src="/img/company3.svg" alt="Company 3" className="h-8 sm:h-12 md:h-16 lg:h-20 opacity-80 mx-4 sm:mx-6 md:mx-10" />
            <img src="/img/company4.svg" alt="Company 4" className="h-8 sm:h-12 md:h-16 lg:h-20 opacity-80 mx-4 sm:mx-6 md:mx-10" />
            <img src="/img/company5.svg" alt="Company 5" className="h-8 sm:h-12 md:h-16 lg:h-20 opacity-80 mx-4 sm:mx-6 md:mx-10" />
            <img src="/img/company6.svg" alt="Company 6" className="h-8 sm:h-12 md:h-16 lg:h-20 opacity-80 mx-4 sm:mx-6 md:mx-10" />
            {/* Duplicate logos for seamless loop */}
            <img src="/img/company1.svg" alt="Company 1" className="h-8 sm:h-12 md:h-16 lg:h-20 opacity-80 mx-4 sm:mx-6 md:mx-10" />
            <img src="/img/company2.svg" alt="Company 2" className="h-8 sm:h-12 md:h-16 lg:h-20 opacity-80 mx-4 sm:mx-6 md:mx-10" />
            <img src="/img/company3.svg" alt="Company 3" className="h-8 sm:h-12 md:h-16 lg:h-20 opacity-80 mx-4 sm:mx-6 md:mx-10" />
            <img src="/img/company4.svg" alt="Company 4" className="h-8 sm:h-12 md:h-16 lg:h-20 opacity-80 mx-4 sm:mx-6 md:mx-10" />
            <img src="/img/company5.svg" alt="Company 5" className="h-8 sm:h-12 md:h-16 lg:h-20 opacity-80 mx-4 sm:mx-6 md:mx-10" />
            <img src="/img/company6.svg" alt="Company 6" className="h-8 sm:h-12 md:h-16 lg:h-20 opacity-80 mx-4 sm:mx-6 md:mx-10" />
            {/* Third set of logos for longer scroll */}
            <img src="/img/company1.svg" alt="Company 1" className="h-8 sm:h-12 md:h-16 lg:h-20 opacity-80 mx-4 sm:mx-6 md:mx-10" />
            <img src="/img/company2.svg" alt="Company 2" className="h-8 sm:h-12 md:h-16 lg:h-20 opacity-80 mx-4 sm:mx-6 md:mx-10" />
            <img src="/img/company3.svg" alt="Company 3" className="h-8 sm:h-12 md:h-16 lg:h-20 opacity-80 mx-4 sm:mx-6 md:mx-10" />
            <img src="/img/company4.svg" alt="Company 4" className="h-8 sm:h-12 md:h-16 lg:h-20 opacity-80 mx-4 sm:mx-6 md:mx-10" />
            <img src="/img/company5.svg" alt="Company 5" className="h-8 sm:h-12 md:h-16 lg:h-20 opacity-80 mx-4 sm:mx-6 md:mx-10" />
            <img src="/img/company6.svg" alt="Company 6" className="h-8 sm:h-12 md:h-16 lg:h-20 opacity-80 mx-4 sm:mx-6 md:mx-10" />
          </div>
        </div>

        <div className="mt-4 sm:mt-6">
          <Link to="/customers" className="text-gray-400 hover:text-white inline-flex items-center text-sm sm:text-base">See Customers <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></Link>
        </div>
      </section>

      {/* Platform Section */}
      <section className="px-4 sm:px-6 md:px-12 text-center section-transition">
        <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">Augment All of Your Work on</h2>
        <h2 className="section-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12">One Integrated, Secure Platform</h2>
      </section>

      {/* Feature Grid Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-28 section-transition">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Case Management Card */}
          <div className="bg-[#111111] p-6 sm:p-10 md:p-16 lg:p-20 rounded-xl">
            <div className="text-left h-full flex flex-col justify-center">
              <div className="space-y-3 sm:space-y-4">
                <span className="text-base sm:text-lg md:text-xl text-gray-400">Case Management</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2 sm:mb-4">Centralize Every Case</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-3 sm:mb-4">Centralize every case file—pleadings, correspondence, deadlines—in a structured folder system.</p>
                <ul className="text-gray-300 space-y-2 mb-4 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Client Intake Form:</strong> Customizable templates capture all necessary details upfront.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Milestone Tracker:</strong> Visual timeline with automated notifications for hearings, filings, and reviews.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Role Assignments:</strong> Delegate tasks to associates or paralegals and monitor progress in real time.</span>
                  </li>
                </ul>
                <Link to="/features/case-management" className="text-xs sm:text-sm text-gray-400 hover:text-white">Explore Case Management ›</Link>
              </div>
            </div>
          </div>

          {/* Case Management Image */}
          <div className="mt-4 md:mt-0">
            <img src="/img/img1.png" alt="Case Management" className="rounded-xl w-full h-auto" />
          </div>

          {/* Document Automation Image */}
          <div className="mt-4 md:mt-0 order-2 md:order-1">
            <img src="/img/img2.png" alt="Document Automation" className="rounded-xl w-full h-auto" />
          </div>

          {/* Document Automation Card */}
          <div className="bg-[#111111] p-6 sm:p-10 md:p-16 lg:p-20 rounded-xl order-1 md:order-2">
            <div className="text-left h-full flex flex-col justify-center">
              <div className="space-y-3 sm:space-y-4">
                <span className="text-base sm:text-lg md:text-xl text-gray-400">Document Automation</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2 sm:mb-4">Generate Court-Ready Filings</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-3 sm:mb-4">Generate court-ready filings with a click by leveraging dynamic templates and smart merge fields.</p>
                <ul className="text-gray-300 space-y-2 mb-4 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Template Library:</strong> Library of compliant templates for briefs, contracts, and affidavits.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Bulk Generation:</strong> Produce dozens of tailored documents at once—ideal for mass filings.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Version Control:</strong> Track edits, compare versions side by side, and revert changes as needed.</span>
                  </li>
                </ul>
                <Link to="/features/document-automation" className="text-xs sm:text-sm text-gray-400 hover:text-white">Explore Document Automation ›</Link>
              </div>
            </div>
          </div>

          {/* Calendar & Scheduling Card */}
          <div className="bg-[#111111] p-6 sm:p-10 md:p-16 lg:p-20 rounded-xl">
            <div className="text-left h-full flex flex-col justify-center">
              <div className="space-y-3 sm:space-y-4">
                <span className="text-base sm:text-lg md:text-xl text-gray-400">Calendar & Scheduling</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2 sm:mb-4">Never Miss A Deadline</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-3 sm:mb-4">Never miss a courtroom date or client meeting with a synchronized, shareable calendar.</p>
                <ul className="text-gray-300 space-y-2 mb-4 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Integrated Sync:</strong> Two-way sync with Google Calendar and Outlook.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Automated Reminders:</strong> Email, SMS, or in-app notifications sent 24 hrs and 1 hr before each event.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Conflict Detection:</strong> Real-time alerts for double-bookings or overlapping hearings.</span>
                  </li>
                </ul>
                <Link to="/features/calendar-scheduling" className="text-xs sm:text-sm text-gray-400 hover:text-white">Explore Calendar & Scheduling ›</Link>
              </div>
            </div>
          </div>

          {/* Calendar & Scheduling Image */}
          <div className="mt-4 md:mt-0">
            <img src="/img/img3.png" alt="Calendar & Scheduling" className="rounded-xl w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Reporting & Analytics Section */}
      <section className="py-16 px-6 md:px-28 section-transition">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Reporting & Analytics Image */}
          <div className="mt-4 md:mt-0 order-1 md:order-1">
            <img src="/img/img4.png" alt="Reporting & Analytics" className="rounded-xl w-full h-auto" />
          </div>

          {/* Reporting & Analytics Card */}
          <div className="bg-[#111111] p-6 sm:p-10 md:p-16 lg:p-20 rounded-xl order-2 md:order-2">
            <div className="text-left h-full flex flex-col justify-center">
              <div className="space-y-3 sm:space-y-4">
                <span className="text-base sm:text-lg md:text-xl text-gray-400">Reporting & Analytics</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2 sm:mb-4">Gain Actionable Insights</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-3 sm:mb-4">Gain actionable insights into your practice with customizable dashboards and reports.</p>
                <ul className="text-gray-300 space-y-2 mb-4 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Financial Metrics:</strong> Track billable hours, collection rates, and revenue by practice area.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Case Performance:</strong> Analyze win rates, settlement amounts, and case durations.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Productivity Reports:</strong> Identify bottlenecks and optimize workload distribution.</span>
                  </li>
                </ul>
                <Link to="/features/reporting-analytics" className="text-xs sm:text-sm text-gray-400 hover:text-white">Explore Reporting & Analytics ›</Link>
              </div>
            </div>
          </div>

          {/* Secure Client Portal Card */}
          <div className="bg-[#111111] p-6 sm:p-10 md:p-16 lg:p-20 rounded-xl order-3 md:order-3">
            <div className="text-left h-full flex flex-col justify-center">
              <div className="space-y-3 sm:space-y-4">
                <span className="text-base sm:text-lg md:text-xl text-gray-400">Secure Client Portal</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2 sm:mb-4">Collaborate Securely</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-3 sm:mb-4">Collaborate securely with clients through a dedicated portal for document sharing and updates.</p>
                <ul className="text-gray-300 space-y-2 mb-4 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Document Exchange:</strong> Secure upload/download with audit trails and expiration dates.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Case Updates:</strong> Real-time status updates and milestone notifications.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>E-Signatures:</strong> Built-in signing capabilities for retainers and settlements.</span>
                  </li>
                </ul>
                <Link to="/features/client-portal" className="text-xs sm:text-sm text-gray-400 hover:text-white">Explore Secure Client Portal ›</Link>
              </div>
            </div>
          </div>

          {/* Secure Client Portal Image */}
          <div className="mt-4 md:mt-0 order-4 md:order-4">
            <img src="/img/img5.png" alt="Secure Client Portal" className="rounded-xl w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-28 section-transition">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Floating Window with Feature Cards - Left Side */}
          <div className="relative">
            <div className="bg-gray-100 text-black p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center">
              <div className="feature-marquee-container">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 md:mb-10">Our Features</h3>

                {/* Left to Right Marquee - Continuous Infinite Loop */}
                <div className="feature-marquee-left">
                  {/* Card 1 */}
                  <div className="feature-card">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-3 md:mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base font-medium text-center">Support Argument</p>
                  </div>

                  {/* Card 2 */}
                  <div className="feature-card">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">Translation</p>
                  </div>

                  {/* Card 3 */}
                  <div className="feature-card">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">Redline Issues</p>
                  </div>

                  {/* Card 4 */}
                  <div className="feature-card">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">Reps & Warranties</p>
                  </div>

                  {/* Card 5 */}
                  <div className="feature-card">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">Credit Agreement</p>
                  </div>

                  {/* Card 6 */}
                  <div className="feature-card">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">Document Discovery</p>
                  </div>

                  {/* Duplicate cards for infinite scroll effect */}
                  <div className="feature-card">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">Support Argument</p>
                  </div>

                  {/* Additional duplicate cards for continuous scrolling */}
                  <div className="feature-card">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">Translation</p>
                  </div>

                  <div className="feature-card">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">Redline Issues</p>
                  </div>

                  <div className="feature-card">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">Reps & Warranties</p>
                  </div>
                </div>

                {/* Right to Left Marquee - Continuous Infinite Loop */}
                <div className="feature-marquee-right">
                  {/* Profile Card 1 */}
                  <div className="feature-card">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">Profile 1</p>
                  </div>

                  {/* Profile Card 2 */}
                  <div className="feature-card">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">Profile 2</p>
                  </div>

                  {/* Card 4 */}
                  <div className="feature-card">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">Reps & Warranties</p>
                  </div>

                  {/* Card 5 */}
                  <div className="feature-card">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">Credit Agreement</p>
                  </div>

                  {/* Profile Card 1 (Duplicate) */}
                  <div className="feature-card">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">Profile 1</p>
                  </div>

                  {/* Profile Card 2 (Duplicate) */}
                  <div className="feature-card">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">Profile 2</p>
                  </div>

                  {/* Additional cards for continuous scrolling */}
                  <div className="feature-card">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">Chat Support</p>
                  </div>

                  <div className="feature-card">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">Custom Coding</p>
                  </div>

                  <div className="feature-card">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">Downloads</p>
                  </div>

                  <div className="feature-card">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">Profile 1</p>
                  </div>

                  <div className="feature-card">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base font-medium text-center">Profile 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integrations Content - Right Side */}
          <div className="bg-[#111111] p-6 sm:p-10 md:p-16 lg:p-20 rounded-xl h-[60vh] sm:h-[70vh] md:h-[80vh]">
            <div className="text-left h-full flex flex-col justify-center">
              <div className="space-y-3 sm:space-y-4">
                <span className="text-base sm:text-lg md:text-xl text-gray-400">Integrations</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2 sm:mb-4">Connect With Your Tools</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-3 sm:mb-4">Connect Law Suites seamlessly with the tools you already use every day.</p>
                <ul className="text-gray-300 space-y-2 mb-4 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Email & Calendar:</strong> Outlook, Gmail, Microsoft 365.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Cloud Storage:</strong> Google Drive, Dropbox, OneDrive.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Payment Gateways:</strong> Stripe, PayPal, LawPay.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Third-Party APIs:</strong> Link to accounting, CRM, and e-discovery platforms via open REST APIs.</span>
                  </li>
                </ul>
                <Link to="/features/integrations" className="text-xs sm:text-sm text-gray-400 hover:text-white">Explore Integrations ›</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Card Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 section-transition">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12">What Our Clients Say</h2>

          <div className="testimonial-slider-container relative">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
                type: 'bullets',
                renderBullet: function (index, className) {
                  return '<span class="' + className + ' custom-pagination-bullet">' + (index + 1) + '</span>';
                },
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              className="testimonial-swiper"
              initialSlide={1}
              loop={true}
              loopAdditionalSlides={2}
              speed={800}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40
                }
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="testimonial-slide">
                  <div className="testimonial-card bg-[#111111] p-4 sm:p-6 md:p-8 rounded-xl h-full flex flex-col">
                    <div className="testimonial-content flex-grow">
                      <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">"{testimonial.quote}"</p>
                    </div>
                    <div className="testimonial-author flex items-center mt-auto">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full mr-3 sm:mr-4 object-cover" 
                      />
                      <div>
                        <p className="font-bold text-sm sm:text-base md:text-lg">{testimonial.name}</p>
                        <p className="text-xs sm:text-sm text-gray-400">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              
              {/* Add navigation arrows */}
              <div className="swiper-button-prev !text-white after:!text-lg sm:after:!text-xl md:after:!text-2xl !w-10 !h-10 !bg-black/50 !rounded-full !left-2 sm:!left-4"></div>
              <div className="swiper-button-next !text-white after:!text-lg sm:after:!text-xl md:after:!text-2xl !w-10 !h-10 !bg-black/50 !rounded-full !right-2 sm:!right-4"></div>
              
              {/* Add pagination */}
              <div className="swiper-pagination !relative !bottom-0 !mt-6"></div>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Solution Tabs Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 section-transition">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12">Solutions for Every Legal Practice</h2>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 overflow-x-auto">
            <div className="inline-flex bg-gray-800 rounded-full p-1">
              {[
                "Law Firms",
                "Solo Practitioners",
                "In-House Legal Teams"
              ].map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTab(index)}
                  className={`tab-button px-2 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full transition-all text-xs sm:text-sm md:text-base ${currentTab === index ? 'bg-white text-black' : 'text-white'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="tabs-content relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
            {/* Tab 1 Content - Law Firms */}
            <div className={`tab-content flex flex-col md:flex-row-reverse items-center gap-4 sm:gap-6 md:gap-8 ${currentTab === 0 ? 'block' : 'hidden'}`}>
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <img src="/img/tabs1.svg" alt="Law Firms" className="w-full rounded-lg shadow-xl" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">Law Firms</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">Scale operations across partners, associates, and support teams without losing control.</p>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Centralized dashboards for firm-wide performance.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Custom permission sets for hierarchies and practice groups.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tab 2 Content - Solo Practitioners */}
            <div className={`tab-content flex flex-col md:flex-row-reverse items-center gap-4 sm:gap-6 md:gap-8 ${currentTab === 1 ? 'block' : 'hidden'}`}>
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <img src="/img/tabs2.svg" alt="Solo Practitioners" className="w-full rounded-lg shadow-xl" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">Solo Practitioners</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">Access enterprise-grade features in a lightweight, subscription-based package.</p>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Fast setup—be productive on day one.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Flat-rate pricing with no hidden fees.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tab 3 Content - In-House Legal Teams */}
            <div className={`tab-content flex flex-col md:flex-row-reverse items-center gap-4 sm:gap-6 md:gap-8 ${currentTab === 2 ? 'block' : 'hidden'}`}>
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <img src="/img/tabs3.svg" alt="In-House Legal Teams" className="w-full rounded-lg shadow-xl" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">In-House Legal Teams</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">Manage corporate contracts, compliance tasks, and policy reviews on one platform.</p>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Custom workflows for approval chains.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Audit trails for regulatory reporting.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 section-transition">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12">Simple, Transparent Pricing</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Starter Plan */}
            <div className="pricing-card bg-[#111111] p-4 sm:p-6 md:p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition-all">
              <div className="pricing-header mb-4 sm:mb-5 md:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Starter</h3>
                <div className="price text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">$49<span className="text-base sm:text-lg font-normal text-gray-400">/month</span></div>
                <p className="text-gray-400 text-sm sm:text-base">Perfect for solo practitioners and small practices</p>
              </div>
              <div className="pricing-features mb-6 sm:mb-8">
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Case management for up to 25 active cases</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Basic document automation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Client portal with limited features</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Email & calendar integration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Standard support</span>
                  </li>
                </ul>
              </div>
              <Link to="/register" className="block w-full py-2 sm:py-3 px-3 sm:px-4 bg-white text-black text-center rounded-md font-medium hover:bg-gray-200 transition duration-300 text-sm sm:text-base">Start Free Trial</Link>
            </div>

            {/* Professional Plan */}
            <div className="pricing-card bg-[#111111] p-4 sm:p-6 md:p-8 rounded-xl border-2 border-white relative transform scale-100 sm:scale-105 shadow-xl">
              <div className="absolute top-0 right-0 bg-white text-black px-2 sm:px-4 py-0.5 sm:py-1 rounded-bl-lg rounded-tr-lg font-medium text-xs sm:text-sm">Most Popular</div>
              <div className="pricing-header mb-4 sm:mb-5 md:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Professional</h3>
                <div className="price text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">$129<span className="text-base sm:text-lg font-normal text-gray-400">/month</span></div>
                <p className="text-gray-400 text-sm sm:text-base">Ideal for growing practices and small firms</p>
              </div>
              <div className="pricing-features mb-6 sm:mb-8">
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Unlimited case management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Advanced document automation with templates</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Full-featured client portal</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>All integrations included</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Advanced reporting & analytics</span>
                  </li>
                </ul>
              </div>
              <Link to="/register" className="block w-full py-2 sm:py-3 px-3 sm:px-4 bg-white text-black text-center rounded-md font-medium hover:bg-gray-200 transition duration-300 text-sm sm:text-base">Start Free Trial</Link>
            </div>

            {/* Enterprise Plan */}
            <div className="pricing-card bg-[#111111] p-4 sm:p-6 md:p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition-all">
              <div className="pricing-header mb-4 sm:mb-5 md:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Enterprise</h3>
                <div className="price text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Custom</div>
                <p className="text-gray-400 text-sm sm:text-base">For established firms with specialized needs</p>
              </div>
              <div className="pricing-features mb-6 sm:mb-8">
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Everything in Professional</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Custom AI model training</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>24/7 premium support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>On-premise deployment options</span>
                  </li>
                </ul>
              </div>
              <Link to="/contact" className="block w-full py-2 sm:py-3 px-3 sm:px-4 bg-white text-black text-center rounded-md font-medium hover:bg-gray-200 transition duration-300 text-sm sm:text-base">Contact Sales</Link>
            </div>
          </div>

          <div className="text-center text-gray-400 mt-6 sm:mt-8 text-xs sm:text-sm md:text-base px-4">
            All plans include a 14-day free trial. No credit card required. 99.9% uptime guarantee and world-class support.
          </div>
        </div>
      </section>

      {/* Profile Image Section */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 section-transition">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img src="/img/profile.webp" alt="Legal Professional" className="rounded-xl w-full" />
          </div>
          <div className="w-full md:w-2/3">
            <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light italic mb-4 sm:mb-6">
              "LexiFlow represents the future of legal practice—where technology empowers attorneys to focus on what truly matters: providing exceptional legal counsel to their clients."
            </blockquote>
            <div className="flex items-center">
              <div>
                <p className="font-bold text-lg sm:text-xl">David Martinez</p>
                <p className="text-gray-400 text-sm sm:text-base">Chief Legal Innovation Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row px-4 sm:px-8 md:px-12 lg:px-20 justify-between items-center py-8 sm:py-12 md:py-16 lg:py-20">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-0 text-center md:text-left">Unlock Professional Class AI for Your Firm</h2>
        <Link href="/register" className="bg-white text-black px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-gray-200 transition duration-300 text-sm sm:text-base">Request a Demo</Link>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;