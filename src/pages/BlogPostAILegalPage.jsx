import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/BlogPostPage.style.css';

const BlogPostAILegalPage = () => {
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
    <div className="blog-post-page">
      <Navbar heroSectionRef={heroSectionRef} />

      {/* Blog Header */}
      <header ref={heroSectionRef} className="blog-header">
        <div className="container mx-auto px-6 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-blue-400 mb-2">March 15, 2023</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">How AI is Transforming Legal Practice</h1>
            <div className="flex items-center">
              <img src="/img/profile1.webp" alt="Author" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-gray-400">Legal Technology Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#0f0e0d]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <img src="/img/blog1.webp" alt="AI in Legal Practice" className="w-full rounded-lg" />
          </div>

          <div className="blog-content text-gray-300">
            <p>
              The legal industry, traditionally known for its conservative approach to change, is experiencing a significant transformation driven by artificial intelligence (AI). From document review to legal research, contract analysis, and even predictive outcomes, AI is reshaping how legal professionals work and deliver services to clients.
            </p>

            <h2>Document Review and Analysis</h2>
            <p>
              One of the most time-consuming aspects of legal work is document review. AI-powered tools can now analyze thousands of documents in a fraction of the time it would take human lawyers. These systems use natural language processing (NLP) to identify relevant information, flag potential issues, and categorize documents based on content.
            </p>
            <p>
              Advanced AI systems can even understand context and nuance in legal documents, identifying inconsistencies or unusual clauses that might require special attention. This not only speeds up the review process but also reduces the risk of human error and oversight.
            </p>

            <h2>Legal Research</h2>
            <p>
              AI is revolutionizing legal research by enabling attorneys to find relevant cases, statutes, and legal precedents more efficiently. Machine learning algorithms can analyze vast databases of legal information and identify patterns and connections that might not be immediately apparent to human researchers.
            </p>
            <p>
              These tools can understand complex legal queries, provide summaries of relevant cases, and even suggest arguments or counterarguments based on existing case law. This allows lawyers to build stronger cases and provide more informed advice to clients.
            </p>

            <h2>Contract Analysis and Management</h2>
            <p>
              AI-powered contract analysis tools can review contracts for standard clauses, potential risks, and compliance issues. These systems can compare contracts against templates, highlight deviations, and suggest modifications based on best practices or specific client requirements.
            </p>
            <p>
              For organizations dealing with large volumes of contracts, AI can automate the extraction of key information, track obligations and deadlines, and provide alerts for renewal or termination dates. This not only improves efficiency but also helps prevent costly oversights.
            </p>

            <h2>Predictive Analytics</h2>
            <p>
              Perhaps one of the most exciting applications of AI in law is predictive analytics. By analyzing historical case data, AI systems can predict the likely outcomes of litigation, estimate settlement values, and assess the strength of legal arguments.
            </p>
            <p>
              These predictions can help lawyers make more informed decisions about case strategy, settlement negotiations, and resource allocation. They can also provide clients with more accurate assessments of risks and potential costs.
            </p>

            <h2>Client Service and Access to Justice</h2>
            <p>
              AI is also improving client service through chatbots and virtual assistants that can answer basic legal questions, gather information, and even draft simple legal documents. These tools make legal services more accessible and affordable for individuals and small businesses who might otherwise struggle to afford traditional legal representation.
            </p>
            <p>
              By automating routine tasks, AI allows lawyers to focus on more complex and high-value work, potentially reducing costs and improving access to justice for underserved populations.
            </p>

            <h2>Challenges and Ethical Considerations</h2>
            <p>
              Despite its benefits, the integration of AI in legal practice raises important challenges and ethical questions. Issues of data privacy, algorithmic bias, and the potential for over-reliance on technology require careful consideration.
            </p>
            <p>
              Legal professionals must ensure that AI tools are used responsibly, with appropriate human oversight and in compliance with ethical standards and regulatory requirements. They must also develop new skills to work effectively with these technologies and understand their limitations.
            </p>

            <h2>The Future of AI in Law</h2>
            <p>
              As AI technology continues to advance, we can expect even more sophisticated applications in the legal field. From improved natural language understanding to more accurate predictive models, these developments will further transform legal practice.
            </p>
            <p>
              However, the most successful legal professionals will be those who view AI as a complement to, rather than a replacement for, human expertise. By combining the efficiency and analytical power of AI with the judgment, creativity, and emotional intelligence of human lawyers, the legal industry can provide better, faster, and more accessible services to clients.
            </p>

            <p>
              The transformation of legal practice through AI is not just about technology—it's about reimagining how legal services are delivered and how legal professionals work. Those who embrace this change and adapt their skills and practices accordingly will be well-positioned to thrive in the evolving legal landscape.
            </p>
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-[#1a1a1a] rounded-lg">
            <div className="flex items-start">
              <img src="/img/profile1.webp" alt="Author" className="w-16 h-16 rounded-full mr-6" />
              <div>
                <h3 className="text-xl font-bold mb-2">About the Author</h3>
                <p className="text-lg font-medium mb-1">Sarah Johnson</p>
                <p className="text-sm text-gray-400 mb-4">Legal Technology Specialist</p>
                <p className="text-gray-300">
                  Sarah Johnson is a legal technology specialist with over 10 years of experience in the intersection of law and technology. She advises law firms and legal departments on technology adoption and digital transformation strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-10">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Related Post 1 */}
            <Link to="/blog" className="related-post block">
              <img src="/img/securitymain.webp" alt="Legal Data Security" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">April 2, 2023</p>
                <h3 className="text-xl font-semibold mb-2">The Importance of Data Security in Legal Tech</h3>
                <p className="text-gray-400 text-sm">Learn about the critical role of data security in legal technology and how firms can protect sensitive client information.</p>
              </div>
            </Link>

            {/* Related Post 2 */}
            <Link to="/blog" className="related-post block">
              <img src="/img/lawyerimage.webp" alt="Future of Legal Profession" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">May 10, 2023</p>
                <h3 className="text-xl font-semibold mb-2">The Future of the Legal Profession</h3>
                <p className="text-gray-400 text-sm">Discover how technology is reshaping the legal profession and what skills lawyers will need to thrive in the digital age.</p>
              </div>
            </Link>

            {/* Related Post 3 */}
            <Link to="/blog" className="related-post block">
              <img src="/img/testimonial1.webp" alt="AI Ethics in Law" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">June 5, 2023</p>
                <h3 className="text-xl font-semibold mb-2">Ethical Considerations of AI in Legal Practice</h3>
                <p className="text-gray-400 text-sm">Explore the ethical implications of using artificial intelligence in legal practice and how to address potential concerns.</p>
              </div>
            </Link>
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

export default BlogPostAILegalPage;