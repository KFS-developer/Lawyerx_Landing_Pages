import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FeatureCard from '../components/ui/FeatureCard';
import '../styles/SecurityPage.style.css';
import { useEffect, useRef } from 'react';

const SecurityPage = () => {
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

    // Enterprise-Grade Protection features
    const securityFeatures = [
        {
            title: 'Dedicated\nSecurity Team',
            description: 'Our in-house security experts drive the secure development and operation of our products and infrastructure.',
            icon: '/img/security1.svg'
        },
        {
            title: 'Independent\nAssessments',
            description: 'We\'ve partnered with industry leaders NCC Group and BishopFox to rigorously test our web and network defenses.',
            icon: '/img/security2.svg'
        },
        {
            title: 'Security Advisory\nBoard',
            description: 'Top experts from major financial institutions and cloud providers guide our security and privacy program.',
            icon: '/img/security3.svg'
        },
        {
            title: 'Contractual\nSecurity Guarantee',
            description: 'Harvey\'s detailed Security Addendum firmly establishes our dedication to safeguarding your data and content.',
            icon: '/img/security4.svg'
        },
        {
            title: 'Data Residency\nControls',
            description: 'We implement strict data residency measures for data storage, giving you control over the region in which your data is stored.',
            icon: '/img/security1.svg'
        },
        {
            title: 'Enterprise Security\nFeatures',
            description: 'We offer SAML SSO, audit logs, IP address allow-listing, data lifecycle management, and more to help you to meet your security objectives.',
            icon: '/img/security2.svg'
        }
    ];

    // Industry Standards compliance
    const complianceStandards = [
        {
            name: 'SOC2 II',
            icon: '/img/security1.svg'
        },
        {
            name: 'CCPA',
            icon: '/img/security2.svg'
        },
        {
            name: 'ISO 27001',
            icon: '/img/security3.svg'
        },
        {
            name: 'GDPR',
            icon: '/img/security4.svg'
        }
    ];

    return (
        <div className="bg-[#0a0a0a] text-white">
            <Navbar heroSectionRef={heroSectionRef} />

            {/* Hero Section */}
            <section className="hero-section pt-24 sm:pt-28 lg:pt-48 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 bg-[#0f0e0d]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <p className="text-center text-xs sm:text-base tracking-wide mb-3 sm:mb-4">Company</p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium text-center mb-4 sm:mb-6">
                            For the Most<br className="hidden sm:inline" /> Sensitive Matters
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-2">
                            Harvey keeps your client data safe with world-class security and data privacy measures...
                        </p>
                        <Link to="/register" className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-gray-200 transition duration-300 inline-flex items-center mt-6 sm:mt-8">
                            Request a Demo
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Enterprise-Grade Protection Section */}
            <section className="text-white py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 lg:px-24">
                <div className="container mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 md:mb-20">Enterprise-Grade<br />Protection</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-12 md:mt-16">
                        {securityFeatures.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Compliant with Industry Standards Section */}
            <section className="text-white py-16 sm:py-24 md:py-32">
                <div className="mx-auto px-4 sm:px-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 md:mb-20">Compliant with<br />Industry Standards</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-12 md:mt-16 max-w-6xl mx-auto">
                        {complianceStandards.map((standard, index) => (
                            <div key={index} className="text-center">
                                <img src={standard.icon} alt={standard.name} className="w-24 h-24 mx-auto mb-6" />
                                <h3 className="text-xl font-semibold mb-2">{standard.name}</h3>
                                <Link to="/security/details" className="text-sm text-gray-400 flex items-center justify-center hover:text-white transition-colors">
                                    Details
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security is Fundamental Section */}
            <section className="text-white py-16 sm:py-24 md:py-32">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start max-w-7xl mx-auto">
                        <div className="w-full md:w-5/12 mb-8 md:mb-0">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">Security is Fundamental<br className="hidden sm:inline" />to Everything We Do</h2>
                        </div>
                        <div className="w-full md:w-6/12">
                            <p className="text-sm sm:text-base mb-6 sm:mb-8">We've built a comprehensive system that protects data at every level-from robust user authentication to vigilant network monitoring. Our approach combines cutting-edge technology with rigorous protocols, ensuring that information remains secure in an ever-changing digital landscape. We constantly test and improve our defenses, staying ahead of potential threats to maintain the trust our clients place in us.</p>
                            <Link to="/security/portal" className="border border-white text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-md font-medium hover:bg-white hover:text-black transition duration-300 inline-flex items-center text-sm sm:text-base">
                                Explore Security Portal
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Testimonial Section */}
            <section className="bg-[#e6e6ef] text-black py-16 sm:py-24 md:py-32">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white p-0 rounded-lg overflow-hidden shadow-xl">
                            <div className="h-full">
                                <img src="/img/securitymain.webp" alt="Customer Testimonial" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between">
                            <p className="text-base sm:text-lg font-medium mb-2 sm:mb-0">David Cunningham, CINO at Reed Smith</p>
                            <p className="text-sm sm:text-base text-gray-600">Working with Harvey since 2023</p>
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

export default SecurityPage;