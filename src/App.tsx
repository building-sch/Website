import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { InspiringStudent } from "./pages/InspiringStudents/InspiringStudent";
import { InspiringSchool } from "./pages/InspiringSchools";
import { AskUs } from "./pages/AskUs";
import { ContactUs } from "./pages/ContactUs";
import { Footer } from "./components/Footer";
import { Copyright } from "./components/Copyright";
import { PrivacyPolicy } from "./pages/PrivacyPolicy/PrivacyPolicy";
import { TermsAndConditions } from "./pages/TermsAndConditions/TermsAndConditions";
import { Blog } from "./pages/Blog/Blog";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/inspiring-students" element={<InspiringStudent />} />
          <Route path="/inspiring-schools" element={<InspiringSchool />} />
          <Route path="/ask-us" element={<AskUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
        <Copyright />
      </Router>
    </>
  );
}

export default App;
