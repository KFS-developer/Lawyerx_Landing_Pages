import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#0f0e0d] text-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-9xl font-bold text-white mb-6">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Page Not Found</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg inline-block"
          >
            Back to Homepage
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFoundPage;