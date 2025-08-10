import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import BlogPage from './pages/BlogPage'
import BlogPostAILegalPage from './pages/BlogPostAILegalPage'
import FutureLegalTechPage from './pages/FutureLegalTechPage'
import CompanyPage from './pages/CompanyPage'
import SecurityPage from './pages/SecurityPage'
import CustomerPage from './pages/CustomerPage'
import MacFarlanesPage from './pages/MacFarlanesPage'
import NewsPage from './pages/NewsPage'
import PressKitPage from './pages/PressKitPage'
import ResourcesPage from './pages/ResourcesPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/ai-legal-practice" element={<BlogPostAILegalPage />} />
        <Route path="/blog/future-legal-tech" element={<FutureLegalTechPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/macfarlanes" element={<MacFarlanesPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/press-kit" element={<PressKitPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App