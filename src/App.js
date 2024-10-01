import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import AboutUs from "./pages/AboutUs";
import Lookbook from "./pages/Lookbook";
import Sustainability from "./pages/Sustainability";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Account from "./pages/Account";
import FAQ from "./pages/FAQ";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/account" element={<Account />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
