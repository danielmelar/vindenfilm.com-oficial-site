import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/ui/ScrollToTop";

const Layout = () => {
  return (
    <div className="relative">
      <ScrollToTop />
      <Navbar />
      <main className="w-full relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
