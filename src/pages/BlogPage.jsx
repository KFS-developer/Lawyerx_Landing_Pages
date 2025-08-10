import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import '../styles/BlogPage.style.css';
import { useEffect, useRef } from 'react';

const BlogPage = () => {
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

  // Blog posts data
  const blogPosts = [
    {
      id: 'ai-legal-practice',
      title: "How AI is Transforming Legal Practice",
      date: 'March 15, 2023',
      authors: [
        { initial: 'S', name: 'Sarah Johnson' }
      ],
      image: '/img/blog1.webp'
    },
    {
      id: 'three-year-anniversary',
      title: "Harvey's Three Year Anniversary",
      date: 'August 4, 2025',
      authors: [
        { initial: 'G', name: 'Gabe Pereyra' },
        { initial: 'W', name: 'Winston Weinberg' }
      ],
      image: '/img/blog1.webp'
    },
    {
      id: 'questions-with-siva',
      title: '5 Questions With Siva Gurumurthy',
      date: 'August 1, 2023',
      authors: [{ name: 'Harvey Team', initial: 'H' }],
      image: '/img/profile2.webp'
    },
    {
      id: 'saves-lawyers-time',
      title: 'How Harvey Saves Lawyers Time',
      date: 'July 25, 2023',
      authors: [{ name: 'John Hancock', initial: 'J' }],
      image: '/img/img3.png'
    },
    {
      id: 'unified-experience',
      title: 'A More Unified Harvey Experience',
      date: 'July 20, 2023',
      authors: [{ name: 'Harvey Team', initial: 'H' }],
      image: '/img/img1.png'
    },
    {
      id: 'legal-super-intelligence',
      title: 'Preparing for Legal Super Intelligence',
      date: 'July 15, 2023',
      authors: [{ name: 'David Koepke', initial: 'D' }],
      image: '/img/img3.png'
    },
    {
      id: 'global-data-coverage',
      title: 'Harvey Expands Global Data Coverage',
      date: 'July 10, 2023',
      authors: [{ name: 'Harvey Team', initial: 'H' }],
      image: '/img/img1.png'
    },
    {
      id: 'workflow-builder',
      title: 'Getting Started with Workflow Builder: 7 Workflows We Recommend',
      date: 'July 5, 2023',
      authors: [{ name: 'Harvey Team', initial: 'H' }],
      image: '/img/img3.png'
    },
    {
      id: 'cros-reshaping',
      title: 'How CROs Are Reshaping Law Firm AI Strategy',
      date: 'June 30, 2023',
      authors: [{ name: 'James McMillan', initial: 'J' }],
      image: '/img/img1.png'
    },
    {
      id: 'frankfurt-office',
      title: 'Harvey to Expand Team with New Frankfurt Office',
      date: 'June 15, 2023',
      authors: [{ name: 'Harvey Team', initial: 'H' }],
      image: '/img/img3.png'
    },
    {
      id: 'germany-presence',
      title: 'Harvey Strengthens Local Presence in Germany',
      date: 'June 5, 2023',
      authors: [{ name: 'Harvey Team', initial: 'H' }],
      image: '/img/img1.png'
    },
    {
      id: 'brief-july',
      title: 'The Brief: July 2023',
      date: 'May 30, 2023',
      authors: [{ name: 'Harvey Team', initial: 'H' }],
      image: '/img/img3.png'
    }
  ];

  // Featured post data
  const featuredPost = {
    title: 'The Brief: August 2025',
    date: 'August 5, 2025',
    author: 'Harvey Team',
    authorInitial: 'H',
    image: '/img/blog1.webp'
  };

  return (
    <div className="blog-page">
      <Navbar heroSectionRef={heroSectionRef} />

      {/* Blog Header */}
      <header ref={heroSectionRef} className="pt-32 pb-16 px-6 md:px-16 lg:px-24">
        <h1 className="text-5xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-400 max-w-md">Product updates, insights, and behind-the-scenes from the Harvey team.</p>
      </header>

      {/* Featured Blog Post */}
      <section className="px-6 md:px-16 lg:px-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-lg overflow-hidden">
          {/* Left Side - Featured Image */}
          <div className="flex flex-col justify-between">
            <div>
              <img src={featuredPost.image} alt={featuredPost.title} />
            </div>
          </div>

          {/* Brief Details Below */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <div className="text-gray-400 mb-2">{featuredPost.date}</div>
              <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                  <span className="text-xs text-white">{featuredPost.authorInitial}</span>
                </div>
                <span className="text-gray-400">{featuredPost.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <main className="px-6 md:px-16 lg:px-24 pb-24">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card overflow-hidden rounded-lg bg-[#111111]">
              <Link to={`/blog/${post.id}`} className="block">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white text-black text-xs font-medium px-2 py-1 rounded">
                    {post.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="blog-title text-xl font-bold mb-3">{post.title}</h3>
                  <div className="flex items-center space-x-4">
                    {post.authors.map((author, index) => (
                      <div key={index} className="blog-author flex items-center">
                        <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                          <span className="text-xs text-white">{author.initial || author.name.charAt(0)}</span>
                        </div>
                        <span className="text-sm text-gray-400">{author.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <Link to="/blog?page=1" className="pagination-item active">1</Link>
          <Link to="/blog?page=2" className="pagination-item">2</Link>
          <Link to="/blog?page=3" className="pagination-item">3</Link>
          <Link to="/blog?page=4" className="pagination-item">4</Link>
          <Link to="/blog?page=5" className="pagination-item">5</Link>
          <Link to="/blog?page=2" className="pagination-item">
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

export default BlogPage;