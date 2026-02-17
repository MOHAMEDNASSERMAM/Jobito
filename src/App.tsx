import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { Home } from "./Basic/Home/Home";
import { User_Information } from "./Basic/User Information/User_Information";
import Contact from "./Basic/Contact/Contact";
import JobBoard from "./Basic/JobBoard/JobBoard";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { About } from "./Basic/About/About";
import CompaniesJobs from "./Basic/CompaniesJobs/CompaniesJobs";
import { Header } from "./Permanent/Header/Header";
import Footer from "./Permanent/Footer/Footer";
import { JobDetailsPage } from "./Basic/JobDetailsPage/JobDetailsPage";

function AppContent() {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);
  const hideHeaderPaths = ["/user-Information"];
  useEffect(() => {
    if (hideHeaderPaths.includes(location.pathname)) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [location.pathname]);

  return (
    <div>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Find Jobs" element={<JobBoard />} />
        <Route path="/Browse Companies" element={<CompaniesJobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Job details" element={<JobDetailsPage />} />
        <Route
          path="/user-Information"
          element={<User_Information setShowHeader={setShowHeader} />}
        />
      </Routes>
      {showHeader && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
