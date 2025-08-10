import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import '../styles/RegisterPage.style.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    country: '',
    jobTitle: '',
    orgType: '',
    teamSize: '',
    source: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log(formData);
  };

  return (
    <div className="bg-black text-white">
      <Navbar />
      
      <div className="min-h-screen flex flex-col pt-16 sm:pt-20">
        <main className="flex-grow flex flex-col md:flex-row">
          {/* Left Section with Branding */}
          <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-16 flex flex-col justify-center">
            <div className="max-w-md mx-auto md:mx-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">Professional Class AI</h1>
              <p className="text-base sm:text-lg mb-4 sm:mb-8">LawyerX is the platform built to meet the standards of the world's leading professional service firms.</p>
              <div className="border-t border-gray-800 mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6">
                <p className="text-xs sm:text-sm">Trusted by Hundreds of Industry Leaders</p>
                <div className="overflow-hidden w-full">
                  <div className="flex items-center gap-4 sm:gap-6 md:gap-8 py-3 animate-marquee">
                    <img src="/img/company1.svg" alt="Company 1" className="h-8 sm:h-10 md:h-12 opacity-70" />
                    <img src="/img/company2.svg" alt="Company 2" className="h-8 sm:h-10 md:h-12 opacity-70" />
                    <img src="/img/company3.svg" alt="Company 3" className="h-8 sm:h-10 md:h-12 opacity-70" />
                    <img src="/img/company4.svg" alt="Company 4" className="h-8 sm:h-10 md:h-12 opacity-70" />
                    <img src="/img/company5.svg" alt="Company 5" className="h-8 sm:h-10 md:h-12 opacity-70" />
                    <img src="/img/company6.svg" alt="Company 6" className="h-8 sm:h-10 md:h-12 opacity-70" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Section with Form */}
          <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-16 flex items-center justify-center relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden mx-4 my-4">
              <img src="/img/form-background.webp" alt="Background" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg w-full max-w-xl relative z-10 text-black">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium mb-1">First Name: <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name" 
                      className="w-full px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium mb-1">Last Name: <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name" 
                      className="w-full px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-sm"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1">Email Address: <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Business Email Address" 
                      className="w-full px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs sm:text-sm font-medium mb-1">Company Name: <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name" 
                      className="w-full px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-sm"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="country" className="block text-xs sm:text-sm font-medium mb-1">Country: <span className="text-red-500">*</span></label>
                    <select 
                      id="country" 
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-sm"
                      required
                    >
                      <option value="">Select...</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ca">Canada</option>
                      <option value="in">India</option>
                      <option value="au">Australia</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="jobTitle" className="block text-xs sm:text-sm font-medium mb-1">Job Title: <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="jobTitle" 
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder="Job Title" 
                      className="w-full px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-sm"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="orgType" className="block text-xs sm:text-sm font-medium mb-1">Organization Type: <span className="text-red-500">*</span></label>
                    <select 
                      id="orgType" 
                      name="orgType"
                      value={formData.orgType}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-sm"
                      required
                    >
                      <option value="">Select...</option>
                      <option value="law">Law Firm</option>
                      <option value="corp">Corporate</option>
                      <option value="gov">Government</option>
                      <option value="edu">Education</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="teamSize" className="block text-xs sm:text-sm font-medium mb-1">Legal Team Size: <span className="text-red-500">*</span></label>
                    <input 
                      type="number" 
                      id="teamSize" 
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      placeholder="0" 
                      min="1"
                      className="w-full px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-sm"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="source" className="block text-xs sm:text-sm font-medium mb-1">How did you hear about us? <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="source" 
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    placeholder="" 
                    className="w-full px-3 sm:px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-sm"
                    required
                  />
                </div>
                
                <div className="text-xs text-gray-600">
                  For details about how we collect, use, and protect your information, please see our <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
                </div>
                
                <button type="submit" className="w-full bg-blue-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-md font-medium hover:bg-blue-700 transition duration-300 text-sm sm:text-base">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RegisterPage;