import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";

import Solutions from "./pages/Solutions";
import Process from "./pages/Process";
import ServicesPage from "./pages/ServicesPage";
import Faq from "./pages/Faq";
import Pricing from "./pages/Pricing";
import TrustCenter from "./pages/TrustCenter";
import Gallery from "./pages/Gallery";
import Security from "./pages/Security";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Support from "./pages/Support";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import ErpPanel from "./pages/ErpPanel";
import SchoolErp from "./pages/SchoolErp";
import ECommerce from "./pages/ECommerce";
import CloudDevOps from "./pages/CloudDevOps";
import DigitalMarketing from "./pages/DigitalMarketing";
import Blog from "./pages/Blog";
import TeamProfile from "./pages/TeamProfile";
import Team from "./pages/Team";


import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedAdminRoute from "./admin/ProtectedAdminRoute";

function WebsiteLayout() {
  return (
    <>
      <Navbar />
      <Routes>

        {/* Other routes */}

        <Route
          path="/blog/:slug"
          element={<BlogDetails />}
        />

      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />


        <Route path="/solutions" element={<Solutions />} />
        <Route path="/process" element={<Process />} />
        <Route path="/ServicesPage" element={<ServicesPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/trust-center" element={<TrustCenter />} />
        <Route path="/security" element={<Security />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/support" element={<Support />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route
          path="/website-development"
          element={<WebsiteDevelopment />}
        />
        <Route
          path="/mobile-app-development"
          element={<MobileAppDevelopment />}
        />
        <Route path="/erp-panel" element={<ErpPanel />} />
        <Route path="/school-erp" element={<SchoolErp />} />
        <Route path="/ecommerce" element={<ECommerce />} />
        <Route path="/cloud-devops" element={<CloudDevOps />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/vikrant-bhawani" element={<TeamProfile />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Admin routes - Navbar/Footer nahi dikhega */}
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />

        {/* Website routes */}
        <Route path="/*" element={<WebsiteLayout />} />
      </Routes>
    </>
  );
}

export default App;