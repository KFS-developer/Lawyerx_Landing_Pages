import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/MacFarlanesPage.style.css';

const MacFarlanesPage = () => {
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
    <div className="bg-[#111111] text-white">
      {/* Navbar */}
      <Navbar heroSectionRef={heroSectionRef} />

      {/* Main Content */}
      <div className="pt-20 sm:pt-24 md:pt-28" ref={heroSectionRef}>
        {/* Customer Story Header */}
        <div className="text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
          <p className="text-sm sm:text-base text-white mb-2">CUSTOMER STORY</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold mb-4 text-white w-full lg:w-3/5 mx-auto">Pioneering the Future of Legal Practice and Client Service with AI</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">Learn how this leading law firm is leveraging LawyerX to enhance efficiency, accuracy, and client service</p>
        </div>

        {/* Company Logo */}
        <div className="flex justify-center py-8 sm:py-12">
          <div className="w-full max-w-7xl px-4 h-screen">
            <div className="bg-[#111111] p-8 sm:p-10 flex items-center justify-center rounded-lg border border-gray-800 h-full">
              <h2 className="text-3xl sm:text-4xl xl:text-8xl font-bold tracking-wider">MACFARLANES</h2>
            </div>
          </div>
        </div>

        {/* Main Quote */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 my-12">
          <div className="flex flex-col space-y-4">
            <div className="quote-mark text-white text-left">"</div>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-justify">AI is reshaping legal practice, but its real power lies in how we use it. At Macfarlanes, we're applying AI to enhance legal expertise, deliver sharper, faster insights to clients, and accelerate talent development.</p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 pt-6 border-t border-gray-800">
              <div>
                <p className="font-semibold text-left">James Popperwell</p>
                <p className="text-sm text-gray-400 text-left">Head of Innovation & Legal Technology, Macfarlanes</p>
              </div>
            </div>
          </div>
        </div>

        {/* About MacFarlanes */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12">
          <h2 className="section-title text-left">About MacFarlanes</h2>
          <p className="text-gray-300 mb-6 text-justify">Macfarlanes is a distinctive London-based law firm with a rich history dating back to 1875. The firm is known for its expertise in handling complex legal matters for businesses, financial institutions, and high-net-worth individuals across the globe.</p>
          <p className="text-gray-300 mb-6 text-justify">With approximately 650 staff, including over 300 lawyers, Macfarlanes has built a reputation for delivering exceptional legal services across practice areas including corporate, real estate, litigation, and private client services.</p>
          <p className="text-gray-300 mb-6 text-justify">What makes Macfarlanes unique is their commitment to innovation and technology adoption while maintaining the personalized service and deep expertise that clients expect from a leading law firm. Their forward-thinking approach has positioned them at the forefront of legal innovation.</p>
        </div>

        {/* Opportunity */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12">
          <h2 className="section-title text-left">Opportunity</h2>
          <p className="text-gray-300 mb-6 text-justify">As legal documents and matters grew increasingly complex, Macfarlanes recognized the need to enhance their document analysis capabilities to maintain their high standards while improving efficiency.</p>
          <p className="text-gray-300 mb-6 text-justify">"The volume and complexity of legal documents we handle daily is immense," explains James Popperwell. "We needed a solution that could help our lawyers quickly identify key provisions, potential risks, and opportunities within contracts and other legal documents."</p>
          <p className="text-gray-300 mb-6 text-justify">The firm had previously experimented with various legal tech solutions but found many of them lacking in accuracy, adaptability, or ease of integration with existing workflows. They needed a more sophisticated AI solution that could truly understand legal language and concepts.</p>
        </div>

        {/* Solution */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12">
          <h2 className="section-title text-left">Solution</h2>
          <p className="text-gray-300 mb-6 text-justify">After evaluating several options, Macfarlanes chose LawyerX's AI-powered legal document analysis platform for its advanced natural language processing capabilities, legal-specific training, and flexible integration options.</p>
          <p className="text-gray-300 mb-6 text-justify">"What set LawyerX apart was its deep understanding of legal terminology and concepts," says Popperwell. "The system could accurately identify and extract key clauses, flag potential issues, and even suggest alternative language based on our firm's best practices."</p>
          <p className="text-gray-300 mb-6 text-justify">The implementation process began with a pilot program in the corporate department, where the technology was trained on Macfarlanes' historical documents and precedents. This customization ensured that the AI understood the firm's specific requirements and drafting style.</p>
          <p className="text-gray-300 mb-6 text-justify">After the successful pilot, LawyerX was rolled out across multiple practice areas, with each department receiving specialized training and configuration to meet their unique needs. The platform was integrated with the firm's document management system, allowing for seamless workflow incorporation.</p>
        </div>

        {/* Results */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12">
          <h2 className="section-title text-left">Results</h2>
          <p className="text-gray-300 mb-6 text-justify">The implementation of LawyerX's AI platform has transformed Macfarlanes' document review and analysis processes, delivering significant benefits across the firm:</p>
          <p className="text-gray-300 mb-6 text-justify">"We've seen a 40% reduction in time spent on routine document review tasks," reports Popperwell. "This has allowed our lawyers to focus more on strategic advice and complex legal analysis, which is where they add the most value."</p>
          <p className="text-gray-300 mb-6 text-justify">The accuracy of document analysis has also improved, with the AI system identifying important provisions and potential issues that might have been missed in manual reviews. This has enhanced the quality of the firm's work product and reduced risk.</p>
          <p className="text-gray-300 mb-6 text-justify">Client feedback has been overwhelmingly positive, with clients appreciating the faster turnaround times and more comprehensive analysis. The firm has been able to handle larger volumes of documents without compromising on quality or increasing costs.</p>
        </div>

        {/* Impact */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12">
          <h2 className="section-title text-3xl font-bold mb-6 text-left">Impact</h2>

          <p className="text-gray-300 mb-8 text-xl text-justify">As AI adoption deepens, Macfarlanes remains focused on delivering meaningful, scalable impact for Macfarlanes' lawyers and clients alike.</p>

          <ul className="space-y-8 mb-8">
            <li className="flex items-start">
              <span className="text-white mr-3 text-xl">•</span>
              <div>
                <p className="text-white font-semibold text-xl mb-2 text-left">For Macfarlanes' Lawyers – AI accelerates expertise-building,</p>
                <p className="text-gray-300 text-justify">giving lawyers the time to focus on the most complex, strategic work for Macfarlanes' clients.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3 text-xl">•</span>
              <div>
                <p className="text-white font-semibold text-xl mb-2 text-left">For Macfarlanes' Clients – Amplify transforms in-house legal workflows,</p>
                <p className="text-gray-300 text-justify">enabling faster decision-making, more efficient risk management and less time spent on routine tasks.</p>
              </div>
            </li>
          </ul>

          <div className="border-l-2 border-gray-700 pl-6 mb-8">
            <p className="text-gray-300 italic text-lg text-justify">"At Macfarlanes, we're not just adopting AI—we're leading the charge. AI isn't just a tool; it's the foundation for the future of legal excellence," said Tart-Roberts.</p>
          </div>

          <p className="text-gray-300 mb-6 text-justify">Through Harvey and Amplify, Macfarlanes is redefining the legal profession, equipping lawyers and clients with AI-powered capabilities to navigate an increasingly complex legal landscape.</p>

          <p className="text-gray-300 mb-6 text-justify">By embracing AI, Macfarlanes isn't just keeping pace with change – it's shaping the future of legal practice.</p>
        </div>

        <div className="flex flex-col md:flex-row px-4 sm:px-8 md:px-20 justify-between items-center py-10 sm:py-16 md:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-0 text-center md:text-left">Unlock Professional Class AI for Your Firm</h2>
          <Link to="/register" className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-gray-200 transition duration-300 text-sm sm:text-base">Request a Demo</Link>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default MacFarlanesPage;