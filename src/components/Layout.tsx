import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/ui/ScrollToTop";

const Layout = () => {
  return (
    <div className="relative z-40">
      <ScrollToTop />
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
