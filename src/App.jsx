import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ArHome from "./pages/ar/Home";
import ArAbout from "./pages/ar/About";
import ArServices from "./pages/ar/Services";
import ArPortfolio from "./pages/ar/Portfolio";
import ArTestimonials from "./pages/ar/Testimonials";
import ArContact from "./pages/ar/Contact";
import ArRegister from "./pages/ar/Signup";
import ArLogin from "./pages/ar/Login";
import ForgetPassword from "./pages/ForgetPassword";
import VerifyCode from "./pages/VerifyResetCode";
import ResetPassword from "./pages/ResetPassword";
import ArForgetPassword from "./pages/ar/ForgetPassword";
import ArVerifyCode from "./pages/ar/VerifyResetCode";
import ArResetPassword from "./pages/ar/ResetPassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verify-reset-code" element={<VerifyCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/ar/" element={<ArHome />} />
        <Route path="/ar/about" element={<ArAbout />} />
        <Route path="/ar/services" element={<ArServices />} />
        <Route path="/ar/portfolio" element={<ArPortfolio />} />
        <Route path="/ar/testimonials" element={<ArTestimonials />} />
        <Route path="/ar/contact" element={<ArContact />} />
        <Route path="/ar/register" element={<ArRegister />} />
        <Route path="/ar/login" element={<ArLogin />} />
        <Route path="/ar/forget-password" element={<ArForgetPassword />} />
        <Route path="/ar/verify-reset-code" element={<ArVerifyCode />} />
        <Route path="/ar/reset-password" element={<ArResetPassword />} />
      </Routes>
    </Router>
  )
}

export default App